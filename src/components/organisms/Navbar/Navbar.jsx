//react
import { NavLink } from 'react-router';
import HamburgerOrRegularMenu from '../../atoms/HamburgerOrRegularMenu/HamburgerOrRegularMenu.jsx';
import ThemeSwitcher from '../../atoms/ThemeSwitcher/ThemeSwitcher.jsx';

//mui
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';


export function SvgIconLogo(props) {
  return (
    <SvgIcon {...props}>
      <svg width='41' height='45' viewBox='0 0 41 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect y='16.9199' width='12.6922' height='28.0797' fill='currentColor' />
        <rect x='26' y='17' width='15' height='28' fill='currentColor' />
        <rect width='41' height='15' fill='currentColor' />
        <ellipse cx='12.6919' cy='30.9598' rx='10.9614' ry='14.0398' fill='currentColor' />
      </svg>
    </SvgIcon>
  );
}

export default function Navbar() {
  const theme = useTheme();

  return (
    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', }}>
      <HamburgerOrRegularMenu />
      <Stack direction='row' sx={{ alignItems: 'center', }} spacing={4}>
        <ThemeSwitcher />
        <NavLink to='/' style={{ zIndex: 3, lineHeight: 0, fontSize: 0, }} aria-label='logo'>
          <SvgIconLogo sx={{ inlineSize: { xs: '3rem', md: '3.5rem' }, blockSize: { xs: '3rem', md: '3.5rem' }, color: theme.vars.palette.icon.main, }} />
        </NavLink>
      </Stack>
    </Stack>
  );
}