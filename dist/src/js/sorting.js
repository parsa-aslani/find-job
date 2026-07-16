import setJobs from "../utils/setJobs.js";
import {
  sortingBtns,
  state,
  sortingBtnRecent,
  sortingBtnRelevant,
} from "./common.js";
const changeSortingBtnFocused = () => {
  sortingBtnRecent.classList.toggle("btn-clicked");
  sortingBtnRecent.classList.toggle("btn-not-clicked");
  sortingBtnRelevant.classList.toggle("btn-clicked");
  sortingBtnRelevant.classList.toggle("btn-not-clicked");
};
const handleClickBtns = (e) => {
  const checkStateLength = state.jobsShow.length > 0;
  const clickedButtonEL = e.target.closest(".sorting-btn");
  if (!clickedButtonEL) return;
  const recent = clickedButtonEL.classList.contains("sorting-btn--recent");
  const copyStateJobsShow = [...state.jobsShow];
  if (recent) {
    state.jobsShow.sort((a, b) => a.daysAgo - b.daysAgo);
    checkStateLength && setJobs();
    if (sortingBtnRecent.classList.contains("btn-not-clicked")) {
      changeSortingBtnFocused();
    }
  } else {
    state.jobsShow.sort((a, b) => b.relevanceScore - a.relevanceScore);
    checkStateLength && setJobs();
    if (sortingBtnRelevant.classList.contains("btn-not-clicked")) {
      changeSortingBtnFocused();
    }
  }
};
sortingBtns.addEventListener("click", handleClickBtns);
export default changeSortingBtnFocused;
