const {createApp} = Vue;

const app = createApp({
    name: 'Boolzapp',
    data: () => ({
        user: data.user,
        contacts: data.contacts,
        activeId: data.contacts.currentContact
    }),

    computed: {
        currentContact() {
        return  this.contacts.reduce((lowest, contact) => contact.id < lowest.id ? contact : lowest, this.contacts[0])
        }
    },

    methods: {
        getAvatarUrl({avatar}) {
            return `img/avatar${avatar}.jpg`
        }

    }
});

app.mount('#root');

