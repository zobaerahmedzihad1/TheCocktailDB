const searchCocktail = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  searchField.textContent = "";
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCocktail(data.drinks));
};

const displayCocktail = (cocktails) => {
  //   console.log(cocktails);
  cocktails.forEach((cocktail) => {
    const { strDrink, strDrinkThumb, idDrink } = cocktail;
    //     console.log(cocktail);
    const cocktails = document.getElementById("cocktails");
    cocktails.textContent = "";
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div onclick = "showCocktailDetails(${idDrink})" class="card h-100">
                  <img src="${strDrinkThumb}" class="card-img-top" alt="...">
               <div class="card-footer badge bg-danger">
                   <h5 class="card-title text-center text-uppercase">${strDrink}</h5>
               </div>
          </div>
     `;
    cocktails.appendChild(div);
  });
};

const showCocktailDetails = (idDrink) => {
  //   console.log(idDrink);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCocktailDetails(data.drinks[0]));
};

const displayCocktailDetails = (drinks) => {
  console.log(drinks.strDrink);

  const { strDrinkThumb, strDrink, strInstructions } = drinks;

  const cocktailDetails = document.getElementById("cocktail-details");
  cocktailDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <div class="row g-0">
       <div class="col-md-4">
         <img src="${strDrinkThumb}" class="img-fluid rounded-start" alt="...">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">${strDrink}</h5>
           <p class="card-text">${strInstructions.slice(0, 150)}</p>
         </div>
       </div>
     </div>
`;
  cocktailDetails.appendChild(div);
};
