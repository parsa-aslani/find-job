import checkBookmarks from "../utils/checkBookmarks.js";

export const JobInformationPlacement = (job) => {
  const activeBookmark = checkBookmarks(job);
  const template = `
  <header
    class="job-information-header relative h-40 w-full rounded-tr-lg rounded-b-md shadow-md"
  >
    <div
      class="job-information-gradient absolute top-0 left-0 h-full w-full rounded-tr-lg rounded-b-md"
    ></div>
    <button
      class="absolute top-3 right-5 rounded-md bg-sky-600 px-4 py-1 text-sm font-semibold text-white shadow-md transition-all hover:bg-sky-500"
    >
      apply a
    </button>
  </header>
  <div class="job-information mx-auto -mt-13 flex w-[89%] flex-col justify-center">
    <div class="mx-auto flex items-start justify-center">
      <div class="z-30 mr-3">
        <div
          class="flex h-19 w-16 items-center justify-center rounded-md bg-gray-700 text-4xl font-bold text-gray-100 shadow-lg sm:h-17 sm:w-13 sm:text-2xl lg:h-18 lg:w-14 lg:text-3xl"
        >
          ${job.badgeLetters}
        </div>
        <div class="mt-2.5 flex justify-between">
          <p class="text-sm font-semibold text-gray-600">3d</p>
          <button class="bookmark">
          <i
            class="fa fa-bookmark text-gray-400 ${activeBookmark && "text-sky-600"}"
            aria-hidden="true"
          ></i>
          </button>
        </div>
      </div>
      <div class="z-30">
        <h2 class="text-2xl font-bold text-white sm:text-xl">
          ${job.title}
        </h2>
        <h4 class="text-sm font-semibold text-gray-200">
          ${job.company}
        </h4>
        <p class="mt-3 text-sm text-gray-700">
          ${job.description}
        </p>
        <ul
          class="mt-3 flex gap-x-8 text-sm font-semibold text-gray-500"
        >
          <li><i class="fas fa-clock mr-2"></i> ${job.duration}</li>
          <li><i class="fas fa-money-bill mr-2"></i> ${job.salary}</li>
          <li>
            <i class="fa fa-map mr-2" aria-hidden="true"></i> ${job.location}
        </li>
      </ul>
    </div>
  </div>
  <div class="mt-15">
    <div class="flex">
      <div class="mr-3 max-w-50 min-w-37">
        <h3 class="text-lg font-semibold text-gray-800">
          qualifications
        </h3>
        <p class="text-sm text-gray-600">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div
        class="flex flex-wrap items-center gap-3 *:flex *:items-center *:rounded-md *:bg-gray-300 *:px-3 *:py-1 *:text-sm *:text-gray-700"
      >
      ${job.qualifications.map((qualification) => `<p>${qualification}</p>`).join("")}
      </div>
    </div>
    <div class="mt-7 flex">
      <div class="mr-3 max-w-50 min-w-37">
        <h3 class="text-lg font-semibold text-gray-800">
          company reviews
        </h3>
        <p class="text-sm text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div>
      <ul
        class="flex flex-col gap-y-5 *:flex *:items-center *:rounded-md *:bg-gray-300 *:p-1.5 *:text-sm *:text-gray-700"
      >
      ${job.reviews
        .map(
          (review) => `        
        <li>
          <i class="fas fa-dot-circle mr-2"></i> Lorem ipsum dolor
          ${review}
        </li>`,
        )
        .join("")}
        </ul>
      </div>
    </div>
  </div>
  `;
  return template;
};
