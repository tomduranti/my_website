//assets
import mosaicPresentationXs from '../../assets/Projects/Presentation/xs/mosaicProjectPresentation.webp';
import mosaicPresentationMd from '../../assets/Projects/Presentation/md/mosaicProjectPresentation.webp';
import mosaicPresentationLg from '../../assets/Projects/Presentation/lg/mosaicProjectPresentation.webp';
import pollenPresentationXs from '../../assets/Projects/Presentation/xs/pollenProjectPresentation.webp';
import pollenPresentationMd from '../../assets/Projects/Presentation/md/pollenProjectPresentation.webp';
import pollenPresentationLg from '../../assets/Projects/Presentation/lg/pollenProjectPresentation.webp';

//functions
import { generateId } from '../../utils/generateId.js';

export const text = {
    title: "projectsPage.title",
    projects: [
        {
            title: 'projectsPage.projects.mosaic.title',
            titleForUrl: "mosaic",
            id: generateId(),
            image: {
                xs: mosaicPresentationXs,
                md: mosaicPresentationMd,
                lg: mosaicPresentationLg
            },
            linkGithub: 'https://github.com/tomduranti/mosaic',
            linkLive: 'https://tomduranti.github.io/mosaic/home',
            paragraph: 'projectsPage.projects.mosaic.paragraph'
        },
        {
            title: 'projectsPage.projects.pollen.title',
            titleForUrl: "pollen",
            id: generateId(),
            image: {
                xs: pollenPresentationXs,
                md: pollenPresentationMd,
                lg: pollenPresentationLg
            },
            linkGithub: 'https://github.com/tomduranti/pollen',
            linkLive: 'https://tomduranti.github.io/pollen/signup',
            paragraph: 'projectsPage.projects.pollen.paragraph'
        }
    ]
}