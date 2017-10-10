import Ember from 'ember';

export default Ember.Route.extend({
  asinURL : "https://www.amazon.com/dp/",
  actions: {
    asinApply(){
      this.asinURL += document.getElementById('test');
    }
  },
  model(){
    console.log(this.asinURL);
    return this.asinURL;
  }
});
