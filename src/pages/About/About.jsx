//mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

//custom components
import CustomSectionLayout from '../../components/styled/Layout.jsx';

//text
import { icons, text } from './About.js';


export default function About() {

    const skills = icons.map((item, index) => (
        <Grid key={index} sx={{
            flexBasis: '20%',
            maxWidth: '17%',
            display: 'flex',
            justifyContent: {xs: 'center', lg: 'start', }
        }} >
            <Tooltip title={item.name} enterTouchDelay={100} leaveTouchDelay={50} arrow>
                <Box component='img' sx={{ inlineSize: { md: '72px', lg: '76px', }}} src={item.icon} alt={item.name}></Box>
            </Tooltip>
        </Grid>
    ));

    const certifications = text.certifications.certificationList.map((item, index) => (
        <li key={index}>
            <Link href={item.link}>
                <Typography variant="h4">{item.title}</Typography>
            </Link>
        </li>
    ));

    const children =
        <>
            <Stack sx={{
                flexDirection: { lg: 'row' },
                justifyContent: { lg: 'space-between' },
                inlineSize: { lg: '80%' },
                alignItems: { lg: 'baseline' },
                alignSelf: { lg: 'center' },
            }} spacing={5}>
                <Typography sx={{ inlineSize: { lg: '50%', }, }} variant="h3">{text.about.title}</Typography>
                <Typography sx={{ inlineSize: { lg: '50%', }, }} variant="body1">{text.about.paragraph}</Typography>
            </Stack>

            <Stack sx={{
                flexDirection: { lg: 'row' },
                justifyContent: { lg: 'space-between' },
                inlineSize: { lg: '80%' },
                alignItems: { lg: 'baseline' },
                alignSelf: { lg: 'center' },
            }} spacing={{ xs: 5, lg: 0, }}>
                <Typography sx={{ inlineSize: { lg: '50%', }, }} variant="h3">{text.skills.title}</Typography>
                <Grid container columns={5} rowSpacing={{ xs: '1.688rem', md: '2rem' }} spacing={1} sx={{ alignSelf: { md: 'center', }, justifyContent: 'center', maxInlineSize: { md: '80%', lg: '50%', }, }}>{skills}</Grid>
            </Stack>

            <Stack sx={{
                inlineSize: { lg: '80%' },
                alignSelf: { lg: 'center' },
            }} spacing={4}>
                <Typography variant="h3">{text.certifications.title}</Typography>
                <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '.5rem', md: '1.3rem', }, }}>{certifications}</Box>
            </Stack>
        </>;

    return <CustomSectionLayout>{children}</CustomSectionLayout>;
}