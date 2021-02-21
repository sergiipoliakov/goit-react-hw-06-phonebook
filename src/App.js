import Layout from './components/Layout';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  // state = {
  //   contacts: [
  //     // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: '',
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');

  //   const parsContacts = JSON.parse(contacts);

  //   if (parsContacts) {
  //     this.setState({ contacts: parsContacts });
  //   }
  // }

  // handleChange = e => {
  //   const { name, value } = e.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // addContact = data => {
  //   const contact = {
  //     id: uuid_v4(),
  //     name: data.name,
  //     number: data.number,
  //   };

  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, contact],
  //     };
  //   });
  // };
  // removeContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
  //     };
  //   });
  // };

  // changeFilter = filter => {
  //   this.setState({ filter });
  // };

  // getFilteredName = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  return (
    <Layout>
      <ContactForm />

      <ContactList />
    </Layout>
  );
}
