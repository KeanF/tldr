import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './dash.html';
import './user.html';

// Check if the user is logged in or if the page is loading
Template.dashboard.helpers({
    authInProcess: function () {
        return Meteor.loggingIn();
    },
    canShow: function () {
        return !!Meteor.user();
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