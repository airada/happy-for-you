import random, json, torch
from model import NeuralNet
from nltk_utils import bag_of_words, tokenize

kaomoji = [
    "(* ^ ω ^)", "(´ ∀ ` *)", "٩(◕‿◕｡)۶", "☆*:.｡.o(≧▽≦)o.｡.:*☆","(o^▽^o)","(⌒▽⌒)☆","<(￣︶￣)>","。.:☆*:･'(*⌒―⌒*)))"
"ヽ(・∀・)ﾉ", "(´｡• ω •｡`)", "(￣ω￣)", "｀;:゛;｀;･(°ε° )", "(o･ω･o)", "(＠＾◡＾)", "ヽ(*・ω・)ﾉ", "(^人^)", "(o´▽`o)",
"(*´▽`*)", "｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡", "( ´ ω ` )", "(((o(*°▽°*)o)))", "(≧◡≦)", "(o´∀`o)", "(´• ω •`)", "(＾▽＾)", "(⌒ω⌒)", "╰(▔∀▔)╯",
"ヽ(o^ ^o)ﾉ", "(✯◡✯)", "(◕‿◕)", "(*≧ω≦*)", "(☆▽☆)", "(⌒‿⌒)", "＼(≧▽≦)／", "ヽ(o＾▽＾o)ノ",
"☆ ～('▽^人)", "٩(｡•́‿•̀｡)۶", "(✧ω✧)", "ヽ(*⌒▽⌒*)ﾉ", "(´｡• ᵕ •｡`)", "( ´ ▽ ` )", "╰(*´︶`*)╯", "ヽ(>∀<☆)ノ","o(≧▽≦)o",
"(☆ω☆)", "(っ˘ω˘ς )", "(*¯︶¯*)", "＼(＾▽＾)／", "٩(◕‿◕)۶", "(o˘◡˘o)", "\(★ω★)/", "\(^ヮ^)/", "(〃＾▽＾〃)", "(╯✧▽✧)╯",
"o(>ω<)o", "o( ❛ᴗ❛ )o", "(ﾉ´ヮ`)ﾉ*: ･ﾟ","(b ᵔ▽ᵔ)b","(๑˃ᴗ˂)ﻭ","(๑˘︶˘๑)","( ˙꒳​˙ )","°˖✧◝(⁰▿⁰)◜✧˖°","(´･ᴗ･ ` )","(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
"(„• ֊ •„)","(.❛ ᴗ ❛.)","(⁀ᗢ⁀)"]
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('chatbot/intents.json', 'r') as f:
    intents = json.load(f)

FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data["all_words"]
tags = data["tags"]
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Mimi"
print("Hello! type 'quit' to exit")
talk = True
while talk:
    sentence = input("You: ")
    if sentence == "quit":
        break

    sentence = tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim = 1)
    
    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]

    if prob.item() > 0.75:
        for intent in intents["intents"]:
            if tag == intent["tag"]:
                if tag == "inappropriate":
                    print(f"{bot_name}: {random.choice(intent['responses'])} ヾ(`ヘ´)ﾉﾞ Bye!")
                    talk = False
                elif tag == "neg_task":
                    print(f"{bot_name}: {random.choice(intent['responses'])} (っ๑˘︶˘๑ς)")
                    print("How can I help?")
                else:
                    print(f"{bot_name}: {random.choice(intent['responses'])} {random.choice(kaomoji)}")
    else:
        print(f"{bot_name}: I do not understand...")