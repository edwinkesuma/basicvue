const app = Vue.createApp({
    data(){
        return{
            x: 0,
            y: 0,
            showDatas: false,
            mangas: [
                {title:'one piece', author:'eichiro oda', img:'assets/onepiece.jpg', isFav: true},
                {title:'bleach', author:'tite kubo', img:'assets/bleach.jpg', isFav: false},
                {title:'naruto', author:'masashi khisimoto', img:'assets/naruto.jpg', isFav: true},
            ]
        }
    },
    methods : {
        eventHandler(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleEvent(e){
            console.log(e, e.type)
            this.x = e.offsetX
            this.y = e.offsetY
        },
        showAllDatas(){
            this.showDatas = !this.showDatas
        },
        toglehandler(manga){
            manga.isFav = !manga.isFav
            console.log('clicked')
        }
    },
    computed:{
        filtered(){
            return this.mangas.filter((manga) => manga.isFav)
        }
    }
})

app.mount('#app')