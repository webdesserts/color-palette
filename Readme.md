Color-Palette
=============

A demo of what can be done with React and Redux.

Things You Should Download
--------------------------

- [Node](https://nodejs.org/en/download/) for our frontend dependencies and build
- [n](https://www.npmjs.com/package/n) a Node version manager
- [React DevTools](https://github.com/facebook/react-devtools) add a special tab
   for React in your Chrome/Firefox devtools

Technologies You Should Familiarize Yourself With
-------------------------------------------------

- [JavaScript][js] – If you're still trying to get your bearings this is a great
   tutorial that doesn't treat you like an idiot
- [ECMAScript 2015][es6] – The next version of javascript
- [react][] – handles the view layer of our frontend
- [react-router][router] – our views to their appropriate urls
- [redux][] – handles the model layer of the frontend.
- [react-redux][react + redux] – Connects our redux store to our react-components
- [immutable.js][immutable] (at least `Map` and `List`) – ensures that our redux
   store cannot be mutated by a property references
- [flow][] – Flow is a static type checker for JavaScript.
   You aren't required to use it but it is available if you feel you need it.

Installation
------------

```
git clone https://github.com/webdesserts/color-palette.git
cd color-palette
npm install
```

Usage
-----

- `npm run dev` start dev environment
- `npm run build` builds for production
- `npm run lint` lints the entire project
- `npm run test` run all tests

Folder Structure
----------------

- `app/routes` – This is where you store your react-components. You should store
    the components necessary for each route and sub-route in a new folder in this
    directory
- `app/routes/routes.js` – Hooks up each route to their actual url using
    **react-router**
- `app/common` – If a component either doesn't belong to any specific route or
    is used in multiple routes, put it here
- `app/store` – Contains all logic for your **redux** store. Try to pull things
    apart into their own subsection of the state (e.g. `state.users`,
    `state.posts`, etc..) and store them in separate folders. You can then
    combine their reducers into the root reducer at the base of this directory.
- `app/styles` – All your sass should be stored here.
- `app/assets` – contains all static files including images. All of your js and
    sass is compiled into this folder.



## Things worth Reading/Watching
- [Introduction video for Redux][links-1] –
   This is the release talk for Redux. Even though it's much older, the concepts
   are still the same and it does a good job of explaining the thought process
   behind redux.
- You can do a lot of magic *with* redux, but redux itself, is dead simple once
   you get to know it. To get started I suggest you first look at the basic
   example on [their github page][redux-gist]. After than look into Redux's
   [motivation][], [principles][] and familiarize yourself with it's
   [data flow][].
- [Component Composition as an alternative to Inheritance and Mixins][links-2] –
   Although with es6 classes you could use inheritance to build up base
   components. es6 classes currently do not offer a prescribed solution to
   mixins. Some people prefer to avoid mixins due to some of the issues they can
   cause. Component Composition is one alternative to mixins and inheritance. At
   the very least you should understand this pattern, as it is used commonly for
   things like **react-redux**'s `connect()` method.



## State of Dependencies
- Babel 6 is out, but there are several packages that keep us from updating.
   The main offender is **babel-eslint**.
- Hot-reloading of react components works for most of react 0.14. However, it
   does not work for the new pure function components. Until this is fixed, it's
   preferable that all components are written in the es6 class syntax.
- Hot-reloading is based off of the [react-transform-boilerplate][]. Although it
   is not a direct dependency, we should update our project's build based on the
   boilerplate when possible.
- My main problem with hot-reloading is that it seems that the "red screen of
   death" points to the location of the error after it has been compile through
   babel, not before. There may be a way to fix this.
- Although the current version of **redux-devtools** and hot-reloading isn't
   designed for react 0.14, they work just fine as long as you stay away from
   "Stateless Components" The next version of these tools that fully supports
   0.14 are in beta.



[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript
[es6]: http://babeljs.io/docs/learn-es2015/
[react]: https://facebook.github.io/react/index.html
[router]: https://github.com/rackt/react-router
[redux]: http://redux.js.org/
[react + redux]: http://redux.js.org/docs/basics/UsageWithReact.html
[immutable]: https://facebook.github.io/immutable-js/
[flow]: http://flowtype.org/

[links-1]: https://www.youtube.com/watch?v=xsSnOQynTHs
[links-2]: https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
[redux-gist]: https://github.com/rackt/redux#the-gist
[motivation]: http://redux.js.org/docs/introduction/Motivation.html
[principles]: http://redux.js.org/docs/introduction/ThreePrinciples.html
[data flow]: http://redux.js.org/docs/basics/DataFlow.html

[react-transform-boilerplate]: https://github.com/gaearon/react-transform-boilerplate
