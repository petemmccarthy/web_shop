import Ember from 'ember';

const google = window.google;

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    let mapDiv = document.getElementById('map');
    new google.maps.Map(mapDiv, {
      center: {lat: 51.5092928, lng: -0.10},
      zoom: 14
    });
  }

});
