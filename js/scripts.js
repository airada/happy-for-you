let user_input = "";
let chat_box =  $('#chat_box');

function bot_reply(input, first_msg = false){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    if (first_msg){
        rowHTML += "<div class='row p-1 my-1 mx-2 pr-auto mr-1 bg-secondary msg-height d-flex align-items-center justify-content-start text-center'>";
    } else {
        rowHTML += "<div class='row msg-height p-1 my-1 mx-2 mr-1 bg-secondary d-flex align-items-center justify-content-start text-center'>";
    }
    rowHTML += 
    // "<img src='./img/chatbot.png' alt'...' class='p-2 m-1 bg-warning'>"+
    "<p class='my-auto mx-1 p-2 bg-danger size-custom rounded text-white bg-chatbot'>" + input + "</p></div>";
    chat_area.append(rowHTML);
}

function user_reply(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row msg-height p-1 my-1 mx-2 pl-auto bg-secondary d-flex align-items-center justify-content-end text-center'>" +
        "<p class='mt-2 mb-1 p-2 ml-auto size-custom rounded text-white bg-user'>" + input + "</p>" +
        // "<img src='./img/user.png' alt'...' class='p-2 m-1 bg-warning'>" 
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