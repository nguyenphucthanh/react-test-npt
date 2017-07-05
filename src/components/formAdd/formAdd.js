import {connect} from 'react-redux';
import {updateAddressToFireBase, insertAddressToFirebase} from '../../actions/addresses';
import {hideForm} from '../../actions/formAdd';
import FormAddComponent from './formAddComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        addressKey: state.formAdd.id,
        address: state.formAdd.address,
        showModal: state.formAdd.showModal
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (id, address) => {
            if (id) {
                dispatch(updateAddressToFireBase(id, address));
            } else {
                dispatch(insertAddressToFirebase(address));
            }
        },
        onHide: () => {
            dispatch(hideForm());
        }
    };
};

const FormAdd = connect(mapStateToProps, mapDispatchToProps)(FormAddComponent);

export default FormAdd;