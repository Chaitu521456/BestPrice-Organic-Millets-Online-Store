import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import m1 from "../../assets/foxtail-millet.jpg";
import m2 from "../../assets/little-millet.jpg";
import m3 from "../../assets/kodo-millet.jpg";
import m4 from "../../assets/barnyard-millet.jpg";
import m5 from "../../assets/browntop-millet.jpg";
import m6 from "../../assets/pearl-millet.jpg";
import m7 from "../../assets/finger-millet.jpg";
import m8 from "../../assets/proso-millet.jpg";
import m9 from "../../assets/great-millet.jpg";
import m10 from "../../assets/mix-millet.jpg";

import m11 from "../../assets/i1.jpg";
import m12 from "../../assets/i2.webp";
import m13 from "../../assets/i3.jpg";
import m14 from "../../assets/i4.webp";
import m15 from "../../assets/i5.jpg";
import m16 from "../../assets/i6.webp";
import m17 from "../../assets/i7.webp";
import m18 from "../../assets/i8.jpg";
import m19 from "../../assets/i9.jpg";
import m20 from "../../assets/i10.jpg";

const carouselImages = [m11, m12, m13, m14, m15, m16, m17, m18, m19, m20];

const millets = [
    { id: 1, nameEng: "Foxtail Millet", nameTel: "కొర్రలు", image: m1, mrp: 100, price: 80, weight: '1kg', link: '/details/Foxtail' },
    { id: 2, nameEng: "Little Millet", nameTel: "సామలు", image: m2, mrp: 110, price: 90, weight: '1kg', link: '/details/Little' },
    { id: 3, nameEng: "Kodo Millet", nameTel: "అరకలు", image: m3, mrp: 120, price: 95, weight: '1kg', link: '/details/Kodo' },
    { id: 4, nameEng: "Barnyard Millet", nameTel: "ఊదలు", image: m4, mrp: 130, price: 105, weight: '1kg', link: '/details/Barnyard' },
    { id: 5, nameEng: "Browntop Millet", nameTel: "సజ్జలు", image: m5, mrp: 140, price: 115, weight: '1kg', link: '/details/Browntop' },
    { id: 6, nameEng: "Pearl Millet", nameTel: "సజ్జలు", image: m6, mrp: 150, price: 125, weight: '1kg', link: '/details/Pearl' },
    { id: 7, nameEng: "Finger Millet", nameTel: "రాగులు", image: m7, mrp: 160, price: 130, weight: '1kg', link: '/details/Finger' },
    { id: 8, nameEng: "Proso Millet", nameTel: "వరిగలు", image: m8, mrp: 170, price: 140, weight: '1kg', link: '/details/Proso' },
    { id: 9, nameEng: "Great Millet", nameTel: "జొన్నలు", image: m9, mrp: 180, price: 150, weight: '1kg', link: '/details/Great' },
    { id: 10, nameEng: "All Millets Mix", nameTel: "మిశ్రమం", image: m10, mrp: 190, price: 160, weight: '1kg', link: '/details/Mix' },
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <div className="carousel mb-3" style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '100%', maxHeight: '500px' }}>
                <img
                    src={carouselImages[currentImageIndex]}
                    alt="Millet"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 1s ease-in-out',
                    }}
                />
                <div className="dots" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                    {carouselImages.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                            aria-label={`Go to image ${index + 1}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>

            <h1 className="title">" Millets: Nutrient-Packed Grains for a Healthy You! "</h1>
            <div className="millet-grid m-5 para" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {millets.map(millet => (
                    <div key={millet.id} className="millet-card">
                        <Link to={millet.link}>
                            <img src={millet.image} alt={`${millet.nameEng} image`} className="millet-image" />
                        </Link>
                        <h3 className="mt-2">{millet.nameEng}</h3>
                        <h4>{millet.nameTel}</h4>
                        <p>Weight: {millet.weight}</p>
                        <p>MRP: ₹{millet.mrp}</p>
                        <p>Discounted Price: ₹{millet.price}</p>
                        <Link to="/cart" className="add-to-cart" aria-label={`Add ${millet.nameEng} to cart`}>
                            <span role="img" aria-label="cart">🛒</span> Add to Cart
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
