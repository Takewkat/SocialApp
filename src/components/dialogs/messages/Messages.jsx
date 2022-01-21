import React from 'react';
import Message from './message/Message';

import classes from './Messages.module.css'
import {reduxForm, Field} from 'redux-form';
import Textarea from '../../common/forms-controls/textarea/Textarea';
import {requiredFields, maxLengthCreator} from '../../../utils/validators/validator';


const maxLength = maxLengthCreator(100);

function AddMessageForm(props) {    
	return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes['message-input']}>
        <Field 
          name='messageTextarea' 
          component={Textarea} 
          type='text'
          validate={[requiredFields, maxLength]}/>
      </div>
      <div className={classes['message-submit']}>
        <button name='messageSubmit' className='new-post__submit'>Send</button>
      </div>
    </form>
  )
}

// HOC
const AddMessageReduxForm = reduxForm({
  form: 'messageForm'
})(AddMessageForm)

// Component
function Messages(props) {

  function onSubmit(formData) {
    console.log(formData.messageTextarea);
    props.sendMessage(formData.messageTextarea)
  }

  // Message list from state
  let messagesList = props.messagesData.map((messageData, key) => {
    return (
      <li className={classes['messages__message']} key={key}>
        <Message name={messageData.name} message={messageData.message} />
      </li>
    )
  });

  return (
    <div className={classes['messages-section']}>
      <ul className={classes['messages']}>
        {messagesList}
      </ul>
      <AddMessageReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Messages;