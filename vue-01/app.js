// const button = document.querySelector('button')
// const input = document.querySelector('input')
// const list = document.querySelector('li')

// function addGoal() {
//     const enteredValue = input.value;
//     if (!enteredValue) {
//         console.error("Empty value");
//         return;
//     }
//     const listItem = document.createElement('li')
//     listItem.textContent = enteredValue
//     list.append(listItem)
//     input.value = ''
// }

// button.addEventListener('click', addGoal)


// VUE 2

let app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        enteredValue: ''
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue)
            this.enteredValue = ''
        }
    }
})

// // VUE 3

// Vue.createApp({
//     data() {
//         return {
//             goals: [],
//             enteredValue: ''
//         }
//     },
//     methods: {
//         addGoal() {
//             goal = this.enteredValue
//             if (goal == '') return;

//             this.goals.push(goal);
//             this.enteredValue = ''
//         }
//     }
// }).mount('#app')