export interface Page {
  id: number;
  name?: string;
  pageTitle: string;
  parentId: number;
  roleId: number;
  visibility: boolean;
  level: number;
  type?: string;
  path:string;
  urlName?: string;
  ord: number;
  activateFirst: boolean;
  showFilterPanel: boolean;
  showThirdLevel:boolean;
  menu: Array<Page>;
  roles?: Array<number>;
}
