const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString:'Введите название заметки',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler({target}){
            this.inputValue = target.value
        }
    }
}

Vue.createApp(App).mount('#app')
