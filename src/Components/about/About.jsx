import Founders from "../founders/Founders";
import './About.css';  

function About(){
    return(
        <div className="about-container bg-light">
            <h1 className="text-center text-danger mt-4 mb-4">FOUNDERS OF BEST PRICE</h1>
            <Founders />      
            <section className="about-details mt-4 mb-4 text-primary p-4">
                <h2 className="text-center text-secondary mb-4">Our Story</h2>
                <p className="lead">
                    Best Price Millet Store started as a vision to bring healthy, organic millets to every household. 
                    Our founders — <strong>Pillutla Chaitanya, Pillutla T Charan Teja, and Pillutla Navyatha</strong> — realized the potential of millets as a superfood, 
                    and their passion led to the creation of this online store.
                </p>
                
                <div className="store-features text-secondary">
                    <h3 className="text-center text-dark">Why Choose Us?</h3>
                    <ul className="feature-list">
                        <li><strong>High-Quality Products:</strong> We source only the finest millets from trusted local farmers.</li>
                        <li><strong>Affordable Pricing:</strong> Healthy eating should not be expensive. We provide millets at competitive prices.</li>
                        <li><strong>Easy Online Shopping:</strong> With just a few clicks, you can have millets delivered to your doorstep.</li>
                        <li><strong>100% Organic:</strong> We are committed to offering pesticide-free, non-GMO products.</li>
                        <li><strong>Customer-Centric:</strong> We value our customers and strive to offer the best service possible.</li>
                    </ul>
                </div>

                <div className="mission-vision-section">
                    <h3 className="text-center text-dark">Our Mission & Vision</h3>
                    <p className="text-secondary">
                    To provide high-quality, sustainably sourced millets and cereals that promote healthy eating habits while supporting local farmers. We aim to make
                     wholesome grains accessible to every household, offering a nutritious alternative to processed foods. 
                     <br />
                     To be a leader in the millet and cereal industry, driving the shift towards healthier, eco-friendly diets worldwide. Our goal is to create a future 
                     where millets and cereals are a staple food, fostering wellness and environmental sustainability for generations to come.
                    </p>
                </div>
                
                <div className="store-products">
                    <h3 className="text-center text-dark">Millets We Offer</h3>
                    <p className="text-secondary">
                    At our store, we proudly offer a diverse selection of millets, including Pearl Millet (Bajra), Finger Millet (Ragi), Foxtail Millet (Kangni), 
                    Little Millet (Kutki), Barnyard Millet (Sanwa), Proso Millet, Kodo Millet (Kodri), Sorghum (Jowar), Broomcorn Millet, and Brown Top Millet (Korra),
                     ensuring you have access to nutritious and wholesome grains
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About;
