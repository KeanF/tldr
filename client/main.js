import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

// Include approrpiate routing information to the UI
import '/imports/ui/dash.js';
import '/imports/startup/client'

/**
 * Routing users whether they're logged in or not
 */
// FlowRouter.route('/', {
//     // Execute this function upon loading / (root)
//     action: function(params) {
//         Tracker.autorun(function() {
//             if (!Meteor.userId()) {
//                 console.log("User is logged out.");
//                 BlazeLayout.render("login", {});
//             } else {
//                 // Load something else if the user is logged in
//                 console.log("User is logged in.");
//                 console.log(Meteor.user());
//                 BlazeLayout.render("dashboard", { top: 'header', main: 'articles' });
//             }
//         });
//     },
//     name: (!Meteor.userId() ? 'welcome' : 'dashboard')
// });