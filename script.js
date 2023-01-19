const searchForm = document.querySelector("#countries-input")

// Function to return country info after taking in its name
const getCountryByName = async (countryName) => {
    countryName.preventDefault();
    document.querySelector('#countryList').textContent = "";

    const fetchResponse = await fetch('https://restcountries.com/v3.1/name/' + countryName.target.text.value);
    console.log(fetchResponse);

    const countriesJSON = await fetchResponse.json();;
    console.info(countriesJSON[0]);
    
    //Creating list items
    const listItem1 = document.createElement("li");
    listItem1.textContent = "Name: " + JSON.stringify(countriesJSON[0].name.common, null, "");
    
    const listItem2 = document.createElement("li");
    listItem2.textContent = "Capital: " + JSON.stringify(countriesJSON[0].capital[0], null, "");
    
    const listItem3 = document.createElement("li");
    listItem3.textContent = "Flag: " + JSON.stringify(countriesJSON[0].flag, null, "");
    
    const listItem4 = document.createElement("li");
    listItem4.textContent = "Languages: " + JSON.stringify(countriesJSON[0].languages, null, "");
    
    const listItem5 = document.createElement("li");
    listItem5.textContent = "Currency: " + JSON.stringify(countriesJSON[0].currencies, null, "");
    
    const listItem6 = document.createElement("li");
    listItem6.textContent = "Population: " + JSON.stringify(countriesJSON[0].population, null, "");
    
    const listItem7 = document.createElement("li");
    listItem7.textContent = "Time Zone: " + JSON.stringify(countriesJSON[0].timezones[0], null, "");

    //Appending country info to list.
    const list = document.querySelector("ul");
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    list.appendChild(listItem4);
    list.appendChild(listItem5);
    list.appendChild(listItem6);
    list.appendChild(listItem7);

}


searchForm.addEventListener("submit", getCountryByName);