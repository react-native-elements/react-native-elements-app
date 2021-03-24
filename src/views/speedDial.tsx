import React from 'react';
import { Header } from './header';
import { SpeedDial } from 'react-native-elements';

export default () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Header title="Speed Dial" />
      <SpeedDial
        open={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onChange={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Added Event')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Event')}
        />
      </SpeedDial>
    </>
  );
};
