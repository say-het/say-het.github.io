// Container where search bar and search button is
let searchContainer = document.getElementById('searchContainer');

// This is where projects are listed
let projectsList = document.getElementById('projectsList');
    html = `<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Any Countries' Any Information
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapsed" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        You can find any Countries' Any information like It's Name,Population,Area,Capital,Calling Code etc..
        <a href='anyInfoAboutCountry_index.html'>Go To Project...</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Password Generator
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        It can generate the hardest and strongest password (for your security) based on length you enter. <a href='passwordGenerator_index.html'>Go To Project...</a>
      </div>
    </div>
  </div>
</div>
    `;
projectsList.innerHTML += html;
   
