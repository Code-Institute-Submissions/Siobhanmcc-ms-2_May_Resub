let map;
let markers = [];
let infoWindow;

let locations = [
     {
         name: 'one',
         tour: 'attraction',
         latlng: { lat: 53.14491, lng: -6.9017 },
         content:{
            site: "Irish National Stud",
            description: "The Irish National Stud is a thoroughbred horse breeding facility in Tully, County Kildare, Ireland. Home of the most magnificent horses & glorious gardens. It was formally established by incorporation on 11 April 1946 under the National Stud Act, 1945 and is owned by the Irish Government.",
            url: "https://irishnationalstud.ie/",
            linkDescription: " Visit Irish National Stud",
            linkTitle: "",
            photoUrl: "https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/fd4c5042-8f1d-496e-9417-e436af361dfb/header-irish-national-stud-and-gardens-kildare.jpg?w=200&q=66&h=200&fit=crop&fm=webp",
            }
         
     },
     {
         name: 'two',
         tour: 'restaurant',
         latlng: { lat: 53.15752, lng: -6.91111 },
         content:{
            site: "Hartes of Kildare",
            description: "A multi award winning Gastropub located in the heart of Kildare town just 5 minutes walk from Kildare Village outlets.",
            url: "https://harteskildare.ie/",
            linkDescription: "Visit Hartes of Kildare",
            linkTitle: "",
            photoUrl: "assets/images/hartes.jpg",
            }
     },
     {
         name: 'three',
         tour: 'hotel',
         latlng: { lat: 53.30673, lng: -6.62524 },
         content:{
            site: "The K Club",
            description: "On 550 acres with 2 golf courses, and 1.4 km from the Lodge Park Walled Garden, this sophisticated resort in an 1832 French-château-style mansion and its low-rise annexe is 2.7 km from the Straffan Butterfly Farm",
            url: "https://www.kclub.ie/",
            linkDescription: "Visit The K Club",
            linkTitle: "",
            photoUrl: "assets/images/the-k-club.jpg",
            }
     },
     {
         name: 'two',
         tour: 'restaurant',
         latlng: { lat: 53.13175, lng: -6.74194 },
         content: {
            site: "Fallons",
            description: "Since 1922, the Fallon family have been recognised as Kildare`s greatest Food Ambassadors. In collaboration with local food producers and artisans, Fallons of Kilcullen have created an authentic food experience in the Thoroughbred County.",
            url: "https://fallons.ie/",
            linkDescription: "Visit Fallons",
            linkTitle: "",
            photoUrl: "assets/images/fallons.jpg",
            }
    },
     {
         name: 'three',
         tour: 'restaurant',
         latlng: { lat: 52.99777, lng: -6.87309 },
         content: {
            site: "The Green Barn",
            description: "Set in the mature parkland of Burtown house & gardens, and overlooking the walled kitchen garden, the Green Barn Restaurant is easily accessible as a quick brunch or lunch stop, for a more relaxed luncheon style affair, or for dinner on Friday and Saturday nights",
            url: "https://burtownhouse.ie/green-barn-shop/",
            linkDescription: "Visit The Green Barn",
            linkTitle: "",
            photoUrl: "assets/images/green-barn.jpg",
            }
     },
     {
         name: 'one',
         tour: 'attraction',
         latlng: { lat: 53.1453, lng: -6.91662 },
         content: {
            site: "Kildare Village",
            description: "Kildare Village official website: Discover 100+ leading luxury boutiques with up to 60% off the RRP all year round.",
            url: "https://www.tbvsc.com/kildare-village/en",
            linkDescription: "Visit Kildare Village",
            linkTitle: "",
            photoUrl: "assets/images/kildare-village.jpg",
            }
     },
     {
         name: 'two',
         tour: 'hotel',
         latlng: { lat: 53.19142, lng: -6.67472 },
         content: {
            site: "Killashee Hotel",
            description: "Killashee Hotel, Spa & Leisure is a 4 star luxury hotel in Naas Kildare with magnificent views over the Wicklow mountains and Kildare countryside.",
            url: "https://www.killasheehotel.com/",
            linkDescription: "Visit Killashee Hotel",
            linkTitle: "",
            photoUrl: "assets/images/killashee.jpg",
            }
         
    },
    {
         name: 'one',
         tour: 'attraction',
         latlng: { lat: 53.14638, lng: -6.83325 },
         content: {
            site: "The Curragh",
            description: "The Curragh is a flat open plain of almost 2,000 hectares (5,000 acres) of common land in Newbridge, County Kildare. This area is well known for Irish horse breeding and training.",
            url: "https://en.wikipedia.org/wiki/Curragh",
            linkDescription: "Visit The Curragh",
            linkTitle: "",
            photoUrl: "assets/images/the-curragh.jpg",
    }
    },
    {
        name: 'one',
        tour: 'attraction',
        latlng: { lat: 53.17846, lng: -6.79716 },
        content: {
            site: "Newbridge Silverware",
            description: "Newbridge Silverware is a designer and producer of jewellery, homeware and giftware products",
            url: "https://www.newbridgesilverware.com/",
            linkDescription: "Visit Newbridge Silverware",
            linkTitle: "",
            photoUrl: "assets/images/newbridge-silverware.jpg",
        }
    },
    {
        name: 'three',
        tour: 'restaurant',
        latlng: { lat: 53.24909, lng: -6.66469 },
        content: {
            site: "TwoCooks",
            description: "Seasonal Modern Cuisine. TwoCooks Restaurant is a relaxed family friendly dining experience overlooking The Grand Canal in Sallins",
            url: "https://www.twocooks.ie/",
            linkDescription: "Visit Two Cooks",
            linkTitle: "",
            photoUrl: "assets/images/two-cooks.jpg",
        }
    }
];

function renderData(d) {
    return `
        <div id="content">
            <h6 id="firstheading">${d.site}</h6><br>
            <p>${d.description}</p>
            <p><a target="_blank "href="${d.url}" alt="${d.linkTitle}">${d.linkDescription}<a></p>
            <img src="${d.photoUrl}" />
        </div>
    `;
}


function initMap() {
    let options = {
        center: new google.maps.LatLng(53.16190, -6.90365),
        zoom: 9
    };
    map = new google.maps.Map(document.getElementById('map'), options);
    infoWindow = new google.maps.InfoWindow();


    const addmarker = function (args) {
        let mkr = new google.maps.Marker({
            position: args.latlng,
            map: map
        });
        if (args.hasOwnProperty('icon')) mkr.setIcon(args.icon);
        if (args.hasOwnProperty('name')) mkr.name = args.name;
        if (args.hasOwnProperty('content')) mkr.content = args.content;

        google.maps.event.addListener(mkr, 'click', clickhandler);
        return mkr;
    };
    const clickhandler = function (e) {
        infoWindow.open(map, this);
        infoWindow.setContent(renderData(this.content));
    };
    const clearmarkers = function () {
        markers.forEach(mkr => {
            mkr.setMap(null);
        });
    };

    Array.prototype.slice.call(document.querySelectorAll('input[type="radio"][name="tour"]')).forEach(function (input) {
        input.addEventListener('click', function (e) {
            if (this.value) {
                /* clear any markers added to the map already */
                clearmarkers();

                /* only show those that qualify based upon selected tour */
                locations.forEach(obj => {
                    if (obj.tour == this.value) markers.push(addmarker.call(this, obj));
                });
            }
        });
    });
}