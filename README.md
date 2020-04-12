# LeadIQ Front End Assignment

## git-repo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Introduction
This is my first attempt on building a web application using VueJS. The project focuses on the development of a single web application that allows user to retrieve repositories and README.md file associated to a particular GitHub user.

## Demo
* Screencast Link: [Click Here](https://youtu.be/HRuZB9GwAno)

## Project Strategy and Scope
### User Stories
1. User would like to have an overview of how to use the web application
   -   Feature to implement: To include a step by step walkthrough on the 
       usage of the web application on the Home Page.
2. User would like to have learn more about the projects a particular GitHub user is working on
   -   Feature to implement: To include a Search page to allow user to retrieve repositories and README.md file associated to a particular GitHub user.

## Project Structure
### a. Overview
This web application is structured into 2 main parts, i.e. user viewing through the instruction notes as of how to use the web application on the home page and also to retrieve repositories and README.md file associated to a particular GitHub user under the Search page.

At the landing page, users will find a navbar at the uppermost of the web application. Currently, there a two tabs at the navigation bar, namely the Home Tab and also the Search Tab.

### b. Wireframes
https://drive.google.com/file/d/1bed_KmzU2EeRDrclraNO2jnsdSsWe5z-/view?usp=sharing

## Project Skeleton
### a. Existing Features
1. The web application was designed with Bootstrap grid design and mobile responsiveness in mind.
2. Users are able to checkout the instructional notes on how to use the web application by clicking on the Home Tab.
3. Users are able to retrieve repositories and README.md file associated to a particular GitHub users by clicking on the Search Tab.

### b. Features to be implemented in the future
For the future development of this single web application, I would like to include the following features:
    * Implement Login / Logout / Registration feature for this web application.
    * Allow registered user to follow their favourite GitHub user and get updates instantaneously if there is any new updates from the users they have followed.

## Project Surface
Design Choices:
1. Fetch API was used to perform AJAX call to the GitHub API.
2. Nanum Pen Script, a contemporary pen-script typeface with a warm touch font was used to display texts used in this web application.

## Technologies Used
1. VueJS was used as the frontend framework to build this single page web application - https://vuejs.org/
2. HTML5 was the markup language used for structuring the content of the web application
3. CSS3 was a style sheet language used to format the outlook of the web application
4. JavaScript was the programming language to add front end interactivity to the web application
5. Fetch API is used to perform the AJAX call to GitHub API.
6. Bootstrap 4 was the framework used to make the application responsive - https://getbootstrap.com/  
7. GitHub API was used to retrieve repositories and README file associated to a particular GitHub user - https://developer.github.com/v3/

## Testing (Manual)
### Responsiveness
The web application was tested across multiple device screen sizes (small: iPhone 5, Galaxy S5, Pixel 2, medium: iPad, large: iPad Pro). Website scale responsively according to the device screen when tested in the Developer tools.

### Browser Compabilitity
The web application was tested and is compatible on Chrome, Opera and Firefox.

### Test Cases
| Test Case     | Description                   | Outcome  |
| ------------- |-----------------------------  | -------- |
|1              | User are able to click on both the Home Tab and the Search Tab and be brought to the respective page itself. | Pass     |
|2              | Search button will only be activated if the user provided an input of length greater or equal to 1 and does not contain space in between each characters. | Pass     |
|3              | Repositories and README information for a particular GitHub user are able to be retrieved via the GitHub API. | Pass     |
|4              | If the GitHub username provided does not exist, a message will be displayed under the "GitHub Repository List" header letting the user know that the user that they have searched for does not exist. | Pass     |
|5              | If a particular repositories does not have README.md file associated with it, a message will be displayed under the "README Content" header letting the user know that there is no README file associated to that particular repositories. | Pass     |
|6              | If the user goes to a page that does not exist, a 404 not found error page will be shown up. | Pass     |

### Bugs and Limitations Discovered
404 not found error image display correctly on laptop / desktop version. However, unable to get the image to display properly on mobile device despite svg file being used.
Note: Have tried using background image to tried to get the image to fill up the vertical height of the screen but image appeared squished. Temporarily solution is to use svg as the img src but the only draw back is that the image is not able to occupy the whole screen height.

Laptop / Desktop                                        |  Mobile Device
:------------------------------------------------------:|:-----------------------------------------------------:
![display on laptop](https://i.imgur.com/m3xYdJT.png)   | ![display on mobile](https://i.imgur.com/OZ1IiuX.png)

## Credits and Acknowledgements
1. Window Resize:
   Source code to attach event listener to the resizing of windows was adapted from // https://codepen.io/sethdavis512/pen/EvNKWw

2. Font Awesome:
   Icons from Font Awesome were used to style the view and edit button in the view purchase history tab - https://fontawesome.com/

3. Fonts: 
   Font used is from https://fonts.google.com/