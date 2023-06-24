import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  selectFilter,
} from 'redux/selectors';

import Loader from 'components/Loader/Loader';
import { List, Info } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const result = useSelector(selectFilteredContacts);

  const getFilteredContacts = data => {
    if (filter.toLowerCase() && !data.length) {
      // alert(`No contacts matching your request`);
    }
    return data;
  };

  const filteredContacts = getFilteredContacts(result);

  return (
    <>
      {isLoading && contacts?.length === 0 && <Loader />}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!filteredContacts?.length && !error && !isLoading && (
        <Info>Contacts not found</Info>
      )}
      {!error && !isLoading && filteredContacts?.length > 0 && (
        <List>
          <ul>
            {filteredContacts.map(({ name, number, id }) => {
              return (
                <Fragment key={id}>
                  <ContactItem name={name} number={number} id={id} />
                </Fragment>
              );
            })}
          </ul>
        </List>
      )}
    </>
  );
}

export default ContactList;
