import { state } from "./common.js";
import setJobs from "../utils/setJobs.js";
import paginationButtons from "./paginationButtons.js";

const handleGetItemIndex = async (itemId, data) => {
  const getItemIndex = data.findIndex((job) => job.id === itemId);
  if (getItemIndex >= 0) {
    console.log(getItemIndex);
    const itemPage = Math.ceil(getItemIndex / 10);
    state.currentPage = itemPage !== 0 ? itemPage : 1;
    state.activeItemId = itemId;
    state.jobsShow = data;
    paginationButtons();
    setJobs();
  }
};
export default handleGetItemIndex;
