import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import * as S from './styles';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import Input from '../../../components/Input';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required').label('firstName'),
  lastName: Yup.string().required('Last Name is required').label('lastName'),
  mail: Yup.string()
    .email('Please enter valid mail')
    .required('Mail is required')
    .label('mail'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required'),
  message: Yup.string()
    .min(10, ({min, value}) => `${min - value.length} characters to go`)
    .required('Message is required'),
});

const Form: React.FC = () => {
  const [websiteType, setWebsiteType] = useState();

  return (
    <S.Container>
      <S.Title>Any question or remarks? Just write us a message!</S.Title>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          mail: '',
          phone: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <Input title="First Name">
              <S.InputField
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
            </Input>

            {errors.firstName && touched.firstName && (
              <S.ErrorText>{errors.firstName}</S.ErrorText>
            )}

            <Input title="Last Name">
              <S.InputField
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
            </Input>

            {errors.lastName && touched.lastName && (
              <S.ErrorText>{errors.lastName}</S.ErrorText>
            )}

            <Input title="Mail">
              <S.InputField
                onChangeText={handleChange('mail')}
                onBlur={handleBlur('mail')}
                value={values.mail}
                keyboardType="email-address"
              />
            </Input>

            {errors.mail && touched.mail && (
              <S.ErrorText>{errors.mail}</S.ErrorText>
            )}

            <Input title="Phone">
              <S.InputField
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType="phone-pad"
              />
            </Input>

            {errors.phone && touched.phone && (
              <S.ErrorText>{errors.phone}</S.ErrorText>
            )}

            <Input
              title="What type of website do you need?"
              optionOne="Web Design"
              optionTwo="Web Development"
              optionThree="Logo Design"
              optionFour="Other"
              select
              onPress={value => {
                if (value !== null) {
                  setWebsiteType(value);
                }
              }}
            />

            <Input title="Message" multiline>
              <S.InputField
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
                multiline
                numberOfLines={3}
              />
            </Input>

            {errors.message && touched.message && (
              <S.ErrorText>{errors.message}</S.ErrorText>
            )}

            <ButtonPrimary
              title="SEND MESSAGE"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export default Form;
