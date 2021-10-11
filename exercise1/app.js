const app = Vue.createApp({
    data(){
        return{
            name: 'Edwin kesuma',
            age: 21,
            gender: 'Male',
            hoby: 'Listen to Music',
            showDatas: false,
        }
    },

    methods: {
        increaseAge(){
            this.age++
        },
        decreaseAge(){
            this.age--
        },
        changeHoby(newHoby){
            this.hoby = newHoby
        },
        showAllDatas(){
            this.showDatas = !this.showDatas
        }
    }
})

app.mount('#app')