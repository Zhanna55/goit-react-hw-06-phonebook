import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilteredContacts } from 'Redux/selectors';
import { Contact } from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

// const getFilteredContacts = ({ contacts, filter }) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);

  return (
    <Contacts>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
