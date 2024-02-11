export interface Props {
  title?: string | any;
  slug?: string | any;
  description?: string;
  date?: string | any;
  destacated?: boolean;
  type?: string;
  link?: string;
  browser?: string;
  skills?: string[] | any;
}


export interface Data {
  data: Props
}