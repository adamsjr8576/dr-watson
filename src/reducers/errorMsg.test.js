import { errorMsg } from '../reducers/errorMsg';

describe('errorMsg reducer', () => {

  it('should return the initial state of an empty string as default', () => {
    const expected = ''
    const result = errorMsg(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state with an error message', () => {
    const mockState = ''
    const mockErrorMsg = 'you have done something terribly wrong';
    const mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: mockErrorMsg
    }
    const expected = mockErrorMsg;
    const result = errorMsg(mockState, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return the state with an empty string', () => {
    const mockState = 'you have done something terribly wrong'
    const mockAction = {
      type: 'CLEAR_ERROR'
    }
    const expected = '';
    const result = errorMsg(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
