console.log('hello from js');
console.log('hello from JS');

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    //perform  GET request
    getRandomQuote();
}

function getRandomQuote(){
    console.log('get the quote');
    //connect client side to server side using ajax
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    })
}