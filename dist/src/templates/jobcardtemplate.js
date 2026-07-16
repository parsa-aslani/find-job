import { state } from "../js/common.js";
import checkBookmarks from "../utils/checkBookmarks.js";

export const JobCardPlacement = (job) => {
  const activeBookmark = checkBookmarks(job);
  const template = `
  <a
  class="flex job-card ${job.id === state.activeItemId && "job-card-active"} items-center justify-between rounded-md px-0.5 py-1 transition-all hover:bg-gray-200"
  href="${job.id}"
>
  <div class="flex">
    <div
      class="mr-2 flex badge-letters h-18 w-14 items-center justify-center rounded-md  text-2xl font-bold text-gray-100 shadow-md sm:h-15 sm:w-10 sm:text-lg lg:w-13 lg:text-2xl"
    >
    ${job.badgeLetters}
    </div>
    <div class="flex flex-col">
      <h4
        class="card-text lg:text-md max-w-[70vw] max-w-[75vw] text-lg font-semibold whitespace-nowrap text-gray-900 sm:max-w-30 sm:text-sm md:max-w-35 lg:max-w-43"
      >
        ${job.title}
      </h4>
      <p class="mb-0.5 text-sm text-gray-800">${job.company}</p>
      <ul
        class="features-ui mt-1 ml-2.5 flex gap-x-5 *:text-gray-600 md:text-3xl"
      >
        <li>${job.duration}</li>
        <li>${job.salary}</li>
        <li>${job.location}</li>
      </ul>
    </div>
  </div>
  <div class="flex flex-col">
    <i class="fa fa-bookmark text-gray-300 ${activeBookmark && "text-sky-500"}" aria-hidden="true"></i>
    <p class="mt-1 text-sm font-semibold text-gray-500">${job.daysAgo}d</p>
  </div>
</a>
  `;
  return template;
};
