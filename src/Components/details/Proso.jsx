import React from 'react';
import { Link } from 'react-router-dom';
import m8 from "../../assets/proso-millet.jpg"; 
import './Mixed.css'; 

function Proso() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m8} 
                    alt="Proso Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>Proso Millet Crop Details</h2>
                <p>Proso millet matures in about <strong>60 to 90 days</strong> and is well-suited for dry climates, making it a resilient choice for farmers.</p>
            </div>

            <div className="section">
                <h2>Products Made Using Proso Millet</h2>
                <ol>
                    <li>Proso Millet Flour</li>
                    <li>Millet Porridge</li>
                    <li>Millet Bread</li>
                    <li>Proso Millet Snacks</li>
                    <li>Millet Noodles</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating Proso Millet</h2>
                <ul>
                    <li>High in protein and fiber, supporting overall health.</li>
                    <li>Rich in vitamins and minerals essential for body functions.</li>
                    <li>Helps regulate blood sugar levels.</li>
                    <li>Supports digestive health and weight management.</li>
                    <li>Contains antioxidants that contribute to overall wellness.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for Proso Millet</h2>
                <ul>
                    <li>Proso (English)</li>
                    <li>Common Millet (English)</li>
                    <li>Panicum miliaceum (Scientific name)</li>
                    <li>Chena (Hindi)</li>
                    <li>Cheena (Bengali)</li>
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
                            <td>378 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>11.0g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>8.5g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>73.0g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>4.2g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with Proso Millet</h2>
                <ul>
                    <li>Proso Millet Khichdi</li>
                    <li>Proso Millet Porridge</li>
                    <li>Millet Stir Fry</li>
                    <li>Proso Millet Pancakes</li>
                    <li>Proso Millet Salad</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing Proso Millet</h2>
                <p>Proso millet is drought-resistant and requires minimal inputs, making it a sustainable choice for farmers and beneficial for the environment.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Naveen :</strong> "Proso millet is a great addition to my meals. It's healthy and easy to cook!"</p>
                <p><strong>Syam Prasad :</strong> "I love making millet salads with Proso millet. So nutritious!"</p>
            </div>

            <div className="section">
                <h2>Proso Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>Proso Millet:</strong> High in protein and great for weight management.</li>
                    <li><strong>Finger Millet:</strong> Excellent source of calcium and beneficial for bones.</li>
                    <li><strong>Pearl Millet:</strong> Supports heart health and overall nutrition.</li>
                    <li><strong>Browntop Millet:</strong> Ideal for digestive health and blood sugar control.</li>
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

export default Proso;
