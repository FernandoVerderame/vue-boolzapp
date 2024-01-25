const {createApp} = Vue;

const app = createApp({
    name: 'Boolzapp',
    data: () => ({
        user: data.user,
        contacts: data.contacts,
        currentContact: 0
    }),

    computed: {
        currentContact() {
        return  this.contacts.reduce((lowest, contact) => contact.id < lowest.id ? contact : lowest, this.contacts[0])
        }
    },

    methods: {
        getCurrentContact(id) {
            this.currentContact = id;
        }
    
    }
});

app.mount('#root');

