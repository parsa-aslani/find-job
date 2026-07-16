// imports
import { badges } from "./common.js";
// error toast
export const addNewBadge_error = (text = "something went wrong") => {
  if (badges.childElementCount < 7) {
    const div = document.createElement("div");
    div.className =
      "error-badge flex w-60 items-center justify-center rounded-md border-2 border-red-300 bg-red-400 px-4 py-3 text-white shadow-2xl";
    div.innerHTML = `  <i class="fas fa-sad-tear mr-2 text-lg text-white"></i>
  <p class="text-gray-200">${text}</p>`;
    badges.appendChild(div);
    setTimeout(() => {
      div.classList.add("cardscaledown");
      setTimeout(() => {
        badges.removeChild(div);
      }, 380);
    }, 1000);
  }
};
