import React, {PropsWithChildren} from 'react';
import Header from "./header";
import Footer from "./footer";

const Page = ({children}: PropsWithChildren<any>) => {
    return (
        <>
            <section className="sheet">
                <Header/>
                {children}
                <Footer/>
            </section>
        </>
    );
};

export default Page;