let user_reply = "";
let chat_box =  $('#chat_box');

function add_message(input){
    let chat_area = jQuery("#chat_area");

    let rowHTML = "";

    rowHTML += "<div class='row bg-primary ml-1 py-2'> <div class='col bg-warning'><p class='w-100'>" + input + "</p></div></div>";
    chat_area.append(rowHTML);


}

function onSubmit(chatbox){
    chatbox.preventDefault();
    user_reply = $("#send-on-enter").val();
    console.log("User replied: " + user_reply);
    chat_box[0].reset();
    add_message(user_reply);
}

chat_box.submit(onSubmit);