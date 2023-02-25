import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'Redux/contactsSlice';
import { ContactItem, DeleteButton } from './ContactItem.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem>
      <p>
        {contact.name}: {contact.number}
      </p>

      <DeleteButton onClick={onDeleteContact}>Delete</DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
