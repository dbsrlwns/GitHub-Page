
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener('click', function (){
    toggleElements();
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle){
      toggle.classList.toggle('on');
    });
  }

  window.addEventListener('resize', function (){
    if(window.innerWidth > 1024) {  // 화면이 1024px 보다 커지면 
      offElements(); 
    }
  });

  function offElements(){
    [].forEach.call($toggles, function (toggle){
      toggle.classList.remove('on');
    });
  }

})(window, document)


function initMap() {
  const myLatLng = {
    lat: 37.782293,
    lng: -122.391240
  }

  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: myLatLng,
      scrollwheel: true,
      zoom: 18
    }
  );
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'GitHub'
  });
  
}
initMap();