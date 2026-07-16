import { loaders, cardsList } from "./common.js";
export const off_on_jobCardLoader = (off, indexOfLoader) => {
  const checkIndex = indexOfLoader === 1;
  if (off) {
    loaders[indexOfLoader].classList.add("hidden");
    checkIndex && loaders[indexOfLoader].classList.remove("flex");
    checkIndex || cardsList.classList.remove("hidden");
    checkIndex || cardsList.classList.add("flex");
  } else {
    loaders[indexOfLoader].classList.remove("hidden");
    checkIndex && loaders[indexOfLoader].classList.add("flex");
    checkIndex || cardsList.classList.add("hidden");
    checkIndex || cardsList.classList.remove("flex");
  }
};
