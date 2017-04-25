//test arrayGenerator() function

QUnit.module('Pure javascript tests');

QUnit.test('should return empty array if num is undefined: arrayGenerator()', function(assert) {
    var result = arrayGenerator();
    assert.deepEqual(result, [], 'return empty string')
});

QUnit.test('should return an number only array with values within 1 and 10', function(assert) {
    var resultArr = arrayGenerator(10);

    assert.equal(resultArr.length, 10, 'Array length equal to 10');
    console.log(resultArr);

    function numberTest(number) {

        return number >= 1 && number <= 10;
    }

    // test whether numbers are within given range

    assert.ok(resultArr.every(numberTest), 'All numbers are between 1 and 10');

});

// DOM manipulation module

QUnit.module('DOM manipulation');

QUnit.test('all inputs without hidden class will have highlight class added: addClass()', function(assert) {

    addClass();

    // id input should not be highlighted
    assert.notOk($('#userInput .id').hasClass('highlight'), 'Input for id is not highlighted');

    // All the other inputs should be highlighted
    assert.ok($('#userInput .name').hasClass('highlight'), 'Input for name is now highlighted');
    assert.ok($('#userInput .age').hasClass('highlight'), 'Input for age is now highlighted');
    assert.ok($('#userInput .gender').hasClass('highlight'), 'Input for gender is now highlighted');
    assert.ok($('#userInput .address').hasClass('highlight'), 'Input for address is now highlighted');

});