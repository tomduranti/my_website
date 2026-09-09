//square DELETE
import square from '../../assets/Figures/square.png';

//functions
import { generateId } from '../../utils/generateId.js';

export const text = {
    title: "things i've built",
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas',
    projects: [
        { title: 'mosaic', id: generateId(), image: square, linkGithub: 'https://github.com/tomduranti/mosaic', linkLive: 'https://tomduranti.github.io/mosaic/home', paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra' },
        { title: 'pollen', id: generateId(), image: square, linkGithub: 'https://github.com/tomduranti/pollen', linkLive: 'https://tomduranti.github.io/pollen/signup', paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra' }
    ]
}