export interface ISelectedPostState {
  postData: {
    id: number,
    title: string,
    body: string,
  }
  author: {
    id: number,
    name: string,
  }
  comments: [{
    name: string,
    email: string,
    body: string,
  }] | [],
}
