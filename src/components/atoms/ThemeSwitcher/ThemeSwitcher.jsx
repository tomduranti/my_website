//mui
import { useColorScheme, useTheme } from '@mui/material/styles';


export default function ThemeSwitcher() {
    const { mode, systemMode, setMode } = useColorScheme();
    const theme = useTheme();
    const resolvedMode = (mode === 'system' ? systemMode : mode) ?? 'light';
    const isSun = resolvedMode === 'light';
    const toggledMode = theme.vars.palette.icon.main;
    const handleClick = () => {
        setMode(isSun ? 'dark' : 'light');
    }

    return (
        <button type='button' style={{ lineHeight: 0 }} onClick={handleClick} aria-label='light/dark mode button'>
            <svg width='24' height='24' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' >
                <circle cx='4.2' cy='7.5' r='3.5' fill={isSun ? toggledMode : 'none'} stroke={toggledMode} strokeWidth='1' />
                <path
                    d='M 7.5 1.5 A 6 6 0 0 1 7.5 13.5 A 8.5 8.5 0 0 0 7.5 1.5 Z'
                    fill={isSun ? 'none' : toggledMode} stroke={toggledMode} strokeWidth='1' strokeLinejoin='miter' strokeMiterlimit='10'
                />
            </svg>
        </button>
    );
}