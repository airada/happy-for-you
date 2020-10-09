var user_input = "";
var chat_box =  $('#chat-box');
var chat_box_mobile =  $('#chat-box-mobile');

function bot_reply(input, chat_area_id = "chat-area", first_msg = false){
    var chat_area = jQuery("#" + chat_area_id);

    var rowHTML = "";
    rowHTML += "<div class='chatbot row d-flex align-items-center justify-content-start msg-height p-1 m-1 text-center'>" +
                    "<img src='./img/chatbot.png' alt'...' class='p-1 m-1'>" +
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
                    "<img src='./img/user.png' alt'...' class='p-1 m-1'>" +
                "</div>";

    chat_area.append(rowHTML);

    bot_reply("yay!", chat_area_id);

    var objDiv = document.getElementById(chat_area_id);
    objDiv.scrollTop = objDiv.scrollHeight;

    // var objDivWindow = document.getElementById("body");
    // objDiv.scrollTop = objDivWindow.scrollHeight;
}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_input = $("#send-on-enter").val();
    chat_box[0].reset();
    user_reply(user_input, "chat-area");
}

function onSubmitMobile(chatbox){
    chatbox.preventDefault();
    user_input = $("#send-on-enter-mobile").val();
    chat_box_mobile[0].reset();
    user_reply(user_input, "chat-area-mobile");
}

bot_reply("Hello! What's up?", "chat-area", true);
bot_reply("Hello! What's up?", "chat-area-mobile", true);

// $( "input" ).focus(function() {
//     var objDivWindow = document.getElementById("html");
//     objDivWindow.scrollTop = window.innerHeight;
//   }).blur(function() {
//     var objDivWindow = document.getElementById("html");
//     objDivWindow.scrollTop = window.innerHeight;
//   });
// document.getElementById("mobile").style.height = ($(window).height() - $("#textbox-mobile").outerHeight()) + "px";
// document.getElementById("mobile").style.height = ($(window).height() - $("#textbox-mobile").outerHeight()) + "px";


// $("#navMenu").resize(function () {
//     $('#godown').height($("#navMenu").height() + 10);
// });

// if ($("#navMenu").height() > $('#godown').height()) $('#godown').height($("#navMenu").height() + 10);

chat_box.submit(onSubmit);
chat_box_mobile.submit(onSubmitMobile);