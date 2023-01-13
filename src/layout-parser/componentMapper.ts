import {Carousel} from './../components/Carousel/Carousel';
import {Banner} from './../components/Banner';
import {CardTypes} from './types';
export const getWidgetComponent = (type: string) => {
  switch (type.toUpperCase()) {
    case CardTypes.BANNER:
      return Banner;
    case CardTypes.CAROUSEL:
      return Carousel;
    default:
      return null;
  }
};
