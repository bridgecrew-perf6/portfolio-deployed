import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function DividerStack({ children }) {
  return (
    <Stack
      direction="row"
      // divider={<Divider orientation="vertical" flexItem />}
      spacing={4}
      sx={{ flexWrap: "wrap" }}
    >
      {children}
    </Stack>
  );
}
