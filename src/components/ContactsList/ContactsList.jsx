import PropTypes from 'prop-types';
import { ListOfContact } from './ContactsList.styled';
import ContactItem from '../ContactIteam/ContactIteam';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContact>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ListOfContact>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;