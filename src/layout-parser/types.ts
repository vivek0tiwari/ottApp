export enum ActionType {
  NAVIGATION = 'NAVIGATiON',
  TRACKING = 'TRACKING',
}

export enum CardTypes {
  BANNER = 'BANNER',
  CAROUSEL = 'CAROUSEL',
}
export interface RequestObj {
  url: string;
  method: string;
  queryParams: any;
  body: any;
}
export interface PageProps {
  pageTitle: string;
  children?: React.ReactNode;
  style?: object;
}

export interface Widget {
  loadType: string;
  dataRequestObject?: RequestObj;
  type: string;
  hash: string;
  height: number;
  width: number;
  orientation?: string;
}

export interface LayoutEngineProps {
  actionHandler: (type: ActionType, data: any) => void;
  requestObject?: RequestObj;
  layoutRequestObject?: RequestObj;
}
