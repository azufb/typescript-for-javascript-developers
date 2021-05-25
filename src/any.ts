import axios from "axios";
export {};

let url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url) // 引数にURLを渡している。
.then(function(response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  data = [
    {
      id: 1,
      title: "title",
      description: "description"
    }
  ]
  console.log(data);
});