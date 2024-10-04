import React from 'react';
import { Link } from 'react-router-dom';
import m1 from "../../assets/foxtail-millet.jpg"; 
import './Mixed.css'; 

function Foxtail() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m1} 
                    alt="Foxtail Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Foxtail Millet Crop Details</h2>
                <p>Foxtail millet takes about <strong>3 to 4 months</strong> to mature and yield seeds.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Foxtail Millet</h2>
                <ol>
                    <li>Foxtail Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Rice</li>
                    <li>Millet Dosa</li>
                    <li>Millet Idli</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Foxtail Millet</h2>
                <ul>
                    <li>Rich in dietary fiber, helps in digestion.</li>
                    <li>Controls blood sugar levels, making it diabetic-friendly.</li>
                    <li>Rich in antioxidants and minerals.</li>
                    <li>Helps in weight management and keeps you full for longer.</li>
                    <li>Good for heart health and reduces cholesterol levels.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Foxtail Millet</h2>
                <ul>
                    <li>Thinai (Tamil)</li>
                    <li>Korra (Telugu)</li>
                    <li>Navane (Kannada)</li>
                    <li>Kauni (Hindi)</li>
                    <li>Kangni (Marathi)</li>
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
                            <td>354 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>12.5g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>8g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>63.2g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>4.3g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Foxtail Millet</h2>
                <ul>
                    <li>Foxtail Millet Khichdi</li>
                    <li>Millet Pongal</li>
                    <li>Foxtail Millet Pulao</li>
                    <li>Foxtail Millet Upma</li>
                    <li>Millet Laddu (Sweets)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Foxtail Millet</h2>
                <p>Foxtail millet is a sustainable crop that requires less water compared to traditional grains like rice and wheat. It is drought-resistant and grows well in poor soil conditions, making it ideal for sustainable farming.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Dhanush :</strong> "I switched to Foxtail millet for a healthier lifestyle and noticed great results. Highly recommend!"</p>
                <p><strong>Sravani :</strong> "Great for making porridge and healthy snacks. Love the taste and texture!"</p>
            </div>

            <div className="section">
                <h2>Foxtail Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Foxtail Millet:</strong> Rich in protein, good for diabetes and weight loss.</li>
                    <li><strong>Browntop Millet:</strong> High in fiber, good for digestive health.</li>
                    <li><strong>Little Millet:</strong> Rich in iron, helps improve blood circulation.</li>
                    <li><strong>Kodo Millet:</strong> Good for reducing cholesterol and detoxifying the body.</li>
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

export default Foxtail;
