import {
  CastIconChromecast,
  InformationMarkCircleOutlineIcon,
  PlusLineIcon,
} from './index';
const iconMap = new Map<string, SVGElement>();
iconMap.set('CastIconChromecast', CastIconChromecast);
iconMap.set(
  'InformationMarkCircleOutlineIcon',
  InformationMarkCircleOutlineIcon,
);
iconMap.set('PlusLineIcon', PlusLineIcon);
export const getIcon = (iconName: string): SVGElement | undefined => {
  return iconMap.get(iconName);
};
