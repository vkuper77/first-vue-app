const App = {
    data() {
        return {
            counter: 0,
            title: 'Счетчик',
            btn: ['Добавить', 'Вычесть']
        }
    }
}

Vue.createApp(App).mount('#app')
