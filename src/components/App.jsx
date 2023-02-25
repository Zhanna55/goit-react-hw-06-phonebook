import { Container } from './App.styled';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
