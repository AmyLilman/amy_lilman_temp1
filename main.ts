// tempf = 70
// while True:
//     print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
// if input.temperature(TemperatureUnit.FAHRENHEIT) > tempf:
//     light.set_pixel_color(5, light.rgb(250, 0, 0)) 
// else:
//     light.clear()
// while True:
//     print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT) and " F")
//     if input.temperature(TemperatureUnit.FAHRENHEIT) > 70:
//         light.set_pixel_color(5, light.rgb(250, 0, 0))
//     elif input.temperature(TemperatureUnit.FAHRENHEIT) < 70 and input.temperature(TemperatureUnit.FAHRENHEIT) > 40:
//         light.set_pixel_color(5, light.rgb(0, 250, 0))    
//     else:
//         light.set_pixel_color(5, light.rgb(0, 0, 250))
while (true) {
    console.log("temperature " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setPixelColor(0, light.rgb(250, 0, 0))
        light.setPixelColor(1, light.rgb(250, 0, 0))
        light.setPixelColor(2, light.rgb(250, 0, 0))
        light.setPixelColor(3, light.rgb(250, 0, 0))
        light.setPixelColor(4, light.rgb(250, 0, 0))
        light.setPixelColor(5, light.rgb(250, 0, 0))
        light.setPixelColor(6, light.rgb(250, 0, 0))
        light.setPixelColor(7, light.rgb(250, 0, 0))
        light.setPixelColor(8, light.rgb(250, 0, 0))
        light.setPixelColor(9, light.rgb(250, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 40) {
        light.setPixelColor(0, light.rgb(0, 250, 0))
        light.setPixelColor(1, light.rgb(0, 250, 0))
        light.setPixelColor(2, light.rgb(0, 250, 0))
        light.setPixelColor(3, light.rgb(0, 250, 0))
        light.setPixelColor(4, light.rgb(0, 250, 0))
        light.setPixelColor(5, light.rgb(0, 250, 0))
        light.setPixelColor(6, light.rgb(0, 250, 0))
        light.setPixelColor(7, light.rgb(0, 250, 0))
        light.setPixelColor(8, light.rgb(0, 250, 0))
        light.setPixelColor(9, light.rgb(0, 250, 0))
    } else {
        light.setPixelColor(0, light.rgb(0, 0, 250))
        light.setPixelColor(1, light.rgb(0, 0, 250))
        light.setPixelColor(2, light.rgb(0, 0, 250))
        light.setPixelColor(3, light.rgb(0, 0, 250))
        light.setPixelColor(4, light.rgb(0, 0, 250))
        light.setPixelColor(5, light.rgb(0, 0, 250))
        light.setPixelColor(6, light.rgb(0, 0, 250))
        light.setPixelColor(7, light.rgb(0, 0, 250))
        light.setPixelColor(8, light.rgb(0, 0, 250))
        light.setPixelColor(9, light.rgb(0, 0, 250))
    }
    
}
