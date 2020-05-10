


function myMap(listener) {

    let surprise={
        info:
            '<strong> Vehicle ID:<mXfkjrFw </strong><br> place: (A surprise)>',
        lat:51.5090562, Lng:-0.1304571,
    }

    let tower = {
        info:'<strong>Vehicle ID:nZXB8ZHz </strong><br> Place:Tower of London>',
        lat:51.5080898 , lng:-0.07620836346036469,

    }

    let Westfield = {
       info:'info:<strong>Vehicle ID:Tkwu74WC </strong><br> Place:WestField Stratford>',
        lat:51.5425649,lng:-0.00693080308689057,
    }

    let Barbican = {
        info:'info:<strong>Vehicle ID:5KWpnAJN </strong><br> Place:Barbican Centre>',
        lat:51.519821199999996,lng:-0.09397523701275332,
    }


    let Bank = {
        info:'info:<strong>Vehicle ID:uf5ZrXYw </strong><br> Place:The Bank of England>',
        lat:51.5133798,lng:-0.0889552,
    }

    let MileEnd = {
        info:'info:<strong>Vehicle ID:VMerzMH8 </strong><br> Place:Mile End Station>',
        lat:51.5253378,lng:-0.033435,
    }

    let Olympic = {
        info:'info:<strong>Vehicle ID:8efT67Xd </strong><br> Place: QE Olympic Park>',
        lat:51.54458615,lng:-0.0161905117168855,
    }



    let locations = [
        [surprise.info, surprise.lat, surprise.lng,0],
        [tower.info , tower.lng,1],
        [Westfield.info,Westfield.lat , Westfield.lnglng,2],
        [Barbican.info , Barbican.lat,Barbican.lng,3],
        [Bank.lat,Bank.lng ,4 ],
        [MileEnd.lat,MileEnd.lng,5],
        [Olympic.lat,Olympic.lng ,6 ],

    ]

    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 13,
        center:new google.maps.LatLng(51.5195786,0.0606907),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    })

    let infowindow = new google.maps.InfoWindow({})

    let marker, i

    for (i= 0, i < locations.length; i++;){
        marker= new google.maps.Marker({
            position:new google.maps.LatLng(locations[i][1],locations[1][2]),
            map:map,
        })

        google.maps.event.addEventListener(
            marker,
            'click',
            function (marker,i) {
                return function () {
                    infowindow.setContent(locations[i][0])
                    infowindow.open(map.marker)

                }

            }
        )(marker,i)
    }

}