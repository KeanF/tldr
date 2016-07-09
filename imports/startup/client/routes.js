import { FlowRouter } from 'meteor/kadira:flow-router';

// Set up default routing for our application

// Will render our user panel iff logged in
FlowRouter.route('/', {
  action: function () {
    BlazeLayout.render("dashboard", {content: "userdash"});
  }
});

// Route to 404 page if we access a page that doesn't exist
FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render("dashboard", {content: "notFound"});
  }
}

// Temporary rss feed playground
// (to be implemented in a future release)
// FlowRouter.route('/rss', {
//   action: function () {
//     BlazeLayout.render("rssFeed", {});
//   }
// });
