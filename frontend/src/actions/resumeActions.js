import axios from "axios";
import {
  RESUME_LIST_FAIL,
  RESUME_SAVE_FAIL,
  RESUME_SAVE_REQUEST,
  RESUME_SAVE_SUCCESS,
} from "../constants/resumeConstants";
import { RESUME_LIST_SUCCESS } from "../constants/resumeConstants";
import { RESUME_LIST_REQUEST } from "../constants/resumeConstants";
import {
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_CREATE_FAIL,
  NOTES_UPDATE_REQUEST,
  NOTES_UPDATE_SUCCESS,
  NOTES_UPDATE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_SHARE_REQUEST,
  NOTES_SHARE_SUCCESS,
  NOTES_SHARE_FAIL,
  SHARED_NOTES_LIST_REQUEST,
  SHARED_NOTES_LIST_SUCCESS,
  SHARED_NOTES_LIST_FAIL,
} from "../constants/resumeConstants";

export const getResumeDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RESUME_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/resume", config);

    dispatch({
      type: RESUME_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESUME_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const saveResumeAction =
  ({ personalInfo, experienceInfo }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: RESUME_SAVE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/resume/update-resume`,
        {
          personalInfo,
          experienceInfo,
        },
        config
      );

      dispatch({
        type: RESUME_SAVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RESUME_SAVE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateNoteAction =
  (id, title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: NOTES_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        {
          title,
          content,
          category,
        },
        config
      );

      dispatch({
        type: NOTES_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NOTES_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteNoteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTES_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
      `/api/notes/${id}`,

      config
    );

    dispatch({
      type: NOTES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const noteShareAction =
  (noteId, userIds) => async (dispatch, getState) => {
    try {
      dispatch({ type: NOTES_SHARE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/notes/share`,
        {
          noteId: noteId,
          userIds: userIds,
        },
        config
      );

      dispatch({
        type: NOTES_SHARE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NOTES_SHARE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listSharedNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SHARED_NOTES_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/notes/getSharedNotes", config);

    dispatch({
      type: SHARED_NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHARED_NOTES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
