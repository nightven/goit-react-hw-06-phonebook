
import {Phonebook} from './Phonebook/Phonebook';
import {Contacts} from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Container, Label } from './App.styled';
import { useState } from 'react';

export const App =() => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  //add a new contact to state
  const onAddContact = data => {
    if (contacts.some(({ name }) => data.name === name)) {
      return alert(`${data.name} is already in contacts list`);
    }
    const mewContact = { ...data, id: nanoid() };
    
    setContacts([...contacts, mewContact]);
  };

  // delete a contact from state
  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id!== id));
    
  };

  // filter contacts by name
  const onInputChange = e => {
    setFilter(e.target.value.trim());
    
  };

    //filtered contacts by name
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
      <Container>
        <Phonebook onAddContact={onAddContact} />
        <h2>Contacts</h2>
        {/* show search input if contacts isn't empty */}
        {contacts.length === 0? (<p>Empty</p>):(
        <div>
          <Label>
          <p>Search by contact</p>
          <input
            type="text"
            placeholder="Enter search contact"
            value={filter}
            onChange={onInputChange}
          />
        </Label>
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
        </div>)}
        </Container>
      
    );
  
}
