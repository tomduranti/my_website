//functions
import { generateId } from '../../utils/generateId.js';

export const text = {
    title: "things i've built",
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas',
    projects: [
        {
            title: 'mosaic', id: generateId(),
            image: {
                xs: 'src/assets/Projects/Presentation/xs/mosaicProjectPresentation.png',
                md: 'src/assets/Projects/Presentation/md/mosaicProjectPresentation.png',
                lg: 'src/assets/Projects/Presentation/lg/mosaicProjectPresentation.png'
            },
            linkGithub: 'https://github.com/tomduranti/mosaic',
            linkLive: 'https://tomduranti.github.io/mosaic/home',
            paragraph: 'Latest movies and tv series in a couple of clicks'
        },
        {
            title: 'pollen',
            id: generateId(),
            image: {
                xs: 'src/assets/Projects/Presentation/xs/pollenProjectPresentation.png',
                md: 'src/assets/Projects/Presentation/md/pollenProjectPresentation.png',
                lg: 'src/assets/Projects/Presentation/lg/pollenProjectPresentation.png'
            },
            linkGithub: 'https://github.com/tomduranti/pollen',
            linkLive: 'https://tomduranti.github.io/pollen/signup',
            paragraph: 'If you suffer from allergies this app tracks allergens spreading in your city'
        }
    ]
}