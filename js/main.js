



const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open');
})

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,

	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-left',
		nextEl: '.swiper-button-right',
	},
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23144834387272, lng: -8.628315287054699 },
    zoom: 14,
		styles: [
			{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "administrative.province",
					"elementType": "all",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
							{
									"saturation": -100
							},
							{
									"lightness": 65
							},
							{
									"visibility": "on"
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
							{
									"saturation": -100
							},
							{
									"lightness": "50"
							},
							{
									"visibility": "simplified"
							}
					]
			},
			{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
							{
									"saturation": "-100"
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
							{
									"visibility": "simplified"
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
							{
									"lightness": "30"
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
							{
									"lightness": "40"
							}
					]
			},
			{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
							{
									"saturation": -100
							},
							{
									"visibility": "simplified"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
							{
									"hue": "#ffff00"
							},
							{
									"lightness": -25
							},
							{
									"saturation": -97
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
							{
									"lightness": -25
							},
							{
									"saturation": -100
							}
					]
			}
	]
  });
}

window.initMap = initMap;