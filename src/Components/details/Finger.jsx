import React from 'react';
import { Link } from 'react-router-dom';
import m7 from "../../assets/finger-millet.jpg"; 
import './Mixed.css'; 

function Finger() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m7} 
                    alt="Finger Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Finger Millet Crop Details</h2>
                <p>Finger millet matures in about <strong>90 to 150 days</strong> and is known for its resilience to drought and ability to grow in poor soil conditions.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Finger Millet</h2>
                <ol>
                    <li>Finger Millet Flour</li>
                    <li>Ragi Porridge</li>
                    <li>Ragi Mudde (Dumplings)</li>
                    <li>Finger Millet Dosa</li>
                    <li>Ragi Cookies</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Finger Millet</h2>
                <ul>
                    <li>Rich in calcium, promoting bone health.</li>
                    <li>Helps control blood sugar levels.</li>
                    <li>High in fiber, aiding digestion.</li>
                    <li>Provides essential amino acids.</li>
                    <li>Supports heart health and lowers cholesterol.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Finger Millet</h2>
                <ul>
                    <li>Ragi (Hindi)</li>
                    <li>Keppai (Tamil)</li>
                    <li>Ragi (Telugu)</li>
                    <li>Nachni (Marathi)</li>
                    <li>Mandika (Kannada)</li>
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
                            <td>336 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>7.3g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>14.0g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>72.6g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>1.5g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Finger Millet</h2>
                <ul>
                    <li>Ragi Idli</li>
                    <li>Finger Millet Porridge</li>
                    <li>Ragi Roti</li>
                    <li>Ragi Chocolate Cookies</li>
                    <li>Ragi Pancakes</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Finger Millet</h2>
                <p>Finger millet is drought-resistant and requires minimal water, making it a sustainable choice for farmers in arid regions.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Thrinath :</strong> "Finger millet has become a staple in my kitchen. It’s healthy and versatile!"</p>
                <p><strong>Yaswanth :</strong> "I love making ragi cookies! They are delicious and nutritious!"</p>
            </div>

            <div className="section">
                <h2>Finger Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Finger Millet:</strong> High in calcium and beneficial for bone health.</li>
                    <li><strong>Browntop Millet:</strong> Excellent for digestive health and blood sugar control.</li>
                    <li><strong>Foxtail Millet:</strong> High in protein, supports diabetes management.</li>
                    <li><strong>Pearl Millet:</strong> Great for heart health and overall nutrition.</li>
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

export default Finger;
