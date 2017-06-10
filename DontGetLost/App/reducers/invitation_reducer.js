import {
  RECEIVE_INVITATION,
  RECEIVE_ALL_SENT_INVITATIONS,
  RECEIVE_ALL_RECEIVED_INVITATIONS,
  DELETE_INVITATION
  } from '../actions/invitation_actions';

import merge from 'lodash/merge';

// const nullInvitations = {invitation_key: {invitation:{}};
const nullInvitations = {};

const invitationReducer = (state = nullInvitations, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_INVITATION:
      return action.invitation;
    case RECEIVE_ALL_SENT_INVITATIONS:
      const sentInvitations = action.invitations;
      return sentInvitations;
    case RECEIVE_ALL_RECEIVED_INVITATIONS:
      const receivedInvitations = action.invitations;
      return receviedInvitations;
      // i know this is redundant, lmaaaoooo. Cant decide on state now
    case DELETE_INVITATION:
      console.log("DELETE");
      console.log(action.invitation);
      const newStore = merge({}, state);
      delete newStore[action.invitation.id];
      return newStore;
    default:
      return state;
  }
};

export default invitationReducer;
