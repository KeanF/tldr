import { Meteor } from 'meteor/meteor'

Meteor.methods({
  // Server-side method for handling account deletes
  deleteCurrentAccount : function (userInput, userEmail, userId) {
    console.log('on server, deleteCurrentAccount called');
    // Check if input is invalid
    if (userInput == undefined || userEmail == undefined) {
      throw new Meteor.Error("no-email", "Must input email into delete dialog box");
    }
    if (userInput !== userEmail) {
      throw new Meteor.Error("wrong-email",
        "Must input current user email to delete account");
    }
    // delete the account
    Meteor.users.remove({_id: userId});
    return "goodbye";
  }
});
