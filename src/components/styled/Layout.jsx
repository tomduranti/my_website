//mui
import { styled } from '@mui/material/styles';

const CustomSection = styled('section')(({ theme, dir, justify }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5.5rem',
    marginBlockStart: '5rem',
    marginBlockEnd: '6.5rem',
    [theme.breakpoints.up('md')]: {
      marginBlockStart: '6.5rem',
      marginBlockEnd: '10.75rem',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: dir,
      justifyContent: justify,
    },
  }));

export default function CustomSectionLayout({ children, dir, justify }) {
    return <CustomSection dir={dir} justify={justify} >{children}</CustomSection>;
}