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
    title: "things i've built",
    projects: [
        {
            title: 'mosaic', id: generateId(),
            image: {
                xs: mosaicPresentationXs,
                md: mosaicPresentationMd,
                lg: mosaicPresentationLg
            },
            linkGithub: 'https://github.com/tomduranti/mosaic',
            linkLive: 'https://tomduranti.github.io/mosaic/home',
            paragraph: 'Latest movies and tv series in a couple of clicks'
        },
        {
            title: 'pollen',
            id: generateId(),
            image: {
                xs: pollenPresentationXs,
                md: pollenPresentationMd,
                lg: pollenPresentationLg
            },
            linkGithub: 'https://github.com/tomduranti/pollen',
            linkLive: 'https://tomduranti.github.io/pollen/signup',
            paragraph: 'If you suffer from allergies this app tracks allergens spreading in your city'
        }
    ]
}