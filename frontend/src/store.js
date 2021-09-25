import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllUsersReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  // noteCreateReducer,
  // noteDeleteReducer,
  resumeListReducer,
  resumeSaveReducer,
  // noteShareReducer,
  // noteUpdateReducer,
  // sharedNoteListReducer,
} from "./reducers/resumeReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: getAllUsersReducer,
  userUpdate: userUpdateReducer,
  // noteList: resumeListReducer,
  saveResume: resumeSaveReducer,
  // noteUpdate: noteUpdateReducer,
  // noteDelete: noteDeleteReducer,
  // noteShare: noteShareReducer,
  // sharedNotesList: sharedNoteListReducer,
  resumeDetails: resumeListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
