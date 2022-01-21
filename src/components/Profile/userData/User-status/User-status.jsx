import React from 'react';
import classes from './User-status.module.css';
export default class UserStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.uploadStatus(this.state.status);
	}
	onChangeStatus= (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
	componentDidUpdate(prevProps) {
    // Защита от перерисовки статуса, если он не был изменен
    if ( prevProps.status !== this.props.status ) {
      console.log('change status');
      this.setState({
        status: this.props.status
      })
    }    
  }

	render() {
		return (
			<div className={classes['user-status']}>
				{!this.state.editMode
					&&         
					<div 
						onDoubleClick={this.activateEditMode}
						className={classes['user-status__field']}>
						{this.props.status}
					</div>
				}
				{this.state.editMode
					&&         
					<div className={classes['user-status__edit']}>
						<input 
							className={classes['user-status__input']}
							autoFocus={true} 
							onBlur={this.deactivateEditMode}
							onChange={this.onChangeStatus} 
							value={this.state.status} type="text"
						/>
					</div>
				}
			</div>
		)
	}
}