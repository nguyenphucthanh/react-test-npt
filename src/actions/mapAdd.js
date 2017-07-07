export const SHOW_MODAL = 'SHOW_MODAL';

export function showModal() {
    return {
        type: SHOW_MODAL,
        showModal: true
    };
}

export const HIDE_MODAL = 'HIDE_MODAL';

export function hideModal() {
    return {
        type: HIDE_MODAL,
        showModal: false
    };
}