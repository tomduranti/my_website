//logos
import htmlLogo from '../../assets/Skill/html5_logo.svg';
import cssLogo from '../../assets/Skill/css_logo.svg';
import figmaLogo from '../../assets/Skill/figma_logo.svg';
import gitLogo from '../../assets/Skill/git_logo.svg';
import JSLogo from '../../assets/Skill/javascript_logo.svg';
import muiLogo from '../../assets/Skill/mui_logo.svg';
import reactLogo from '../../assets/Skill/react_logo.svg';
import sassLogo from '../../assets/Skill/sass_logo.svg';
import storybookLogo from '../../assets/Skill/storybook_logo.svg';
import tailwindLogo from '../../assets/Skill/tailwind_logo.svg';
import firebaseLogo from '../../assets/Skill/firebase_logo.svg';

//functions
import { generateId } from '../../utils/generateId.js';

export const text = {
    about: {
        title: 'about me',
        paragraph: [
            { text: `You won't read yet another 'passionate', 'detail-oriented' bullshit bio. I promise.`, id: generateId() },
            { text: `I moved into tech after graduation and worked as a computational linguist. Building chatbots for a living gave me my first real taste of software development and coding practices.`, id: generateId() },
            {
                text: `As the company's projects expanded, I lost touch with how my work affected real users.
                The parts I loved like writing scripts to sanitise datasets, or writing test cases to make a better product,
                got replaced by scattered, sloppy tasks.`, id: generateId()
            },
            {
                text: `The turning point came when I came across Hegel's Phenomenology of Spirit.
                The concept of emancipation through work clicked into place, like a missing piece of a puzzle:
                work done meaningfully and masterfully from start to finish with nothing left unexamined.
                That's what I'd lost: the chance to craft something end to end.`, id: generateId()
            },
            {
                text: `Web development is exactly that: end-to-end ownership.
                I enjoy planning a new product from the first idea to launch.
                What I don't enjoy is nudging a metric here or there and never getting to see the finished artifact.`, id: generateId()
            },
            {
                text: `For more than a year now, I haven't skipped a day of studying and programming.
                I always have a project in the works not because I have to, but because it's part of me.
                I'm still learning and today's no exception.`, id: generateId()
            },
        ],
    },
    skills: {
        title: 'skills',
        paragraph: 'Here are the languages and frameworks I am proficient in',
    },
    certifications: {
        title: 'certifications',
        certificationList: [
            { title: 'GitLab Certified Associate', id: generateId(), link: 'https://www.credly.com/badges/e1a15a4f-4038-4d33-82ec-24758cc9c72c/public_url' },
            { title: 'JSE™ – Certified Entry-Level JavaScript Programmer (proctored)', id: generateId(), link: 'https://www.credly.com/badges/e5b7b54b-3512-4991-af78-2c92eb420e81/public_url' },
        ]
    }
}

export const icons = [
    { name: 'HTML5', id: generateId(), icon: htmlLogo },
    { name: 'CSS3', id: generateId(), icon: cssLogo },
    { name: 'JavaScript ES6+', id: generateId(), icon: JSLogo },
    { name: 'Tailwind', id: generateId(), icon: tailwindLogo },
    { name: 'Sass', id: generateId(), icon: sassLogo },
    { name: 'React', id: generateId(), icon: reactLogo },
    { name: 'Mui', id: generateId(), icon: muiLogo },
    { name: 'Storybook', id: generateId(), icon: storybookLogo },
    { name: 'Git', id: generateId(), icon: gitLogo },
    { name: 'Figma', id: generateId(), icon: figmaLogo },
    { name: 'Firebase', id: generateId(), icon: firebaseLogo },
];