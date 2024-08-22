import { Helmet } from 'react-helmet'
import {FC} from "react";

type SeoProps = {
    title: string
    description: string
    type: string
    name: string
}

const Seo: FC<SeoProps> = ({ title, description, type, name }) => {
    return (
        <Helmet>
            { /* Metadata tags */ }
            <title>{title}</title>
            <meta name='description' content={description}/>

            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default Seo;
