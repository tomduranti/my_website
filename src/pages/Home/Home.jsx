//mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//custom components
import CustomSectionLayout from '../../components/styled/Layout.jsx';
import SEO from '../../components/atoms/seo/seo.jsx';

//assets
import square from '../../assets/Figures/square.png';

//text
import { text } from './Home.js';


export default function Home() {

    const children =
        <>
            <Stack sx={{ alignItems: 'end', marginInlineEnd: { xs: '3.375rem', md: '5rem', lg: '11rem', }, }} spacing={1}>
                <Box component='img' src={square} alt='' sx={{ inlineSize: { xs: '12.5rem', md: '15rem' }, blockSize: { xs: '12.5rem', md: '15rem' }, background: '#B2ACAC', }}></Box>
                <Typography variant='h1' sx={{ paddingInlineEnd: { xs: '.763rem', md: '1.5rem' }, }}>{text.myName}</Typography>
            </Stack>

            <Stack sx={{ marginInlineStart: { md: '5rem', lg: '11rem', }, }} spacing={1}>
                <Typography variant='h3'>{text.jobTitle}</Typography>
                <Typography sx={{ maxInlineSize: { xs: '31ch', md: '24ch', lg: '21ch', }, }} variant='subtitle1'>{text.jobDescription}</Typography>
            </Stack>
        </>;

    return (
        <>
            <SEO
                title='About — Tom Duranti'
                description='Tom Duranti — frontend developer. Building responsive, scalable web apps'
            />
            <CustomSectionLayout>{children}</CustomSectionLayout>
        </>
    );
}