import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Here is the contact',
 keywords: ['About Page', 'Memo', 'Informacion', '...'],
};

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}