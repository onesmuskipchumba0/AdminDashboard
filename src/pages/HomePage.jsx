import * as React from 'react';
import DrawerComponent from '../components/DrawerComponent';
import { Button, Drawer } from '@mui/material';
export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerComponent toggleDrawer={toggleDrawer}/>
    </Drawer>
    </>
  );
}