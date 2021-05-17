<template>
<div>

<div class="h-screen bg-gray-50 flex overflow-hidden">
  <!-- Narrow sidebar -->
  <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
    <div class="w-full py-6 flex flex-col items-center">
      <div class="flex-shrink-0 flex items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
      </div>
      <div class="flex-1 mt-6 w-full px-2 space-y-1">
        
        <a @click="client" v-bind:class="{'bg-indigo-800': clients === true, '': clients === false}" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!--
            Heroicon name: outline/home

            Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
          -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="mt-2">Clients</span>
        </a>
        <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->

        <a @click="dom" v-bind:class="{'bg-indigo-800': doms === true, '': doms === false}" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!-- Heroicon name: outline/view-grid -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span class="mt-2">Specialists</span>
        </a>

        <a @click="tasks" v-bind:class="{'bg-indigo-800': task === true, '': task === false}" class="hover:bg-indigo-800 text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          <!-- Heroicon name: outline/photograph -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span class="mt-2">Tasks</span>
        </a>

        <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!-- Heroicon name: outline/user-group -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
          <span class="mt-2">Reports</span>
        </a>        

        <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!-- Heroicon name: outline/cog -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="mt-2">Settings</span>
        </a>
      </div>
    </div>
  </div>

  <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
  <div v-if="sidebar" class="md:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div  class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-1 right-0 -mr-14 p-1">
          <button @click="sidebar = false" type="button" class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>

        <div class="flex-shrink-0 px-4 flex items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow">
        </div>
        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
          <nav class="h-full flex flex-col">
            <div class="space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->
        <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!--
            Heroicon name: outline/home

            Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
          -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="mt-2">Clients</span>
        </a>

        <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!-- Heroicon name: outline/view-grid -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span class="mt-2">Specialists</span>
        </a>

        <a href="#" class="bg-indigo-800 text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          <!-- Heroicon name: outline/photograph -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span class="mt-2">Schedule</span>
        </a>

        <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!-- Heroicon name: outline/user-group -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
          <span class="mt-2">Reports</span>
        </a>        

        <a href="#" class="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
          <!-- Heroicon name: outline/cog -->
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="mt-2">Settings</span>
        </a>
            </div>
          </nav>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>

  <!-- Content area -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="w-full">
      <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
        <button @click="sidebar = true" type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu-alt-2 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6">
          <div class="flex-1 flex">
            <form class="w-80 flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search all files</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <!-- Heroicon name: solid/search -->
                  <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input name="search_field" id="search_field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400" placeholder="Search" type="search">
              </div>
            </form>
          </div>
          <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">

            <!-- Profile dropdown -->
            <div class="relative flex-shrink-0">
              <div>
                <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z"/></svg>
                  <!-- <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt=""> -->
                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div v-if="showProfile" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Sign out</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <!-- Primary column -->
        <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
          <h1 id="primary-heading" class="sr-only">Photos</h1>
          <!-- Your content -->

        <div class="p-10">
          <ClientsTable v-if="clients" />
          <DomsTable v-if="doms" />
          <Task v-if="task" />
        </div>

        </section>
      </main>

      <!-- Secondary column (hidden on smaller screens) -->
      <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
        <!-- Your content -->
      </aside>
    </div>
  </div>
</div>

  
</div>    
</template>

<script>
import ClientsTable from "../components/ClientsTable";
import DomsTable from "../components/DomsTable";
import Task from "../components/Task";

export default {
  props: [
  ],
  components: {
    ClientsTable,
    DomsTable,
    Task
  },
  data(){
    return{
      task:false,
      doms:false,
      clients:false,
      sidebar:false,
      showChannels:false,
    }     
  },
  methods:{
    tasks(){
      this.doms = false
      this.clients = false
      this.task = true
    },
    client(){
      this.doms = false
      this.task = false
      this.clients = true
    },
    dom(){
      this.clients = false
      this.task = false
      this.doms = true
    }
    
  }
}
</script>