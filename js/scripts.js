let user_reply = "";
let chat_box =  $('#chat_box');

function bot_reply(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row ml-1 py-2'> <div class='col bg-light text-left'><p class='w-25 h-100 rounded text-white bg-warning'>yay!</p></div></div>";
    chat_area.append(rowHTML);
}

function add_message(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row ml-1 py-2'> <div class='col d-flex justify-content-end text-right'><p class='w-25 h-100 rounded text-white bg-primary'>" + input + "</p></div></div>";
    chat_area.append(rowHTML);

    bot_reply(input);
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;


}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_reply = $("#send-on-enter").val();
    console.log("User replied: " + user_reply);
    chat_box[0].reset();
    add_message(user_reply);
}

chat_box.submit(onSubmit);