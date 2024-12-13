# Time Link

## Overview

This is our teams very first browser game built with React and Firebase. We are proud to present: Time Link. The little Alien Bob travels through the earth's history and ends up at his spaceship in the time when he came to visit and travels home. Our team: Vladimir Beliakov, Balaeat Hossain, Saara Rikama and Stefanie Jana.

**This repository contains the latest version of our game**

We used another repository first and then our brave Balaeat cleaned up the file structure and we moved to this repository. The other repo contains most of our planning and ideas, and also the first prototype of the game.

https://github.com/stabjana/timeShifters_team2

We aimed to have an educational game that leads through the earth's prehistory and history. The Players answer questions to proceed on the gameplay field and collects a reward for every correct answer given.

## Features

### Game Mechanics

- The player moves through a timeline on a grid where we were able to the positions
- The player moves by solving riddles, that are dynamically fetched from a riddle API
- The correct answer will reward the player with a token (or a time related item)
- Background music enhances the concentration and learning effect, it can be turned off if needed.

- In the future we want to be able to save the game Progress either in local storage or in a database.

### Design and user exppierience

- Animations and Feedback are implemented to give the user a visual feedback for actions
- We have a guest login for a quick game and testing by the user
- Later we will save the progress for the logedd in users

### Authentication System

- User registration for new users via email and password
- The Login and Logout can be also done

## Technologies used

- Frontend: React.js, Tailwind CSS
- Backend: Firebase Authentication for the users
- APIs: Fetching riddles and music from an external API
- React-Router: is used for navigation between routes

## How to run it:

### Step 1:

- clone the repository

```shell
git clone
```

### Step 1:

- Install npm (node package manager)

```shell
 npm install
```

### Step 2:

- Install vite

```shell
 npm install vite
```

### Step 3:

- Run the project

```shell
 npm run dev
```

## Enhancements for the Future

- add historical related riddles
- adding different minigames in addition to the questions
- add random historical facts?
- refining the music player to play more songs, jumping to beginning of song and next song
- add a multiplayer functionality
- adding more backend to handle the gameplay better
- creating a database for users and game progress
- adding a scoring system
- creating a high score leaderboard
- adding responsive design
- adding more accessability features
- animating the alien and make it talk
