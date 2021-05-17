<template>
<div>
  <div class="p-4">
        
    <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">

      <li class="relative">
        <div class="group block w-full aspect-w-20 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80 -->
          <img :src="'/img/tasks.png'" alt="" class="object-cover pointer-events-none group-hover:opacity-30">
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg> -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z"/></svg> -->
        </p>
        <p class="block text-sm font-medium text-gray-500 pointer-events-none text-center">Allocate tasks to specialists</p>
      </li>

      <li class="relative">
        <div class="group block w-full aspect-w-20 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80 -->
          <img :src="'/img/done.png'" alt="" class="object-cover pointer-events-none group-hover:opacity-30">
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg> -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z"/></svg> -->
        </p>
        <p class="block text-sm font-medium text-gray-500 pointer-events-none text-center">Check Completed Tasks</p>
      </li>

      <li class="relative">
        <div class="group block w-full aspect-w-20 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80 -->
          <img :src="'/img/undone.png'" alt="" class="object-cover pointer-events-none group-hover:opacity-30">
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg> -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z"/></svg> -->
        </p>
        <p class="block text-sm font-medium text-gray-500 pointer-events-none text-center">Check incomplete Tasks</p>
      </li>

      <li class="relative">
        <div class="group block w-full aspect-w-20 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80 -->
          <img :src="'/img/add.png'" alt="" class="object-cover pointer-events-none group-hover:opacity-30">
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg> -->
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 18l10-7.088-10-6.912v3.042s-11.618 2.583-14 12.958c5.072-5.431 14-5.218 14-5.218v3.218z"/></svg> -->
        </p>
        <p class="block text-sm font-medium text-gray-500 pointer-events-none text-center">Add New Tasks</p>
      </li>

      <li class="relative">
        <div class="group block w-full aspect-w-20 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <!-- https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80 -->
          <img :src="'/img/unallocated.png'" alt="" class="object-cover pointer-events-none group-hover:opacity-30">
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        </p>
        <p class="block text-sm font-medium text-gray-500 pointer-events-none text-center">Check Unallocated Tasks</p>
      </li>

      <li class="relative">
        <div class="group block w-full aspect-w-20 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img :src="'/img/assigned.png'" alt="" class="object-cover pointer-events-none group-hover:opacity-30">
          <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for IMG_4985.HEIC</span>
          </button>
        </div>
        <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        </p>
        <p class="block text-sm font-medium text-gray-500 pointer-events-none text-center">Check Allocated Tasks</p>
      </li>

      
    </ul>

  </div>
  
</div>    
</template>

<script>

export default {
  props: [
  ],
  components: {
  },
  data(){
    return{
      showChannels:false,
    }     
  },
  methods:{
    showChannelFunc(){
      this.showChannels = true
    }
    
  }
}
</script>