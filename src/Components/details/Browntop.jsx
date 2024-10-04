import React from 'react';
import { Link } from 'react-router-dom';
import m5 from "../../assets/browntop-millet.jpg"; 
import './Mixed.css'; 

function Browntop() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m5} 
                    alt="Browntop Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Browntop Millet Crop Details</h2>
                <p>Browntop millet matures in about <strong>60 to 70 days</strong> and is recognized for its adaptability to various climates and soil conditions.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Browntop Millet</h2>
                <ol>
                    <li>Browntop Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Rice</li>
                    <li>Millet Dosa</li>
                    <li>Millet Idli</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Browntop Millet</h2>
                <ul>
                    <li>Rich in fiber, promoting digestive health.</li>
                    <li>Helps in controlling blood sugar levels.</li>
                    <li>Provides essential vitamins and minerals.</li>
                    <li>Supports heart health and reduces cholesterol.</li>
                    <li>Contains antioxidants that support overall wellness.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Browntop Millet</h2>
                <ul>
                    <li>Korale (Kannada)</li>
                    <li>Ragulu (Telugu)</li>
                    <li>Chama (Tamil)</li>
                    <li>Brown Top (English)</li>
                    <li>Thangaradham (Hindi)</li>
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
                            <td>346 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>12.5g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>8.5g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>70.1g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>4.2g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Browntop Millet</h2>
                <ul>
                    <li>Browntop Millet Khichdi</li>
                    <li>Millet Pongal</li>
                    <li>Browntop Millet Pulao</li>
                    <li>Browntop Millet Upma</li>
                    <li>Millet Laddu (Sweets)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Browntop Millet</h2>
                <p>Browntop millet is drought-resistant and can grow in poor soil conditions, making it a sustainable crop option that requires less water and fewer resources.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Aditya :</strong> "Browntop millet is my go-to for healthy meals. It's delicious and nutritious!"</p>
                <p><strong>Sneha :</strong> "I love experimenting with Browntop millet in my recipes. It's so versatile!"</p>
            </div>

            <div className="section">
                <h2>Browntop Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Browntop Millet:</strong> Excellent for digestive health and blood sugar control.</li>
                    <li><strong>Kodo Millet:</strong> Great for detoxification and reducing cholesterol.</li>
                    <li><strong>Foxtail Millet:</strong> High in protein, supports diabetes management and weight loss.</li>
                    <li><strong>Little Millet:</strong> High in iron, supports blood circulation and digestive health.</li>
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

export default Browntop;
