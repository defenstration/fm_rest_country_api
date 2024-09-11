const countryWrapper = document.getElementById("country-wrapper");
const filterSelect = document.getElementById("filter-select");

fetch("data.json")
    .then( response => response.json())
    .then( (data) => {
        const filter = document.getElementById("filter-select")
        const regionList = []
        console.log(data)


       // Add country cards
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
            if (!regionList.includes(country.region)) {
                regionList.push(country.region)  
            }
        })

        // Add options to filter
        regionList.forEach( (region) => {
            filter.innerHTML += 
                `<option value = "${region}">${region}</option>`
        })


    })

