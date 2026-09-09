//assets
import square from '../../assets/Figures/square.png';

//functions
import { generateId } from '../../utils/generateId.js';

export const text = {
    mosaic: {
        title: 'mosaic',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
        type: 'web app',
        stack: [
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() }
        ],
        status: {
            status: 'live',
            link: 'https://tomduranti.github.io/mosaic/home'
        },
        image: {
            hero: { title: 'hero', link: square, id: generateId() },
            secondary: [
                { title: 'mainFeature', link: square, id: generateId() },
                { title: 'secondFeature', link: square, id: generateId() },
                { title: 'thirdFeature', link: square, id: generateId() }
            ]
        },
        goal: {
            title: 'project goal',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
            ]
        },
        highlights: {
            title: 'highlights',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
            ]
        },
        futureIdeas: {
            title: 'future ideas',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
            ]
        },
    },
    pollen: {
        title: 'pollen',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
        type: 'web app',
        stack: [
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() },
            { title: 'stack', id: generateId() }
        ],
        status: {
            status: 'live',
            link: 'https://tomduranti.github.io/pollen/signup'
        },
        image: {
            hero: { title: 'hero', link: square, id: generateId() },
            secondary: [
                { title: 'mainFeature', link: square, id: generateId() },
                { title: 'secondFeature', link: square, id: generateId() },
                { title: 'thirdFeature', link: square, id: generateId() }
            ]
        },
        goal: {
            title: 'project goal',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
            ]
        },
        highlights: {
            title: 'highlights',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
            ]
        },
        futureIdeas: {
            title: 'future ideas',
            paragraphs: [
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed',
            ]
        },
    },
}