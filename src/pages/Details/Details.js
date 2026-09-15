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
    mosaic: {
        title: 'mosaic',
        description: `Mosaic is a React application for browsing trending movies and TV shows via the TMDB API, built with a RESTful data layer and React Router.
                        While I started from an existing Figma design, I redesigned it to be faster and more minimal.`,
        type: 'web app',
        stack: [
            { title: 'react', id: generateId() },
            { title: 'react router', id: generateId() },
            { title: 'restful API', id: generateId() },
            { title: 'storybook', id: generateId() },
        ],
        status: {
            status: 'live',
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
        goal: {
            title: 'project goal',
            paragraphs: [
                `The idea behind this project was to have a single app to keep up with trending movies and TV shows.
                    I then built upon that by adding a bookmarking section for "watch later" items.
                    These requirements steered the implementation toward data caching in React useStates, since frequent API calls might cause a bottleneck.
                    To give trending media visual priority, I built a carousel.`,
                `The last phase of the project was implementing a trailer feature. This specific feature wasn't
                    part of the original design so designed it myself, keeping it minimal.`,
            ]
        },
        highlights: {
            title: 'highlights',
            paragraphs: [
                `The app relies heavily on grids and lists which also render across many viewport sizes, so isolating components in Storybook let me catch horizontal scrolling, and missing list keys in advance.`,
                `The carousel and long lists create friction for keyboard navigation. They also degrade screen-readers' ability to quickly parse a page's content. 
                    I added skip links to jump between internal sections so users can skip or dive into items. The app is fully keyboard-navigable.`,
                `The use of local storage to save items is convenient to avoid the overhead of Redux or backend work and makes retrieval seamless from any page.
                    The limitation of this approach is the lack of cross-device sync.`,
            ]
        },
        futureIdeas: {
            title: 'future ideas',
            paragraphs: [
                `The hard-earned lesson of this project is that "temporary" crappy code is here to stay.
                    In the early stage, I created messy dependencies, one-shot components, and a jungle of folders and subfolders, just to "do things quickly and move on".
                    I soon realised this approach would backfire.
                    I refactored toward atomic design, modular Sass, and BEM, and now apply that structure from day one on every new project.`,
                `One feature I might add down the line is the integration with a showtime API to check which cinemas offer that movie nearby.
                    Unfortunately, the costs of that API are prohibitive right now.`,
            ]
        },
    },
    pollen: {
        title: 'pollen',
        description: `Pollen is a React app that tracks pollen levels in a given location.
                        It also tells the severity of allergens and provides a forecast for the upcoming days.
                        It relies on two APIs: one for allergens and one for geolocation.
                        All user information is stored in Firebase, with an authentication step backed by Zod for validation. 
                        The Figma design is original.`,
        type: 'web app',
        stack: [
            { title: 'firebase', id: generateId() },
            { title: 'react', id: generateId() },
            { title: 'react router', id: generateId() },
            { title: 'zod', id: generateId() },
        ],
        status: {
            status: 'live',
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
        goal: {
            title: 'project goal',
            paragraphs: [
                `I suffer from pollen allergies and needed a way to check whether a place is low-pollen.`,
                `Since I wanted to monitor data for my city, it made sense to save a favourite location stored in the Firebase DB, so the app could automatically fetch data for it every time it opens.`,
            ]
        },
        highlights: {
            title: 'highlights',
            paragraphs: [
                `Polleninformation API caps at ~40 requests/day.
                    On first request I cache the response; subsequent requests check the cache timestamp and serve it if under 4 hours old (allergen levels don't shift fast enough to need fresher data).
                    This keeps the app usable well past the API's own limit without extra cost.`,
                `Polleninformation API consumes geolocation data, and that's why I introduced the Geocoding API to convert a user-entered string for a location into x- and y-coordinate.`,
                `To support cross-device sync, the app needs a single source of truth and always-fresh data.
                    Firebase fit well here, being a NoSQL database with multiple sign-in methods available.`,
                `Zod handles the auth workflow.
                    A couple of functions provide schema validation for email and password while signing in, before they reach the database.`,
            ]
        },
        futureIdeas: {
            title: 'future ideas',
            paragraphs: [
                `The app currently works only in English, yet pollen and plant names aren't easy to recognise. I plan to add multilingual support.`,
                `I'd also like to expand user account functionality by letting each user add a profile picture.`,
            ]
        },
    },
}