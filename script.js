let imgSec = document.getElementById('imgSec');
let searchContainer = document.getElementById('searchContainer');
let searchBtn = document.getElementById('searchBtn');
let app_id = `5efbbf7a`;
let api_key = `acfa77210b5c437783a623bad6232aa1`;
console.log(searchBox.value);
searchBtn.addEventListener('click', fetchData)
function fetchData(e) {
  e.preventDefault();
  fetch(`https://api.edamam.com/search?app_id=5efbbf7a&app_key=acfa77210b5c437783a623bad6232aa1&q=${searchBox.value}`).then(response => response.json()).then((data)=> {
    console.log(data);
    console.log(imgSec);
    console.log(searchBox.value);

    let html = ``;

    
    let img0 = data.hits[0].recipe.image;
    let recipeName0 = data.hits[0].recipe.label;
      


    html += `<img src="${img0}" alt="" /><h6>${recipeName0}</h6><h6>${data.hits[0].recipe.ingredientLines[0]}<br />${data.hits[0].recipe.ingredientLines[1]}<br />${data.hits[0].recipe.ingredientLines[2]}<br />${data.hits[0].recipe.ingredientLines[3]}<br />${data.hits[0].recipe.ingredientLines[4]}<br />${data.hits[0].recipe.ingredientLines[5]}<br />${data.hits[0].recipe.ingredientLines[6]}<br />${data.hits[0].recipe.ingredientLines[7]}<br />${data.hits[0].recipe.ingredientLines[8]}<br />${data.hits[0].recipe.ingredientLines[9]}<br />${data.hits[0].recipe.ingredientLines[10]}<br />${data.hits[0].recipe.ingredientLines[11]}<br />${data.hits[0].recipe.ingredientLines[12]}<br />${data.hits[0].recipe.ingredientLines[13]}<br />${data.hits[0].recipe.ingredientLines[14]}</h6><br>`
    
    let img1 = data.hits[1].recipe.image;
    let recipeName1 = data.hits[1].recipe.label;
    


    html += `<img src="${img1}" alt="" /><h6>${recipeName1}</h6><h6>${data.hits[1].recipe.ingredientLines[0]}<br />${data.hits[1].recipe.ingredientLines[1]}<br />${data.hits[1].recipe.ingredientLines[2]}<br />${data.hits[1].recipe.ingredientLines[3]}<br />${data.hits[1].recipe.ingredientLines[4]}<br />${data.hits[1].recipe.ingredientLines[5]}<br />${data.hits[1].recipe.ingredientLines[6]}<br />${data.hits[1].recipe.ingredientLines[7]}<br />${data.hits[1].recipe.ingredientLines[8]}<br />${data.hits[1].recipe.ingredientLines[9]}<br />${data.hits[1].recipe.ingredientLines[10]}<br />${data.hits[1].recipe.ingredientLines[11]}<br />${data.hits[1].recipe.ingredientLines[12]}<br />${data.hits[1].recipe.ingredientLines[13]}<br />${data.hits[1].recipe.ingredientLines[14]}</h6><br>`
    
    let img2 = data.hits[2].recipe.image;
    let recipeName2 = data.hits[2].recipe.label;
    


    html += `<img src="${img2}" alt="" /><h6>${recipeName2}</h6><h6>${data.hits[2].recipe.ingredientLines[0]}<br />${data.hits[2].recipe.ingredientLines[1]}<br />${data.hits[2].recipe.ingredientLines[2]}<br />${data.hits[2].recipe.ingredientLines[3]}<br />${data.hits[2].recipe.ingredientLines[4]}<br />${data.hits[2].recipe.ingredientLines[5]}<br />${data.hits[2].recipe.ingredientLines[6]}<br />${data.hits[2].recipe.ingredientLines[7]}<br />${data.hits[2].recipe.ingredientLines[8]}<br />${data.hits[2].recipe.ingredientLines[9]}<br />${data.hits[2].recipe.ingredientLines[10]}<br />${data.hits[2].recipe.ingredientLines[11]}<br />${data.hits[2].recipe.ingredientLines[12]}<br />${data.hits[2].recipe.ingredientLines[13]}<br />${data.hits[2].recipe.ingredientLines[14]}</h6><br>`
    
    let img3 = data.hits[3].recipe.image;
    let recipeName3 = data.hits[3].recipe.label;
    


    html += `<img src="${img3}" alt="" /><h6>${recipeName3}</h6><h6>${data.hits[3].recipe.ingredientLines[0]}<br />${data.hits[3].recipe.ingredientLines[1]}<br />${data.hits[3].recipe.ingredientLines[2]}<br />${data.hits[3].recipe.ingredientLines[3]}<br />${data.hits[3].recipe.ingredientLines[4]}<br />${data.hits[3].recipe.ingredientLines[5]}<br />${data.hits[3].recipe.ingredientLines[6]}<br />${data.hits[3].recipe.ingredientLines[7]}<br />${data.hits[3].recipe.ingredientLines[8]}<br />${data.hits[3].recipe.ingredientLines[9]}<br />${data.hits[3].recipe.ingredientLines[10]}<br />${data.hits[3].recipe.ingredientLines[11]}<br />${data.hits[3].recipe.ingredientLines[12]}<br />${data.hits[3].recipe.ingredientLines[13]}<br />${data.hits[3].recipe.ingredientLines[14]}</h6><br>`
    
    let img4 = data.hits[4].recipe.image;
    let recipeName4 = data.hits[4].recipe.label;
    


    html += `<img src="${img4}" alt="" /><h6>${recipeName4}</h6><h6>${data.hits[4].recipe.ingredientLines[0]}<br />${data.hits[4].recipe.ingredientLines[1]}<br />${data.hits[4].recipe.ingredientLines[2]}<br />${data.hits[4].recipe.ingredientLines[3]}<br />${data.hits[4].recipe.ingredientLines[4]}<br />${data.hits[4].recipe.ingredientLines[5]}<br />${data.hits[4].recipe.ingredientLines[6]}<br />${data.hits[4].recipe.ingredientLines[7]}<br />${data.hits[4].recipe.ingredientLines[8]}<br />${data.hits[4].recipe.ingredientLines[9]}<br />${data.hits[4].recipe.ingredientLines[10]}<br />${data.hits[4].recipe.ingredientLines[11]}<br />${data.hits[4].recipe.ingredientLines[12]}<br />${data.hits[4].recipe.ingredientLines[13]}<br />${data.hits[4].recipe.ingredientLines[14]}</h6><br>`
    
    let img5 = data.hits[5].recipe.image;
    let recipeName5 = data.hits[5].recipe.label;
    


    html += `<img src="${img5}" alt="" /><h6>${recipeName5}</h6><h6>${data.hits[5].recipe.ingredientLines[0]}<br />${data.hits[5].recipe.ingredientLines[1]}<br />${data.hits[5].recipe.ingredientLines[2]}<br />${data.hits[5].recipe.ingredientLines[3]}<br />${data.hits[5].recipe.ingredientLines[4]}<br />${data.hits[5].recipe.ingredientLines[5]}<br />${data.hits[5].recipe.ingredientLines[6]}<br />${data.hits[5].recipe.ingredientLines[7]}<br />${data.hits[5].recipe.ingredientLines[8]}<br />${data.hits[5].recipe.ingredientLines[9]}<br />${data.hits[5].recipe.ingredientLines[10]}<br />${data.hits[5].recipe.ingredientLines[11]}<br />${data.hits[5].recipe.ingredientLines[12]}<br />${data.hits[5].recipe.ingredientLines[13]}<br />${data.hits[5].recipe.ingredientLines[14]}</h6><br>`
    
    let img6 = data.hits[6].recipe.image;
    let recipeName6 = data.hits[6].recipe.label;
    


    html += `<img src="${img6}" alt="" /><h6>${recipeName6}</h6><h6>${data.hits[6].recipe.ingredientLines[0]}<br />${data.hits[6].recipe.ingredientLines[1]}<br />${data.hits[0].recipe.ingredientLines[2]}<br />${data.hits[6].recipe.ingredientLines[3]}<br />${data.hits[6].recipe.ingredientLines[4]}<br />${data.hits[6].recipe.ingredientLines[5]}<br />${data.hits[6].recipe.ingredientLines[6]}<br />${data.hits[6].recipe.ingredientLines[7]}<br />${data.hits[6].recipe.ingredientLines[8]}<br />${data.hits[6].recipe.ingredientLines[9]}<br />${data.hits[6].recipe.ingredientLines[10]}<br />${data.hits[6].recipe.ingredientLines[11]}<br />${data.hits[6].recipe.ingredientLines[12]}<br />${data.hits[6].recipe.ingredientLines[13]}<br />${data.hits[6].recipe.ingredientLines[14]}</h6><br>`
    
    let img7 = data.hits[7].recipe.image;
    let recipeName7 = data.hits[7].recipe.label;
    


    html += `<img src="${img7}" alt="" /><h6>${recipeName7}</h6><h6>${data.hits[7].recipe.ingredientLines[0]}<br />${data.hits[7].recipe.ingredientLines[1]}<br />${data.hits[7].recipe.ingredientLines[2]}<br />${data.hits[7].recipe.ingredientLines[3]}<br />${data.hits[7].recipe.ingredientLines[4]}<br />${data.hits[7].recipe.ingredientLines[5]}<br />${data.hits[7].recipe.ingredientLines[6]}<br />${data.hits[7].recipe.ingredientLines[7]}<br />${data.hits[7].recipe.ingredientLines[8]}<br />${data.hits[7].recipe.ingredientLines[9]}<br />${data.hits[7].recipe.ingredientLines[10]}<br />${data.hits[7].recipe.ingredientLines[11]}<br />${data.hits[7].recipe.ingredientLines[12]}<br />${data.hits[7].recipe.ingredientLines[13]}<br />${data.hits[7].recipe.ingredientLines[14]}</h6><br>`
    
    let img8 = data.hits[8].recipe.image;
    let recipeName8 = data.hits[8].recipe.label;
    


    html += `<img src="${img8}" alt="" /><h6>${recipeName8}</h6><h6>${data.hits[8].recipe.ingredientLines[0]}<br />${data.hits[8].recipe.ingredientLines[1]}<br />${data.hits[8].recipe.ingredientLines[2]}<br />${data.hits[8].recipe.ingredientLines[3]}<br />${data.hits[8].recipe.ingredientLines[4]}<br />${data.hits[8].recipe.ingredientLines[5]}<br />${data.hits[8].recipe.ingredientLines[6]}<br />${data.hits[8].recipe.ingredientLines[7]}<br />${data.hits[8].recipe.ingredientLines[8]}<br />${data.hits[8].recipe.ingredientLines[9]}<br />${data.hits[8].recipe.ingredientLines[10]}<br />${data.hits[8].recipe.ingredientLines[11]}<br />${data.hits[8].recipe.ingredientLines[12]}<br />${data.hits[8].recipe.ingredientLines[13]}<br />${data.hits[8].recipe.ingredientLines[14]}</h6><br>`
    
    let img9 = data.hits[9].recipe.image;
    let recipeName9 = data.hits[9].recipe.label;
    


    html += `<img src="${img9}" alt="" /><h6>${recipeName9}</h6><h6>${data.hits[9].recipe.ingredientLines[0]}<br />${data.hits[9].recipe.ingredientLines[1]}<br />${data.hits[9].recipe.ingredientLines[2]}<br />${data.hits[9].recipe.ingredientLines[3]}<br />${data.hits[9].recipe.ingredientLines[4]}<br />${data.hits[9].recipe.ingredientLines[5]}<br />${data.hits[9].recipe.ingredientLines[6]}<br />${data.hits[9].recipe.ingredientLines[7]}<br />${data.hits[9].recipe.ingredientLines[8]}<br />${data.hits[9].recipe.ingredientLines[9]}<br />${data.hits[9].recipe.ingredientLines[10]}<br />${data.hits[9].recipe.ingredientLines[11]}<br />${data.hits[9].recipe.ingredientLines[12]}<br />${data.hits[9].recipe.ingredientLines[13]}<br />${data.hits[9].recipe.ingredientLines[14]}</h6><br>`
console.log(html)
    imgSec.innerHTML = html;
  })




}
$("body").each(function() {
    var text = $(this).text();
    text = text.replace("undefined", "");
    $(this).text(text);
});


// https://api.edamam.com/search?app_id=5efbbf7a&app_key=acfa77210b5c437783a623bad6232aa1&q=pizza
