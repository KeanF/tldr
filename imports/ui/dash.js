import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './dash.html';
import './user.html';

// Helper functions for deleteUser
if (Meteor.isClient) {
  Template.deleteAcc.events = {
    // Register click-button event only (safety!)
    'click input[type=button]' : function () {
      // Call meteor server function explicitly
      // (last argument accepts a server callback)
      Meteor.call('deleteCurrentAccount',
        $('input[type=text]').val(),
        Meteor.user().emails[0].address,
        Meteor.user()._id,
        function (err, response) {
          if (err) {
            alert("Error: " + err.reason);
          } else {
            alert("Account deleted!")
          }
      });
    }
  };
}

// Helper functions for template=dashboard
Template.dashboard.helpers({
  authInProcess: function () {
    return Meteor.loggingIn();
  },
  canShow: function () {
    return !!Meteor.user();
  }
});

// Helper functions for template=userdash
Template.userdash.helpers({
  // Get the username (parsing email)
  username: function () {
    // Retrieve the user's email from the db
    var userAddr = Meteor.user().emails[0].address;
    // Parse the email from the collection
    return userAddr.slice(0, userAddr.indexOf("@"));
  }
});

// Formatting logins form
AccountsTemplates.configure({
  texts: {
    title: {
      changePwd: "",
      enrollAccount: "",
      forgotPwd: "",
      resetPwd: "",
      signIn: "",
      signUp: "",
      verifyEmail: "",
    }
  }
});
