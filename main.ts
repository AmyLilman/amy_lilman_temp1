let temp = 70
while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit))
}
if (input.temperature(TemperatureUnit.Fahrenheit) > 60) {
    light.setPixelColor(5, light.rgb(250, 0, 0))
} else if (input.temperature(TemperatureUnit.Fahrenheit) < 70 + input.temperature(TemperatureUnit.Celsius) && 70 + input.temperature(TemperatureUnit.Celsius) > 40) {
    light.setPixelColor(5, light.rgb(0, 220, 0))
} else {
    light.setPixelColor(5, light.rgb(0, 0, 250))
}

