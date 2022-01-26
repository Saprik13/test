function initialize() {
    var myLatlng = new google.maps.LatLng(50.4265807,30.5361971),
        mapOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
            scrollwheel: false,
        }
var map = new google.maps.Map(document.getElementById('map'), mapOptions),
infowindow = new google.maps.InfoWindow({
    maxWidth: 500,
    content: '<h3>WebStudio</h3><p>бул. Леси Украинки, 26 Киев 02000</p><a target="_blank" href="https://goo.gl/maps/opjvfTz5oasXwEzC7" style="color: #2196f3; text-decoration: underline">Показать на Google Картах</a>'

});
    const svgMarker = {
        path: "M36.9 51.6h11.6V33.3H36.9v18.3zm6.5-16.1h3.4v2.8h-3.4v-2.8zm0 5.6h3.4v2.8h-3.4v-2.8zm0 5.6h3.4v2.8h-3.4v-2.8zm-4.7-11.2H42v2.8h-3.4v-2.8zm0 5.6H42v2.8h-3.4v-2.8zm0 5.6H42v2.8h-3.4v-2.8zm13.2 4.9h4.5c.3 0 .6-.3.6-.6v-8.7h-5.1v9.3z M46.3 20c-12.6 0-22.9 10.3-22.9 22.9 0 10.4 7.2 19.6 17.2 22.2L45.1 77c.2.5.6.8 1.2.8.5 0 1-.3 1.2-.8l4.3-11.8C61.9 62.7 69.2 53.5 69.2 43c-.1-12.7-10.3-23-22.9-23zm14.1 31.1c0 2.2-1.8 3.9-3.9 3.9H33.6V29.9h18.3V39h8.5v12.1z",
        fillColor: '#2196f3',

        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: 0.8
    };

var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: svgMarker,
     animation: google.maps.Animation.BOUNCE
});

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
});

google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);