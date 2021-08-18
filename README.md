
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`
followed by:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## This project is for rendering dynamic forms

it will call an api call from: https://eleos-form.free.beeceptor.com/#
to fetch a data to render on the screen.

this is a dynamic form - you can alter the data to render 3 types of UI components:

1 - textarea: usage: type = 'text'

2 - single select (radio button): usage: type = 'single_choice'

3 - multi select (checkboxes): usage: type = 'multi_choice'
 
each type can have a default value(s) to render - please refer to ``types.ts`` file for more info
