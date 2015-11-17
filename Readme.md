# Color Palette

## State of Dependencies
- Babel 6 is out, but there are several packages that keep us from updating. The main offender is `babel-eslint`
- Hot-reloading of react components works for most of react 0.14. However, it does not work for the new pure function components. Until this is fixed, it's preferable that all components are written in the es6 class syntax.
- Hot-reloading is based off of the `react-transform-boilerplate`. Although it is not a direct dependency, we should update our project's build based on the boilerplate when possible.
- My main problem with hot-reloading is that it seems that the "red screen of death" points to the location of the error after it has been compile through babel, not before.


## Things worth Reading/Watching
- [Introduction video for Redux](https://www.youtube.com/watch?v=xsSnOQynTHs)
- [Component Composition as an alternative to Inheritance and Mixins](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)
- [Project Structure Ideas](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e)
- [Detailed Walkthrough with server-side implementation](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)