import React from 'react';
import { Link } from 'react-router-dom';
import m9 from "../../assets/great-millet.jpg"; 
import './Mixed.css'; 

function Great() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m9} 
                    alt="Great Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Great Millet Crop Details</h2>
                <p>Great millet matures in about <strong>90 to 120 days</strong> and is known for its adaptability to harsh conditions, making it a staple in many regions.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Great Millet</h2>
                <ol>
                    <li>Great Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Bread</li>
                    <li>Great Millet Upma</li>
                    <li>Millet Snacks</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Great Millet</h2>
                <ul>
                    <li>Rich in dietary fiber, promoting digestive health.</li>
                    <li>Supports weight management due to its low glycemic index.</li>
                    <li>Contains essential vitamins and minerals, including iron and magnesium.</li>
                    <li>Helps lower cholesterol levels and supports heart health.</li>
                    <li>Good source of antioxidants, contributing to overall wellness.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Great Millet</h2>
                <ul>
                    <li>Great Millet (English)</li>
                    <li>Kodo Millet (Hindi)</li>
                    <li>Varagu (Tamil)</li>
                    <li>Harka (Kannada)</li>
                    <li>Samai (Telugu)</li>
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
                            <td>11.4g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>10.5g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>68.0g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>3.0g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Great Millet</h2>
                <ul>
                    <li>Great Millet Khichdi</li>
                    <li>Great Millet Porridge</li>
                    <li>Millet Stir Fry</li>
                    <li>Great Millet Pancakes</li>
                    <li>Millet Upma</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Great Millet</h2>
                <p>Great millet is resilient to drought and can thrive in poor soil conditions, making it an eco-friendly crop that requires less water and resources.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Anjali :</strong> "Great millet has changed the way I eat! Healthy and fulfilling!"</p>
                <p><strong>Bhavani :</strong> "I love making khichdi with Great millet. So tasty and nutritious!"</p>
            </div>

            <div className="section">
                <h2>Great Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Great Millet:</strong> Excellent for digestive health and weight management.</li>
                    <li><strong>Finger Millet:</strong> High in calcium and good for bones.</li>
                    <li><strong>Pearl Millet:</strong> Supports heart health and overall nutrition.</li>
                    <li><strong>Foxtail Millet:</strong> High in protein, beneficial for diabetes management.</li>
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

export default Great;
