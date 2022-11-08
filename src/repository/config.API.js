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
      orientation: 'HORIZONTAL',
      height: 10,
      width: 10,
      hash: '112323',
      type: 'BANNER',
      loadType: 'LAZY',
      title: 'New On Nextflix',
      dataRequestObject: {
        url: 'discover/movie',
        method: 'GET',
        queryParams:
          'language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
      },
    },
  ],
};
