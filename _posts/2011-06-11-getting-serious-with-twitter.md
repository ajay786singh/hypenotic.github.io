---
title: Getting Serious with Twitter
author: Lionel Mann
layout: post
permalink: /getting-serious-with-twitter/
dsq_thread_id:
  - 328434878
categories:
  - Social Networking
---
<img class="alignleft size-full wp-image-5736" title="images" src="http://hypenotic.com/wordpress/wp-content/uploads/2011/06/images.jpg" alt="" width="228" height="221" />Yes, I tweet. But I&#8217;ll be honest, it&#8217;s kinda sporadic and there isn&#8217;t any real plan or strategy to when or how I tweet. I send the love out and spread it around by retweeting interesting stuff I find from the people I follow but that&#8217;s about it. However, with last weeks blessing of Twitter by Apple, who announced at WWDC 2011 (Worldwide Developer Conference) that it had deeply *integrated* Twitter into iOS 5, I&#8217;m thinking maybe it&#8217;s time to be a little more strategic about my tweet engagement.

For those of you who don&#8217;t know what this Twitter/Apple love fest looks like, it basically means that 200 million plus people with iPhones, iPads and iPod Touch devices will have the ability to do things like post photos, videos and links to Twitter with a single tap. In summarizing the significance of that, Mashable&#8217;s Jennifer Van Grove wrote,

> &#8220;[Twitter] will soon be the social layer of iOS, enabling users to turn individual actions such as snapping a photo or reading an article into instant social activities.&#8221;

It&#8217;s huge. Check. Cool. Check. The tip of the iceberg. You bet. But after reading a ton of  articles on this, the word that seems to pop up the most  is &#8220;integrated.&#8221; And it&#8217;s this that has lead me to think of how to *integrate* Twitter better on our own Hypenotic site and those of our clients.

Enter <a href="http://dev.twitter.com/pages/intents" target="_blank">Web Intents</a>. Twitter released this new service in March allowing site publishers to provide users with the functionality of Twitter follows, retweets, replies and favorites, essentially turning your website into a light Twitter client. The advantages to this allow users to quickly and easily do all of the above without leaving your website or having to authorize a new application.

Great, now what? Well, it&#8217;s pretty straightforward to implement on your own site and you only need two things 1) a Javascript file and 2) a link.

**The first step** is adding the Javascript to allow the Web Intents actions (the tweets, replies, follows etc) open in the pop-up window. Simply add this Javascript reference to your page before any of the Web Intents actions:

*<script src=”http://platform.twitter.com/widgets.js” type=”text/javascript”></script>*

It doesn&#8217;t matter where you add this, whether it is in the &#8220;head&#8221; section of your HTML or just above your Web Intents actions. In the examples I show below, I put the above code right in the body of this post. The key thing is that the above code must appear **before** any of the web intents actions.

**The second step** is to add the Web Intents actions. These actions are simply a link to a specific URL. These will vary dependent on the action you wish to use. The result of clicking on the link is a new pop-up window with the relevant call to action.

The code for each with a brief explanation can be found below:

**Follow & Mini Profile:**

*<a href=&#8221;http://twitter.com/intent/user?screen_name=**lionelmann**&#8220;>Follow Me!</a>*

By using the above code you will be presented with a mini profile and the option to follow your selected user. After &#8220;screen_name=&#8221; type in the users Twitter username in order to display the correct mini profile.

**Tweet:**

*<a href=&#8221;http://twitter.com/intent/tweet&#8221;>Send your own message</a>*

This code pops up a window allowing the user to send out a normal tweet.

**@Reply:**

*<a href=&#8221;http://twitter.com/intent/tweet?in\_reply\_to=**123456789**&#8220;>Reply to a Tweet</a>*

The above code will pop-up a window allowing the viewer to reply to a specific user and message. Replace the number at the end with the ID of your own tweet. To find this, click on the time the tweet was sent in Twitter – usually display as &#8220;2minutes ago&#8221; or &#8220;June 1&#8243;.

**Retweet:**

*<a href=&#8221;http://twitter.com/intent/retweet?tweet_id=**123456789**&#8220;>Retweet a Tweet</a>*

Will let a user retweet your tweet! Change the number in order to change the message intended for retweeting.

**Favourite:**

*<a href=&#8221;http://twitter.com/intent/favorite?tweet_id=**123456789**&#8220;>Favourite a Tweet</a>*

This link will allow a user to set a tweet as a favourite for quick reference.

**Examples:**

Click on the links below to see it in action

  
[Follow Me!][1] | [Send a tweet][2] | [@Reply to a tweet][3] | [Retweet a tweet][4] | [Favourite a tweet][5]

Let us know how this works out for you. With Apples integration, Twitter is continuing to etch out its place in the social media landscape. Get engaged and communicate with your communities of interest.

 [1]: http://twitter.com/intent/user?screen_name=lionelmann
 [2]: http://twitter.com/intent/tweet
 [3]: http://twitter.com/intent/tweet?in_reply_to=79426710633844736
 [4]: http://twitter.com/intent/retweet?tweet_id=79426710633844736
 [5]: http://twitter.com/intent/favorite?tweet_id=79426710633844736