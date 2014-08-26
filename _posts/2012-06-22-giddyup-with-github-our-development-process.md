---
title: 'Giddyup with Github: Hypenotic&#8217;s Development Process'
author: Lionel Mann
layout: post
permalink: /giddyup-with-github-our-development-process/
pdrp_attributionLocation:
  - caption
dsq_thread_id:
  - 737281442
categories:
  - Culture
---
June has been an amazing month for change within the creative walls of Hypenotic. A new baby was born, meditation has created an almost zen like focus in the office and Hypenotic has set off on some new sustainable directions.

Well, we&#8217;ve got one more. We&#8217;ve completely revamped our online development process. We&#8217;re now (finally) using Git to properly version and deploy web projects.

> Git is a [free and open source][1] distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

This means that for our developers, we can now offer peace of mind. We can have multiple developers working simultaneously on the same project without fear that someone will override or even delete someone else&#8217;s code.

For our clients, we can now offer a full development history, a proper staging site where new functionality or enhancements can be tested before deploying to the live site and an easy rollback process if something doesn&#8217;t work.

For Hypenotic, it means sanity and a clear, consistent process regardless of how small or large the project. It&#8217;s a process that allows any developer (freelance, intern or new hire) to come in and know exactly what was done,  the current status of the project and the ability to get up and running quickly.

<div id="attachment_9419" style="width: 590px" class="wp-caption aligncenter">
  <a href="http://hypenotic.com/wordpress/wp-content/uploads/2012/06/developmentprocess.jpg"><img class="size-full wp-image-9419" title="Hypenotic's development process" alt="" src="http://hypenotic.com/wordpress/wp-content/uploads/2012/06/developmentprocess.jpg" width="580" height="351" /></a><p class="wp-caption-text">
    Hypenotic&#8217;s development process
  </p>
</div>

The development process goes like this. We have a Github repository that has 3 branches: **master**, **staging** and **production**. The master branch is the centre piece. From it, we can create other temporary branches for specific new features or bug fixes. We then merge those branches back into the master. When we feel we&#8217;re ready, we merge the master branch into the staging branch which gets deployed to our [Linode][2] server for testing. Once we have the thumbs up, we can then merge the staging into to the production branch which then can be deployed to wherever it needs to be.  Nice and easy.

That&#8217;s it. If you have any questions about the process just [contact us][3].

*I&#8217;d like to thank <a href="https://twitter.com/#!/minusfive" target="_blank">Jorge</a> for the awesome insight, <a href="https://twitter.com/#!/syropian" target="_blank">Collin</a> for digging in and getting this working and <a href="http://hypenotic.com/fun-stuff/9182/new-kid-on-the-block" target="_blank">Chris</a> for the snazzy illustration of the process.*

 [1]: http://git-scm.com/about/free-and-open-source
 [2]: http://www.linode.com
 [3]: http://hypenotic.com/contact