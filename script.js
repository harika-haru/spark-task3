function convert() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        var result = document.getElementById("result");
        result.innerHTML = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
    }
}
function convertFahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5/9;
        var result2 = document.getElementById("result2");
        result2.innerHTML = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
    }
}
function convertKelvinToCelsius() {
    var kelvinInput = document.getElementById("kelvin").value;
    var celsiusResult = kelvinInput - 273.15;
    document.getElementById("result3").innerHTML = kelvinInput + "K = " + celsiusResult + "°C";
}