let user_input = "";
let chat_box =  $('#chat_box');

function bot_reply(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row my-2'>" +
    "<div class='col-12 pl-0 d-flex align-items-center justify-content-start text-center'>" +
    "<div class='px-2'><img src='./img/chatbot.png' alt'...' class='rounded-circle'></div>"+
    "<p class='p-2 my-auto mw-custom rounded text-white bg-chatbot'>" + input + "</p>" +
    "</div></div>";
    chat_area.append(rowHTML);
}

function user_reply(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row my-2'>" +
        "<div class='col-12 pr-0 d-flex align-items-center justify-content-end text-center'>" +
        "<p class='p-2 my-auto mw-custom rounded text-white bg-user'>" + input + "</p>" +
        "<div class='px-2'><img src='./img/user.png' alt'...' class='rounded-circle'></div></div></div>";
    chat_area.append(rowHTML);

    bot_reply("yay!");
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_input = $("#send-on-enter").val();
    chat_box[0].reset();
    user_reply(user_input);
}

console.log("new change is implemented");
bot_reply("Hello! What's up?");
chat_box.submit(onSubmit);