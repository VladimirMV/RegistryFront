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
  ContactDescr,
  ModalPictureWrapper,
  WrapperBtns,
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
    <Container maxWidth="md" marginLeft= "0" paddingLeft ="0" >
     
      <List sx={{  width: "400px", marginLeft: 0, paddingLeft: 0, fontSize: "8px" }}>
        { <ListItem key={id}> 
         <Tooltip label="Click" color="#000" fontSize="xs">      
              <ListItemAvatar>
            <ModalPictureWrapper> 
                              <Avatar
              sx={{fontSize:"12px"}}
              onClick={() => setModalData(id)}
              {...stringAvatar(Object.values(name).join(''))}
            />
              </ModalPictureWrapper>                        
                      </ListItemAvatar>
          </Tooltip> 
          <ContactDescr>
          <ListItemText primary={name} />
          <ListItemText sx={{  pr:2, fontSize: "2sx"}} primary={number} />
            <WrapperBtns>
            <ListItemSecondaryAction>
            <Tooltip label="Edit" color="#000" fontSize="xs">  
            <IconButton sx={{   pl: 3 }}
                edge="end"
                        aria-label="Edit"
                 onClick={() => setModalData(id)}
            
              >
                <EditIcon />
              </IconButton>
            </Tooltip> 

            <Tooltip label="Delete" color="#000" fontSize="xs">  
              <IconButton sx={{ pl: 2 }}
                        edge="end"
                aria-label="delete"
                onClick={() => onDeleteContact(id)}
              >
              <DeleteIcon />
              
              </IconButton>
               </Tooltip> 
         
              </ListItemSecondaryAction>
              </WrapperBtns>
            </ContactDescr>
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

