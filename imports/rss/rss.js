import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// Include our rssFeed
import './rssFeed.html';

export const RSSLists = new Mongo.Collection('rsslists');
