document.writeln('<!DOCTYPE html>');
document.writeln('<html lang="en">');
document.writeln('<head>');
document.writeln('    <meta charset="UTF-8">');
document.writeln('    <meta name="viewport" content="width=device-width, initial-scale=1.0">');
document.writeln('    <title>Weather app</title>');
document.writeln('    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">');
document.writeln('');
document.writeln('  <!--================ Design by foolishdeveloper.com ===================-->');
document.writeln('    <style media="screen">');
document.writeln('* {');
document.writeln('    margin: 0;');
document.writeln('    padding: 0;');
document.writeln('    box-sizing: border-box;');
document.writeln('}');
document.writeln('body{');
document.writeln('    background: #07be4a;');
document.writeln('}');
document.writeln('');
document.writeln('/* --------------------background */');
document.writeln('.container-fluid{');
document.writeln(' width: 410px;');
document.writeln(' margin: 50px auto;');
document.writeln(' padding: 10px;');
document.writeln('');
document.writeln('}');
document.writeln('');
document.writeln('');
document.writeln('.inputs {');
document.writeln('    padding: 2rem 0 2rem 0;');
document.writeln('    text-align: center;');
document.writeln('    justify-content: center;');
document.writeln('    background: white;');
document.writeln('');
document.writeln('}');
document.writeln('');
document.writeln('.inputs input[type="text"] {');
document.writeln('    height: 3.5rem;');
document.writeln('    width: 20rem;');
document.writeln('    background: #ffffff;');
document.writeln('    font-weight: bold;');
document.writeln('    font-size: 1.1rem;');
document.writeln('    padding: 10px;');
document.writeln('    border: none;');
document.writeln('    background-color: transparent;');
document.writeln('    border: 2px solid #c24fd2;');
document.writeln('    border-radius: 2px;');
document.writeln('    margin-right:4px ;');
document.writeln('');
document.writeln('}');
document.writeln('.inputs input[type="submit"] {');
document.writeln('    height: 3.2rem;');
document.writeln('    width: 6.5rem;');
document.writeln('    background: #67ca;');
document.writeln('    font-weight: bold;');
document.writeln('    color: white;');
document.writeln('    font-size: 1.2rem;');
document.writeln('    margin-top: 20px;');
document.writeln('    border: none;');
document.writeln('    border-radius: 2px;');
document.writeln('}');
document.writeln('');
document.writeln('/* -------------------------------display */');
document.writeln('.display {');
document.writeln('    text-align: center;');
document.writeln('    width: 400px;');
document.writeln('    color: #16a849;');
document.writeln('}');
document.writeln('.wrapper {');
document.writeln('    margin: 0 9rem;');
document.writeln('');
document.writeln('    background-color: white;');
document.writeln('    height: 75vh;');
document.writeln('    margin: 50px auto;');
document.writeln('    border-radius: 2px;');
document.writeln('}');
document.writeln('');
document.writeln('.wrapper h2{');
document.writeln('    padding: 5px 0;');
document.writeln('    text-align: center;');
document.writeln('    background: #054475;');
document.writeln('    color: white;');
document.writeln('    font-family: sans-serif;');
document.writeln('  }');
document.writeln('  .wrapper p{');
document.writeln('    margin:20px 50px;');
document.writeln('    margin-right: 20px;');
document.writeln('text-align: left;');
document.writeln('color: #04214c;');
document.writeln('    font-size:23px;');
document.writeln('  }');
document.writeln('');
document.writeln('  .wrapper h2 span{');
document.writeln('    font-size: 26px;');
document.writeln('    color: white;');
document.writeln('  }');
document.writeln('    .wrapper p span{');
document.writeln('    color: #b0e60b;');
document.writeln('    font-size: 30px;');
document.writeln('  }');
document.writeln('');
document.writeln('    </style>');
document.writeln('');
document.writeln('');
document.writeln('</head>');
document.writeln('<body>');
document.writeln('    <div class="container-fluid">');
document.writeln('');
document.writeln('');
document.writeln('');
document.writeln('            <section class="main">');
document.writeln('');
document.writeln('');
document.writeln('    ');
document.writeln('            <section class="inputs">');
document.writeln('                <input type="text" placeholder="Enter any city..." id="cityinput">');
document.writeln('                <input type="submit" value="Submit" id="add">');
document.writeln('            <button placeholder="submit" id="add"></button>');
document.writeln('            </section>');
document.writeln('');
document.writeln('     ');
document.writeln('            <section class="display">');
document.writeln('                <div class="wrapper">');
document.writeln('                    <h2 id="cityoutput"></h2>');
document.writeln('                    <p id="description"></p>');
document.writeln('                    <p id="temp"></p>');
document.writeln('                    <p id="wind"></p>');
document.writeln('                    <p id="humid"></p>');
document.writeln('                    <p id="feels"></p>');
document.writeln('                    <p id="press"></p>');
document.writeln('                    <p id="rise"></p>');
document.writeln('                    <p id="set"></p>');
document.writeln('');
document.writeln('                </div>');
document.writeln('            </section>');
document.writeln('            </section>');
document.writeln('');
document.writeln('    </div>');
document.writeln('');
document.writeln('    <script>');
document.writeln('');
document.writeln('      //Now we need to determine the constant of one of the id functions. Because no html function can be used directly in JavaScript.');
document.writeln('var inputval = document.querySelector(\'#cityinput\')');
document.writeln('var btn = document.querySelector(\'#add\');');
document.writeln('var city = document.querySelector(\'#cityoutput\')');
document.writeln('var descrip = document.querySelector(\'#description\')');
document.writeln('var temp = document.querySelector(\'#temp\')');
document.writeln('var wind = document.querySelector(\'#wind\')');
document.writeln('var humid = document.querySelector(\'#humid\')');
document.writeln('var feels = document.querySelector(\'#feels\')');
document.writeln('var press = document.querySelector(\'#press\')');
document.writeln('var rise = document.querySelector(\'#rise\')');
document.writeln('var set = document.querySelector(\'#set\')');
document.writeln('');
document.writeln('apik = "3045dd712ffe6e702e3245525ac7fa38"');
document.writeln('');
document.writeln('function convertion(val){');
document.writeln('    return (val - 273).toFixed(2)');
document.writeln('}');
document.writeln('function convert(value){');
document.writeln('    let unix = value;');
document.writeln('    let date = new Date(unix*1000);');
document.writeln('    return value = date.toLocaleTimeString();');
document.writeln('}');
document.writeln('');
document.writeln('');
document.writeln('');
document.writeln('//Now we have to collect all the information with the help of fetch method');
document.writeln('');
document.writeln('    btn.addEventListener(\'click\', function(){');
document.writeln('');
document.writeln('//This is the api link from where all the information will be collected');
document.writeln('');
document.writeln('        fetch(\'https://api.openweathermap.org/data/2.5/weather?q=\'+inputval.value+\'&appid=\'+apik)');
document.writeln('        .then(res => res.json())');
document.writeln('');
document.writeln('         //.then(data => console.log(data))');
document.writeln('');
document.writeln('        .then(data => {');
document.writeln('');
document.writeln('//Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different constants.');
document.writeln('');
document.writeln('            var nameval = data[\'name\']');
document.writeln('            var descrip = data[\'weather\'][\'0\'][\'description\']');
document.writeln('            var tempature = data[\'main\'][\'temp\']');
document.writeln('            var wndspd = data[\'wind\'][\'speed\']');
document.writeln('            var humidity = data[\'main\'][\'humidity\']');
document.writeln('            var feelslike = data[\'main\'][\'feels_like\']');
document.writeln('            var pressure = data[\'main\'][\'pressure\']');
document.writeln('            var sunrise = data[\'sys\'][\'sunrise\']    ');
document.writeln('            var sunset = data[\'sys\'][\'sunset\']');
document.writeln('           ');
document.writeln('//Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.');
document.writeln('            city.innerHTML=`Weather of <span>${nameval}<span>`');
document.writeln('            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`');
document.writeln('            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`');
document.writeln('            wind.innerHTML = `Wind Speed: <span>${wndspd} m/s<span>`');
document.writeln('            humid.innerHTML = `Humidity: <span>${humidity} %<span>`');
document.writeln('            feels.innerHTML = `Feels Like: <span>${convertion(feelslike)} C<span>`');
document.writeln('            press.innerHTML = `Pressure: <span>${pressure}hPa<span>`');
document.writeln('            rise.innerHTML = `Sunrise: <span>${convert(sunrise)}<span>`');
document.writeln('            set.innerHTML = `Sunset: <span>${convert(sunset)}<span>`');
document.writeln('');
document.writeln('        })');
document.writeln('');
document.writeln('//Now the condition must be added that what if you do not input anything in the input box.');
document.writeln('        .catch(err => alert(\'You entered Wrong city name\'))');
document.writeln('    })');
document.writeln('//If you click on the submit button without inputting anything in the input box or typing the wrong city name then the above text can be seen.');
document.writeln('    </script>');
document.writeln('</body>');
document.writeln('</html>');
document.writeln('');
