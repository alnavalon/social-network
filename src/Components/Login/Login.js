import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './Login.module.css';



const Login = (props) => (
    <div>
        <h1>Login</h1>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Login required';
                }
                if (!values.password)
                    errors.password = 'Password required';
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {

                props.logIn(values);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({values, errors, touched, isSubmitting}) => (
                <Form>
                    <div>
                        <Field type="text" name="email"
                               className={(errors.login || (touched.email && !values.email)) ? styles.error : null}/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password"/>
                    </div>
                    <div>
                        <Field type="checkbox" name="rememberMe"/>
                        <span>Is Remember</span>
                    </div>
                    <div>
                        {props.errorMessage}
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Login;

//export default Login;