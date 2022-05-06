import { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

function ProtectedRoutes(props) {
  const { Component } = props;
  const navigate = useNavigate();
  const auth = useAuth();
  console.log("pppp", auth?.user);
  useEffect(() => {
    if (!auth?.user) {
      navigate("/signin");
    }
  }, []);

  return (
    <Fragment>
      {
        <div>
          <Component />
        </div>
      }
    </Fragment>
  );
}

export default ProtectedRoutes;
