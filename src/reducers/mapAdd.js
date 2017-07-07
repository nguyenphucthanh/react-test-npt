import { SHOW_MODAL, HIDE_MODAL } from "../actions/mapAdd";

const mapAdd = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        showModal: true
      };
    case HIDE_MODAL:
      return {
        showModal: false
      };
    default:
      return (state = {
        showModal: false
      });
  }
};

export default mapAdd;
