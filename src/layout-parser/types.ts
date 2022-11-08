export enum ActionType {
  NAVIGATION = 'NAVIGATiON',
  TRACKING = 'TRACKING',
}
export interface RequestObj {
  url: string;
  method: string;
  queryParams: any;
  body: any;
}
export interface PageProps {
  pageTitle: string;
  actionHandler: (type: ActionType, data: any) => void;
  requestObject: RequestObj;
  layoutRequestObject: RequestObj;
}
