let user_input = "";
let chat_box =  $('#chat_box');
let chat_box_mobile =  $('#chat_box_mobile');

function bot_reply(input, mobile=false, first_msg = false){
    if (mobile){
        var chat_area = jQuery("#chat_area_mobile");
    } else {
        var chat_area = jQuery("#chat_area");
    }

    let rowHTML = "";

    if (first_msg){
        rowHTML += "<div class='row msg-height mt-auto p-1 m-1 d-flex align-items-center justify-content-start text-center'>"
    } else {
        rowHTML += "<div class='row msg-height p-1 m-1 d-flex align-items-center justify-content-start text-center'>"
    }

    rowHTML +=  "<img src='./img/chatbot.png' alt'...' class='p-1 m-1'>" +
                    "<p class='size-custom msg-font p-2 my-auto mx-1 text-white bg-chatbot rounded'>" + input + "</p>" +
                "</div>";

    chat_area.append(rowHTML);

    // if(first_msg) {
    //     $('#chatbot').addClass('mt-auto');
    // }

}

function user_reply(input, mobile=false){
    if (mobile){
        var chat_area = jQuery("#chat_area_mobile");
    } else {
        var chat_area = jQuery("#chat_area");
    }

    let rowHTML = "";

    rowHTML += "<div class='row msg-height p-1 m-1 d-flex align-items-center justify-content-end text-center'>" +
                    "<p class='size-custom msg-font p-2 my-auto mx-1 text-white bg-user rounded'>" + input + "</p>" +
                    "<img src='./img/user.png' alt'...' class='p-1 m-1'>" +
                "</div>";

    chat_area.append(rowHTML);

    bot_reply("yay!", mobile, false);

    if (mobile){
        var objDiv = document.getElementById("chat_area_mobile");
        objDiv.scrollTop = objDiv.scrollHeight;
        } else {
        var objDiv = document.getElementById("chat_area");
        objDiv.scrollTop = objDiv.scrollHeight;    }
    
    // var objDivWindow = document.getElementById("body");
    // objDiv.scrollTop = objDivWindow.scrollHeight;
}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_input = $("#send-on-enter").val();
    chat_box[0].reset();
    user_reply(user_input, false);
}

function onSubmitMobile(chatbox){
    chatbox.preventDefault();
    user_input = $("#send-on-enter-mobile").val();
    chat_box_mobile[0].reset();
    user_reply(user_input, true);
}

bot_reply("Hello! What's up?", false, true);
bot_reply("Hello! What's up?", true, true);

// $( "input" ).focus(function() {
//     var objDivWindow = document.getElementById("body");
//     objDivWindow.scrollTop = window.innerHeight;
//   }).blur(function() {
//     var objDivWindow = document.getElementById("body");
//     objDivWindow.scrollTop = window.innerHeight;
//   });
// document.getElementById("mobile").style.height = ($(window).height() - $("#textbox-mobile").outerHeight()) + "px";
document.getElementById("window").style.height = ($(window).height() - $("#textbox-mobile").outerHeight()) + "px";


$("#navMenu").resize(function () {
    $('#godown').height($("#navMenu").height() + 10);
});

if ($("#navMenu").height() > $('#godown').height()) $('#godown').height($("#navMenu").height() + 10);

chat_box.submit(onSubmit);
chat_box_mobile.submit(onSubmitMobile);