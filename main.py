temp = 70
if temp > 60:
   light.set_pixel_color(5, light.rgb(250, 0, 0)) 
elif temp < 70 + temp > 40:
    light.set_pixel_color(5, light.rgb(0, 220, 0))
else:
    light.set_pixel_color(5, light.rgb(0, 0, 250))