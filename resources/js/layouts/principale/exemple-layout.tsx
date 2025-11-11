import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import Header from './header-principale';

interface   PrincipaleLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function PrincipaleLayout({
    children,
    title,
    description,
}: PropsWithChildren<PrincipaleLayoutProps>) {
    return (
        <div className="overflow-x-hidden">
            
            {children}
        </div>
    );
}
