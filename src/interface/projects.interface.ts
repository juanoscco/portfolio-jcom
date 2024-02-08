export interface Props {
  title?: string;
  description?: string;
  date?: string | any;
  destacated?: boolean;
  type?: string;
  link?: string;
  skills?: string[] | any;
}


export interface Data {
  data: Props
}