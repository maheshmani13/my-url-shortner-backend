export interface UrlType {
  _id: string;
  url_string: string;
  original_url: string;
  clicks: {
    clickedAt: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}
