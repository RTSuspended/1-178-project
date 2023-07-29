mapboxgl.accessToken='pk.eyJ1IjoicG9vamFjaGhpa2FyYWRhaGl5YSIsImEiOiJjbGgzMGRtMXcxaXgzM3FyenpkYmptc2hiIn0.JtZhvADuuJdUuEJfWrO2sw'
let latitude=28.581935,longitude=77.072858
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
center:[latitude,longitude],
zoom:16
});
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);
map.addControl(
new MapboxDirections({
    accessToken:mapboxgl.accessToken
}),
'top-left')