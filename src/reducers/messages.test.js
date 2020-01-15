import { messages } from '../reducers/messages';

describe('messages reducer', () => {

  it('should return the initial state of an empty array as default', () => {
    const expected = []
    const result = messages(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state with a new message', () => {
    const mockState = [{message: 'Hello old friend'}];
    const message = 'We meet again...';
    const mockAction = {
      type: 'ADD_MESSAGE',
      message
    }
    const expected = [{message: 'Hello old friend'}, {message: 'We meet again...'}];
    const result = messages(mockState, mockAction);

    expect(result).toEqual(expected);
  });

  it('should clear the state', () => {
    const mockState = [{message: 'Hello old friend'}];
    const mockAction = {
      type: 'CLEAR_MESSAGES'
    }
    const expected = [];
    const result = messages(mockState, mockAction);

    expect(result).toEqual(expected);
  });

});
