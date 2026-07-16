// public variables
export const DB_URL = "https://find-job-server-bd0s.onrender.com/jobs";
export const ITEM_PER_PAGE = 10;
// get document items
export const cardsList = document.querySelector(".cards-list");
export const searchForm = document.querySelector(".search-form");
export const searchInput = document.querySelector(".search-input");
export const badges = document.querySelector(".badges");
export const loaders = document.querySelectorAll(".loader-js");
export const resultBadge = document.querySelector(".result-badge");
export const informationStartText = document.querySelector(
  ".information-start-text",
);
export const exitJobInformation = document.querySelector(
  ".exit-job-information",
);
export const showJobInformation = document.querySelector(
  ".show-job-information",
);
export const jobInformationBox = document.querySelector(".job-information-box");
export const jobInformation = document.querySelector(".job-information");
export const sortingBtns = document.querySelector(".sorting-btns");
export const sortingBtnRecent = document.querySelector(".sorting-btn--recent");
export const sortingBtnRelevant = document.querySelector(
  ".sorting-btn--relevant",
);
export const paginationButtonBox = document.querySelector(
  ".pagination-button-box",
);
export const paginationButtonPrev = document.querySelector(
  ".pagination-button--prev",
);
export const paginationButtonNext = document.querySelector(
  ".pagination-button--next",
);
export const paginationNumberPrev = document.querySelector(
  ".pagination-number--prev",
);
export const paginationNumberNext = document.querySelector(
  ".pagination-number--next",
);
export const numberPage = document.querySelector(".number-page");
export const bookmarksBtn = document.querySelector(".bookmarks-btn");
export const bookmarksBox = document.querySelector(".bookmarks-box");
export const bookmarkStartText = document.querySelector(".bookmark-start-text");
export const bookmarks = document.querySelector(".bookmarks");
// STATE
export const state = {
  jobsShow: [],
  allJobs: [],
  currentPage: 1,
  activeItemId: null,
};
