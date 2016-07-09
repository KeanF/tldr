import { FlowRouter } from 'meteor/kadira:flow-router';

// Set up default routing for our application

// Will render our user panel iff logged in
FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render("dashboard", {content: "userdash"});
  }
});

// Temporary rss feed playground
FlowRouter.route('/rss', {
  action: function () {
    BlazeLayout.render("rssFeed", {});
  }
});

// Route to 404 page if we access a page that doesn't exist
FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render("dashboard", {content: "notFound"});
  }
}
