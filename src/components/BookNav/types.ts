export type GBBookNavProps = {
  title: "Discover new book" | "Currently Reading" | "Reviews of The Days";
  link: string;
  books?: any;
  selected?: string;
}

export type GBBookNavItemProps = {
  item: any;
  selected?: string;
}
