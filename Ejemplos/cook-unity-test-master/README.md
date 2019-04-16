# COOK-UNITY-TEST

* [Installation](#installation)
* [Available Scripts](#available-scripts)
  * [npm run start](#npm-run-start)
  * [npm run build](#npm-run-build)
* [Config Visual Studio Code](#config-visual-studio-code)
  * [Extensions](#extensions)
  * [User Settings](#user-settings)

## Installation

* Prerequisites:

  * [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [NodeJS with npm](https://nodejs.org/en/)
    _(at the moment of this project is created the node and npm versions are : **NodeJs** LTS v8.9.4, **NPM** v5.6.0)_

* Install:
  ```bash
  cd ~/code
  git clone git@github.com:fga8/cook-unity-test.git
  cd cook-unity-test
  npm install
  ```

---

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For test in mobile. Enter from your phone connected to the same network, with your IP number.
Example: http://192.168.1.160:3000/

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Config Visual Studio Code

### Extensions

Search Extensions in MarketPlace:

* #### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### User Settings

Use **CTRL + SHIFT + P** to access.

```json
{
  "files.associations": {
    "*.js": "javascriptreact"
  }
}
```
