---
layout: post
title: 'Project: MCBuilder — An App for Marvel Champions'
date: '2023-10-05T00:00:00-05:00'
cover: /images/posts/card-browser.png
tags:
- portfolio
- mc-builder
---

<img class="project-page-image" src="/images/mc/mc-icon-1024.png" alt="MC Builder App Icon" title="MC Builder" width="200">

MCBuilder is a mobile and web application I made for a popular card game, [Marvel Champions](https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/), by [Fantasy Flight Games](https://www.fantasyflightgames.com). The app allows users to browse all cards in the game, complete with card text [(source)](https://github.com/zzorba/marvelsdb-json-data) and card images [(source)](https://github.com/UnicornSnuggler/Cerebro) and build decks to share.

[![MCBuilder Card Browser](/images/posts/card-browser.png)](https://mcbuilder.app/cards/29003a)

The app is universal and utilizes [React Native](https://reactnative.dev), which allows me to easily ship code to both the App Store and the Play Store with very few code changes between the two. I then use [React Native Web](https://necolas.github.io/react-native-web/) to reuse many components to allow users to view cards and decks on the web.

The web is powered by [Next.js](https://nextjs.org) to make page loads extremely fast, and data for both the app and web is powered by Next.js API Routes.

[![MCBuilder Deck View](/images/posts/deck-builder.png)](https://mcbuilder.app/decks/view?deck=eyJuYW1lIjoiR290dGEgVGh3YXJ0ICdlbSBBbGwhIiwiYXNwZWN0cyI6WyJqdXN0aWNlIl0sInZlcnNpb24iOjAsImNvZGUiOiJkdTBtUGhYRzBXZWxIcDVwdk9kZEgiLCJjYXJkcyI6eyIxMjAyNCI6MSwiMjAwMTUiOjEsIjIyMDE1IjozLCIyNjAzNCI6MiwiMzIwMTkiOjEsIjM1MDIyIjoxLCIzNzAyMSI6MSwiMzgwMTgiOjEsIjQwMDE4IjoxLCI0MDAxOSI6MSwiNDAwMjAiOjEsIjQwMDI3IjoxLCI0MDAyOCI6MiwiNDAwNTkiOjEsIjQwMDAxYSI6MSwiMDEwNjAiOjMsIjA0MDQ3IjoxLCIwMTA4OCI6MSwiMDEwODkiOjEsIjAxMDkwIjoxfX0)

One goal I had for the app is to make data and state portable, offline first, and local-only. To accomplish this, card data is synced down from the web API onto the mobile device into a SQLite database. When building decks, all data is stored in a persisted Redux store, which lives only on a user's device. Decks can be shared with other users by copying a share URL, which carries all data with it in a base64 format. The URLs can get pretty long, but that's a trade-off I made to keep all user data on-device.

![MCBuilder Deck Edit](/images/posts/deck-builder-edit.png)

Hosting and deployment is handled by [Vercel](https://vercel.com) and [Expo's EAS](https://expo.dev/eas), which really feels like cheating sometimes. The mobile app is done using a "bare" React Native project, but if I were to start today, I would just go full Expo. There used to be some trade-off between the two paths, but now it feels like there's no question Expo is the way to go.

The game is great, and I think the app makes it nice to browse cards or theroize on a new deck build on the go! Give it a try, and as always, I'm open to feedback!

[![Download on the App Store](/images/mc/apple-app-store.png)](https://apps.apple.com/us/app/mc-builder/id1516561943)
[![Download on the Google Play Storee](/images/mc/google-play-store.png)](https://play.google.com/store/apps/details?id=com.rdonnelly.mcbuilder)
