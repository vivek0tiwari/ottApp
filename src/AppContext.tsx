import React, {createContext, useState, useEffect} from 'react';
import {getConfig} from './repository/homePageData.API';

export const configDefaultValue = {
  base_url: 'http://image.tmdb.org/t/p/',
  secure_base_url: 'http://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
};

export const AppConfigProvider = createContext(configDefaultValue);

const AppConfigContextProvider = ({children}) => {
  const [config, setConfig] = useState(configDefaultValue);

  useEffect(() => {
    getConfig()
      .then(response => {
        if (response) {
          const {images = {}} = response || {};
          setConfig({...images});
        }
      })
      .catch(e => {
        __DEV__ && console.error(e);
      });
  }, []);

  return (
    <AppConfigProvider.Provider value={config}>
      {children}
    </AppConfigProvider.Provider>
  );
};

export default AppConfigContextProvider;
