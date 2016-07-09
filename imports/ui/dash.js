import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './dash.html';
import './user.html';

// Helper fucntions for tempolate=dashboard
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
