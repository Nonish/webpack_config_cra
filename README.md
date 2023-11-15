> # CONCEPTS

# What is [Webpack](https://webpack.js.org/concepts/)?

At its core, **webpack** is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

## Why do we need webpack?

There are two ways to run JavaScript in a browser. _First_, include a script for each functionality; this solution is hard to scale because loading too many scripts can cause a network bottleneck. The _second_ option is to use a big.js file containing all your project code, but this leads to problems in scope, size, readability and maintainability.

If you have written **_react_** code you would know that it requires writing a lot of javascript files and importing these files to other files. We do this using some sort of module system, two most popular module systems are **CommonJS’s** uses _require()_ syntax and **ESM’s** use _import_ syntax. Unfortunately, there is no browser support for CommonJs and support for ESM (ES6/ES8 syntax) is not universal yet. So we need a tool that can take all the files that we have written and combine/bundle them into a single js file while keeping track of their _dependencies_. The tool that does this are called **bundlers** and **webpack** is one of the many javascript bundlers!

Before moving forward, we should note that Webpack only understands _Javascript_ and _JSON_. So it converts other frontend files like HTML and CSS into modules with the help of a loader and thus provides a complete frontend solution to us. It internally makes a _dependency graph_ while processing any application.

### It ships with a few packages for us:

- **webpack-cli**: the command-line tool that gives us access to some webpack commands
- **webpack-dev-server**: a client-side server with the ability to reload live solely for development purposes
- **html-webpack-plugin**: this will generate and update the HTML templates for our application
- **HMR-plugin**: a plugin to enable the hot module reloading of our application

### Features of Webpack:

- **Entry**: We all know webpack makes a dependency graph and the starting of this graph is known as the entry or entry point. From the starting point of the dependency graph, it will follow all the dependencies to know what it has to bundle.
- **Output**: Output tells webpack where to put the bundles that it had made and what will be its format.
- **Loaders**: Loaders convert different types of files like images and CSS into a module before adding them to the dependency graph.
- **Plugins**: Plugins provide functionality. It can provide much functionality like printing something on running the webpack, minifying, optimization of bundles, etc.

### Advantages of using WebPack:

- **It speeds the development journey**: If we are using webpack then your page does not need to reload fully on having a small change in javascript. This same benefit can be accessed for CSS if we will use loaders. It also reduced the load time of the website during debugging and because of this, our time can be saved.
- **It removed the problem of overwriting the global variables**: We all know that webpack provides a module system that is based on ECMAScript(ES6). So every file that you will create here will become a module. Hence every variable that you will create in this file will be in the local scope. So the problem of overwriting of global variables that we were facing will be solved.
- **It provides [splitting of code](https://nextjs.org/learn-pages-router/foundations/how-nextjs-works/code-splitting)**: Since it supports a module system that’s why files will be treated as modules. Since the file will be treated as a module that means we can use one file’s features into another. So despite having different files, we can access the same benefit. So it actually helps us in splitting our code into different modules.
- **It provides [Minification](https://nextjs.org/learn-pages-router/foundations/how-nextjs-works/minifying)**: Minification means minimizing the code without changing its functionality. It removes all the whitespace, line breaks that are consuming spaces. It also removes unnecessary code and changes the long variable names. So doing this reduces file size and minimizes the code.
- **It supports feature flagging**: Feature flagging is a software engineering approach by which we send code to different environments during feature testing. So webpack not only helps in development, it helps in testing as well.

### Application of Webpack:

- It helps to use different JavaScript files without having tension that will load first.
- It makes code shorter.
- It helps in converting many files other than Javascript into modules.
- It compiles different JavaScript module.

----- \*\*\*------

# What is [Babel](https://babeljs.io/docs/)?

**Babel** is a JavaScript compiler ._Babel_ is a toolchain that is mainly used to convert **ECMAScript 2015+** code into a backwards compatible version of JavaScript in current and older browsers or environments.

### Here are the main things Babel can do for you:

- Transform syntax.
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js).
- Source code transformations (codemods).
- And more! (check out these videos for inspiration).

### What the presets do:

- **“babel-preset-env”** tells webpack to compile all syntax to ES5 (which browsers understand).
- **“babel-preset-react”** adds support for jsx syntax.
- **“transform-es2015-modules-commonjs”** and **“transform-class-properties”** are there for backward compatibility.

----- \*\*\*------

# What is [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/) ?

**Hot Module Replacement (HMR)** exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

- Retain application state which is lost during a full reload.
- Save valuable development time by only updating what's changed.
- Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

## How It Works ?

### The following steps allow modules to be swapped in and out of an application:

- The application asks the HMR runtime to check for updates.
- The runtime asynchronously downloads the updates and notifies the application.
- The application then asks the runtime to apply the updates.
- The runtime synchronously applies the updates.
- You can set up HMR so that this process happens automatically, or you can choose to require user interaction for updates to occur.

----- \*\*\*------

# What Is [Lazy Loading](https://www.syncfusion.com/blogs/post/lazy-loading-with-react.aspx)?

In simple terms, lazy loading is a design pattern. It allows you to load parts of your application on-demand to reduce the initial load time. For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.

### Advantages of Lazy Loading

- Reduces initial loading time by reducing the bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.

## Lazying loading our app

To lazy load a React application, we use a library called [react-loadable](https://github.com/jamiebuilds/react-loadable). It has a Higher Order Component (HOC) called Loadable. Loadable dynamically loads any module before rendering it into your app.

----- \*\*\*------

## Conclusion :

> reference : [The best webpack configurations for React applications](https://blog.logrocket.com/versatile-webpack-configurations-react-application/)
