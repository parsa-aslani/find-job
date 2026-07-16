import { addNewBadge_error } from "../js/toasts.js";
const getData = async (URL, errorText) => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(errorText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    addNewBadge_error(err);
  }
};
export default getData;
