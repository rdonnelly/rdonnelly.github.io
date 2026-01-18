---
layout: post
title: 'Project: MPrint'
date: '2016-05-29T00:00:00-05:00'
cover: /images/posts/mprint1.jpg
tags:
- portfolio
- spotlight
- mprint
---

![MPrint](/images/posts/mprint0.jpg)

I worked on MPrint for a few years during my time working for the University of Michigan. When I arrived on the scene, a very function V1 product was in place. The idea was simple; upload a document, choose a printer, and MPrint will convert the document if necessary, send it to a printer, and display the status and progress. It was really simple and it worked well, but there was definitely room to grow.

## Document Selection

![MPrint Select a Document](/images/posts/mprint1.jpg)

In the original MPrint, document selection was limited to HTML file uploads. At the time, U-M was pretty schizophrenic with their file storage. We had an in-house storage drive (IFS), Google Drive space (from Google Apps), and Box. And then there was the fan-favorite, Dropbox. We decided to implement file browsing and selection capabilities for all these services.

We went with an OS X Finder-esque interface, which is a pattern many file browsers use. It was a lot of API work, but we pulled it of pretty nicely.

## Mobile

Since this was primarily a student tool at the time, we decided to solicit some feedback. I would ask any student I came across two questions:

1) In what situations do you use MPrint?
2) What about the process do you dislike?

We got a lot of great feedback, but two answers stood out above the rest. Students used MPrint most often on their way to turn in a paper before class. And they really didn't like having to log in to a lab computer or pull out their laptop. This told us that a mobile version of the app would probably be a good step toward solving these issues.

The mobile version ended up being pretty similar to the desktop version with the exception of not supporting file uploads. At the time, HTML uploads were not supported very well by mobile browsers (alright, Android was fine, but iOS was a mess). Luckily, we had our handy document services to bail us out. Just log on, select a document from whatever file sharing application you use and you're on your way!

## Printer Selection

![MPrint Find a Printer](/images/posts/mprint3.jpg)

As printing services grew and unified at U-M, then number of queues increased by almost an order of magnitude. An autocomplete search input was a fine solution; it worked every time and worked well. But we can do better, right?

Another piece of feedback we pulled from talking to users is that they usually print at the same queues over and over. Whether using your office printer or using the one on your way to class, users were not very adventurous.

Our first solution to this was to implement a "Recent Queues" list when finding a printer. This was a list of any printer you used within the last 60 days or so. Usually, this list was pretty static, so clicking on one of the rows was all you needed. This was especially useful on mobile where you really want to cut down on keyboard interaction if possible (in my opinion).

The other solution was to implement a "Nearby Queues" list. This was also especially useful to mobile as we could use your coordinates to relate you to a printer. If a user was every out of their element or using the app for the first time, finding something nearby was easy!

## Submitting a Job

![MPrint Unsubmitted Job](/images/posts/mprint4.jpg)

Lastly, the actual submission of a print job was something we spent some time on.

#### Desktop

After a few iterations, we landed on a wizard-style interface. Basically, the user would proceed down a list of three things that needed to be configured; document, printer, print options (copies, etc.). Upon completion of each step, the submit button would enable and allow for a job to be submitted.

#### Mobile

On mobile, we took a slightly different approach. The idea that users were on the go and could potentially want to print several documents was a real use-case for us. We chose to go with a shopping cart-style approach.

We used browser storage to allow a user to configure a job and save it for later. The idea here was that a user could spend time beforehand (e.g. on the bus) configuring their jobs and submit them upon arrival. Users could arrive on the scene and be on their way in very little time. And for a student that's running late for class, time is everything.

## Status

MPrint lives to this day at <mprint.umich.edu> and has been receiving upgrades and updates over the last couple years since my departure. It's something I'm extremely proud of and is enormously important to the printing infrastructure at U-M to this day. I'm glad I was able to leave it in good hands.
