# Movie Box 

To run clone this project locally run the following command


```bash
git clone https://github.com/ChibuzoEkwue/HNGx-stage-2-frontend.git
```

you will also need to get your own api key from the movie database and create a .env file with a key

```env
VITE_API_KEY=your_api_key
```

Movie box was built with react (vite) react router dom v6 for navigation sass for css axios to make http requests and react helmet sync for seo.

## Api

This project was built using [the movie database api](https://developer.themoviedb.org)

## Pages

Movie box consist of three main pages.

### Home Page

This page  basically consist of two components the featured component that shows you the featured movie and the featured movies components that shows you popular movies.

### Search Page

This page shows you the search results to the movie you searched.
This page uses a query params with key q that holds the searched movie title after been passed through a encodeURIComponent function. 

```
http://localhost:5173/search?q=monkey%20king
```
and is then used to search the for the movie

### The Movie Details Page

This shows us detailed movie informations. An example of this page path is show below

```
http://localhost:5173/movies/:id

http://localhost:5173/movies/832502
```
where id holds the movies id.

#### Error boundary

In the event an id is giving of which our api has no record of it would. This will throw an error that will be picked by the errorElement

