//assets
import mosaicHeroXs from '../../assets/Projects/Details/xs/mosaicHero.webp';
import mosaicHeroMd from '../../assets/Projects/Details/md/mosaicHero.webp';
import mosaicHeroLg from '../../assets/Projects/Details/lg/mosaicHero.webp';
import searchAnItemXs from '../../assets/Projects/Details/xs/searchAnItem.webp';
import searchAnItemMd from '../../assets/Projects/Details/md/searchAnItem.webp';
import bookmarkPageXs from '../../assets/Projects/Details/xs/bookmarkPage.webp';
import bookmarkPageMd from '../../assets/Projects/Details/md/bookmarkPage.webp';
import detailsPageXs from '../../assets/Projects/Details/xs/detailsPage.webp';
import detailsPageMd from '../../assets/Projects/Details/md/detailsPage.webp';

import pollenHeroXs from '../../assets/Projects/Details/xs/pollenHero.webp';
import pollenHeroMd from '../../assets/Projects/Details/md/pollenHero.webp';
import pollenHeroLg from '../../assets/Projects/Details/lg/pollenHero.webp';
import signUpPageXs from '../../assets/Projects/Details/xs/signUpPage.webp';
import signUpPageMd from '../../assets/Projects/Details/md/signUpPage.webp';
import searchCityXs from '../../assets/Projects/Details/xs/searchCity.webp';
import searchCityMd from '../../assets/Projects/Details/md/searchCity.webp';

//functions
import { generateId } from '../../utils/generateId.js';

export const text = {
    headers: {
        goal: 'detailsPage.headers.goal',
        highlights: 'detailsPage.headers.highlights',
        futureIdeas: 'detailsPage.headers.futureIdeas'
    },
    mosaic: {
        title: 'Mosaic',
        description: 'detailsPage.mosaic.description',
        type: 'detailsPage.mosaic.type',
        stack: [
            { title: 'react', id: generateId() },
            { title: 'react router', id: generateId() },
            { title: 'restful API', id: generateId() },
            { title: 'storybook', id: generateId() },
        ],
        status: {
            status: 'detailsPage.mosaic.status',
            link: 'https://tomduranti.github.io/mosaic/home'
        },
        image: {
            hero: {
                title: 'hero',
                link: {
                    xs: mosaicHeroXs,
                    md: mosaicHeroMd,
                    lg: mosaicHeroLg,
                },
                id: generateId()
            },
            gallery: [
                {
                    title: 'search an item',
                    link: {
                        xs: searchAnItemXs,
                        md: searchAnItemMd,
                        lg: searchAnItemMd,
                    },
                    id: generateId()
                },
                {
                    title: 'bookmark page',
                    link: {
                        xs: bookmarkPageXs,
                        md: bookmarkPageMd,
                        lg: bookmarkPageMd,
                    },
                    id: generateId()
                },
                {
                    title: 'detail page',
                    link: {
                        xs: detailsPageXs,
                        md: detailsPageMd,
                        lg: detailsPageMd,
                    },
                    id: generateId()
                }
            ]
        },
        goal: [
            { paragraph: 'detailsPage.mosaic.goal.paragraph1' },
            { paragraph: 'detailsPage.mosaic.goal.paragraph2' }
        ],
        highlights: [
            { paragraph: 'detailsPage.mosaic.highlights.paragraph1' },
            { paragraph: 'detailsPage.mosaic.highlights.paragraph2' },
            { paragraph: 'detailsPage.mosaic.highlights.paragraph3' }
        ],
        futureIdeas: [
            { paragraph: 'detailsPage.mosaic.futureIdeas.paragraph1' },
            { paragraph: 'detailsPage.mosaic.futureIdeas.paragraph2' }
        ],
    },
    pollen: {
        title: 'Pollen',
        description: 'detailsPage.pollen.description',
        type: 'detailsPage.pollen.type',
        stack: [
            { title: 'firebase', id: generateId() },
            { title: 'react', id: generateId() },
            { title: 'react router', id: generateId() },
            { title: 'zod', id: generateId() },
        ],
        status: {
            status: 'detailsPage.pollen.status',
            link: 'https://tomduranti.github.io/pollen/signup'
        },
        image: {
            hero: {
                title: 'hero',
                link: {
                    xs: pollenHeroXs,
                    md: pollenHeroMd,
                    lg: pollenHeroLg,
                },
                id: generateId()
            },
            gallery: [
                {
                    title: 'signup page',
                    link: {
                        xs: signUpPageXs,
                        md: signUpPageMd,
                        lg: signUpPageMd,
                    },
                    id: generateId()
                },
                {
                    title: 'search a city',
                    link: {
                        xs: searchCityXs,
                        md: searchCityMd,
                        lg: searchCityMd,
                    },
                    id: generateId()
                },
            ]
        },
        goal: [
            { paragraph: 'detailsPage.pollen.goal.paragraph1' },
            { paragraph: 'detailsPage.pollen.goal.paragraph2' }
        ],
        highlights: [
            { paragraph: 'detailsPage.pollen.highlights.paragraph1' },
            { paragraph: 'detailsPage.pollen.highlights.paragraph2' },
            { paragraph: 'detailsPage.pollen.highlights.paragraph3' },
            { paragraph: 'detailsPage.pollen.highlights.paragraph4' },
        ],
        futureIdeas: [
            { paragraph: 'detailsPage.pollen.futureIdeas.paragraph1' },
            { paragraph: 'detailsPage.pollen.futureIdeas.paragraph2' }
        ],
    },
}