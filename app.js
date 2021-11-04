Vue.createApp({
    data: () => ({
        title: 'Vue 3',
        myHtml: `<h2>Vue 3 App</h2>`,
        person: {
            firstName: 'Kupratsevich',
            name: 'Vitali',
            age: 26
        },
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }),
    methods:{
        addItem(){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(idx){
            this.items.splice(idx, 1)
        },
        log(idx){
            console.log(idx)
        }
    },
    computed: {
        eventItems() {
            return this.items.filter(i =>
                i % 2 === 0
            )
        }
    }
}).mount('#app') 