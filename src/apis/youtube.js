import axios from "axios";

const KEY = "AIzaSyDmjZfr1IC73oDFgOjExAi75FEX3mxNi7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
