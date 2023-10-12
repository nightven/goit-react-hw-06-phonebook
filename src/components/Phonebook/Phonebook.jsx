
import { useState } from 'react';
import { Form } from './Phonebook.styled';

export const Phonebook = ({onAddContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

  //set state on input change
  const onChangeInput = evt => {
    if (evt.target.name === 'name') setName(evt.target.value);
    if (evt.target.name === 'number') setNumber(evt.target.value);
    
  };

//submit form
  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, number };
    setName('');
    setNumber('');
    

    onAddContact(newContact);
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
            value={name}
            onChange={onChangeInput}
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            required
            placeholder="Enter number 123-45-67"
            value={number}
            onChange={onChangeInput}
          />
          <button type="submit">Add contact</button>
        </Form>
      </>
    );
 
}
