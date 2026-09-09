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

function HamburgerOrRegularLink({ nameOfThePage, path, fn }) {
    return (
        <li>
            <NavLink to={path} style={({ isActive }) => ({ color: isActive ? theme.vars.palette.text.primary : theme.vars.palette.text.contrastText })} onClick={fn}>
                <Typography variant='h2'>{nameOfThePage}</Typography>
            </NavLink>
        </li>
    )
}

export default function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);

    const regularMenu = useMediaQuery((theme) => theme.breakpoints.up('md'));

    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            {
                regularMenu
                    ? null
                    : (
                        <button className={styles.hamburger} type='button' onClick={handleClick}>
                            <span className={`${styles.hamburger_inner} ${isOpen ? styles['change_hamburger_inner'] : null}`}></span>
                        </button>
                    )
            }

            <nav className={regularMenu ? null : `${styles.topnav_link_hamburger} ${isOpen && styles['topnav_hamburger_isopen']}` } >
                <Box component='ul' sx={{ display: { md: 'flex', }, gap: { md: '1.5rem', }, }}>
                    <HamburgerOrRegularLink nameOfThePage='home' path='/' fn={handleClick} />
                    <HamburgerOrRegularLink nameOfThePage='about' path='about' fn={handleClick} />
                    <HamburgerOrRegularLink nameOfThePage='projects' path='projects' fn={handleClick} />
                </Box>
            </nav>
        </>
    );
}