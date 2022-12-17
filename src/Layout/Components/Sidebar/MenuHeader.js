import React, { Fragment, memo } from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MenuHeader = () => {
  return (
    <Fragment>
      <DrawerHeader>
        LOGO
      </DrawerHeader>
      <Divider />
    </Fragment>
  )
};

export default memo(MenuHeader);