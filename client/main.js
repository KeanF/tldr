import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

// Include approrpiate routing information to the UI
import '/imports/ui/public-body.js';
import '/imports/ui/user-body.js';
import '/imports/pages/pages.js'

/**
 * Routing users whether they're logged in or not
 */
FlowRouter.route('/', {
    // Execute this function upon loading / (root)
    action: function(params) {
        Tracker.autorun(function() {
            if (!Meteor.userId()) {
                console.log("User is logged out.");
                BlazeLayout.render("login", {});
            } else {
                // Load something else if the user is logged in
                console.log("User is logged in.");
                console.log(Meteor.user());
                BlazeLayout.render("dashboard", { top: 'header', main: 'articles' });
            }
        });
    },
    name: (!Meteor.userId() ? 'welcome' : 'dashboard')
});

// Load our pages
FlowRouter.route('/pages/:_id', {
    action: function (params) {
        Tracker.autorun(function() {
            if (Meteor.userId()) {
                if (params._id === "full-width") {
                    BlazeLayout.render("fullWidth", {});
                } else if (params._id === "style-demo") {
                    BlazeLayout.render("styleDemo", {});
                }
            } else {
                BlazeLayout.render("login",{});
            }
        });
    },
    name: "test"
});