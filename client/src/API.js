import axios from "axios";

export default axios.create({
  baseURL: "http://graph.facebook.com",
  responseType: "json"
});