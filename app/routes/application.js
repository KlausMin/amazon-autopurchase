import Ember from 'ember';

export default Ember.Route.extend({
  amazonURL : 'https://www.amazon.com/dp/',
  actions: {
    asinApply(model){
      console.log(model);
      this.transitionTo(this.amazonURL);
    }
  },
  model(){

  }
});
