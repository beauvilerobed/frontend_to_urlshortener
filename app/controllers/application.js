//https://discuss.emberjs.com/t/solved-register-form-how-to-post-data-to-backend-server/12754/5
import Component from '@ember/component';
import jQuery from 'jquery';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      let self = this;
      $.ajax({
        //change port here
        url: "http://localhost:9000/api/url/shorten",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({"longUrl": $("#myInput").val()}),
        success: function(data)
        {
            window.location.href="http://localhost:4200/shorturls/"+data._id;
        }
      }).then(() => {
        //transition
      }).catch(function(error) {
        // self points at the OLD definition of 'this', aka the controller, which is what we want
        self.set('errorMessage', error.error || error);
      });
    }

    }
    
});