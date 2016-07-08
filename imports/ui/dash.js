import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './dash.html';

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