export interface MenuItem {
  title: string;
  subTitle?: string;
  route?: string;
  icon?: JSX.Element;
  children?: MenuItem[];
}
