import setJobs from "../utils/setJobs.js";
import {
  state,
  paginationButtonBox,
  paginationButtonNext,
  paginationButtonPrev,
  paginationNumberNext,
  paginationNumberPrev,
  ITEM_PER_PAGE,
} from "./common.js";
import paginationButtons from "./paginationButtons.js";
const handlePagination = (e) => {
  const countPages = Math.ceil(state.jobsShow.length / ITEM_PER_PAGE);
  const currentPage = state.currentPage;
  const clickedButton = e.target.closest(".pagination-button");
  if (!clickedButton) return;
  const isClickNext = clickedButton.classList.contains(
    "pagination-button--next",
  )
    ? true
    : false;
  if (!clickedButton.classList.contains("opacity-40")) {
    isClickNext
      ? currentPage !== countPages && state.currentPage++
      : currentPage > 1 && state.currentPage--;
    setJobs();
    paginationButtons(countPages);
  }
};
paginationButtonBox.addEventListener("click", handlePagination);
