//react
import { Helmet } from 'react-helmet-async';


export default function SEO({ title, description, pathname }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={`https://tomduranti.com${pathname}`} />
        </Helmet>
    );
}