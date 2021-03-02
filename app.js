// gets a new object (the architecture does not allow using the 'new' keyword here)
var g = G$('John', 'Doe');

// use chainable methods
g.greet().setLanguage('fi').greet(true).log();

// using the object on the click of the login button
$('#login').click(function () {
    // on button click creates a new 'Greetr' object
    var loginGreetr = G$('John', 'Doe');

    $('#logindiv').hide();

    // set the chosen language, chain a method that updates h1 and log to the console
    loginGreetr.setLanguage($('#lang').val()).HTMLGreeting('#greeting', true).log();
});