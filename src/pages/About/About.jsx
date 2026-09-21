//react
import { useLocation } from 'react-router';

//mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

//custom components
import CustomSectionLayout from '../../components/styled/Layout.jsx';
import SEO from '../../components/atoms/seo/seo.jsx';

//text
import { icons, text } from './About.js';


export default function About() {

    const skills = icons.map(item => (
        <Grid key={item.id} sx={{
            flexBasis: '20%',
            maxWidth: '17%',
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'start', }
        }} >
            <Tooltip title={item.name} enterTouchDelay={100} leaveTouchDelay={50} arrow>
                <Box component='img' sx={{ inlineSize: { md: '72px', lg: '76px', } }} src={item.icon} alt={item.name}></Box>
            </Tooltip>
        </Grid>
    ));

    const certifications = text.certifications.certificationList.map(item => (
        <li key={item.id}>
            <Link href={item.link} aria-label={`${item.title} certification`}>
                <Typography variant='h4'>{item.title}</Typography>
            </Link>
        </li>
    ));

    const paragraphs = text.about.paragraph.map(paragraph => (
        <li key={paragraph.id}>
            <Typography variant='body1'>{paragraph.text}</Typography>
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
                <Typography sx={{ inlineSize: { lg: '50%', }, }} variant='h3'>{text.about.title}</Typography>
                <Stack sx={{ alignContent: 'center', inlineSize: { lg: '50%', }, }} spacing={4}>
                    <Box component='ul' sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '2rem', }, }}>{paragraphs}</Box>
                </Stack>

            </Stack>

            <Stack sx={{
                flexDirection: { lg: 'row' },
                justifyContent: { lg: 'space-between' },
                inlineSize: { lg: '80%' },
                alignItems: { lg: 'baseline' },
                alignSelf: { lg: 'center' },
            }} spacing={{ xs: 5, lg: 0, }}>
                <Typography sx={{ inlineSize: { lg: '50%', }, }} variant='h3'>{text.skills.title}</Typography>
                <Grid container columns={5} rowSpacing={{ xs: '1.688rem', md: '2rem' }} spacing={1} sx={{ alignSelf: { md: 'center', }, justifyContent: 'center', maxInlineSize: { md: '80%', lg: '50%', }, }}>{skills}</Grid>
            </Stack>

            <Stack sx={{
                inlineSize: { lg: '80%' },
                alignSelf: { lg: 'center' },
            }} spacing={4}>
                <Typography variant='h3'>{text.certifications.title}</Typography>
                <Box component='ul' sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '.5rem', md: '1.3rem', }, }}>{certifications}</Box>
            </Stack>
        </>;

    const { pathname } = useLocation();

    return (
        <>
            <SEO
                title='About me'
                description='Tom Duranti, frontend developer. Skills in React, JavaScript, and MUI, plus certifications and background'
                pathname={pathname}
            />
            <CustomSectionLayout>{children}</CustomSectionLayout>
        </>
    );
}