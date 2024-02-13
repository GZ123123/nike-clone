export interface ISubMenuItem {
  id: number;
  name: string;
  icon?: string;
  items: IMenuItem[];
}

export type ISubMenu = ISubMenuItem[];

export interface IMenuItem {
  id: number;
  name: string;
  url?: string;
  icon?: string;
  subMenu?: ISubMenu;
}

export type IMenu = IMenuItem[];
