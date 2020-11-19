#tempf = 70
#while True:
    #print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
#if input.temperature(TemperatureUnit.FAHRENHEIT) > tempf:
    #light.set_pixel_color(5, light.rgb(250, 0, 0)) 
#else:
    #light.clear()

while True:
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT) + " F")
if input.temperature(TemperatureUnit.FAHRENHEIT) < 70 + input.temperature(TemperatureUnit.FAHRENHEIT) > 40:
    light.set_pixel_color(0, light.rgb(0, 250, 0))
    light.set_pixel_color(1, light.rgb(0, 250, 0))
    light.set_pixel_color(2, light.rgb(0, 250, 0))
    light.set_pixel_color(3, light.rgb(0, 250, 0))
    light.set_pixel_color(4, light.rgb(0, 250, 0))
    light.set_pixel_color(5, light.rgb(0, 250, 0))
    light.set_pixel_color(6, light.rgb(0, 250, 0))
    light.set_pixel_color(7, light.rgb(0, 250, 0))
    light.set_pixel_color(8, light.rgb(0, 250, 0))
    light.set_pixel_color(9, light.rgb(0, 250, 0))
else:
    light.set_pixel_color(0, light.rgb(0, 0, 250))
    light.set_pixel_color(1, light.rgb(0, 0, 250))
    light.set_pixel_color(2, light.rgb(0, 0, 250))
    light.set_pixel_color(3, light.rgb(0, 0, 250))
    light.set_pixel_color(4, light.rgb(0, 0, 250))
    light.set_pixel_color(5, light.rgb(0, 0, 250))
    light.set_pixel_color(6, light.rgb(0, 0, 250))
    light.set_pixel_color(7, light.rgb(0, 0, 250))
    light.set_pixel_color(8, light.rgb(0, 0, 250))
    light.set_pixel_color(9, light.rgb(0, 0, 250))