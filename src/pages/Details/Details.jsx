//react
import { useParams } from 'react-router';

//mui
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

//custom components
import CustomSectionLayout from '../../components/styled/Layout.jsx';

//style
import theme from '../../theme/theme.jsx';

//text
import { text } from './Details.js';


function SvgIconArrowDecoration(props) {
    return (
        <SvgIcon {...props}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.0956 46.5956C45.0286 46.5956 46.5956 45.0286 46.5956 43.0956L46.5956 11.5956C46.5956 9.66263 45.0286 8.09563 43.0956 8.09563C41.1626 8.09563 39.5956 9.66263 39.5956 11.5956L39.5956 39.5956L11.5956 39.5956C9.66263 39.5956 8.09563 41.1626 8.09563 43.0956C8.09563 45.0286 9.66263 46.5956 11.5956 46.5956L43.0956 46.5956ZM8 8L5.52513 10.4749L40.6208 45.5705L43.0956 43.0956L45.5705 40.6208L10.4749 5.52513L8 8Z" fill="currentColor" />
            </svg>
        </SvgIcon>
    );
}


function Paragraph({ header, projectName, prop = '' }) {

    const paragraphList = section => {
        return text[projectName][section].paragraphs.map((paragraph, index, array) => (
            <li key={index}>
                <Stack direction='row' spacing={3} sx={{ alignItems: 'center', marginBlockEnd: (index === array.length - 1 ? null : '1.5rem') }}>
                    <CircleIcon sx={{ inlineSize: '31px', blockSize: '31px', color: theme.vars.palette.icon.main }} />
                    <Typography variant='detailedProjectDescription' component='span'>{paragraph}</Typography>
                </Stack>
            </li>
        ))
    };

    return (
        <Stack spacing={5} sx={{ inlineSize: '100%', maxInlineSize: { lg: '51%', }, ...prop }}>
            <Typography variant="detailedSectionTitle">{text[projectName][header].title}</Typography>
            <ul>{paragraphList(header)}</ul>
        </Stack>
    )
};

export default function Details() {

    let { projectName } = useParams();

    const imageList = text[projectName].image.gallery.map(image => (
        <li key={image.id}>
            <Box component="picture" sx={{ inlineSize: { xs: '95%', } }}>
                <source
                    media="(min-width: 1440px)"
                    srcSet={image.link.lg}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={image.link.md}
                />
                <Box
                    component="img"
                    src={image.link.xs}
                    alt={`${text[projectName].title} image`}
                    sx={{
                        inlineSize: '100%',
                        blockSize: '100%',
                        aspectRatio: { xs: 16 / 9, md: 3 / 2, },
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </li>
    ));

    const stackList = text[projectName].stack.map(stack => (
        <li key={stack.id}>
            <Typography variant='detailedProjectDescription' component='span'>{stack.title}</Typography>
        </li>
    ));

    const children =
        <>
            <Stack spacing={{ xs: 5, md: 7, }} sx={{ flexDirection: { lg: 'row', }, justifyContent: { lg: 'space-between', }, }}>
                <Stack spacing={2}>
                    <SvgIconArrowDecoration sx={{ inlineSize: '3.188rem', blockSize: '3.188rem', color: theme.vars.palette.icon.secondary, }} />
                    <Typography variant='detailedProjectName' sx={{ paddingInlineStart: '1rem', }}>{text[projectName].title}</Typography>
                </Stack>

                <Stack spacing={{ xs: 4, md: 7, }} sx={{ inlineSize: '100%', maxInlineSize: { lg: '600px', }, }}>
                    <Typography variant='detailedProjectDescription' >{text[projectName].description}</Typography>
                    <Grid container spacing={2} sx={{ inlineSize: { md: '100%', }, maxInlineSize: { md: '33rem', }, alignSelf: { md: 'center', lg: 'start', }, textAlign: 'center', }}>
                        <Grid size='grow'>
                            <Stack spacing={2}>
                                <Typography variant='detailedStackDescription'>type</Typography>
                                <Typography variant='detailedProjectDescription' component='span'>{text[projectName].type}</Typography>
                            </Stack>
                        </Grid>

                        <Grid size='grow'>
                            <Stack spacing={2}>
                                <Typography variant='detailedStackDescription'>stack</Typography>
                                <ul>{stackList}</ul>
                            </Stack>
                        </Grid>

                        <Grid size='grow'>
                            <Stack spacing={2}>
                                <Typography variant='detailedStackDescription'>status</Typography>
                                <Link href={text[projectName].status.link} aria-label={`go to ${text[projectName].title} live project`}>
                                    <Typography variant='detailedProjectDescription' component='span' sx={{ color: theme.vars.palette.text.status.live }}>{text[projectName].status.status}</Typography>
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>

            <Box component="picture" sx={{ objectFit: 'cover', objectPosition: 'center top', inlineSize: '100%', }}>
                <source
                    media="(min-width: 1440px)"
                    srcSet={text[projectName].image.hero.link.lg}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={text[projectName].image.hero.link.md}
                />
                <Box
                    component="img"
                    src={text[projectName].image.hero.link.xs}
                    alt={`${text[projectName].title} project screenshot`}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>

            <Paragraph header='goal' projectName={projectName} />
            <Paragraph header='highlights' projectName={projectName} prop={{ alignSelf: { lg: 'end' } }} />
            <Box component='ul' sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', }, justifyContent: { md: 'space-between', lg: 'unset', }, gap: { xs: '1.5rem', md: '1rem', lg: '3rem', }, alignItems: 'center', alignSelf: { lg: 'center', }, }}>{imageList}</Box>
            <Paragraph header='futureIdeas' projectName={projectName} prop='margin-block-end: 4rem' />
        </>

    return <CustomSectionLayout>{children}</CustomSectionLayout>;
}