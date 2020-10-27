import random, json, torch
from chatbot.model import NeuralNet
from chatbot.nltk_utils import bag_of_words, tokenize

kaomoji = [
    "(* ^ ω ^)", "(´ ∀ ` *)", "٩(◕‿◕｡)۶", "☆*:.｡.o(≧▽≦)o.｡.:*☆","(o^▽^o)","(⌒▽⌒)☆","<(￣︶￣)>","。.:☆*:･'(*⌒―⌒*)))"
"ヽ(・∀・)ﾉ", "(´｡• ω •｡`)", "(￣ω￣)", "｀;:゛;｀;･(°ε° )", "(o･ω･o)", "(＠＾◡＾)", "ヽ(*・ω・)ﾉ", "(^人^)", "(o´▽`o)",
"(*´▽`*)", "｡ﾟ( ﾟ^∀^ﾟ)ﾟ｡", "( ´ ω ` )", "(((o(*°▽°*)o)))", "(≧◡≦)", "(o´∀`o)", "(´• ω •`)", "(＾▽＾)", "(⌒ω⌒)", "╰(▔∀▔)╯",
"ヽ(o^ ^o)ﾉ", "(✯◡✯)", "(◕‿◕)", "(*≧ω≦*)", "(☆▽☆)", "(⌒‿⌒)", "＼(≧▽≦)／", "ヽ(o＾▽＾o)ノ",
"☆ ～('▽^人)", "٩(｡•́‿•̀｡)۶", "(✧ω✧)", "ヽ(*⌒▽⌒*)ﾉ", "(´｡• ᵕ •｡`)", "( ´ ▽ ` )", "╰(*´︶`*)╯", "ヽ(>∀<☆)ノ","o(≧▽≦)o",
"(☆ω☆)", "(っ˘ω˘ς )", "(*¯︶¯*)", "＼(＾▽＾)／", "٩(◕‿◕)۶", "(o˘◡˘o)", "\(★ω★)/", "\(^ヮ^)/", "(〃＾▽＾〃)", "(╯✧▽✧)╯",
"o(>ω<)o", "o( ❛ᴗ❛ )o", "(ﾉ´ヮ`)ﾉ*: ･ﾟ","(b ᵔ▽ᵔ)b","(๑˃ᴗ˂)ﻭ","(๑˘︶˘๑)","( ˙꒳​˙ )","°˖✧◝(⁰▿⁰)◜✧˖°","(´･ᴗ･ ` )","(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
"(„• ֊ •„)","(.❛ ᴗ ❛.)","(⁀ᗢ⁀)"]

class Chatbot:
    device = torch.device('cpu')
    
    with open('chatbot/intents.json', 'r') as f:
        intents = json.load(f)

    FILE = "data.pth"
    data = torch.load(FILE, map_location='cpu')

    input_size = data["input_size"]
    hidden_size = data["hidden_size"]
    output_size = data["output_size"]
    all_words = data["all_words"]
    tags = data["tags"]
    model_state = data["model_state"]

    model = NeuralNet(input_size, hidden_size, output_size).to(device)

    def response(self, user_input):       
        sentence = user_input

        self.model.load_state_dict(self.model_state)
        self.model.eval()

        sentence = tokenize(sentence)
        X = bag_of_words(sentence, self.all_words)
        X = X.reshape(1, X.shape[0])
        X = torch.from_numpy(X).to(self.device)

        output = self.model(X)
        _, predicted = torch.max(output, dim = 1)
        
        tag = self.tags[predicted.item()]

        probs = torch.softmax(output, dim=1)
        prob = probs[0][predicted.item()]

        if prob.item() > 0.75:
            for intent in self.intents["intents"]:
                if tag == intent["tag"]:
                    if tag == "inappropriate":
                        return f"{random.choice(intent['responses'])} ヾ(`ヘ´)ﾉﾞ"
                    elif tag == "neg_task":
                        return f"{random.choice(intent['responses'])} (っ๑˘︶˘๑ς) \n How can I help?"
                    else:
                        return f"{random.choice(intent['responses'])} {random.choice(kaomoji)}"
        else:
            return "I do not understand..."

if __name__ == "__main__":
    chatbot = Chatbot()

    response = chatbot.response("hi")
    print(response)