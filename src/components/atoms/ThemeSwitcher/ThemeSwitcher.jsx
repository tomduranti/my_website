//mui
import { useColorScheme } from '@mui/material/styles';

//style
import theme from '../../../theme/theme.jsx';

export default function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const sun = theme.colorSchemes[mode]?.palette.icon.main;

    const handleClick = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    return (
        <button type='button' style={{ lineHeight: 0 }} onClick={handleClick} aria-label='light/dark mode button'>
            <svg width='24' height='24' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' >
                <circle cx='4.2' cy='7.5' r='3.5' fill={mode === 'light' ? sun : 'none'} stroke={sun} strokeWidth='1' />
                <path
                    d='M 7.5 1.5 A 6 6 0 0 1 7.5 13.5 A 8.5 8.5 0 0 0 7.5 1.5 Z'
                    fill={mode === 'light' ? 'none' : sun} stroke={sun} strokeWidth='1' strokeLinejoin='miter' strokeMiterlimit='10'
                />
            </svg>
        </button>
    );
}