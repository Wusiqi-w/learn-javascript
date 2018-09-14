if ("geolocation" in navigator) {

    // 由另一个函数作为参数的函数称为回调函数。
    navigator.geolocation.getCurrentPosition(function (position) {

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
        }

        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

        var marker = new google.maps.Marker({
            position: latlng,
            icon: iconBase + 'flag_maps.png',
            map: map
        });


        var contentString = '<div id="content"><h2 id="firstHeading" class="firstHeading">Custom info window</h2><p>This is a cool custom info window.</p></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
} else {
    var para = document.createElement('p');
    para.textContent = 'Argh, no geolocation!';
    document.body.appendChild(para);
}