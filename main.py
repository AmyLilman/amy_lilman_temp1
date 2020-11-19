tempf = 70
#while True:
    #print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
#if input.temperature(TemperatureUnit.FAHRENHEIT) > tempf:
    #light.set_pixel_color(5, light.rgb(250, 0, 0)) 
#else:
    #light.clear()

while True:
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT) + "F")
if input.temperature(TemperatureUnit.FAHRENHEIT) < 70 + input.temperature(TemperatureUnit.FAHRENHEIT) < 40:
    light.set_pixel_color(5, light.rgb(0, 250, 0))