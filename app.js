const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString:'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler({target}){
            this.inputValue = target.value
        },
        addNewNote(){
            if(this.inputValue){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            } else{
                alert('Введите текст заметки!')
            }
        },
        clearNote(value){
            this.notes = this.notes.filter((note)=> note !== value)
        }
    }
}

Vue.createApp(App).mount('#app')
