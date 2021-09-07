$(document).ready(function(){
$('.social-feed-container').socialfeed({
    
    // TWITTER
    twitter:{
        accounts: ['@spacex'],                       //Array: Specify a list of accounts from which to pull tweets
        limit: 2,                                    //Integer: max number of tweets to load
        consumer_key: 'jmcaixmarseille',           //String: consumer key. make sure to have your app read-only
        consumer_secret: 'socialmp', //String: consumer secret key. make sure to have your app read-only
        tweet_mode: 'compatibility'                  //String: change to "extended" to show the whole tweet
     },

    

    // GENERAL SETTINGS
    length:400,                                     //Integer: For posts with text longer than this length, show an ellipsis.
    show_media:true,                                //Boolean: if false, doesn't display any post images
    media_min_width: 300,                           //Integer: Only get posts with images larger than this value
    update_period: 5000,                            //Integer: Number of seconds before social-feed will attempt to load new posts.
    template: "bower_components/social-feed/template.html",                         //String: Filename used to get the post template.
    template_html:                                  //String: HTML used for each post. This overrides the 'template' filename option
    '<article class="twitter-post"> \
    <h4>{{=it.author_name}}</h4><p>{{=it.text}}  \
    <a href="{{=it.link}}" target="_blank">read more</a> \
    </p> \
    </article>',
    date_format: "ll",                              //String: Display format of the date attribute (see http://momentjs.com/docs/#/displaying/format/)
    date_locale: "en",                              //String: The locale of the date (see: http://momentjs.com/docs/#/i18n/changing-locale/)
    moderation: function(content) {                 //Function: if returns false, template will have class hidden
        return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
    },
    callback: function() {                          //Function: This is a callback function which is evoked when all the posts are collected and displayed
        console.log("All posts collected!");
    }
});


});