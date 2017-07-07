import MapAddComponent from "./mapAddComponent";
import { connect } from "react-redux";
import { insertAddressToFirebase } from '../../actions/addresses';
import { hideModal } from '../../actions/mapAdd';

const mapStateToProps = (state, ownProps) => {
  return {
    showModal: state.mapAdd.showModal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (address) => {
      dispatch(insertAddressToFirebase(address));
    },
    onHide: () => {
        dispatch(hideModal());
    }
  };
};

const MapAdd = connect(mapStateToProps, mapDispatchToProps)(MapAddComponent);

export default MapAdd;
