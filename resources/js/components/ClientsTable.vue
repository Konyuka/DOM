<template>
<div class="">

<div class="mb-2">
  <button @click="showAddModal = true" type="button" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <!-- Heroicon name: solid/plus -->
    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
    </svg>
  </button>
</div>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white shadow overflow-hidden sm:rounded-md">
  <div class="">
    <ul class="divide-y divide-gray-200">
      <li>
        <a href="#" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">Client Name</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <!-- Heroicon name: solid/mail -->
                    <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span class="truncate">client.email@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Registered
                      <time datetime="2020-01-07">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <!-- Heroicon name: solid/check-circle -->
                      <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- Heroicon name: solid/chevron-right -->
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>


<!-- Show Add Modal -->
<div v-if="showAddModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
      <div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            ADD CLIENT
          </h3>
          <div class="mt-5">

            <div class="grid grid-cols-2 gap-4">
              <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Name</label>
                  <div class="mt-1">
                    <input type="text" name="name" id="name" class="bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black rounded-md" placeholder="you@example.com">
                  </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                  <input type="email" name="email" id="email" class="bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black rounded-md" placeholder="you@example.com">
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Mobile</label>
                <div class="mt-1">
                  <input type="number" name="number" id="number" class="bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black rounded-md" placeholder="you@example.com">
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Specialist</label>
                <div class="mt-1">
                  <select id="location" name="location" class="bg-gray-100 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Jane</option>
                    <option>Catherine</option>
                    <option>John</option>
                  </select>
                  <!-- <input type="number" name="number" id="number" class="bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black rounded-md" placeholder="you@example.com"> -->
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Physical Address</label>
                  <div class="mt-1">
                    <!-- <input type="text" name="name" id="name" class="bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black rounded-md" placeholder="you@example.com"> -->
                    <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="h-20 bg-gray-100 block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                  </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Notes</label>
                  <div class="mt-1">
                    <!-- <input type="text" name="name" id="name" class="bg-gray-100 p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black rounded-md" placeholder="you@example.com"> -->
                    <input type="text" name="notes" id="notes" autocomplete="street-address" class="h-20 bg-gray-100 block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md">
                  </div>
              </div>
              
            </div>
            
            
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
          Save
        </button>
        <button  @click="showAddModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>




  
</div>    
</template>

<script>

export default {
  name:'Clients',
  props: [
  ],
  components: {
  },
  data(){
    return{
      showAddModal:false
    }     
  },
  methods:{
    
    
  }
}
</script>