import axios from "axios";
import {
  RESUME_LIST_FAIL,
  RESUME_SAVE_FAIL,
  RESUME_SAVE_REQUEST,
  RESUME_SAVE_SUCCESS,
  RESUME_LIST_SUCCESS,
  RESUME_LIST_REQUEST,
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
  ({
    personalInfo,
    experienceInfo,
    educationInfo,
    projectsInfo,
    skillsInfo,
    toolsAndTechInfo,
    achievementsInfo,
  }) =>
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
          educationInfo,
          projectsInfo,
          skillsInfo,
          toolsAndTechInfo,
          achievementsInfo,
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
