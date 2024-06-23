<template>
  <header class="h-16">
    <nav class="fixed top-0 z-30 w-full bg-lime-50 text-amber-700 border-b border-lime-200 px-2 py-2 shadow-md shadow-black/5">
      <div class="max-w-screen-lg mx-auto flex flex-nowrap items-center justify-between gap-3">
        <div class="flex flex-nowrap gap-3 items-center">
          <NuxtLink class="flex flex-nowrap gap-3 items-center" to="/">
            <NuxtImg class="h-12 w-12" src="/logo.png" height="50" />
            <span class="text-amber-600">Gusto</span>
          </NuxtLink>

          <span class="font-thin max-sm:hidden">Recettes de cuisine</span>
        </div>

        <div class="flex flex-nowrap gap-3 items-center">
          <NuxtLink to="/">Recettes</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
