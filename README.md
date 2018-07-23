# MyReads: A book Tracking App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In the MyReads project, I created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I used to persist information as a user interact with the application.

## How to run the application

In order to run the application, explore the following:

### Clone the project

`$ git clone git@github.com:jakwakwa/reactnd-project-myreads-jaco.git`

### Run application

In the folder that is created after you cloned the project:

First install node modules:

`yarn install`

Then run development server:

`yarn start`

Open browser on port 3000

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

## Backend Server

To simplify your development process a backend server is provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Sole Contributor

Jaco Kotzee -- Frontend Web Developer and Udacity Frontend Nanodegree Student.
Twitter: @doodlesdigital\_

## Technology Colophon

ReactJs, JSX, JavaScript, Sass
