# Mobile Store

#### Write a program that uses React Router to create a program that can search for items. 

**Required Functionalities:**

- Upon clicking the nth product, the route should change to '/products/n'. This page must contain details of a mobile.

- Upon clicking 'Admin', route should change to '/admin', which displays all the available products of the store. 

- Admin must be able to edit or delete any product if needed.

<ins>**OUTPUT:**</ins>

![output](https://storage.googleapis.com/acciojob-open-file-collections/mobil.gif)






















































React Router - Navigation

Develop a React web application that:



Includes a Home Page that displays a welcome message.

Includes an About Page that provides information about the application.

Utilizes React Router for navigation between pages.

Uses navigation links to switch between pages dynamically.

Functional Requirements

FeatureDescription

Home Page (/)

Displays "Welcome to my website!".

About Page (/about)

Displays "This is a sample React Router program.".

Navigation Links

Users can switch between Home and About pages using <Link>.

React Router Setup

Uses BrowserRouter, Route, and Link for navigation.

Implementation Guidance

StepDescription

Set Up React Router

Import and use BrowserRouter for enabling routing.

Create Home Page

Render "Welcome to my website!" at /.

Create About Page

Render "This is a sample React Router program." at /about.

Navigation Links

Use Link components to navigate between pages.

Define Routes

Use Route components to handle navigation between pages.

File Overview

FileDescription

App.js

Sets up BrowserRouter and defines routes for Home & About pages.

Home.js

Displays the Home page content.

About.js

Displays the About page content.

Navigation.js

Provides links to navigate between pages.

Preview



Evaluation Criteria

CriteriaDescription

React Router Implementation

Uses react-router-dom to navigate between Home and About pages.

Correct Page Rendering

The correct content is displayed when navigating to Home and About.

Navigation Links

Users can switch pages using <Link> elements.

URL Updates Correctly

The URL changes according to the selected page.

Passes Cypress Tests

Must satisfy all test cases.

Project Setup

1️⃣ Install Node.js (Version 16 or later)

StepCommandDescription

Check Node Version

node -v

Verify installed Node.js version.

Install Node.js v16 (if not installed)

nvm install 16

Download and install Node.js v16.

Use Node.js v16

nvm use 16

Set Node.js v16 as the active version.

2️⃣ Install Dependencies

StepCommandDescription

Add React Router

npm install react-router-dom

Installs React Router for navigation.

Install Packages

npm install

Install dependencies from package.json.

3️⃣ Run the Project

StepCommandDescription

Start Development Server

npm start

Launches the project on http://localhost:8080. and github link 
