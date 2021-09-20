import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getResumeDetails } from "../../../actions/resumeActions";
import Loading from "../../Loading";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import ResumeTemplate from "./ResumeTemplate/ResumeTemplate";
import "./ResumePage.scss";

const ResumePage = () => {
  const dispatch = useDispatch();

  const resumeDetails = useSelector((state) => state.resumeDetails);
  const { loading, resume, error } = resumeDetails;

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure?")) {
  //     dispatch(deleteNoteAction(id));
  //   }
  // };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const noteCreate = useSelector((state) => state.noteCreate);
  // const { success: successCreate } = noteCreate;

  // const noteUpdate = useSelector((state) => state.noteUpdate);
  // const { success: successUpdate } = noteUpdate;

  // const noteDelete = useSelector((state) => state.noteDelete);
  // const {
  //   loading: loadingDelete,
  //   error: errorDelete,
  //   success: successDelete,
  // } = noteDelete;

  const history = useHistory;

  useEffect(() => {
    dispatch(getResumeDetails());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    // successCreate,
    history,
    userInfo,
    // successUpdate,
    // successDelete,
  ]);

  return (
    <div className="main-container">
      <LeftSidebar />
      <ResumeTemplate
      // personalInfoDetail={personalInfoDetails}
      // educationInfoDetails={educationInfoDetails}
      />
    </div>
  );
};

export default ResumePage;
