const getData = (pais) => {
    console.log("hola", pais)
    let dataAuxiliar = { "coord": { "lon": -90.5133, "lat": 14.6407 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 18.91, "feels_like": 19.15, "temp_min": 17.51, "temp_max": 18.91, "pressure": 1020, "humidity": 88 }, "visibility": 10000, "wind": { "speed": 3.13, "deg": 115, "gust": 4.92 }, "clouds": { "all": 75 }, "dt": 1653612975, "sys": { "type": 1, "id": 7079, "country": "GT", "sunrise": 1653564741, "sunset": 1653611172 }, "timezone": -21600, "id": 3598132, "name": "Guatemala City", "cod": 200 }
    return dataAuxiliar
}
export default getData