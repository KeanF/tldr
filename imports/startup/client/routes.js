import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render("dashboard", {})
    }
});