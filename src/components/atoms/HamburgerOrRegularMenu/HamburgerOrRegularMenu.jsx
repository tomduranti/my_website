//react
import { useState } from 'react';
import { NavLink } from 'react-router';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

//style
import theme from '../../../theme/theme.jsx';
import styles from './_HamburgerOrRegularMenu.module.css';

//text
import { text } from './HamburgerOrRegularMenu.js';


export default function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);
    const regularMenu = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const handleClick = () => {
        setOpen(!isOpen);
    }
    const hamburgerOrRegularLink = text.map(item => {
        return (
            <li key={item.id}>
                <NavLink to={item.link} style={({ isActive }) => ({ color: isActive ? theme.vars.palette.text.primary : theme.vars.palette.text.contrastText })} onClick={handleClick}>
                    <Typography variant='h2'>{item.title}</Typography>
                </NavLink>
            </li>
        );
    })

    return (
        <>
            {
                regularMenu
                    ? null
                    : (
                        <button className={styles.hamburger} type='button' onClick={handleClick} aria-label='hamburger menu button'>
                            <span className={`${styles.hamburger_inner} ${isOpen ? styles.change_hamburger_inner : null}`}></span>
                        </button>
                    )
            }

            <nav className={regularMenu ? null : `${styles.topnav_link_hamburger} ${isOpen && styles.topnav_hamburger_isopen}`} >
                <Box component='ul' sx={{ display: { md: 'flex', }, gap: { md: '1.5rem', }, }}>{hamburgerOrRegularLink}</Box>
            </nav>
        </>
    );
}