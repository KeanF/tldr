import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

// Include approrpiate routing information to the UI
import '/imports/ui/dash.js';
import '/imports/rss/rss.js';
import '/imports/startup/client';

// Import stuff for user.ui
import '/public/js/mainpage.js';
