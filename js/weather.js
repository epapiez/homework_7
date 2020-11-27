function gettingJSON(){
    let API_KEY = "bfb678027e8f91664b2f9226eca8202c";
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    var location = document.querySelector("#location").value;
    if (location === "") {
        location = "Ann Arbor";
    }

    // Your code here.zs
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    if (document.getElementById('fahrenheit').checked) {
        var format = document.querySelector("#fahrenheit").value;
    }
    else if (document.getElementById('celcius').checked) {
        var format = document.querySelector("#celcius").value;
    }
    else {
        var format = "imperial";
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format+ "&appid=" + API_KEY;
    // Your code here.  
    
    console.log("Query is :" + query);
    console.log(query);
    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.



    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));

        let city = json.name;
        let temperature = json.main.temp;
        let icon = json.weather[0].icon;

        document.getElementById("forecast").style.display = "block";

        document.getElementById("tempImg").src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.getElementById("tempImg").alt = json.weather[0].description;
        document.getElementById("tempImg").title = json.weather[0].main;

        document.getElementById("loc").innerHTML = city;
        document.getElementById("temp").innerHTML = temperature;


    });
}
