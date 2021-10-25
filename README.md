# Team Roster  [![Netlify Status](https://api.netlify.com/api/v1/badges/93013c80-6901-4b90-b1f9-c2a212ac5cf5/deploy-status)](https://app.netlify.com/sites/awc-team-roster/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

![Home](https://user-images.githubusercontent.com/83558122/138630210-b0e879ba-b530-48c3-9265-bf3d39a27c07.PNG)
A team roster application for the Los Angeles Lakers using React.

[View App](https://awc-team-roster.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:albertchitta/ASSIGNMENT-Team-Roster-react.git
$ cd ASSIGNMENT-Team-Roster-react
```
## About the User <!-- This is a scaled down user persona -->
- The ideal users for this site are fans who want to keep a list of their favorite Lakers players.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Authentication - Users can login and logout of the application using Google.
- Routing - Used to navigate between different views in the navbar.
- CRUD - Users can created, read, update, and delete players.
- React and Reactstrap
- Styled Components

## Video Walkthrough of Team Roster <!-- A loom link is sufficient -->
https://www.loom.com/share/b466cb8a2c6349f89d67e1dfe6863db8

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://awc-team-roster.netlify.app)
- [Wireframes](https://docs.google.com/presentation/d/1bHjgbKQAY57MV_K0EfRg89yoLQOv1SdtjNWg7dkMmT0/edit?usp=sharing)
- [ERD](https://user-images.githubusercontent.com/29741570/137314750-ec4b65c5-e139-4b1a-8fa5-6d25aa57afb7.png)
- [Project Board](https://github.com/albertchitta/ASSIGNMENT-Team-Roster-react/projects/1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
The useEffect hook is used to check dependency values from the last render.
```
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (player.firebaseKey) {
        setFormInput({
          name: player.name,
          number: player.number,
          firebaseKey: player.firebaseKey,
          position: player.position,
          imageUrl: player.imageUrl,
          uid: user.uid,
        });
      }
    }
    return () => {
      isMounted = false;
    };
  }, [player]);
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![Team](https://user-images.githubusercontent.com/83558122/138619071-20c9d0fc-6cf8-4777-84f9-78850ae6c935.PNG)
![Add_Player](https://user-images.githubusercontent.com/83558122/138619094-f1a5fdf0-0fca-447d-acba-7e6e2c3050a2.PNG)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
