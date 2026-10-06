//react
import { useLocation } from 'react-router';

//mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//custom components
import CustomSectionLayout from '../../components/styled/Layout.jsx';
import SEO from '../../components/atoms/seo/seo.jsx';

//i18n
import { useTranslation } from 'react-i18next';

//assets
import square from '../../assets/Figures/square.png';


export default function Home() {

    const { t } = useTranslation();

    const children =
        <>
            <Stack sx={{ alignItems: 'end', marginInlineEnd: { xs: '3.375rem', md: '5rem', lg: '11rem', }, }} spacing={1}>
                <Box component='img' src={square} alt='' sx={{ inlineSize: { xs: '12.5rem', md: '15rem' }, blockSize: { xs: '12.5rem', md: '15rem' }, background: '#B2ACAC', }}></Box>
                <Typography variant='h1' sx={{ paddingInlineEnd: { xs: '.763rem', md: '1.5rem' }, }}>{t('homePage.myName')}</Typography>
            </Stack>

            <Stack sx={{ marginInlineStart: { md: '5rem', lg: '11rem', }, }} spacing={1}>
                <Typography variant='h3'>{t('homePage.jobTitle')}</Typography>
                <Typography sx={{ maxInlineSize: { xs: '31ch', md: '24ch', lg: '21ch', }, }} variant='subtitle1'>{t('homePage.jobDescription')}</Typography>
            </Stack>
        </>;

    const { pathname } = useLocation();

    return (
        <>
            <SEO
                title='Tom Duranti'
                description='Tom Duranti, frontend developer. Building responsive, scalable web apps.'
                pathname={pathname}
            />
            <CustomSectionLayout>{children}</CustomSectionLayout>
        </>
    );
}