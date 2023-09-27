import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080/apiLogin",
    headers: {
      "username": "application/json"
    }
  });