import TableAddressesComponent from './tableAddressesComponent';
import {connect} from 'react-redux';
import {toggleForm, passAddressForm} from '../../actions/formAdd';

const mapStateToProps = (state, ownProps) => {
    return {
        addresses: state.addresses
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickEdit: (id, address) => {
            dispatch(passAddressForm(id, address));
        }
    };
};

const TableAddresses = connect(mapStateToProps, mapDispatchToProps)(TableAddressesComponent);

export default TableAddresses;
