let user_reply = "";
let chat_box =  $('#chat_box');

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_reply = $("#send-on-enter").val();
    console.log("User replied: " + user_reply);
    chat_box[0].reset();
}

chat_box.submit(onSubmit);