import { SvgProps } from 'react-native-svg';
import {
  CastIconChromecast,
  InformationMarkCircleOutlineIcon,
  PlusLineIcon,
} from './index';

const iconMap = new Map<string, React.ElementType<SvgProps>>();
iconMap.set('CastIconChromecast', CastIconChromecast);
iconMap.set(
  'InformationMarkCircleOutlineIcon',
  InformationMarkCircleOutlineIcon,
);
iconMap.set('PlusLineIcon', PlusLineIcon);
export const getIcon = (iconName: string): React.ElementType<SvgProps> | undefined => {
  return  iconMap.get(iconName);
};
