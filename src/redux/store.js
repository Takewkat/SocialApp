import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navReducer from "./nav-reducer";

let store = {
	_state: {
		profile: {
			postData:[
				{id:1, message: 'just a message', countlikes:'11'},
				{id: 2, message: 'sucsessful message', countlikes:'79'}
			],
			newPostText: ''
		},    
		dialogs: {
			messagesData:[
				{id: 1, name: 'Tony', message:'Hey', date:'10.12.2021'},
				{id: 2, name: 'Cap', message:'Hello', date:'10.12.2021'},
				{id: 3, name: 'Natasha', message:'Privet', date:'10.12.2021'}
			],
			dialogsData:[
				{id: 1, name: 'Tony'},
				{id: 2, name: 'Cap'},
				{id: 3, name: 'Natasha'}
			],
			newMessageBody: ''
		},
		nav: {
			friendsData: [
				{id: 1, name: 'Peter'},
				{id: 2, name: 'Hulk'},
				{id: 3, name: 'Thor'}
			]
		}
	},
	_callSubscriber () {
		console.log('state has been changed')
	},
	getState() {
		return this._state
	},
	subscribe (observer) {
		this._callSubscriber = observer
	},
	/*_addPost () {
		let newPost = {
			id:5,
			message: this._state.profile.newPostText, 
			countlikes: '0'
		};
		this._state.profile.postData.push(newPost);
		this._state.profile.newPostText = '';
		this._callSubscriber(this._state);
	},
	_updateNewPostText (newText) {
		this._state.profile.newPostText = newText;
		this._callSubscriber(this._state);    
	},*/
	dispatch(action) {  
		this._state.profile = profileReducer(this._state.profile, action);
		this._state.dialogs = dialogsReducer(this._state.dialogs, action);
		this._state.nav = navReducer(this._state.nav, action);
		
		this._callSubscriber(this._state);
	}    
}

window.store = store;

export default store;