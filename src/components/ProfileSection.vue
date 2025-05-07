<template>
  <div class="max-w-4xl mx-auto">
    <!-- Container -->
    <div class="bg-white p-6 rounded shadow h-auto space-y-10">

      <!-- Top Section: Name/Designation and Image -->
      <div class="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-6 md:space-y-0">

        <!-- Left: Name and Designation -->
        <div class="md:w-2/3 space-y-2 mt-12 text-left">
          <h1 class="text-3xl font-bold text-red-600">Sharukh Khan</h1>
          <h2 class="text-lg text-gray-500">Actor Producer</h2>
          <div class="w-1/2 h-[2px] bg-gray-300 mt-2"></div>
        </div>

        <!-- Right: Profile Image -->
        <div class="md:w-1/3 flex justify-center md:justify-end">
          <img
            src="../assets/images/Gallery1.jpg"
            alt="Profile"
            class="w-full sm:w-[240px] h-[180px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      <!-- Paragraph Below Both -->
      <div>
        <p class="text-gray-600 text-base leading-relaxed text-justify indent-8">
          John is a passionate web developer with 5 years of experience in building
          modern and responsive web applications. He loves working with Vue, Laravel,
          and exploring new tech. <br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi officiis rem earum saepe inventore laboriosam reiciendis eligendi? Inventore ipsa rem incidunt consectetur magnam tempora necessitatibus. Dolores, minima sint? Deserunt, accusantium. <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae fuga omnis eos repellat corrupti consequatur iure odio eveniet voluptatem aperiam necessitatibus nulla error magni atque delectus nihil debitis quas!
        </p>
      </div>

      <!-- Gallery Section -->
      <section>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4 mt-8">Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          <img
            src="../assets/images/Gallery1.jpg"
            alt="Gallery 1"
            class="w-full h-[220px] object-cover rounded shadow"
          />
          <img
            src="../assets/images/Gallery2.webp"
            alt="Gallery 2"
            class="w-full h-[220px] object-cover rounded shadow"
          />
          <img
            src="../assets/images/Gallery3.webp"
            alt="Gallery 3"
            class="w-full h-[220px] object-cover rounded shadow"
          />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Add some extra styling if needed */
</style>
