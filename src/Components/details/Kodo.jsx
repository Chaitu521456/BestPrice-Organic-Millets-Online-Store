import React from 'react';
import { Link } from 'react-router-dom';
import m3 from "../../assets/kodo-millet.jpg"; 
import './Mixed.css'; 

function Kodo() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m3} 
                    alt="Kodo Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Kodo Millet Crop Details</h2>
                <p>Kodo millet takes about <strong>3 to 4 months</strong> to mature and is known for its ability to grow in drought-prone areas.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Kodo Millet</h2>
                <ol>
                    <li>Kodo Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Rice</li>
                    <li>Millet Dosa</li>
                    <li>Millet Idli</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Kodo Millet</h2>
                <ul>
                    <li>Great for managing cholesterol levels and improving heart health.</li>
                    <li>High in dietary fiber, promotes digestive health.</li>
                    <li>Helps in detoxifying the body by removing harmful toxins.</li>
                    <li>Provides sustained energy, making it suitable for active individuals.</li>
                    <li>Rich in antioxidants, supports overall health and wellness.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Kodo Millet</h2>
                <ul>
                    <li>Varagu (Tamil)</li>
                    <li>Arikelu (Telugu)</li>
                    <li>Harka (Kannada)</li>
                    <li>Kodra (Hindi)</li>
                    <li>Kodon (Bengali)</li>
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
                            <td>353 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>8.3g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>9g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>66.2g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>3.6g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Kodo Millet</h2>
                <ul>
                    <li>Kodo Millet Khichdi</li>
                    <li>Millet Pongal</li>
                    <li>Kodo Millet Pulao</li>
                    <li>Kodo Millet Upma</li>
                    <li>Millet Laddu (Sweets)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Kodo Millet</h2>
                <p>Kodo millet is a resilient crop that grows well in dry and arid regions. It requires minimal water and can thrive in poor soil conditions, making it ideal for sustainable agriculture.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Fakruddin :</strong> "Kodo millet has been a game-changer for my health. It’s nutritious and versatile in cooking."</p>
                <p><strong>Srujana :</strong> "I love making snacks with Kodo millet. It’s healthy, filling, and delicious!"</p>
            </div>

            <div className="section">
                <h2>Kodo Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Kodo Millet:</strong> Great for detoxification and reducing cholesterol.</li>
                    <li><strong>Foxtail Millet:</strong> High in protein, supports diabetes management and weight loss.</li>
                    <li><strong>Little Millet:</strong> High in iron, supports blood circulation and digestive health.</li>
                    <li><strong>Browntop Millet:</strong> Rich in fiber, improves gut health.</li>
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

export default Kodo;
