import { useAuthState } from "@/src/context/auth";
import React from "react";
import "./bottom-sheet.module.scss";

const Tutorial = () => {
  const { isTutoring } = useAuthState();

  return (
    <div>
      <div className="tutorial-layout">hey</div>
    </div>
  );
};

export default Tutorial;
