import Layout from './components/Layout';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  return (
    <Layout>
      <ContactForm />

      <ContactList />
    </Layout>
  );
}
