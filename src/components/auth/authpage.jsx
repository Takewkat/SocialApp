import React from 'react';
import classes from './AuthPage.module.css';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../redux/reducers/auth-reducer';
import {requiredFields, maxLengthCreator} from '../../utils/validators/validator';

const maxLength = maxLengthCreator(20);
// Component
function AuthForm(props) {
  console.log('props from AuthForm', props);
  return (
    <div className={classes['auth-form-wrap']}>
      <form className={classes['auth-form']} onSubmit={props.handleSubmit}>
        <div className={classes['auth-form__header']}>Login</div>
        <div className={classes['auth-form__body']}>
          <label className={classes['auth-form__label']} htmlFor="loginEmail">
            <span>login</span>
            <Field 
              className={classes['auth-form__input']} 
              name="loginEmail" 
              component="input" 
              type="text"
              validate={[requiredFields, maxLength]}
            />
          </label>
          <label className={classes['auth-form__label']} htmlFor="loginPassword">
            <span>password</span>
            <Field 
              className={classes['auth-form__input']} 
              name="loginPassword" 
              component="input" 
              type="password"
              validate={[requiredFields, maxLength]}
            />
          </label>
          <label className={classes['auth-form__']} htmlFor="rememberMe">
            <Field 
              className={classes['auth-form__']} 
              name="rememberMe" 
              component="input" 
              type="checkbox"
              validate={[requiredFields]}
            />
            <span>Remember me</span>
          </label>
        </div>
        <div className={classes['auth-form__footer']}>
          <button className={classes['auth-form__submit']}>Login</button>
        </div>
      </form>
    </div>
  )
}

// Component reduxForm = hoc
const LoginReduxForm = reduxForm({
  // Unique name
  form: 'loginForm'
}) (AuthForm);

// Component
function AuthPage(props) {  
  function onSubmit({loginEmail, loginPassword, rememberMe}) {
    console.log('On submit', loginEmail, loginPassword, rememberMe);
    props.login(loginEmail, loginPassword, rememberMe)
  }

  return (
    <LoginReduxForm onSubmit={onSubmit}/>
  )
}

export default connect(
  null, 
  {
    login
  }
)(AuthPage)