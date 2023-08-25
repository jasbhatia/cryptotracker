import React from 'react'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, themeProvider } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import Grid from '../grid/Grid';
import './Tabs.css';
import List from '../list/List';

 function TabsComponent({coin}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

     const theme = createTheme({
         pallete: {
             primary: {
                 main: "#3a80e9"
             },
         },
     });


     const style = {
         color: "var(--white)",
         width: "50vw",
         fontSize: "1.2rem",
         fontWeight: 600,
         fontFamily: "Inter",
         textTransform:"capitalize",
     }
     
     
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
                      <Tab label="Grid" value="grid" sx={ style} />
            <Tab label="List" value="list" sx={ style} />
            
          </TabList>
        </div>
        <TabPanel value="grid"><div className='grid-flex'>{coin.map((item, i) => {
          return <Grid coin={item} key={i} />
        }) }</div></TabPanel>
        <TabPanel value="list"><table className='list-table'>{coin.map((item,i) => {
          return <List coin={ item} key={i} />
        }) }</table></TabPanel>
       
      </TabContext>
    </ThemeProvider>
  );
}

export default TabsComponent;

