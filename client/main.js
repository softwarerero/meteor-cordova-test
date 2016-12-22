import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
  'click button'(event, instance) {
    Meteor.call('hello', 'server');
  }
});
