$('#submit').click(function(e){
	e.preventDefault();

    let name = $('#name');
    let phone = $('#phone');
    let message = $('#message');

    if (name.val().length < 3) {
        name.css('border-bottom', '3px solid red');
        return
    } else {
        name.css('border-bottom', '3px solid green');
    }
    if (phone.val()[0] != '+' && phone.val().length < 13) {
        phone.css('border-bottom', '3px solid red');
        return
    } else {
        phone.css('border-bottom', '3px solid green');
    }

    if (message.val().length < 3) { 
        message.css('border-bottom', '3px solid red');
        return 
    }else {
        message.css('border-bottom', '3px solid green');
    }

	$.ajax({
    url:'https://api.telegram.org/bot1302514439:AAE9Q9oPnzIYox2kjJc6WM_LIJBE_X6da9I/sendMessage',
    method:'POST',
    data:{
            chat_id: -421724466, 
            text: `Name: ${name.val()} \nPhone: ${phone.val()} \nMessage: ${message.val()}`
        },
        success:function(){
            name.val("");
            phone.val("");
            message.val("");
            $('.alert-success').css('display', 'block')
        }
    });
});