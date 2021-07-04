export interface IPostDetail {
  imageUrl: string,
  title: string,
  body: string,
  author: {
    id: number,
    name: string | Promise<any>,
  },
}
