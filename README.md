# Blazing Bird

**This repo respresents the SPA based react app for Birdeye**

The project is powered by the following technology stack:

- [x] [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) — a virtual DOM JavaScript library for rendering UI.  It's about rendering view as a function of state, making JavaScript-driven UI declarative the way HTML is declarative.
- [x] [Redux](http://redux.js.org/) — an incredibly simple way of modelling your data app state, with great community support
- [x] [Webpack 3](https://gist.github.com/sokra/27b24881210b56bbaff7) and [dev middleware](https://github.com/webpack/webpack-dev-middleware) — client-side module builder and module loader
- [x] [React Hot Loader 3](https://github.com/gaearon/react-hot-boilerplate/pull/61) — combines the best of React Hot Loader and React Transform and fixes some [long-standing issues](https://twitter.com/dan_abramov/status/722040946075045888)
- [ ] [React JSON Router](https://www.npmjs.com/package/redux-json-router) — to allow [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md). Redux-json-router is a minimal router intended for use with client-rendered React/Redux applications.
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux) — simple bindings to keep React Router and Redux in sync
- [x] [Reselect](https://github.com/reactjs/reselect) — provides a way to access Redux state in components and build composable selectors that are automatically memoized
- [x] [Babel 6](http://babeljs.io/) — transpiler from ES6 / JSX to ES5
- [x] [PostCSS](http://postcss.org/) — ecosystem of custom plugins and tools aimed at transforming extended syntaxes and features into modern, browser-friendly CSS
- [x] [CSS Modules](https://github.com/css-modules/css-modules) — guarantee that all the styles for a single component, designed to fix the problem of the global scope in CSS
- [x] [Redux DevTools](https://github.com/gaearon/redux-devtools) — a live-editing environment for your Redux apps (and as a [browser extension](https://github.com/zalmoxisus/redux-devtools-extension))
- [x] [React Intl](https://github.com/yahoo/react-intl) — internationalization for React projects
- [x] [ESLint](http://eslint.org/docs/user-guide/configuring) — reporter for syntax and style issues
- [x] [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)  — additional React type specific linting rules for ESLint
- [x] [Sass](http://sass-lang.com/) — compiler of CSS styles with variables, mixins, and more
- [x] [Enzyme](http://airbnb.io/enzyme/) — makes unit testing React components an absolute pleasure
- [x] [React helmet](https://github.com/nfl/react-helmet) Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.
- [x] [React Snapshot](https://www.npmjs.com/package/react-snapshot) A zero-configuration static pre-renderer for React apps
- [x] [StoryBook](http://storybook.js.org/) Interactive development & testing environment for React and React-Native UI components https://storybook.js.org
- [x] [Redux Saga](https://github.com/redux-saga/redux-saga) for  asynchronous things like data fetching and impure things like accessing the browser cache
- [x] [Jest](https://github.com/facebook/jest) Delightful JavaScript Testing. [http://facebook.github.io/jest/](http://facebook.github.io/jest/)

## Getting Started

### Prerequisites

* Node.js > 5
* yarn "`npm install -g yarn`"

### Installation

```sh
$ git clone https://github.com/BE-160/blazing-bird-ui
$ cd blazing-bird-ui
$ npm install
```

## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * `$ npm run build:serve`

  The last command will boot up HTTP server on `3003` port and serve `build/client` directory in a default browser

* Hot reloading via webpack middlewares:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Coding Guidelines

```
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
```

### Rules

A module...

* MUST export default a function called reducer()
* MUST export its action creators as functions
* MUST have action types in the form npm-module-or-app/reducer/ACTION_TYPE
* MAY export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
* These same guidelines are recommended for {actionType, action, reducer} bundles that are shared as reusable Redux libraries.

## Testing

To execute all unit tests, use:

```sh
$ npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
$ npm run test:watch
```

## Expose App on Your Local Dev Machine

Assign yourself a unique publicly accessible url that will proxy all requests to your locally running webserver.

```sh
$ npm install -g localtunnel
$ npm start
$ npm run tunnel # run in a new tab
```

You will receive a url, for example `https://tbst.localtunnel.me`, that you can share with anyone for as long as your local instance of `lt` remains active. Any requests will be routed to your local service at the specified port.


## Debugging

For debugging purposes please use:
- [Redux DevTools
](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) plugin for Chrome to simplify debugging React apps.
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## FAQ

### What's this for?

This starter kit implements best practices like testing (`unit testing`), minification, bundling, and so on. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process.

### What's happening under the hood when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is `/src`, so you can reference files under /src in index.html. When the app is built using `npm run build`, physical files are written to `/build` folder and the app is served from `/build`.

### How is Sass being processed?

We're handling it differently in DEV vs PROD.

When you run `npm start`:

 1. The sass-loader compiles Sass into CSS
 2. Webpack bundles the compiled CSS into app.js. Sounds weird, but it works!
 3. app.js contains code that loads styles into the &lt;head&gt; section of index.html via JavaScript. This is why there is no stylesheet reference in index.html. In fact, if you disable JavaScript in your browser, you'll see the styles don't load either.

The approach above supports hot reloading, which is great for development. However, it also create a flash of unstyled content on load because you have to wait for the JavaScript to parse and load styles before they're applied. So for the production build, we use a different approach:

When you run `npm run build`:

 1. The sass-loader compiles Sass into CSS
 2. The [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) extracts the compiled Sass into app.css
 3. buildHtml.js adds a reference to the stylesheet to the head of index.html.

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS and CSS
- Inline base64 URLs for images and fonts if their size is less than specified limit
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build` directory. (This is the folder you'll expose to the world).

## TODO

1. Browser caching
2. Service worker
3. DNS Prefetch

