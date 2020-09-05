let user_reply = "";

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_reply = $("#send-on-enter").val();
    console.log("User replied: " + user_reply);
    $('#chatbox')[0].reset();
}

$("#chatbox").submit(onSubmit);