const {createApp} = Vue;

const app = createApp({
    name: 'Boolzapp',
    data: () => ({
        user: data.user,
        contacts: data.contacts,
        currentContact: 0,
        newTextMessage: ''
    }),

    computed: {
        currentContact() {
        return  this.contacts.reduce((lowest, contact) => contact.id < lowest.id ? contact : lowest, this.contacts[0])
        }
    },

    methods: {
        getCurrentContact(id) {
            this.currentContact = id;
        },

        addMessage() {
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toISOString(),
                text: this.newTextMessage,
                status: 'sent'
            }

            this.contacts[this.currentContact].messages.push(newMessage);

            this.newTextMessage = '';
        }
    
    }
});

app.mount('#root');

