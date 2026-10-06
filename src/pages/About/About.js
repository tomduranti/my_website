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
        title: 'aboutPage.title',
        paragraph: [
            { text: 'aboutPage.paragraph.paragraph1', id: generateId() },
            { text: 'aboutPage.paragraph.paragraph2', id: generateId() },
            { text: 'aboutPage.paragraph.paragraph3', id: generateId() },
            { text: 'aboutPage.paragraph.paragraph4', id: generateId() },
            { text: 'aboutPage.paragraph.paragraph5', id: generateId() },
            { text: 'aboutPage.paragraph.paragraph6', id: generateId() },
        ],
    },
    skills: {
        title: 'aboutPage.skills.title',
    },
    certifications: {
        title: 'aboutPage.certifications.title',
        certificationList: [
            { title: 'aboutPage.certifications.certificationList.juniorReactDeveloper', id: generateId(), link: 'https://certificates.dev/c/a2c838dd-4c78-40a8-8e89-495a72c548d3' },
            { title: 'aboutPage.certifications.certificationList.entryLevelJavascriptProgrammer', id: generateId(), link: 'https://www.credly.com/badges/e5b7b54b-3512-4991-af78-2c92eb420e81/public_url' },
            { title: 'aboutPage.certifications.certificationList.gitLabCertAssociate', id: generateId(), link: 'https://www.credly.com/badges/e1a15a4f-4038-4d33-82ec-24758cc9c72c/public_url' },
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