<script setup>
// export default {
//     data() {
//         return {
//             count: 0,
//         }
//     },
//     methods: {
//         increase() { 
//             this.count += 1;
//         },
//         decrease() {
//             this.count -= 1;
//         }
//     },
// };

import { ref } from 'vue';

        const count = ref(0);

        function increase() {
            count.value += 1;
        }

        function decrease() {
            count.value -= 1;
        }

        

</script>

<template>
   <main>
    <div>
      <h1>counter</h1>
        <span id="value">{{ count }}</span>
        <div>
            <button @click="decrease" id="decrease">-</button>
            <button @click="increase" id="increase">+</button>
        </div>
    </div>
        
    </main>
</template>


<style scoped>
  main {
    text-align: center;
    background-color: #333;
    padding: 2rem;
    border-radius: 1rem;
}

#value {
    font-size: 6rem;
}

button {
    background-color: #878787;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 30px;
}

button:hover {
    background-color: #666;
}

button:active {
    background-color: #444;
    animation: pulse 0.4s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>