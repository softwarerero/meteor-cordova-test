import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'hello'(what) {
    console.log('hello ' + what)
  }
});
