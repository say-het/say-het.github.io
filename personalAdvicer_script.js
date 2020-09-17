console.log("ok");

let searchBox = document.getElementById('searchBox');

let searchBtn = document.getElementById('searchBtn');

let displayAdvice = document.getElementById('displayAdvice');

  searchBox.style.display = 'none';

  searchBtn.style.display = 'none';

let optionButton1 = document.getElementById('optionButton1');

let optionButton2 = document.getElementById('optionButton2');

optionButton2.addEventListener('click',()=>{

  searchBox.style.display = 'block';

  searchBtn.style.display = 'block';

});

searchBtn.addEventListener('click',()=>{

  search = searchBox.value;

  fetch(`https://api.adviceslip.com/advice/search/${search}`).then(response => response.json()).then((data) => {

    if (data.total_results==1) {

      

      displayAdvice.innerHTML = `${data.slip.advice}` 

      searchBox.value = "";

    let x = Math.floor(Math.random()*256)

    let y = Math.floor(Math.random()*256)

    let z = Math.floor(Math.random()*256)

    let bgColor = `rgb(${x},${y},${z})`

    displayAdvice.style.background = bgColor;

    }

   else if(data.total_results!=1){

      displayAdvice.innerHTML = `<H1>${data.slips[Math.floor(Math.random()*data.total_results)].advice}</H1>`

      searchBox.value = "";

    let x = Math.floor(Math.random()*256)

    let y = Math.floor(Math.random()*256)

    let z = Math.floor(Math.random()*256)

    let bgColor = `rgb(${x},${y},${z})`

    displayAdvice.style.background = bgColor;

      

    }

    

    }

    )

});

optionButton1.addEventListener('click',()=>{

  searchBox.style.display = 'none';

  searchBtn.style.display = 'none';

  fetch("https://api.adviceslip.com/advice").then(response => response.json()).then((data) => {

    displayAdvice.innerHTML = `<h1>${data.slip.advice}</h1>`

    let x = Math.floor(Math.random()*256)

    let y = Math.floor(Math.random()*256)

    let z = Math.floor(Math.random()*256)

    let bgColor = `rgb(${x},${y},${z})`

    displayAdvice.style.background = bgColor;

    

  } )

});

