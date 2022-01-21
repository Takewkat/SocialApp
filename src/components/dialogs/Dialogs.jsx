import React from 'react';

import classes from './Dialogs.module.css'

import DialogsItem from './dialogsItem/DialogsItem';
import MessagesContainer from './messages/Messages-container';

function Dialogs({dialogsData}) {

	let dialogsElements = dialogsData.map((d, key) => {
		return (
			<li className={classes['dialogs__item']} key={key}>
				<DialogsItem 
				name={d.name} 
				id={d.id} />
			</li>
		)
	});

	return (
		<div className={classes.dialogs}>
			<ul className={classes['dialogs__list']}>
			{dialogsElements}
			</ul>    
			<MessagesContainer />        
		</div>    
	)
}

export default Dialogs