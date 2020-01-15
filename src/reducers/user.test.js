import { user } from '../reducers/user';

describe('user reducer', () => {
  it('should return the initial state of null as default', () => {
    const expected = null
    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the state with a user', () => {
    const mockState = null
    const mockUser = {
        id: 1231312,
        firstName: 'John',
        lastName: 'Adams',
        feeling: 'just great'
    };
    const mockAction = {
      type: 'CREATE_USER',
      user: mockUser
    }
    const expected = mockUser;
    const result = user(mockState, mockAction);

    expect(result).toEqual(expected);
  });

  it('should remove the user and return null', () => {
    const mockState = {
        id: 1231312,
        firstName: 'John',
        lastName: 'Adams',
        feeling: 'just great'
    }
    const mockAction = {
      type: 'REMOVE_USER',
    }
    const expected = null;
    const result = user(mockState, mockAction);

    expect(result).toEqual(expected);
  });
});
