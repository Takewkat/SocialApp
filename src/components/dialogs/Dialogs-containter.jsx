import Dialogs from './Dialogs';
import {connect} from 'react-redux';


function mapStateToProps (state) {

  return {
    dialogsData: state.dialogsPage.dialogsData,
  }
}

let DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
