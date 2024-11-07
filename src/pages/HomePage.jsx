import * as React from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { Button, Drawer, } from '@mui/material';
import Nav from '../components/Nav';
import { MenuOpen } from '@mui/icons-material';
export default function HomePage() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <>
      <Button onClick={toggleDrawer(true)} className='text-end'><MenuOpen/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
      </Drawer>
      <Nav/>
    </>
  );
}