const searchCocktail = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCocktail(data.drinks));
};

const displayCocktail = (cocktails) => {
  //   console.log(cocktails);

  cocktails.forEach((cocktail) => {
    const { strDrink, strDrinkThumb, idDrink } = cocktail;

    console.log(cocktail);
    const cocktails = document.getElementById("cocktails");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
          <div class="card h-100">
                  <img src="${strDrinkThumb}" class="card-img-top" alt="...">
               <div class="card-footer badge bg-danger">
                   <h5 class="card-title text-center text-uppercase">${strDrink}</h5>
               </div>
          </div>
     `;
    cocktails.appendChild(div);
  });
};
