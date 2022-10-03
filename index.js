Vue.createApp({
    data(){
        return{
            word: null,
            ammount: null,
            message: "",
        }
    },
    methods:{
        DuplicateButton(){
            for(i = 0; i < this.ammount; i++){
            this.message += this.word
            }   
            if(this.ammount < 0){
                this.message = "Cannot be a negative number"
            }
        }
    }

}).mount('#app')
