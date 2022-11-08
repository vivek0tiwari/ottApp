import {Carousel} from './../components/Carousel/Carousel';
import {Banner} from './../components/Banner';
export const getWidgetComponent = (type: string) => {
  switch (type.toUpperCase()) {
    case 'BANNER':
      return Banner;
    case 'CAROUSEL':
      return Carousel;
    default:
      return null;
  }
};
