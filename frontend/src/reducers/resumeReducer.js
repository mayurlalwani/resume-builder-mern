import {
  RESUME_LIST_REQUEST,
  RESUME_LIST_SUCCESS,
  RESUME_LIST_FAIL,
  RESUME_SAVE_REQUEST,
  RESUME_SAVE_SUCCESS,
  RESUME_SAVE_FAIL,
} from "../constants/resumeConstants";

export const resumeListReducer = (state = { resumeDetails: [] }, action) => {
  switch (action.type) {
    case RESUME_LIST_REQUEST:
      return {
        loading: true,
      };
    case RESUME_LIST_SUCCESS:
      return {
        loading: false,
        allResumeDetails: action.payload,
      };
    case RESUME_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const resumeSaveReducer = (state = {}, action) => {
  switch (action.type) {
    case RESUME_SAVE_REQUEST:
      return {
        loading: true,
      };
    case RESUME_SAVE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case RESUME_SAVE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// export const noteUpdateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case NOTES_UPDATE_REQUEST:
//       return {
//         loading: true,
//       };
//     case NOTES_UPDATE_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };
//     case NOTES_UPDATE_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export const noteDeleteReducer = (state = {}, action) => {
//   switch (action.type) {
//     case NOTES_DELETE_REQUEST:
//       return {
//         loading: true,
//       };
//     case NOTES_DELETE_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };
//     case NOTES_DELETE_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//         success: false,
//       };

//     default:
//       return state;
//   }
// };

// export const noteShareReducer = (state = {}, action) => {
//   switch (action.type) {
//     case NOTES_SHARE_REQUEST:
//       return {
//         loading: true,
//       };
//     case NOTES_SHARE_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//       };
//     case NOTES_SHARE_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//         success: false,
//       };

//     default:
//       return state;
//   }
// };

// export const sharedNoteListReducer = (state = { sharedNotes: [] }, action) => {
//   switch (action.type) {
//     case SHARED_NOTES_LIST_REQUEST:
//       return {
//         loading: true,
//       };
//     case SHARED_NOTES_LIST_SUCCESS:
//       return {
//         loading: false,
//         sharedNotes: action.payload,
//       };
//     case SHARED_NOTES_LIST_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };
