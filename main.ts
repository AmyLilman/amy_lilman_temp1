let temp = 70
if (temp > 60) {
    light.setPixelColor(5, light.rgb(250, 0, 0))
} else if (temp < 70 + temp && 70 + temp > 40) {
    light.setPixelColor(5, light.rgb(0, 220, 0))
} else {
    light.setPixelColor(5, light.rgb(0, 0, 250))
}

