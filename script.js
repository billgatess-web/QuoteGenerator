let quote = document.getElementsByClassName("quotee")[0];
let author = document.getElementsByClassName("authorr")[0];

let api_url = 'https://dummyjson.com/quotes/random';

async function getQuote(url){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote ;
    author.innerHTML = data.author ;
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ----by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}