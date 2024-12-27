# Time Link

## Overview

This is a fork of our study team project.

Our team members are:

- Md Belaeat Hossain https://github.com/belaeat
- SaaraRi https://github.com/SaaraRi
- Vladimir Beliakov (me) https://github.com/Ermegilius
- Stefanie 'Steffi' https://github.com/stabjana

From the end of December 2024 I continue enhancing the project in this fork aiming further study and practice.

This is the very first browser game built with React.
We are proud to present: Time Link.
The little Alien Bob travels through the Earth's history and ends up at his spaceship in the time when he came to visit and travels home.

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

- Run the project

```shell
 npm run fyl
```

## Enhancements for the Future

- add historical related riddles
- adding different minigames in addition to the questions
- add random historical facts
- refining the music player. Make it use API for random music (by genre)
- adding more backend to handle the gameplay better
- deploying the game to a server
- creating a database for users and game progress
- adding a scoring system
- creating a high score leaderboard
- adding responsive design
- adding more accessability features
- animating the alien and make it talk
