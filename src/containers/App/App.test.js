import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { removeUser, hasErrored, clearMessages, clearError } from '../../actions';
import { endConversation } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App component', () => {
  const mockRemoveUser = jest.fn();
  const mockHasErrored = jest.fn();
  const mockClearMessages = jest.fn();
  const mockClearError = jest.fn();
  let wrapper;

  beforeEach(() => {
    const mockUser = {
      id: 1568665187737,
      firstName: "Travis",
      lastName: "Rollins",
      feeling: "tired"
    };

    wrapper = shallow(<App
        user={mockUser}
        removeUser={mockRemoveUser}
        hasErrored={mockHasErrored}
        clearMessages={mockClearMessages}
        clearError={mockClearError}
    />);
  });

  it('should match the snapshot with a ChatBox if the user has signed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with a WelcomeModal if the user hasn't signed in yet", () => {
    const wrapper = shallow(<App
      user={null}
      removeUser={mockRemoveUser}
      hasErrored={mockHasErrored}
      clearError={mockClearError}
    />);

    expect(wrapper).toMatchSnapshot();
  });


  it('should call endConversation, removeUser and clearError if someone signs out', async () => {
    await wrapper.instance().signOut();

    expect(endConversation).toHaveBeenCalled();
    expect(mockRemoveUser).toHaveBeenCalled();
    expect(mockClearMessages).toHaveBeenCalled();
    expect(mockClearError).toHaveBeenCalled();
  });

  it('should call hasErrored if endCoversation does not resolve when a user signs out', async () => {
    endConversation.mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    await wrapper.instance().signOut();

    expect(mockHasErrored).toHaveBeenCalledWith('fetch failed.');
  });
});

describe('mapStateToProps', () => {
  it('should return an object with the user information', () => {
    const mockUser = {
      id: 1568665187737,
      firstName: "Travis",
      lastName: "Rollins",
      feeling: "tired"
    };

    const mockState = {
      user: mockUser,
      messages: [{
        message: 'Hi there, my name is Dr. Watson. I understand that you have been feeling happy. That is super exciting to hear!',
        isUser: false,
      }],
      errorMsg: ''
    };
    const expected = {
      user: mockUser
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with a removeUser action when removeUser is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeUser();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeUser();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a hasErrored action when hasErrored is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = hasErrored('fetch failed');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.hasErrored('fetch failed');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a clearMessages action when clearMessages is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearMessages();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.clearMessages();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a clearError action when clearError is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearError();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.clearError();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
