import { FlowRouter } from 'meteor/kadira:flow-router';

// Set up default routing for our application

// Will render our user panel iff logged in
FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render("dashboard", {content: "dash"});
    }
});

// Route whether we're configuring settings or not
FlowRouter.route('/:settings', {
  action: function() {
    BlazeLayout.render("dashboard", {content: "settings"});
  }
});