
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "George",
    friends: 3,
    messages: ["Hi", "there", "I am from Georgia", "Where are you from?"],
    postMessage: function (message) {
        this.messages.push(message);
        return this.messages;
    },
    deleteMessage: function(index) {
    this.messages.splice(index, 1);
    return this.messages;
    },
    addFriend: function() {
        this.friends++;
        return this.friends;
    },
    removeFriend: function() {
        this.friends-=1;
        return this.friends;
    },
};