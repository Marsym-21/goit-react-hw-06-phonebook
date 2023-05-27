import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../redux/filterSlice';
import { getContactValue, deletContactsValue } from '../redux/contactSlice';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
  //     { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
  //     { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
  //   ]
  // );

  const dispatchFilter = useDispatch();
  const contactsValue = useSelector(state => state.valueContacts.contacts);
  console.log(contactsValue);
  const filterValue = useSelector(state => state.valueFilter);
  console.log(filterValue);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const getDataForm = data => {
  //   dispatchFilter(getContactValue(data));
  //   setContacts(prevState => [...prevState, data]);
  // };

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
          onSubmit={data => dispatchFilter(getContactValue(data))}
          contacts={contactsValue}
        />
        <h1>Contacts</h1>
        <Filter
          value={filterValue}
          onChange={evt =>
            dispatchFilter(getFilterValue(evt.currentTarget.value))
          }
        />
        <Contacts contacts={contactsValue} onClick={deletName} />
      </div>
    </div>
  );
};
