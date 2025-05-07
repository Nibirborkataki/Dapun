<template>
    <aside class="w-full md:w-[380px]">
      <!-- Artist Profile -->
      <section class="bg-white p-4 shadow-md rounded-md h-[340px] overflow-y-auto">
  <h2 class="text-lg font-semibold mb-3 text-[#D84040]">
    Artist Profile / <span class="text-md">শিল্পীৰ পৰিচয়</span> 
  </h2>
  <ul class="space-y-6">
    <li v-for="artist in artists" :key="artist.id" class="flex items-center space-x-4">
      <img :src="artist.image" :alt="artist.name" class="w-16 h-16 rounded-md object-cover">
      <div>
        <h3 class="text-gray-700 font-medium">{{ artist.name }}</h3>
        <p class="text-gray-600 text-sm">
          {{ artist.description }}
        </p>
        <button class="mt-1 text-blue-500 hover:underline text-sm font-medium"><router-link to="/profile">Read More</router-link></button>
      </div>
    </li>
  </ul>
</section>

  <br>
      <!-- Advertisement -->
      <section class="bg-white p-4 shadow-md rounded-md">
  <aside class="bg-white p-4 shadow-md rounded-md max-h-[720px] overflow-y-auto scrollbar-hide">
    <h2 class="text-xl font-semibold mb-4 text-[#D84040]">
      Advertisements/ <span class="text-1XL">বিজ্ঞাপন</span>
    </h2>
    <div class="space-y-6">

      <!-- Publish Ad -->
      <div>
        <h3 class="text-lg font-semibold mb-2 text-gray-800">
          Publish Your Advertisement/ 
          <span class="text-sm">আপোনাৰ বিজ্ঞাপন প্ৰকাশ কৰক</span>
        </h3>
        <div class="flex justify-center">
          <a href="#">
            <img src="../assets/images/publish.jpg" alt="Publish Ad" class="w-full max-w-[300px] h-auto rounded-md">
          </a>
        </div>
        <p class="text-gray-600 text-sm mt-2 text-center">
          Want to showcase your film or event? Publish your advertisement with us and reach a wider audience.
        </p>
        <div class="flex justify-center mt-2">
          <button id="openModalBtn" class="bg-[#FFE9A0] text-gray-800 px-4 py-1 hover:bg-[#FFD580] transition rounded">
            Publish
          </button>
        </div>
      </div>

      <!-- Cinema Ad -->
      <div>
        <h3 class="text-lg font-semibold mb-2 text-gray-800">
          Cinema/ <span class="text-sm">চলচ্চিত্র</span>
        </h3>
        <div class="flex justify-center">
          <a href="#">
            <img src="../assets/images/poster.jpg" alt="Cinema Ad" class="w-[200px] h-[200px] object-cover rounded">
          </a>
        </div>
        <p class="text-gray-600 text-sm mt-2 text-center">
          <span class="font-medium">Film:</span> Nalir Kotha<br>
          <span class="font-medium">Release Date:</span> March 20, 2025
        </p>
        <div class="flex justify-center">
          <a href="#" class="text-blue-500 hover:underline text-sm font-medium mt-2">Know More</a>
        </div>
      </div>
      <hr>

      <!-- Theater Ad -->
      <div>
        <h3 class="text-lg font-semibold mb-2 text-gray-800">
          Theater/ <span class="text-sm">থিয়েটাৰ</span>
        </h3>
        <div class="flex justify-center">
          <a href="#">
            <img src="../assets/images/Theatre.jpg" alt="Theater Ad" class="w-full max-w-[300px] h-auto rounded">
          </a>
        </div>
        <p class="text-gray-600 text-sm mt-2 text-center">
          <span class="font-medium">Film:</span> The Grand Adventure<br>
          <span class="font-medium">Release Date:</span> March 20, 2025
        </p>
        <div class="flex justify-center">
          <a href="Theatre.html" class="text-blue-500 hover:underline text-sm font-medium mt-2">Know More</a>
        </div>
      </div>
      <hr>

      <!-- Competition Ad -->
      <div>
        <h3 class="text-lg font-semibold mb-2 text-gray-800">
          Art Competition/ <span class="text-sm">কলা প্ৰতিযোগিতা</span>
        </h3>
        <div class="flex justify-center">
          <a href="#">
            <img src="../assets/images/art.jpg" alt="Competition Ad" class="w-full max-w-[300px] h-auto rounded-md">
          </a>
        </div>
        <p class="text-gray-600 text-sm mt-2 text-center">
          <span class="font-medium">Talent Hunt:</span> Art Competition<br>
          <span class="font-medium">Date:</span> March 20, 2025
        </p>
        <div class="flex justify-center">
          <a href="#" class="text-blue-500 hover:underline text-sm font-medium mt-2">Know More</a>
        </div>
      </div>

    </div>
  </aside>
</section>
  </aside>
  </template>

  <script setup>
  const artists = [
  {
    id: 1,
    name: "Sharukh Khan",
    description: "Legendary Bollywood actor",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAMgA4AMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEG/9oACAEBAAAAAOaDIBFCnsUuKlV08AAA1NBkDsa1Z8VqiSZ2gsAANDQmdnxNbIsLr8ZYYTrpAANG/M7Mj5xVukk62zN5TiABo3597LtDzVhiFc72TevmgADSvy72XPPZ7Y8l1vEy5adWAA070u9lDDzWMsXrFjlHKRK8iIAad6XeyjgUO6GpYnIhmY/LD6wAaV6Z3sMCm7XtPnLsauEnt6oAGhfYR4vEpXtRtuYKMTLL6wAv32i0ryqOk/luyUIW4YXbqgAu6LSK4Zedp04noDzrLW75p0YgBb0ndjDqclqEnp2ecjf1aScwACzpvIRl1FWXJaM0rs9MjPAAdq2haeySrtlXbFhMGrzKkAAZsWhaSOXO49M2jSHm2NUADNmz1SiXcSxd4OfFSMScogAzYtCl9lzCq62kNmqm7y127TiAM2LQtUkYdY1b1tkKrm+eTbnW4BPZtdUuvhrXLVk6Y6yZ2ZNongM2bQqrkIg27Ns5NsyXm50uqbNQzZtdqYdfsdsRdk+UuLyKpBrHxqz2n0MpPOG9BF6LZsFYEIuLLZxpa2cqtyPHbXIvspYyWPmRYWWkinKPEqlye9ObGrnNfmITjYaEj//EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/9oACgICEAMQAAAAycmy0i88dwTATAAMag3m0OaExNFSABhUHRNCYwTaE0ABhUHRNzNxrFsJ1xaAAwqDrzuctsdm3I7xqQAOeoO/C45+qiaEyW4aAOasn1xqstaIsGpd5VIBz1m91aV560BJcVm5YGFZPebGRrNgK87zAA56xfStZCNM9QC52wFLDmrGuyNFN5aqkMuNucAl89arRBnrGksKNcKik0GdWk0RpnqMKnXnY0Jn/8QAMhAAAgIBAwIEBgEDBAMAAAAAAQIAAxESITEEEBMgQVEFIjAyYXGBFFJiIzM0gpGh4f/aAAgBAQABPwDp+BF7ZM3mTCTGfEFmTFbMJ25niEHBjWL7zORmE/NtHrV+cxqWHGTCCOR9Pp22imapmZ7NLBADqgYKPmOJ4ufthOk6tRjOCYbSdsmeJ+YrloCp31mWILBjYx6nTkfSo4inuOxjLLj4SF4XNx+YkNK2auNczbGGzJMLv+hE0+pMAUjmaccZP84jK+cg7/uKXbIbf3EsQDccH6NHAi9xB2bABJOAJ1fWG9sKMIIjcZGZ9ykD/wCiOTvntmAxSPVolhmtcfM0Qodw0Khgdsxhj6FHAi9xB2665K6iC25m2ZWIXKHB/gx21EmHtvAYGYnmBWI+6IXQ5gZ1xYnEsIcBx/I+hTwIvcdiZ8SYm/EAzNyIWYjDQDMCZnhmL0zN6Q9M8ZChiuR6wsp4aUMGIUkj8yyvTko2V9voUcRe47NPiJyyCCAwKHlXSlovRLE6VAOItSj0jUqfSX9Kp3xOoo0AGKvy+mIvymVMxVwW+7AEYEEg+/npi+Vp8RZSyYgg5lFeZWMQdhDCMzrUykAI24m4lZ3XJ2ly/KG89PEXvmZjGdcio433MSIuWEpXSAIsWY2gh7XJqUiWDQSDCwisPeKS1LEsD56eInfMLQtOvYG79CAn3nSjLQMF5MR1MUj3gIxAwEa1B6ieMpO0JDTrl0nM1QAGV4Wk+589HAidzGJhJnW41Dt0XDSxqkb5mLH1VfSf1dAP/HJ/7yv4hQ2FWha2923WU9VY9jVmpFI5GJd1V1b6fkAxksV4Ef4qeForP5cRPidoGAlX8LOn6qq4hSAjHgjgzr0zSx9oyFX0llP5HE0aIj5oI/y89HAiQdjCJpnxCogo0C/KTidI2a8s5yinSIYQMQacETokBVbd9bKAZ8RT/RJn8RdI9Ii4IIEtxapDKOItGu5kBlvSmoJluYQFGB56OIkHY97qBcu/oDiU9O4L1upnTIa9RYS6vQ7LNMRGdgqzp1CIoHAEuQMhHvLqTU5Vh+jFUSirWR/b6zGYnRojGw85nXnHhr9DpzEghhMzB2u2ZD+CJkk4MwrjSyhhP6On2f8A8xdNOQFxmUupWPcq/k+whxaCdOPwYtNXPhrBgDAAizTljOvGbT+AB9DpzK4IY0I3gmZe6KnzmN6QRdxHXUYlBHBMrUAfnswwYDviAw9V06ltTjK8zx/Hdz6MZYuliPP00rg7GHntZ9p5/iNT1Fh+z19TLLnpZK3wx2yYPsz+ZwB+Y1yo2k8xL8wXE8D/ANTx2HKNAwcAiEYOYGwc+0t+a5j7kmK+jBjtqwfP00rghjeTAnxFcXZ/AnTW668E74wZWwYAHkR6hnOImF4MVgecxR7xgBGsEbJSzH9pjEa4yM41DeEfKvn6aVwQxvIzKi6nYATq+oS5m0DaUuy2DHrK3wwMG6wIDFrmJccCbucDiMmKbAOdBmTqlTlSIVWxcgYMZSp83TSuCGHsJf1NfTj3b2l99l7Zc/odgcEGexlFu2kxGAnjLDcAI7GwjPERcCHidb0/hvrXhokRiIcMMGEEHy9LK4IY0M6q41IMfc0c6iT2MVGY7CVDKARYHb3mSfWCIuYBDOs3qaCAwGNg+XpZXFhhl93hKPc8S657WGo8Q8z0lPTlt2gqCjiV7HEZN8xVyIEMWuBQB2adWcI0AghYCFmc7SunBDFjHUZ279LK4IZfctK/5HgR7Wd8sY/3d60ARf1HEXZxCAVlYmmAY7tOsbJVYIzaRAM7mIJqJOFG8SlOWyTLaCN1hE6WVxnStdTtgSzrmP2LgS21nYsxjbMDGGRFhBOw9YuyL+hGmPmleGWHUh2nijETJhglhCgk+kdy7s3uYTiAFjBMk7CVroH5gMDER0R/TBnSw2rSmo/wI9j2MWc7wmH1E5EzAYjaGDEZxM5UHHp2VMkmVAqcRk1CaMGJApMxOvuH+2p9fmmZiKvvN2OFlaBf3MzPbM6YgDJj2F2yZns2zQ5BnM0wHj9xTqAMC5gSBYI+5gAAnpHYKCTGYEkj3M9YNtzNRY4ErGmZ75mZ/8QAHxEAAgIDAQEBAQEAAAAAAAAAAAECERAgMQMhMBJB/9oACAECAQE/AGxSERRNJIsv8JkeiE6HK/ymR6LSy95keiP8xJ5T2mQ6RQ1UR6ULX0IP6ebJtOIyMFRNVwghpC+C09OkekJH9EuimiUrFKhyvC5p6dEiGGtUr19O4hmSovMStPUXSAlieiYhrPr0XTzXzEnWq6s1iauVEPGK+vM9EiKwsxSu8PEvy//EAB8RAAICAgIDAQAAAAAAAAAAAAABAhEQIAMhEjAxQf/aAAgBAwEBPwDMiDbZRSxW7w0RSXreVimeLGq2Q8foiMSsNJrZDG6E7kR7Z8LLEySp6oZNM44tSF0OTZDtkvoiSboarRYaKIq0eDIxocbFA/STtvRYeIuizs7LJOh6LDzF2tJjeiw8w0krWqw8QVlVpL49UOWePWbv08ejHr//2Q=="
  },
  {
    id: 2,
    name: "Sharukh Khan",
    description: "Famous movie producer",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    name: "Sharukh Khan",
    description: "Philanthropist and star",
    image: "data:image/jpeg;base64,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"
  }
];
</script>
  