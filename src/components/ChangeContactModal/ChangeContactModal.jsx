import { useState } from 'react';
import { Formik } from 'formik';
import 'yup-phone';

import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';
import { schema } from 'services/schemaYup';
import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ChangeContactModal.styled';

import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import { CloseBtn } from 'components/Modal/Modal.styled';
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/contacts/contacts-operations';

import { customStylesInsideModal } from 'styles/modalStyles';

Modal.setAppElement('#root');

export const ChangeContactModal = ({
  isOpen,
  data,
  onClose,
  setModalIsOpen,
}) => {
  const [formValues, setFormValues] = useState(data || {});

  const initialValues = { name: '', number: '' };
  const savedValues = {
    name: data?.name || '',
    number: data?.number || '',
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    onClose();
    setModalIsOpen(false);
  };

  const onSubmitHandler = (values, { resetForm }) => {
    const newFormValues = { ...formValues, ...values };
    setFormValues(newFormValues);
    console.log("newFormValues",newFormValues)
    dispatch(changeContact(newFormValues));
    resetForm();
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Inline Styles Modal Example"
        style={customStylesInsideModal}
      >
        <CloseBtn onClick={onClose}>
          <MdOutlineClose />
        </CloseBtn>
        <Formik
          initialValues={savedValues || initialValues}
          onSubmit={onSubmitHandler}
          enableReinitialize
          validationSchema={schema}
        >
          {formik => {
           ;
            return (
              <Form autoComplete="off">
                <FormField>
                  <LabelWrapper>
                    <BsPersonFill />
                    <LabelSpan>Name</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik type="text" name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="span" />
                </FormField>
                <FormField>
                  <LabelWrapper>
                    <BsFillTelephoneFill />
                    <LabelSpan>Phone Number</LabelSpan>
                  </LabelWrapper>
                  <FieldFormik
                    type="tel"
                    name="number"
                    placeholder="+38-050-936-44-77"
                  />
                  <ErrorMessage name="number" component="span" />
                </FormField>
                <StyledButton
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  <IoMdPersonAdd size="16" />
                  Edit contact
                </StyledButton>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
