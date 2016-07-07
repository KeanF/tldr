import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

// Include approrpiate routing information to the UI
import '/imports/ui/public-body.js';
import '/imports/ui/user-body.js';

/**
 * Routing users whether they're logged in or not
 */
FlowRouter.route('/', {
    // Execute this function upon loading / (root)
    action: function(params) {
        Tracker.autorun(function() {
            if (!Meteor.userId()) {
                console.log("User is logged out.");
                console.log(Meteor.user());
                BlazeLayout.render("login", {});
            } else {
                // Load something else if the user is logged in
                BlazeLayout.render("dashboard", { top: 'header', main: 'articles' });
            }
        });
    },
    name: (!Meteor.userId() ? 'welcome' : 'dashboard')
});