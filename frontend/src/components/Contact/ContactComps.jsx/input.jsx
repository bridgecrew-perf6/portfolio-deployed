import React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Inputs({
  onChangeName,
  onChangeEmail,
  onChangeMessage,
  name,
email,
message
}) {
  return (
    <Stack
      alignItems="center"
      spacing={3}
      sx={{
        
        "& textarea": { background: "transparent", color: 'white' },
        "& textarea:hover": {
          borderBottom: "2px solid white !important",
        },
        "& textarea:focus-visible": {
          outline: "none",
          borderBottom: "2px solid hotpink !important",
        },
        "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
          width: "50%",
        },
        "& label, input": {color: 'white'},
        "& ::-webkit-input-placeholder": {color: 'white'}
      }}
    >
      <TextField
        id="standard-basic"
        label={`Your Name`}
        variant="standard"
        onChange={onChangeName}
        value={name}
      />
      <TextField
        id="standard-basic"
        label={"Email"}
        variant="standard"
        onChange={onChangeEmail}
        value={email}
      />
      <TextareaAutosize
        aria-label="minimum height"
        maxRows={3}
        placeholder={"Your message"}
        style={{
          border: "none",
          borderBottom: "1px solid rgb(147 138 138 / 85%)",
          width: "50%",
          marginTop: "3%",
        }}
        value={message}
        onChange={onChangeMessage}
      />
    </Stack>
  );
}
