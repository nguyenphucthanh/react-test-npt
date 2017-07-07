import AddressManagerComponent from "./addressManagerComponent";
import { newAddressForm } from "../../actions/formAdd";
import { showModal } from '../../actions/mapAdd';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNew: () => {
      dispatch(newAddressForm());
    },
    onClickOpenMap: () => {
      dispatch(showModal());
    }
  };
};

const AddressManager = connect(mapStateToProps, mapDispatchToProps)(
  AddressManagerComponent
);

export default AddressManager;
