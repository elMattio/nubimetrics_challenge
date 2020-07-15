This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The managing and updating of the global state of the aplication was done with React-Redux: https://react-redux.js.org/

The asyncronus calls in the actions creators of the global state was done with the redux-thunk middleware: https://github.com/reduxjs/redux-thunk

API requests done using axios library: https://www.npmjs.com/package/axios

Styles done with CSS and react-boostrap: https://react-bootstrap.github.io/

## Future features

Show an UI when the user´s search don´t match any publicaion.

Show total number publications found.

Show an UI when the user´s filter params don´t match any publicaion.

Show an UI when an API error occurs.

Allows user add a publication to a cart or "favorites".

## How it works

This app render a container component who render many card components when the user perform a search. 
Each card component represent a publication found and calls a modal component with extra information when you click on it.

When a search is made the app save the results sent by the API in the "items" and "relItems" props of the global state. 
Why save the results twice? Well, because it allows us perform multiple filters and even so "remember" the original results and show them when needed. 
The "relItems" prop "remembers" the original results and the "items" prop only contains the publications that are being shown to the user.

The filter options in the NavBar are rendered only when at least one publication is found. 
It is made adding an boolean expression in the NavBar component that check the global state "relItem" prop is not an empty array.
Note that in using the "relItem" prop allows the filter options be rendered even when an user´s filter params don´t match any publication. So the user can filter the results again without restart the search!

In showing the loading bar is similar to the above. It is made adding a boolean expression in the NavBar component but here we use the "isLoading" global state prop. 
By default "isLoading" is false, is setted to true by the SearchBar component when a search is made and setted to false again when the promise is resolved (You can see this in the rootReducer function for the "GET_ITEMS" action type).

The range price filter allows filter the results with only a max price, only a min price or both. Also can manage the case when the max price is lower than the min price by inverting the inputs (You can see the code in the utilities.js file, priceFilter function).
Even can deal with inputs that are not numbers! Simply don´t allow you set an string type input (See the code in the PriceDropdown component in NavBar folder).
This feature could be improoved transforming the input in an array and verifying each input character to be a number with the parseInt function. Note that though you can´t set an input like "hola", you can set "5hola" (because the parseFloat function used) however the function will not fail in the last case (because the parseFloat function again!).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

