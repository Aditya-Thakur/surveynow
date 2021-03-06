import { UserActionTypes as Types } from "../constants/userActionTypes";

export const userActions = {

    addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),
  
    updateProfileImage: (image) => ({ type: Types.UPDATE_PROFILE_PICTURE, payload: { image } }),
  
    updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),
  
    formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),
  
    login: (user) => ({ type: Types.LOGIN, payload: { user } }),

    logout: (user) => ({ type: Types.LOGOUT, payload: { user } })
  }