let user_input = "";
let chat_box =  $('#chat_box');

function bot_reply(input, first_msg = false){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row msg-height p-1 m-1 d-flex align-items-center justify-content-start text-center' id='chatbot'>" +
                    "<img src='./img/chatbot.png' alt'...' class='p-1 m-1'>" +
                    "<p class='size-custom msg-font p-2 my-auto mx-1 text-white bg-chatbot rounded'>" + input + "</p>" +
                "</div>";

    chat_area.append(rowHTML);

    if(first_msg) {
        $('#chatbot').addClass('mt-auto');
    }

}

function user_reply(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row msg-height p-1 m-1 d-flex align-items-center justify-content-end text-center'>" +
                    "<p class='size-custom msg-font p-2 my-auto mx-1 text-white bg-user rounded'>" + input + "</p>" +
                    "<img src='./img/user.png' alt'...' class='p-1 m-1'>" +
                "</div>";

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