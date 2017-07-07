import TableAddressesComponent from './tableAddressesComponent';
import {connect} from 'react-redux';
import {toggleForm, passAddressForm} from '../../actions/formAdd';
import {deleteAddressFromFirebase} from '../../actions/addresses';

const mapStateToProps = (state, ownProps) => {
    return {
        addresses: state.addresses
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickEdit: (id, address) => {
            dispatch(passAddressForm(id, address));
        },
        onClickDelete: (address) => {
            if (confirm('Are you sure you want to delete this address')) {
                dispatch(deleteAddressFromFirebase(address));
            }
        }
    };
};

const TableAddresses = connect(mapStateToProps, mapDispatchToProps)(TableAddressesComponent);

export default TableAddresses;
