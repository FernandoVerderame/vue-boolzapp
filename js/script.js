const {createApp} = Vue;

const app = createApp({
    name: 'Boolzapp',
    data: () => ({
        user: data.user,
        contacts: data.contacts,
        currentId: null,
        newTextMessage: '',
        searchContact: ''
    }),

    computed: {
        currentContact() {
            return this.contacts.find(contact => contact.id === this.currentId);
        },

        currentChat() {
            return this.currentContact.messages;
        },
        /*
        filteredContacts() {
            const searchContact = this.searchContact.toLowerCase();

            return this.contacts.filter(contact =>
                contact.text.toLowerCase().includes(searchContact)
            );
        }
        */
    },

    methods: {
        
        setCurrentId(id) {
            this.currentId = id;
        },
        
        addMessage() {
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toISOString(),
                text: this.newTextMessage,
                status: 'sent'
            }

            this.currentChat.push(newMessage);

            this.newTextMessage = '';

            this.addReplayMessage();
        },

        addReplayMessage() {
            setTimeout(() => {
                const newReplayMessage = {
                    id: new Date().toISOString(),
                    date: new Date().toISOString(),
                    text: 'ok',
                    status: 'received'
                }

                this.currentChat.push(newReplayMessage);

            }, 1000)
        }
    },
    
    created() {
        this.currentId = this.contacts[0].id;
    }

});

app.mount('#root');

