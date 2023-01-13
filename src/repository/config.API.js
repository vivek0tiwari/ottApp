import {data} from './newMovies'

export const configs = {
  homePageTopHeaderItems: [
    {
      label: 'TV Shows',
      route: '/home/tvShows',
      children: [],
    },
    {
      label: 'Movies',
      route: '/home/tvShows',
      children: [],
    },
    {
      label: 'Categories',
      route: '',
      children: [
        {
          label: 'My List',
          route: '/mylist',
        },
        {
          label: 'hindi',
          route: '/gernre/hindi',
        },
      ],
    },
  ],
};

export const homePageLayout = {
  cards: [
    {
      type: 'BANNER',
      imageURL:
        'http://image.tmdb.org/t/p/w780/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
      genres:  ['Charming', 'Drama', 'Movie'],
      backgroundImage:
        'http://image.tmdb.org/t/p/w780/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
      aspectRatio: 0.8,
      hash: '1123222',
    },
    {
      orientation: 'HORIZONTAL',
      height: 10,
      width: 10,
      hash: '112323',
      type: 'CAROUSEL',
      loadType: 'LAZY',
      carouselTitle: 'New On Nextflix',
      carouselItems: data.results,
      nextDataRequestObject: {
        url: 'discover/movie',
        method: 'GET',
        queryParams:
          'language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
      },
    },
  ],
};
