import React from 'react';
import { Link } from 'react-router-dom';
import m6 from "../../assets/pearl-millet.jpg"; 
import './Mixed.css'; 

function Pearl() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m6} 
                    alt="Pearl Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Pearl Millet Crop Details</h2>
                <p>Pearl millet matures in about <strong>80 to 90 days</strong> and is highly tolerant to heat and drought, making it a resilient crop for dry climates.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Pearl Millet</h2>
                <ol>
                    <li>Pearl Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Roti</li>
                    <li>Millet Khichdi</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Pearl Millet</h2>
                <ul>
                    <li>Rich in protein and fiber, supporting muscle growth and digestion.</li>
                    <li>Helps in reducing cholesterol levels.</li>
                    <li>Provides essential vitamins and minerals.</li>
                    <li>Boosts heart health and improves blood circulation.</li>
                    <li>Contains antioxidants that support immune health.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Pearl Millet</h2>
                <ul>
                    <li>Bajra (Hindi)</li>
                    <li>Sajjalu (Telugu)</li>
                    <li>Kambu (Tamil)</li>
                    <li>Spiked Millet (English)</li>
                    <li>Sajjalu (Kannada)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Nutritional Information (per 100g)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nutrient</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Calories</td>
                            <td>361 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>11.6g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>8.0g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>67.5g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>5.0g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Pearl Millet</h2>
                <ul>
                    <li>Pearl Millet Roti</li>
                    <li>Bajra Khichdi</li>
                    <li>Pearl Millet Porridge</li>
                    <li>Millet Upma</li>
                    <li>Millet Laddu (Sweets)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Pearl Millet</h2>
                <p>Pearl millet requires less water and can grow in poor soil conditions, making it an environmentally sustainable crop that supports food security in arid regions.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Nikhil :</strong> "Pearl millet has been a staple in my diet, and it provides so many health benefits. Highly recommend!"</p>
                <p><strong>Megha :</strong> "It’s perfect for making healthy and delicious rotis. My family loves it!"</p>
            </div>

            <div className="section">
                <h2>Pearl Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Pearl Millet:</strong> High in protein and supports heart health.</li>
                    <li><strong>Browntop Millet:</strong> Excellent for digestive health and blood sugar control.</li>
                    <li><strong>Foxtail Millet:</strong> Helps manage diabetes and weight loss.</li>
                    <li><strong>Kodo Millet:</strong> Aids in detoxification and cholesterol reduction.</li>
                </ul>
            </div>

            <div className="section">
                <Link to="/cart" className="buy-now-button">
                    Buy Now
                </Link>
            </div>
        </div>
    );
}

export default Pearl;
