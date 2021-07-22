import axios from "axios";

export function post(data: any) {
  axios.post("/test", { body: JSON.stringify(data) });
}
