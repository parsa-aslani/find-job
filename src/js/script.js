// imports
import "./sorting.js";
import "./bookmarks.js";
import "./pagination.js";
import { JobCardPlacement } from "../templates/jobcardtemplate.js";
import { JobInformationPlacement } from "../templates/jobinformationtemplate.js";
import { off_on_jobCardLoader } from "./loader.js";
import { addNewBadge_error } from "./toasts.js";
import getData from "../utils/getData.js";
import setJobs from "../utils/setJobs.js";
import {
  cardsList,
  exitJobInformation,
  informationStartText,
  jobInformation,
  jobInformationBox,
  searchForm,
  searchInput,
  showJobInformation,
  sortingBtnRecent,
  state,
  DB_URL,
  bookmarks,
} from "./common.js";
import paginationButtons from "./paginationButtons.js";
import changeSortingBtnFocused from "./sorting.js";
import handleGetItemIndex from "./getItemIndex.js";
// slide cards
cardsList.addEventListener("wheel", scrollCard);
function scrollCard(evt) {
  evt.preventDefault();
  cardsList.scrollTop += evt.deltaY * 2;
  cardsList.style.scrollBehavior += "smooth";
}
// exit job information
const handleExitInformation = () => {
  jobInformationBox.classList.add("hidden");
};
exitJobInformation.addEventListener("click", handleExitInformation);
// show job information
const handleShowInformation = () => {
  jobInformationBox.classList.remove("hidden");
};
showJobInformation.addEventListener("click", handleShowInformation);
// search input
const handleSubmitSearch = async (e) => {
  e.preventDefault();
  if (sortingBtnRecent.classList.contains("btn-clicked")) {
    changeSortingBtnFocused();
  }
  const inputValue = searchInput.value.toLowerCase();
  const forbiddenPattern = /[ا-ی]/;
  const checkPattern = forbiddenPattern.test(inputValue);
  if (checkPattern) {
    addNewBadge_error("please dont type persian");
    return;
  }
  try {
    off_on_jobCardLoader(false, 0);
    const filteredData = [];
    const data = await getData(DB_URL, "get jobs is not ok");
    data.forEach((job) => {
      if (
        job.title.toLowerCase().includes(inputValue) ||
        job.qualifications.some(
          (qualification) => qualification.toLowerCase() == inputValue,
        )
      ) {
        filteredData.push(job);
      }
    });
    state.jobsShow = filteredData;
    state.currentPage = 1;
    state.activeItemId = null;
    paginationButtons();
    handleExitInformation();
    if (filteredData.length > 0) {
      setJobs();
      searchInput.blur();
    } else {
      cardsList.innerHTML = `
      <p class="mt-7 text-center text-lg font-semibold text-gray-500">
      no jobs found
      </p>`;
    }
  } catch (err) {
    console.log(err);
  } finally {
    off_on_jobCardLoader(true, 0);
  }
};
searchForm.addEventListener("submit", handleSubmitSearch);
searchForm.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    handleSubmitSearch();
  }
});
// remove information start text
const removeInformationStartText = () => {
  informationStartText.classList.remove("flex");
  informationStartText.classList.add("hidden");
};
//  set job information html
const setJobInformationHTML = async (jobId, changeUrl) => {
  try {
    off_on_jobCardLoader(false, 1);
    jobInformation.innerHTML = "";
    const data = await getData(`${DB_URL}/${jobId}`, "get job is not ok");
    if (changeUrl) {
      history.pushState(null, "", `?itemId=${data.id}`);
    }
    const jobCardTemplate = JobInformationPlacement(data);
    jobInformation.insertAdjacentHTML("beforeend", jobCardTemplate);
  } catch (err) {
    console.log(err);
  } finally {
    off_on_jobCardLoader(true, 1);
  }
};
// set job information with query
const handleSetQueryJobInformation = async () => {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("itemId");
  const data = await getData(DB_URL, "get jobs is not ok");
  state.allJobs = data;
  if (itemId) {
    handleShowInformation();
    removeInformationStartText();
    setJobInformationHTML(itemId, false);
    handleGetItemIndex(itemId, data);
  } else {
    try {
      state.jobsShow = data;
      state.activeItemId = null;
      setJobs();
    } catch (err) {
      console.log(err);
    }
  }
  off_on_jobCardLoader(true, 0);
};
window.addEventListener("DOMContentLoaded", handleSetQueryJobInformation);
window.addEventListener("popstate", handleSetQueryJobInformation);
// get job information
const handleGetInformation = (e) => {
  e.preventDefault();
  const clickedJob = e.target.closest(".job-card");
  if (!clickedJob) return;
  document
    .querySelector(".job-card-active")
    ?.classList.remove("job-card-active");
  clickedJob.classList.add("job-card-active");
  if (window.innerWidth < 640) {
    handleShowInformation();
  }
  removeInformationStartText();
  const jobId = clickedJob.getAttribute("href");
  state.activeItemId = jobId;
  setJobInformationHTML(jobId, true);
};
cardsList.addEventListener("click", handleGetInformation);
bookmarks.addEventListener("click", handleGetInformation);
