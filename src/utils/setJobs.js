import {
  state,
  resultBadge,
  cardsList,
  paginationButtonNext,
  ITEM_PER_PAGE,
  bookmarkStartText,
  bookmarks,
} from "../js/common.js";
import { JobCardPlacement } from "../templates/jobcardtemplate.js";
const setJobs = (whichJobs = "search") => {
  const getBookmarkedJobs = localStorage.getItem("bookmarks");
  let bookmarkedJobs = [];
  if (getBookmarkedJobs) {
    bookmarkedJobs = JSON.parse(getBookmarkedJobs);
    if (bookmarkedJobs.length > 0) {
      bookmarkStartText.classList.add("hidden");
    } else {
      bookmarkStartText.classList.remove("hidden");
    }
  }

  const jobsShow = state.jobsShow;
  const jobsEl = whichJobs === "search" ? cardsList : bookmarks;
  if (jobsShow.length <= ITEM_PER_PAGE) {
    paginationButtonNext.classList.add("opacity-40");
    paginationButtonNext.disabled = true;
  }
  resultBadge.textContent = `${jobsShow.length} result`;
  const countPages = Math.ceil(jobsShow.length / ITEM_PER_PAGE);
  jobsEl.innerHTML = "";
  const jobsGoToShow =
    whichJobs === "search"
      ? state.currentPage === countPages
        ? jobsShow.slice((countPages - 1) * ITEM_PER_PAGE)
        : jobsShow.slice(
            state.currentPage * ITEM_PER_PAGE - ITEM_PER_PAGE,
            state.currentPage * ITEM_PER_PAGE,
          )
      : state.allJobs.filter((job) =>
          bookmarkedJobs.some((jobId) => job.id === jobId),
        );
  jobsGoToShow.forEach((job) => {
    const jobCardTemplate = JobCardPlacement(job);
    jobsEl.insertAdjacentHTML("beforeend", jobCardTemplate);
  });
};
export default setJobs;
