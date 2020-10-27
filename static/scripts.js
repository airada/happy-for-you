var user_input = "";
var chat_box =  $('#chat-box');
var chat_box_mobile =  $('#chat-box-mobile');

function bot_reply(input, chat_area_id = "chat-area", first_msg = false){
    var chat_area = jQuery("#" + chat_area_id);

    var rowHTML = "";
    rowHTML += "<div class='chatbot row d-flex align-items-center justify-content-start msg-height p-1 m-1 text-center'>" +
                    "<img src='../static/img/chatbot.png' alt='chatbot-pfp' class='p-1 m-1'>" +
                    "<p class='size-custom text-80 p-2 my-auto mx-1 text-white bg-chatbot rounded'>" + input + "</p>" +
                "</div>";

    chat_area.append(rowHTML);

    if(first_msg) {
        $('.chatbot').addClass('mt-auto');
    }
}

function user_reply(input, chat_area_id = "chat-area"){
    var chat_area = jQuery("#" + chat_area_id);

    var rowHTML = "";

    rowHTML += "<div class='row msg-height p-1 m-1 d-flex align-items-center justify-content-end text-center'>" +
                    "<p class='size-custom text-80 p-2 my-auto mx-1 text-white bg-user rounded'>" + input + "</p>" +
                    "<img src='../static/img/user.png' alt='user-pfp' class='p-1 m-1'>" +
                "</div>";

    chat_area.append(rowHTML);
}

function botResponse(input) {
    console.log("You: "+input)
    jQuery.ajax({
        type: "GET",
        crossDomain:true,
        url: "chat?msg="+encodeURIComponent(input),
        dataType: "text",
        success: function(data, status, xhr) {
            console.log("Mimi: "+data)
            bot_reply(data, "chat-area");
        }
    });
}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_input = $("#message-textbox").val();
    chat_box[0].reset();
    user_reply(user_input, "chat-area");
    botResponse(user_input)
    var objDiv = document.getElementById("chat-area");
    objDiv.scrollTop = objDiv.scrollHeight;
}


function onSubmitMobile(chatbox){
    chatbox.preventDefault();
    user_input = $("#message-textbox-mobile").val();
    chat_box_mobile[0].reset();
    user_reply(user_input, "chat-area-mobile");
}

bot_reply("Hello! What's up?", "chat-area", true);
bot_reply("Hello! What's up?", "chat-area-mobile", true);

chat_box.submit(onSubmit);
chat_box_mobile.submit(onSubmitMobile);