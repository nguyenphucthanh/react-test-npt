import AddressManagerComponent from "./addressManagerComponent";
import { newAddressForm } from "../../actions/formAdd";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickNew: () => {
      dispatch(newAddressForm());
    }
  };
};

const AddressManager = connect(mapStateToProps, mapDispatchToProps)(
  AddressManagerComponent
);

export default AddressManager;
