

async function meteoData(city) {
    try {
        const apiKey = "8476ca425a7a3513fd03511fae1df032"
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        const response = await getData.json()
        console.log(response);
        
        const temperature = response.main.temp;
        const desc = response.weather[0].description

        console.log(temperature);
        console.log(desc);
        
        
        const dataview = document.getElementById("dataLoading")
        
        const paraph_temp = document.createElement("p")
        paraph_temp.innerText = `${temperature} °C`
        
        const paraph_desc = document.createElement("p")
        paraph_desc.innerHTML = desc
        dataview.appendChild(paraph_temp)
        dataview.appendChild(paraph_desc)
        
    } catch (error) {
        return error
        
    }
    
}


const form = document.getElementById("meteo")


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const country = document.querySelector('input').value
    console.log(country);
    meteoData(country)
  
    
    

    
    


    
    
})