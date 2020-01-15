export const errorMsg = (state='', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.errorMsg;

    case 'CLEAR_ERROR':
      return '';
      
    default:
      return state;
  }
}
