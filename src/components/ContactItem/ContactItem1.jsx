import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Tooltip } from '@chakra-ui/react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import {

  ModalPictureWrapper,
} from './ContactItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// functions
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { abbrevName } from 'utils/abbrevName';

import { ContactModal } from 'components/Modal/Modal';

// redux
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';

// style
// import { IoPersonRemove } from 'react-icons/io5';

export const ContactItem = ({ name, number, id }) => {
  console.log("number =",name, number, id )
    const contacts = useSelector(selectContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  const setModalData = id => {
    const selectContact = contacts.find(contact => contact.id === id);
    setSelectedContact(selectContact);
  };

  function stringAvatar(name) {
     
    return {
      sx: {
        bgcolor: getRandomHexColor(),
      },
      children: abbrevName(name),
    };
  }
 
 
 
  return (
    <Container maxWidth="sm">
     
      <List>
        { <ListItem key={id}>
                   
                  <ListItemAvatar>
                      <Tooltip label="Click" color="#000" fontSize="xs">
            <ModalPictureWrapper> 
                              <Avatar
              sx={{fontSize:"12px"}}
              onClick={() => setModalData(id)}
              {...stringAvatar(Object.values(name).join(''))}
            />
                          </ModalPictureWrapper>  
                      </Tooltip>    
                      </ListItemAvatar>
                           
                <ListItemText primary={name} />
                 <ListItemText sx={{ pl: 1, pr: 3}} primary={number} />
            <ListItemSecondaryAction>
              <IconButton sx={{ pl: 1 }}
                edge="end"
                        aria-label="edit"
                 onClick={() => setModalData(id)}
            
              >
                <EditIcon />
              </IconButton>
              <IconButton sx={{ pl: 1 }}
                        edge="end"
                aria-label="delete"
                onClick={() => onDeleteContact(id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        }
          </List>
          <ContactModal
        isOpen={selectedContact !== null}
        onClose={closeModal}
        data={selectedContact}
      />
    </Container>
  );
};

 

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};


 // <li className={s.item} key={id}>
              //   <p className={s.info}>
              //     {name}: {number}
              //   </p>
              //   <button
              //     className={s.btn}
              //     type="button"
              //     onClick={() => onDeleteContact(id)}
              //   />
              // </li>