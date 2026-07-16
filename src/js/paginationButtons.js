import {
  numberPage,
  paginationButtonNext,
  paginationButtonPrev,
  paginationNumberNext,
  paginationNumberPrev,
  state,
} from "./common.js";

const paginationButtons = (countPages) => {
  paginationNumberNext.textContent = state.currentPage + 1;
  numberPage.textContent = `page ${state.currentPage}`;
  paginationNumberPrev.textContent = state.currentPage - 1;
  if (
    state.currentPage !== 1 &&
    paginationButtonPrev.classList.contains("opacity-40")
  ) {
    paginationButtonPrev.classList.remove("opacity-40");
    paginationButtonPrev.disabled = false;
  } else if (state.currentPage === 1) {
    paginationButtonPrev.classList.add("opacity-40");
    paginationButtonPrev.disabled = true;
  }
  if (
    state.currentPage !== countPages &&
    paginationButtonNext.classList.contains("opacity-40")
  ) {
    paginationButtonNext.classList.remove("opacity-40");
    paginationButtonNext.disabled = false;
  } else if (state.currentPage === countPages) {
    paginationButtonNext.classList.add("opacity-40");
    paginationButtonNext.disabled = true;
  }
  paginationButtonNext.blur();
  paginationButtonPrev.blur();
};
export default paginationButtons;
