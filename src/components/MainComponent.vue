<template>
  <main class="w-full md:col-span-6 space-y-6 px-6 md:px-0">
    <!-- Shared white container for all issues -->
    <section class="bg-white p-6 shadow-md rounded-md space-y-6">
      <div v-for="issue in paginatedIssues" :key="issue.id">
        <img
          :src="issue.image"
          :alt="issue.title"
          class="w-full h-48 object-contain rounded-md mb-6"
        />

        <h2 class="text-lg font-semibold mb-2 text-gray-800">
          {{ issue.title }}
        </h2>
        <p class="text-gray-600 text-sm mb-3">{{ issue.description }}</p>
        <a
          :href="issue.downloadLink"
          class="inline-block bg-[#FFE9A0] text-gray-900 px-4 py-2 rounded hover:bg-[#FFD580] transition"
          download
        >
          Download PDF
        </a>
        <hr
          class="my-6 border-gray-200"
          v-if="issue !== paginatedIssues[paginatedIssues.length - 1]"
        />
      </div>
    </section>

    <div v-if="totalPages > 1" class="flex justify-center mt-6 space-x-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Prev
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-3 py-1 rounded text-sm',
          currentPage === page
            ? 'bg-[#D84040] text-white'
            : 'bg-gray-200 hover:bg-gray-300',
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </main>
</template>


<script setup>
import { ref, computed } from "vue";
import MayImg from "../assets/images/May.png";
import AprilImg from "../assets/images/April.png";
import MarchImg from "../assets/images/March.png";
import FebruaryImg from "../assets/images/February.png";
import JanuaryImg from "../assets/images/January.png";


const newspaperIssues = [
  {
    id: 1,
    title: "May Edition",
    description: "This month's edition covers all major events...",
    image: MayImg,
    downloadLink: '/pdfs/may.pdf',
  },
  {
    id: 2,
    title: "April Edition",
    description: "In this issue, read about...",
    image: AprilImg,
    downloadLink: '/pdfs/april.pdf',
  },
  {
    id: 3,
    title: "March Edition",
    description: "Highlights from the month of February...",
    image: MarchImg,
    downloadLink: '/pdfs/march.pdf',
  },
  {
    id: 4,
    title: "February Edition",
    description: "New year insights and more...",
    image: FebruaryImg,
    downloadLink: '/pdfs/february.pdf',
  },
  {
    id: 5,
    title: "January Edition",
    description: "New year insights and more...",
    image: JanuaryImg,
    downloadLink: '/pdfs/january.pdf',
  },
];

const currentPage = ref(1);
const itemsPerPage = 3;

const totalPages = computed(() =>
  Math.ceil(newspaperIssues.length / itemsPerPage)
);

const paginatedIssues = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return newspaperIssues.slice(start, start + itemsPerPage);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>
