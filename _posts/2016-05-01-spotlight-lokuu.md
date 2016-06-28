---
layout: post
title: 'Project Spotlight: Lokuu'
date: '2016-05-01T00:00:00-05:00'
cover: /images/posts/lokuu.jpg
tags:
- spotlight
- portfolio
- lokuu
---
I'm going to be adding some new posts here on my blog that take a look at some of the projects I've worked on in the past. The idea here is to show some skills and talk about the design, engineering, or general thought process when creating something. I'll probably be changing up the format as time goes on, so it'll be a learning process for everyone.

First off is Lokuu. Lokuu is a location-based social network that I worked on during the last couple years of college. It seems like a good place to start since it was the first project I was really passionate about.

![Lokuu](/images/posts/lokuu.jpg)

## The Problem

To provide some context, this app was created in 2008 and 2009. Twitter hadn't added locations to Tweets. Dodgeball was gone. Foursquare, Gowalla, and Google Latitude were just launching (or would be soon). A year would pass until Burbn (a remarkably similar app which would eventually pivot to Instagram) would launch. Location was the "it" thing.

I would walk around campus at U-M and wonder what was going on around me. Are there specials at that bar over there? What's with the emergency vehicles down the street? Is this restaurant any good?

Twitter could give you a pulse of the people you were following, but what about the people around you? I wanted to know two things: 1) what is happening around me in real-time, and 2) where are my friends and what are they up to?

## The Solution

Lokuu is a location-based social network that allows users to associate short text posts with location. There are two ways to view posts: a timeline and a map. Using the Google Maps API, posts were plotted around your currently location. To see what your friends were up to, a timeline was shown. From either, you can see the post on a map, write comments, and see other posts from that location.

## Iteration

#### Privacy

A big hurdle to get past was the idea that people don't want others to know where they are. It can be creepy or dangerous. Apps still struggle with this today. I'd love to get all my friends on Swarm. To deal with this, I added a post type where you could set your individual posts to public or private. Private posts could only be seen by friends.

#### Mobile

Finding your location was really a pain back during Lokuu's inception. You had to type a location and hope that the place you were at came up in the results. Once browsers began implementing HTML5 technologies and added location support, this became a lot easier. Using the mobile version of the site, it would suggest place near your coordinates rather than forcing a search. I also added the notion of favorite locations. This sped the check in process up immensely and made the app feel like something that could actually work.


## The Status

Lokuu is currently not live anymore (although it was up until about 6 months ago). I probably won't revive it, but might throw it up on GitHub for kicks.

Thanks for reading!
