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

export const text = {
    about: {
        title: 'about me',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit est viverra, nec convallis sociis leo dignissim aliquet donec egestas sed, mi euismod vel vehicula eget suspendisse nibh risus. Natoque enim sapien aptent tempor eros felis praesent, nisi mattis rutrum hendrerit sodales ullamcorper viverra, habitasse vulputate et aenean duis purus.',
    },
    skills: {
        title: 'skills',
        paragraph: 'Here are the languages and frameworks I am proficient in',
    },
    certifications: {
        title: 'certifications',
        certificationList: [
            { title: 'GitLab Certified Associate', link: 'https://www.credly.com/badges/e1a15a4f-4038-4d33-82ec-24758cc9c72c/public_url' },
            { title: 'JSE™ – Certified Entry-Level JavaScript Programmer (proctored)', link: 'https://www.credly.com/badges/e5b7b54b-3512-4991-af78-2c92eb420e81/public_url' },
        ]
    }
}

export const icons = [
    { name: 'HTML5', icon: htmlLogo },
    { name: 'CSS3', icon: cssLogo },
    { name: 'JavaScript ES6+', icon: JSLogo },
    { name: 'Tailwind', icon: tailwindLogo },
    { name: 'Sass', icon: sassLogo },
    { name: 'React', icon: reactLogo },
    { name: 'Mui', icon: muiLogo },    
    { name: 'Storybook', icon: storybookLogo }, 
    { name: 'Git', icon: gitLogo },   
    { name: 'Figma', icon: figmaLogo },
];