import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import BoxApp from './App.styled';
import Section from './Section/Section';
import Form from './Form/Form';
import initialContact from './data/contacts.json';
import FilterContacts from './FilterContact/FilterContact';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContact);
  const [filter, setFilter] = useState('');

  const addContact = value => {
    for (const contact of contacts) {
      if (value.name.toLowerCase() === contact.name.toLowerCase()) {
        return alert(`${value.name} is already in contact`);
      } else if (value.number === contact.number) {
        return alert(`${value.number} is already in contact`);
      }
    }
    setContacts([...contacts, { id: nanoid(), ...value }]);
    Notiflix.Notify.success(
      'You have added a new contact to your contact list'
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handelChangeFind = e => {
    setFilter(e.target.value);
  };

   const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
   };
  
  return (
    <BoxApp>
      <Section title="Phonebook">
        <Form onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <FilterContacts onChangeFind={handelChangeFind} value={filter} />
        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </BoxApp>
  );
};
export default App;