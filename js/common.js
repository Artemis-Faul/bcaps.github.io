$('.eye').on('click', function() {
    $(this).toggleClass("eye_active");
    if ($('.password_input').attr('type') == 'password') {
        $('.password_input').attr('type', 'text');
    } else {
        $('.password_input').attr('type', 'password');
    }
});

$(".disabled").on('click', function(e) {
    e.preventDefault();
    $("form .input_box input").each(function() {
        if ($(this).val().length == 0) {
            $(this).parent().addClass("input_box_active");
            $(".btn_send").addClass("disabled");
        } else {
            $(this).parent().removeClass("input_box_active");
        }
    });
});

$("form .input_box input").keyup(function() {
    if ($(this).val().length >= 1) {
        $(this).parent().removeClass("input_box_active");
    } else {
        $(this).parent().addClass("input_box_active");
    }
});

$('form input[type=email]').on('blur', function() {
    let email = $(this).val();

    if (email.length > 0 &&
        (email.match(/.+?\@.+/g) || []).length !== 1) {
        console.log('invalid');
        $(this).parent().addClass("input_box_active");
        $(this).siblings(".error_text").text('Вы ввели некорректный e-mail!');
    } else {
        console.log('valid');
        $(this).parent().removeClass("input_box_active");
        $(this).siblings(".error_text").text('Вы ввели корректный e-mail!');
    }
});