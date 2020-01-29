function blink_text() {
    $('#one').fadeOut();
    $('#two').fadeOut();
    $('#three').fadeOut();

    $('#one').fadeIn(500);
    $('#two').fadeIn(1000);
    $('#three').fadeIn(1500);
}
setInterval(blink_text, 1000);
Copy