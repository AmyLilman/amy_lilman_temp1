temp = 70
while True:
    print("temperature " + input.temperature(TemperatureUnit.FAHRENHEIT))
if input.temperature(TemperatureUnit.FAHRENHEIT) > 60:
    light.set_pixel_color(5, light.rgb(250, 0, 0)) 
elif input.temperature(TemperatureUnit.FAHRENHEIT) < 70 + input.temperature(TemperatureUnit.CELSIUS) > 40:
    light.set_pixel_color(5, light.rgb(0, 220, 0))
else:
    light.set_pixel_color(5, light.rgb(0, 0, 250))