# Project Description

## User Interface Development:

Developed an intuitive user interface (UI) using the React framework.

## Audio Collection Feature:

Implemented a functionality to collect audio input from users within the UI.

## API Communication:

Established seamless communication with the back-end through RESTful APIs to facilitate the translation process.

## Language Translation:

Utilized the React UI and REST API to translate collected audio content into various African local languages.

## Speech-to-Text Model Integration:

Integrated and deployed a fine-tuned speech-to-text model on Linode cloud computing infrastructure.

## Cloud Deployment through Kubernetes:

Employed Kubernetes cluster on Linode for efficient deployment of the developed application and its components.

## Continuous Integration Setup:

Implemented a robust continuous integration pipeline using Jenkins to streamline development, testing, and deployment processes.



# Intall package
`npm install`
`npm install --save-dev @babel/plugin-proposal-private-property-in-object`



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Run fastapi 
`uvicorn main:app --reload`

# Install 
`sudo apt-get install ffmpeg` because, the audio receive from the front end is not well formated in wav format.


# Build react app docker
`docker build -t speechci-audio .`
# Run container with port mapping
`docker run -dp 8000:3000 speechci-audio `

# PORT lessing by react apps to communicate with fastapi 
`5049`

# Build and Run FastAPI docker image
## Build
`docker build -t fast . `
## Run
`docker run -d --name fast6 -p 5049:5049 fast`

## test get from fastapi run image
`localhost:5049/hello`



# Configure jenkins auto-trigger for Github
[Youtube Tutorial](https://www.youtube.com/watch?v=ZiHMsEKklKQ&t=272s)




## reference foro bug on jenkins 
 