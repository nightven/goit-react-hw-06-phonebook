import { useDispatch, useSelector } from 'react-redux';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Container, Label } from './App.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';
import { setFilter } from 'redux/filterSlice';


export const App = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  

  //! delete a contact from state
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  //! filter contacts by name
  const onInputChangeFilter = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  //! filtered contacts by name
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  

  return (
    <Container>
      <Phonebook />
      <h2>Contacts</h2>
      {/* show search input if contacts isn't empty */}
      {contacts.length === 0 ? (
        <p>Empty</p>
      ) : (
        <div>
          <Label>
            <p>Search by contact</p>
            <input
              type="text"
              placeholder="Enter search contact"
              value={filter}
              onChange={onInputChangeFilter}
            />
          </Label>
          <Contacts
         
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        </div>
      )}
    </Container>
  );
};
