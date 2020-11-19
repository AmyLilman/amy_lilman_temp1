let tempf = 70
// while True:
// print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
// if input.temperature(TemperatureUnit.FAHRENHEIT) > tempf:
// light.set_pixel_color(5, light.rgb(250, 0, 0)) 
// else:
// light.clear()
while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit) + "F")
}
if (input.temperature(TemperatureUnit.Fahrenheit) < 70 + input.temperature(TemperatureUnit.Fahrenheit) && 70 + input.temperature(TemperatureUnit.Fahrenheit) < 40) {
    light.setPixelColor(5, light.rgb(0, 250, 0))
}

