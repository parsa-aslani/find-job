import setJobs from "../utils/setJobs.js";
import {
  bookmarksBox,
  bookmarksBtn,
  jobInformationBox,
  state,
} from "./common.js";
const handleMouseEnter = () => {
  bookmarksBox.classList.remove("hidden");
  setJobs("bookmarks");
};
const handleMouseLeave = () => {
  bookmarksBox.classList.add("hidden");
};
const activeBookmark = (e) => {
  e.target.parentElement.classList.add("text-sky-600");
};
const handleClickBookmark = (e) => {
  if (e.target.getAttribute("fill") !== "currentColor") return;
  const getBookmarkedJobs = localStorage.getItem("bookmarks");
  if (getBookmarkedJobs) {
    const bookmarkedJobs = JSON.parse(getBookmarkedJobs);
    console.log(bookmarkedJobs);

    const checkClickedBookmark = bookmarkedJobs.some(
      (jobId) => jobId === state.activeItemId,
    );
    const copyBookmarkedJobs = [...bookmarkedJobs];
    if (checkClickedBookmark) {
      const filteredBookmarks = copyBookmarkedJobs.filter(
        (jobId) => jobId !== state.activeItemId,
      );
      localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks));
      e.target.parentElement.classList.remove("text-sky-600");
    } else {
      copyBookmarkedJobs.push(state.activeItemId);
      localStorage.setItem("bookmarks", JSON.stringify(copyBookmarkedJobs));
      activeBookmark(e);
    }
    setJobs();
  } else {
    localStorage.setItem("bookmarks", JSON.stringify([state.activeItemId]));
    activeBookmark(e);
  }
};
jobInformationBox.addEventListener("click", handleClickBookmark);
bookmarksBtn.addEventListener("mouseenter", handleMouseEnter);
bookmarksBox.addEventListener("mouseleave", handleMouseLeave);
