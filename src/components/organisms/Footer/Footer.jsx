//mui
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

//text
import { text } from './Footer.js';


function SvgIconArrowFooter(props) {
    return (
        <SvgIcon {...props}>
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11284 4.37056C8.11284 4.09442 7.88898 3.87056 7.61284 3.87056L3.11284 3.87056C2.83669 3.87056 2.61284 4.09442 2.61284 4.37056C2.61284 4.64671 2.83669 4.87056 3.11284 4.87056L7.11284 4.87056L7.11284 8.87056C7.11284 9.14671 7.33669 9.37056 7.61284 9.37056C7.88898 9.37056 8.11284 9.14671 8.11284 8.87056L8.11284 4.37056ZM0.353516 11.6299L0.707069 11.9834L7.96639 4.72412L7.61284 4.37056L7.25928 4.01701L-3.77595e-05 11.2763L0.353516 11.6299Z" fill="currentColor" />
            </svg>
        </SvgIcon>
    );
}

function SocialLink({ social, where }) {
    const theme = useTheme();
    
    return (
        <Link href={where} style={{ display: 'flex', gap: '.5rem', 'alignItems': 'center', }} color={theme.vars.palette.text.secondary} underline='none' aria-label={`go to ${social}`}>
            <Typography variant='h5'>{social}</Typography>
            <SvgIconArrowFooter sx={{ inlineSize: { xs: '.5rem', md: '1rem' }, color: theme.vars.palette.text.secondary }} />
        </Link>
    )
}

export default function Footer() {
    const links = text.map(item => (
        <li key={item.id}>
            <SocialLink social={item.title} where={item.link}></SocialLink>
        </li>
    ));

    return <ul style={{ display: 'flex', justifyContent: 'space-between', }}>{links}</ul>
}