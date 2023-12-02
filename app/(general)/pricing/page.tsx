import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Check best prices',
 keywords: ['About Page', 'Memo', 'Informacion', '...'],
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}