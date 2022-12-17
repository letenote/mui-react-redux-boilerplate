import React, { memo, useContext, Fragment, lazy, Suspense } from 'react';
import { LayoutContext } from '../../Config/Root';

const List = lazy(() => import('@mui/material/List'));
const ListItem = lazy(() => import('@mui/material/ListItem'));
const ListItemButton = lazy(() => import('@mui/material/ListItemButton'));
const ListItemIcon = lazy(() => import('@mui/material/ListItemIcon'));
const ListItemText = lazy(() => import('@mui/material/ListItemText'));
const InboxIcon = lazy(() => import('@mui/icons-material/MoveToInbox'));
const MailIcon = lazy(() => import('@mui/icons-material/Mail'));

const MenuList = () => {
  const { collapsed } = useContext(LayoutContext);
  return (
    <Fragment>
      <Suspense fallback={'loading menu list'}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  height: 48,
                  justifyContent: !collapsed ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: !collapsed ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ display: !collapsed ? 'block' : 'none', whiteSpace: 'nowrap' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Suspense>
    </Fragment>
  )
};

export default memo(MenuList);