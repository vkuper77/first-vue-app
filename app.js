Vue.createApp({
    data: () => ({
        title: 'Vue 3',
        myHtml: `<h2>Vue 3 App</h2>`,
        person: {
            firstName: 'Kupratsevich',
            name: 'Vitali',
            age: 26
        },
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    })
}).mount('#app')