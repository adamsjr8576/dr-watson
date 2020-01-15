import * as actions from '../actions';

describe('actions', () => {

  it('should have a type of CREATE_USER', () => {
    const user = {
      id: 1231312,
      firstName: 'John',
      lastName: 'Adams',
      feeling: 'just great'
    }
    const expectedAction = {
      type: 'CREATE_USER',
      user
    }
    const result = actions.createUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER',
    }
    const result = actions.removeUser();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const errorMsg = 'This is not right';
    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg
    }
    const result = actions.hasErrored(errorMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_ERROR', () => {
    const expectedAction = {
      type: 'CLEAR_ERROR'
    }
    const result = actions.clearError();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_MESSAGE', () => {
    const message = 'Hello, I am Dr. Watson';
    const isUser = true;
    const expectedAction = {
      type: 'ADD_MESSAGE',
      message,
      isUser
    }
    const result = actions.addMessage(message, isUser);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_MESSAGES', () => {
    const expectedAction = {
      type: 'CLEAR_MESSAGES'
    }
    const result = actions.clearMessages();

    expect(result).toEqual(expectedAction);
  });

});
