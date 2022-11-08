import {homePageLayout} from './config.API';

const BASEURL = 'http://api.themoviedb.org/3/';
const API_KEY_QUERY_PARAM = 'api_key=fe34f9b5badcfdab29d710f9960fa950';
const LANGUAGE = 'language=en-US';

export enum RESOURCE_TYPE {
  CONFIG = 'configuration',
  DISCOVER_MOVIES = 'discover/movie',
}

export const generateURL = (resourceType: RESOURCE_TYPE) => {
  console.log(`${BASEURL}${resourceType}?${API_KEY_QUERY_PARAM}`);
  return `${BASEURL}${resourceType}?${API_KEY_QUERY_PARAM}`;
};

export const getConfig = async () => {
  try {
    const resp = await fetch(generateURL(RESOURCE_TYPE.CONFIG));
    const data = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const discoverMovies = async () => {
  const defaultQuery =
    'language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
  try {
    const resp = await fetch(
      `${generateURL(RESOURCE_TYPE.DISCOVER_MOVIES)}&${defaultQuery}`,
    );
    const data = await resp.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getLayoutData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(homePageLayout);
    }, 100);
  });
};
