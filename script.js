const searchForm = document.querySelector("#countries-input")

// Function to return country after taking in user input
const getCountryByName = async (countryName) => {
  countryName.preventDefault();

    const fetchResponse = await fetch('https://restcountries.com/v3.1/name/' + countryName.target.text.value);
    console.log(fetchResponse);

    const countriesJSON = await fetchResponse.json();;
    console.info(countriesJSON[0]);

    const list = document.querySelector("ul");
    list.textContent = JSON.stringify(countriesJSON[0].name, null, " ");
    

}


searchForm.addEventListener("submit", getCountryByName);