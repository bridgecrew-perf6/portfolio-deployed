import * as React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';

// const icon = (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="svg" sx={{ width: 100, height: 100 }}>
//       <Box
//         component="polygon"
//         sx={{
//           fill: (theme) => theme.palette.common.white,
//           stroke: (theme) => theme.palette.divider,
//           strokeWidth: 1,
//         }}
//         points="0,100 50,00, 100,100"
//       />
//     </Box>
//   </Paper>
// );

export default function SimpleGrow({children}) {
  return (
    <Box sx={{ width: '50%' }} >
      {/* <Box  sx={{width: '100%'}}> */}
        <Grow in={true}>{children}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        {/* <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...( {timeout: 1000 })}
        >
          {children}
        </Grow> */}
      {/* </Box> */}
    </Box>
  );
}