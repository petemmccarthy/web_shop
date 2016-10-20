import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    var mapDiv = document.getElementById('map');
    console.log(mapDiv);
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 51.5092928, lng: -0.10},
        zoom: 14
    });
  }

});
