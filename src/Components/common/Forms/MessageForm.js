import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import styles from './MessageForm.module.css';

const MessageForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{message: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.message) {
                        errors.message = 'You cannot send an empty message';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    props.onClick(values.message);

                    values.message = '';
                    setSubmitting(false);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field type="text"
                                   name="message"
                                   placeholder='Enter your message'
                                   className={styles.messageField}/>
                            <ErrorMessage name="message"/>
                        </div>
                        <div>
                            <button type="submit"
                                    disabled={isSubmitting}
                                    className={styles.sendButton}
                            >
                                {props.buttonName}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

const CustomInputComponent = ({
                                  field,
                                  form: {touched, errors},
                                  ...props
                              }) => (
    <div>
        <Field type="text"
               name="message"
               placeholder='Enter your message'
               className={styles.messageField}/>

        <input {...field} {...props} />


        <input type="text" {...field} {...props} />
        {touched[field.name] &&
        errors[field.name] &&
        <div className="error">
            {errors[field.name]}
        </div>}
    </div>
);


export default MessageForm;