//react
import { Link } from 'react-router';
import { useLocation } from 'react-router';

//mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

//custom components
import CustomSectionLayout from '../../components/styled/Layout.jsx';
import SEO from '../../components/atoms/seo/seo.jsx';

//text
import { text } from './Projects.js';


function SvgIconArrowDecoration(props) {
    return (
        <SvgIcon {...props}>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.5963 8.00035C30.5963 6.89578 29.7009 6.00035 28.5963 6.00035L10.5963 6.00035C9.49176 6.00035 8.59633 6.89578 8.59633 8.00035C8.59633 9.10492 9.49176 10.0004 10.5963 10.0004L26.5963 10.0004L26.5963 26.0004C26.5963 27.1049 27.4918 28.0004 28.5963 28.0004C29.7009 28.0004 30.5963 27.1049 30.5963 26.0004L30.5963 8.00035ZM8 28.5967L9.41421 30.0109L30.0105 9.41456L28.5963 8.00035L27.1821 6.58614L6.58579 27.1825L8 28.5967Z" fill="currentColor" />
            </svg>
        </SvgIcon>
    );
}

function ProjectCard({ image, title, paragraph, linkGithub, linkLive }) {
    return (
        <Card sx={{ background: 'transparent', boxShadow: '0', display: 'flex', flexDirection: { xs: 'column', md: 'row', }, gap: '2rem' }}>
            <Box sx={{ order: { md: 2 }, inlineSize: { md: '50%' } }}>
                <Link to={`/projects/${title}`}>
                    <Box
                        component="picture"
                        sx={{
                            display: 'block',
                            width: '100%',
                            blockSize: { xs: '212px', md: '227px', lg: '288px' },
                            objectFit: 'cover',
                        }}
                    >
                        <source
                            media="(min-width: 1440px)"
                            srcSet={image.lg}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={image.md}
                        />
                        <Box
                            component="img"
                            src={image.xs}
                            alt={`${title} project screenshot`}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                </Link>
            </Box>
            <CardContent sx={{ padding: '0', '&:last-child': { paddingBottom: 0 }, display: { md: 'flex' }, flexDirection: { md: 'column', }, justifyContent: { md: 'flex-end', }, inlineSize: { md: '50%', }, }}>
                <Stack direction='row' sx={{ justifyContent: 'space-between', marginBottom: '.5rem', maxInlineSize: { md: '90%', } }}>
                    <Typography variant='h4' sx={{ lineHeight: '1.875rem', fontSize: '1.563rem' }}>
                        {title}
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <a href={linkGithub} aria-label='go to github repo'><GitHubIcon /></a>
                        <a href={linkLive} aria-label='go to live project'><LaunchIcon /></a>
                    </Stack>
                </Stack>
                <Typography variant='body2'>
                    {paragraph}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default function Projects() {
    const theme = useTheme();

    const project = text.projects.map(item => (
        <Box component='li' key={item.id} sx={{ maxInlineSize: { xs: '500px', md: '100%', }, inlineSize: { md: '100%' }, }}>
            <ProjectCard image={item.image} title={item.title} paragraph={item.paragraph} linkGithub={item.linkGithub} linkLive={item.linkLive} sx={{ textDecoration: 'capitalize', }} />
        </Box>
    ));

    const children =
        <>
            <Stack direction='row' spacing={1} sx={{ alignItems: 'start', }}>
                <Typography variant='h3'>{text.title}</Typography>
                <SvgIconArrowDecoration sx={{ inlineSize: '35px', blockSize: '35px', alignSelf: 'start', color: theme.vars.palette.icon.secondary }} />
            </Stack>
            <Box component='ul' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: '3.5rem', md: '1.5rem', }, inlineSize: '100%', maxInlineSize: { md: '61.5rem', }, alignSelf: { md: 'end', } }}>{project}</Box>
        </>;
    
    const { pathname } = useLocation();

    return (
        <>
            <SEO
                title='My projects'
                description="Project portfolio page. React web apps including Mosaic and Pollen."
                pathname={pathname}
            />
        <CustomSectionLayout dir='row' justify='space-around' >{children}</CustomSectionLayout>
        </>
    );
    
    
}