'use client'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import BurgMenu from "../icons/BurgMenu";
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import s from './CustomDrawler.module.css'
import Link from 'next/link';

const drawerWidth = 240;

const CustomDrawer = ({ navigationConfig = [] }) => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={s.customDrawer}>
            <ClickAwayListener onClickAway={() => {
                setOpen(false);
            }}>
                <div>
                    <IconButton onClick={() => setOpen(!open)} style={{ position: 'fixed', top: 40, left: 20, zIndex: 1000000 }}>
                        {open ? <ChevronLeftIcon /> : <BurgMenu />}
                    </IconButton>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                paddingTop: '64px',
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <List>
                            {navigationConfig.map(({ link, title } = {}) => (
                                <ListItem button key={title}>
                                  <Link href={link}>{title}</Link>
                                </ListItem>
                                ))}

                        </List>
                        <Divider />
                        <List>
                            {['+3805041111721','+491754068143', 'обратный звонок'].map((text, index) => (
                                <ListItem button key={text}>
                                    {/* <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon> */}
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default CustomDrawer;
