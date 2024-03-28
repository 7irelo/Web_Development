const numbBox = document.getElementById("numbBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;


function convert()
{
    if (toFahrenheit.checked)
    {
        temp = Number(numbBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if (toCelcius.checked)
    {
        temp = Number(numbBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1)  + "°F";
    }
    else
    {
        result.textContent = "Select a unit";
    }
}