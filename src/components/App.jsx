import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, getFilterValue } from '../redux/filterSlice';
import {
  setContactValue,
  deletContactsValue,
  getContactsValue,
} from '../redux/contactSlice';

import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export const App = () => {
  const dispatchFilter = useDispatch();
  const contactsValue = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);

  const deletName = evt => {
    const dataId = evt.target.id;
    const newArray = contactsValue.filter(contact => contact.id !== dataId);
    dispatchFilter(deletContactsValue(newArray));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="bookcontacts">
        <h1>PhoneBook</h1>
        <Phonebook
          onSubmit={data => dispatchFilter(setContactValue(data))}
          contacts={contactsValue}
        />
        <h1>Contacts</h1>
        <Filter
          value={filterValue}
          onChange={evt =>
            dispatchFilter(setFilterValue(evt.currentTarget.value))
          }
        />
        <Contacts contacts={contactsValue} onClick={deletName} />
      </div>
    </div>
  );
};
