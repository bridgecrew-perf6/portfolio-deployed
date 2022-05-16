import React, { useState } from "react";
import Inputs from "./ContactComps.jsx/input";
import AbsoluteWrapper from "../AbsoluteWrapper";
import Button from "@mui/material/Button";

import axios from "axios";

// css
import "./contact.scss";

export default function Contactme() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [resetInputs, setResetInputs] = useState("");

  const handleSubmit = async () => {
    // console.log("form submitted");
    // console.log("data is", data);
    if (!data.email || !data.name || !data.message) return;
    const response = await axios.post("/message/send", data);

    setData({ name: "", email: "", message: "" });
    setResetInputs("");
  };

  // console.log("test", data);

  return (
    <AbsoluteWrapper>
      <div className="conactContainer vh-100 overflow-hidden text-white">
        <p className="display-1 text-center pt-5">Contact me</p>
        <Inputs
          //pass the values here to reset the inputs
          name={data.name}
          email={data.email}
          message={data.message}
          onChangeName={(e) => setData({ ...data, name: e.target.value })}
          onChangeEmail={(e) => setData({ ...data, email: e.target.value })}
          onChangeMessage={(e) => setData({ ...data, message: e.target.value })}
        />
        <div className="text-start mt-5 w-50 mx-auto">
          <Button
            variant="contained"
            style={{ width: "fit-content" }}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      </div>
    </AbsoluteWrapper>
  );
}
