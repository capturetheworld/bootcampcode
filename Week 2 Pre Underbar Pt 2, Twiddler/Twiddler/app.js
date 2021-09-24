$(document).ready(function(){
  //select existing
  var $app = $('#app');
  $app.html('');

  //create HTML elements
  var $feed = $('<div id="feed"></div>');
  var $updatebutton = $("<button class=\"controlitem\" id=\"update-feed\" type=\"button\">Update Feed</button>");


  //event handler functions
  let initialSize =  streams.home.length-1;
  // console.log(` The initial size is ${initialSize}`)
  let currentMarker = initialSize+1;
  var refreshFeed = function(){
      // generateRandomTweet();
      let bottom = currentMarker;
      // console.log(bottom);
      while(bottom<=streams.home.length-1) {
        generateJqueryTweet(bottom).prependTo($feed);
        bottom++;
        currentMarker++;
      }
  }

  var rerenderFeed = function(input){
    console.log("ummm");
    let specificUser = undefined;
    if(input.data.user) {
      specificUser = input.data.user;
    }
    $( "#feed" ).remove();
    $feed = $('<div id="feed"></div>');
    $feed.appendTo($app);
    display(streams.home.length-1, specificUser);
}


let displayUsers = function(){
  $( "#feed" ).remove();
  $feed = $('<div id="feed"></div>');
  $feed.appendTo($app);
  let $friendlist = $('<div id="friends-list"></div>');
  $friendlist.appendTo($feed);
  for (let user in window.users) {
    let friend = window.users[user];
    let $friend = $('<li class="friend"></li>');
    $friend.text("@" + friend);
    $friend.on("click", {"user" : friend}, rerenderFeed);
    $friend.on("click", function() {$updatebutton.trigger("enableBack");});
    $friend.appendTo($friendlist);
  }



}

  //event listener
  $updatebutton.on("click", {"user" : undefined}, rerenderFeed);
  $updatebutton.on("click", function() {$updatebutton.text("Update Feed");});
  $updatebutton.on("enableBack", function(){
    // console.log("wammy2");
    $updatebutton.text("Back");
  });
  $( ".friends" ).on("click", displayUsers);
  $( ".main" ).on("click", {"user" : undefined},rerenderFeed);

  var display = function(lengthIndex, user){
    // console.log("user is" + user);

    while(lengthIndex >= 0){
      // console.log(lengthIndex);
      if(streams.home[lengthIndex].user === user || !user){
        generateJqueryTweet(lengthIndex).appendTo($feed);
      }
      lengthIndex -= 1;
    }
  }



  function generateJqueryTweet(ind){
    //create
    var tweet = streams.home[ind];
    var $tweet = $('<div class="tweet"></div>');

    var $profpic = $('<img src ="" class="profile-photo"/>');
    var $name = $('<span class="username"></span>');
    $name.on("click", {"user" : tweet.user}, rerenderFeed);
    $name.on("click", function() {$updatebutton.trigger("enableBack");});
    var $message = $('<span class="message"></span>');
    var $time = $('<span class="timestamp"></span>');

    var $commentpic = $('<i class="fas fa-at comment"></i>');
    var $rtpic = $('<i class="fas fa-retweet retweet"></i>');
    var $likepic = $('<i class="fas fa-star like"></i>');
    var $sharepic = $('<i class="fas fa-share share"></i>');

    $( ".fas" ).on( "mouseover", function() {
      $( this ).css( "color", "#1c4db6" )
    });
    $( ".fas" ).on( "mouseleave", function() {
      $( this ).css( "color", "#6d6d6d" )
    });


    //append

    $profpic.appendTo($tweet);
    $name.appendTo($tweet);
    $message.appendTo($tweet);
    $time.appendTo($tweet);
    $commentpic.appendTo($tweet);
    $rtpic.appendTo($tweet);
    $likepic.appendTo($tweet);
    $sharepic.appendTo($tweet);

    $profpic.attr("src",tweet.profilePhotoURL);
    $message.text(tweet.message);
    $name.text('@' + tweet.user);
    $time.text($.timeago(tweet.created_at));
    // $commentpic.attr("src",'./assets/icons/placeholder.png');
    // $rtpic.attr("src",'./assets/icons/placeholder.png');
    // $likepic.attr("src",'./assets/icons/placeholder.png');
    // $sharepic.attr("src",'./assets/icons/placeholder.png');
    return $tweet;
  }

  //append
  $updatebutton.appendTo(".controls");
  $feed.appendTo($app);


  display(initialSize);

});