import React from 'react';
import { Link } from 'react-router-dom';
import m2 from "../../assets/little-millet.jpg"; 
import './Mixed.css'; 

function Little() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m2} 
                    alt="Little Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Little Millet Crop Details</h2>
                <p>Little millet typically matures within <strong>3 to 4 months</strong> and yields seeds efficiently in poor soil conditions.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Little Millet</h2>
                <ol>
                    <li>Little Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Rice</li>
                    <li>Millet Dosa</li>
                    <li>Millet Idli</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Little Millet</h2>
                <ul>
                    <li>Rich in dietary fiber, promotes digestive health.</li>
                    <li>Helps in managing blood sugar levels, making it ideal for diabetics.</li>
                    <li>Loaded with minerals like iron, magnesium, and phosphorus.</li>
                    <li>Assists in weight management by keeping you fuller for longer.</li>
                    <li>Supports heart health by reducing cholesterol levels.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Little Millet</h2>
                <ul>
                    <li>Samai (Tamil)</li>
                    <li>Saame (Kannada)</li>
                    <li>Sava (Hindi)</li>
                    <li>Chama (Malayalam)</li>
                    <li>Kutki (Marathi)</li>
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
                            <td>341 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>9.7g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>7.6g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>66.7g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>4.7g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Little Millet</h2>
                <ul>
                    <li>Little Millet Khichdi</li>
                    <li>Millet Pongal</li>
                    <li>Little Millet Pulao</li>
                    <li>Little Millet Upma</li>
                    <li>Millet Laddu (Sweets)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Little Millet</h2>
                <p>Little millet is a sustainable crop that grows well in dry conditions, requiring less water and input than other grains. It’s drought-resistant and thrives in nutrient-poor soils.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Aruna :</strong> "Little millet has become a staple in our diet. It’s healthy and easy to cook!"</p>
                <p><strong>Sushruth :</strong> "Perfect for making traditional dishes like khichdi and upma. My whole family loves it!"</p>
            </div>

            <div className="section">
                <h2>Little Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Little Millet:</strong> High in fiber and iron, promotes digestion and blood circulation.</li>
                    <li><strong>Foxtail Millet:</strong> Rich in protein, helps with weight management and diabetes control.</li>
                    <li><strong>Kodo Millet:</strong> Lowers cholesterol and aids in detoxification.</li>
                    <li><strong>Browntop Millet:</strong> Fiber-rich, good for maintaining digestive health.</li>
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

export default Little;
