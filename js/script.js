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
        
        addMessage(status, text) {
            const newMessage = {
                id: new Date().getTime(),
                date: new Date().toLocaleTimeString(),
                text,
                status
            }

            this.currentChat.push(newMessage);

        },

        sendMessage() {
            if (!this.newTextMessage) return ;

            this.addMessage('sent', this.newTextMessage)

            this.newTextMessage= '';

            setTimeout(() => {
                this.addMessage('received', 'ok')
            }, 1000);
        }
    },
    
    created() {
        this.currentId = this.contacts[0].id;
    }

});

app.mount('#root');

