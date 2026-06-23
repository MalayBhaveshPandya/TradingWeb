import react from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Hero from './Hero';
const ProductPage = () => {
    return (
        <div>
            <h1>ProductPage Section</h1>
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
        </div>
    );
}   

export default ProductPage;