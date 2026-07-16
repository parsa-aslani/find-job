const checkBookmarks = (job) => {
  const getBookmarkedJobs = localStorage.getItem("bookmarks");
  if (getBookmarkedJobs) {
    const bookmarkedJobs = JSON.parse(getBookmarkedJobs);
    const checkJobInBookmarks = bookmarkedJobs.some(
      (jobId) => jobId === job.id,
    );
    if (checkJobInBookmarks) return true;
  } else {
    return false;
  }
};
export default checkBookmarks;
