const {createApp} = Vue;

const app = createApp({
    name: 'Boolzapp',
    data: () => ({
        data,
        contacts: data.contacts
    }),

    computed: {

    },

    methods: {

    }
});

app.mount('#root');

console.log(data)