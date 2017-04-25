// First, a simple input & output function
function arrayGenerator(num) {
    var arr = [],
        min = 1,
        max = num,
        rand;

    if (typeof num == 'undefined') {
        return arr;
    }

    for (var i = 0; i < num; i++) {
        rand = Math.floor(Math.random() * (max - min)) + min;
        arr.push(rand);
    }

    return arr;
}

// Second, JQuery DOM manipulation test!
function addClass() {
    var $inputs = $('#userInput input');

    // add highlight class to all input elements except ones that are hidden;
    $inputs.each(function(input) {
        !$(this).hasClass('hidden') && $(this).addClass('highlight');
    })
}