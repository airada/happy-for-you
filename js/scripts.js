let user_input = "";
let chat_box =  $('#chat_box');

function bot_reply(input, first_msg = false){
    let chat_area = jQuery("#chat_area");

    

    let rowHTML = "";

    if (first_msg){
        rowHTML += "<div class='row p-1 mt-auto'>";
    } else {
        rowHTML += "<div class='row p-1 my-1'>";
    }
    rowHTML += "<div class='col-12 pl-0 py-1 my-1 d-flex align-items-center justify-content-start text-center'>" +
    "<img src='./img/chatbot.png' alt'...' class='rounded-circle px-2 my-1'>"+
    "<p class='mt-2 mb-1 p-2 size-custom rounded text-white bg-chatbot'>" + input + "</p></div></div>";
    chat_area.append(rowHTML);
}

function user_reply(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row p-1 my-1'>" +
        "<div class='col-12 pr-0 py-1 my-1 d-flex align-items-center justify-content-end text-center'>" +
        "<p class='mt-2 mb-1 p-2 size-custom rounded text-white bg-user'>" + input + "</p>" +
        "<img src='./img/user.png' alt'...' class='rounded-circle px-2 my-1'></div></div>";

    chat_area.append(rowHTML);

    bot_reply("yay!");
    var objDiv = document.getElementById("chat_area");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_input = $("#send-on-enter").val();
    chat_box[0].reset();
    user_reply(user_input);
}

bot_reply("Hello! What's up?", true);

chat_box.submit(onSubmit);