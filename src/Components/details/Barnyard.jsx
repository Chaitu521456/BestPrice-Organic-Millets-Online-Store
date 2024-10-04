import React from 'react';
import { Link } from 'react-router-dom';
import m4 from "../../assets/barnyard-millet.jpg"; 
import './Mixed.css'; 

function Barnyard() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m4} 
                    alt="Barnyard Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Barnyard Millet Crop Details</h2>
                <p>Barnyard millet matures in about <strong>45 to 60 days</strong> and is known for its ability to grow in poor soil conditions.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Barnyard Millet</h2>
                <ol>
                    <li>Barnyard Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Rice</li>
                    <li>Millet Dosa</li>
                    <li>Millet Idli</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Barnyard Millet</h2>
                <ul>
                    <li>Rich in dietary fiber and aids in digestion.</li>
                    <li>Helps in maintaining a healthy weight.</li>
                    <li>Good source of vitamins and minerals, including iron.</li>
                    <li>Supports heart health and reduces cholesterol levels.</li>
                    <li>Contains antioxidants that promote overall health.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Barnyard Millet</h2>
                <ul>
                    <li>Sanwa (Hindi)</li>
                    <li>Varicha (Marathi)</li>
                    <li>Oodalu (Kannada)</li>
                    <li>Bhagar (Gujarati)</li>
                    <li>Kuthiraivali (Tamil)</li>
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
                            <td>347 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>11.2g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>8.5g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>72.9g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>4.2g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Barnyard Millet</h2>
                <ul>
                    <li>Barnyard Millet Khichdi</li>
                    <li>Millet Pongal</li>
                    <li>Barnyard Millet Pulao</li>
                    <li>Barnyard Millet Upma</li>
                    <li>Millet Laddu (Sweets)</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Barnyard Millet</h2>
                <p>Barnyard millet is highly resilient and grows well in adverse conditions, requiring less water and minimal inputs, making it an excellent crop for sustainable agriculture.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Vignesh :</strong> "Barnyard millet has become a staple in my diet. It’s nutritious and versatile!"</p>
                <p><strong>Manjusha :</strong> "I enjoy cooking with Barnyard millet; it's a healthy alternative!"</p>
            </div>

            <div className="section">
                <h2>Barnyard Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Barnyard Millet:</strong> High in fiber, supports digestive health and weight management.</li>
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

export default Barnyard;
