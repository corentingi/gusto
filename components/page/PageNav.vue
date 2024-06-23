<template>
  <header class="h-16">
    <nav class="fixed top-0 z-30 w-full bg-lime-700 text-white border-b border-lime-900 py-2 shadow-md shadow-black/5">
      <div class="max-w-screen-lg mx-auto flex flex-nowrap items-center justify-between gap-3">
        <div class="flex flex-nowrap gap-3 items-center">
          <NuxtLink to="/">
            <NuxtImg src="/logo.png" height="50" />
          </NuxtLink>

          <span class="text-amber-500">Gusto</span>
          <span class="font-thin">Recettes collaboratives</span>
        </div>

        <div class="flex flex-nowrap gap-3 items-center">
          <NuxtLink to="/">Recettes</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
