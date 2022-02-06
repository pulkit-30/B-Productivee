import axios from "axios";
import config from "../config.json";
async function getData(params) {
  const data = await axios.get(
    `https://firestore.googleapis.com/v1/projects/${config.PROJECT_ID}/databases/(default)/documents/users/${params.id}`
  );
  return data;
}
export { getData };
