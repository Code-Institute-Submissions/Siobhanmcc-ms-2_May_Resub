 let map;
            let markers=[];
            let infoWindow;

            let locations = [
                {
                    name: 'one',
                    tour: 'attraction',
                    latlng: { lat: 53.14491, lng: -6.9017 },
                    content: '<a href="https://irishnationalstud.ie/" target=_blank>The Irish National Stud</a>',
                },
                {
                    name: 'two',
                    tour: 'restaurant',
                    latlng: { lat: 53.15752, lng:-6.91111 },
                    content: '<a href="https://harteskildare.ie/" target=_blank>Hartes of Kildare</a>',
                },
                {
                    name: 'three',
                    tour: 'hotel',
                    latlng: { lat: 53.30673, lng: -6.62524 },
                    content: '<a href="https://www.kclub.ie/" target=_blank>The K Club</a>'
                },
                {
                    name: 'two',
                    tour: 'restaurant',
                    latlng: { lat: 53.13175, lng: -6.74194 },
                    content: '<a href="https://fallons.ie/" target=_blank>Fallons</a>'
                },
                  {
                    name: 'three',
                    tour: 'restaurant',
                    latlng: { lat: 52.99777, lng: -6.87309 },
                    content: '<a href="https://burtownhouse.ie/green-barn-shop/" target=_blank>The Green Barn</a>'
                },
                  {
                    name: 'one',
                    tour: 'attraction',
                    latlng: { lat: 53.1453, lng: -6.91662 },
                    content: '<a href="https://www.tbvsc.com/kildare-village/en" target=_blank>Kildare Village</a>'
                },
                  {
                    name: 'two',
                    tour: 'hotel',
                    latlng: { lat: 53.19142, lng: -6.67472 },
                    content: '<a href="https://www.killasheehotel.com/" target=_blank>Killashee Hotel</a>'
                },
                  {
                    name: 'one',
                    tour: 'attraction',
                    latlng: { lat: 53.14638, lng: -6.83325 },
                    content: '<a href="https://en.wikipedia.org/wiki/Curragh" target=_blank>The Curragh</a>'
                },
                  {
                    name: 'one',
                    tour: 'attraction',
                    latlng: { lat: 53.17846, lng: -6.79716 },
                    content: '<a href="https://www.newbridgesilverware.com/" target=_blank>Newbridge Silverware</a>'
                },
                  {
                    name: 'three',
                    tour: 'restaurant',
                    latlng: { lat: 53.24909, lng: -6.66469 },
                    content: '<a href="https://www.twocooks.ie/" target=_blank>Two Cooks</a>'
                }
            ];


            function initMap(){
                let options = {
                    center: new google.maps.LatLng(53.16190, -6.90365),
                    zoom: 8
                };
                map = new google.maps.Map( document.getElementById('map'), options );
                infoWindow = new google.maps.InfoWindow();



                const addmarker=function(args){
                    let mkr=new google.maps.Marker({
                        position: args.latlng,
                        map: map
                    });
                    if( args.hasOwnProperty('icon') ) mkr.setIcon( args.icon );
                    if( args.hasOwnProperty('name') ) mkr.name=args.name;
                    if( args.hasOwnProperty('content') ) mkr.content=args.content;

                    google.maps.event.addListener( mkr, 'click', clickhandler );
                    return mkr;
                };
                const clickhandler=function(e){
                    infoWindow.open( map, this );
                    infoWindow.setContent( this.content );
                };
                const clearmarkers=function(){
                    markers.forEach( mkr=>{
                        mkr.setMap( null );
                    });
                };

                Array.prototype.slice.call( document.querySelectorAll('input[type="radio"][name="tour"]') ).forEach(function(input){
                    input.addEventListener('click', function(e){
                        if( this.value ){
                            /* clear any markers added to the map already */
                            clearmarkers();

                            /* only show those that qualify based upon selected tour */
                            locations.forEach( obj=>{
                                if( obj.tour==this.value ) markers.push( addmarker.call( this, obj ) );
                            });
                        }
                    });
                });
            }