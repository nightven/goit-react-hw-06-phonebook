import { useDispatch, useSelector } from 'react-redux';
import { Form } from './Phonebook.styled';
import { getContacts, getName, getNumber } from 'redux/selectors';
import { addContact, addName, addNumber } from 'redux/contactSlice';



export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const name = useSelector(getName);
  const number = useSelector(getNumber);

  //set state on input change
  const onChangeInput = evt => {
    if (evt.target.name === 'name') dispatch(addName(evt.target.value));
    if (evt.target.name === 'number') dispatch(addNumber(evt.target.value));
  };

  //submit form
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContact = { name, number };
    form.reset();
  
   // checking for the presence of this contact
  if (contacts.some(({ name }) => newContact.name === name)) {
    return alert(`${newContact.name} is already in contacts list`);
  }
    dispatch(addContact(newContact));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter name"
          onChange={onChangeInput}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          required
          placeholder="Enter number 123-45-67"
          onChange={onChangeInput}
        />
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};
