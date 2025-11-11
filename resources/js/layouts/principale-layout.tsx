import { Head } from "@inertiajs/react";
import PrincipaleLayout from "./principale/exemple-layout";
import Header from "./principale/header-principale";
import Footer from "./principale/footer-principale";

export default function PrincipaleLayoutSite({
    children,
    title,
    description,
    ...props
}: {
    children: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <PrincipaleLayout title={title} description={description} {...props}>
             <Head title={title} >
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <div className="d-flex justify-content-center align-items-center mt-12">
                {children}
            </div>
            <Footer />
        </PrincipaleLayout>
    );
}
