import React from 'react';
import Message from './message/Message';

import classes from './Messages.module.css'

function Messages(props) {    
    
	let messagesElements = props.messagesData.map((m, key) => {
		return (
			<li className={classes['messages__message']} key={key}>
				<Message name={m.name} id={m.id} message={m.message} date={m.date} />
			</li>
		)
	});

	let onClick = () => {
		props.sendMessage();
	}
	let onChange = (e) => {
		//debugger
		let body = e.target.value;
		props.updateNewMessageBody(body);        
	}

	return (
	<div>
		<ul className={classes['messages']}>
				{messagesElements}
		</ul>
		<form onSubmit={props.handleSubmit}>
			<div className={classes['message-input']}>
					<textarea   
					value={props.newMessageBody}
					onChange={onChange}
					placeholder={'Enter your message'}/>
			</div>
			<div className={classes['message-submit']}>
					<button onClick={onClick}>Send</button>
			</div>
		</form>
	</div>
	)
}

export default Messages;