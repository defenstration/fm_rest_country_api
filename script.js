const countryWrapper = document.getElementById("country-wrapper");
const filterSelect = document.getElementById("filter-select");

fetch("data.json")
    .then( response => response.json())
    .then( (data) => {
       console.log(data)
       
       data.forEach( (country) => {
        countryWrapper.innerHTML += 
        `<div class = "country-card">
            <div class = "flag">
                <img class = "flag-img" src = "${country.flag}">
            </div>
            <div class = "country-info">
            <h2>${country.name}</h2>
                <p><b>Population:</b> ${country.population}</p>
                <p><b>Region:</b> ${country.region}</p>
                <p><b>Capital:</b> ${country.capital}</p>
            </div>
        <div>
        `
       })

    })

