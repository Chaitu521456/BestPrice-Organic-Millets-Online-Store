import React from 'react';
import { Link } from 'react-router-dom';
import m10 from "../../assets/mix-millet.jpg"; 
import './Mixed.css'; 

function All() {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={m10} 
                    alt="All Mix Millet" 
                    className="image"
                />
            </div>

            <div className="section">
                <h2>All Mix Millet Crop Details</h2>
                <p>All Mix Millet is a blend of various millets, each contributing unique nutritional benefits and flavors. This mix matures in about <strong>60 to 120 days</strong> depending on the specific types included.</p>
            </div>

            <div className="section">
                <h2>Products Made Using All Mix Millet</h2>
                <ol>
                    <li>Millet Flour Blend</li>
                    <li>Mixed Millet Porridge</li>
                    <li>Millet Energy Bars</li>
                    <li>Mixed Millet Dosa</li>
                    <li>Millet Salad</li>
                </ol>
            </div>

            <div className="section">
                <h2>Benefits of Eating All Mix Millet</h2>
                <ul>
                    <li>Rich in fiber and protein, supporting digestive health and satiety.</li>
                    <li>Provides a variety of vitamins and minerals from different millet types.</li>
                    <li>Helps regulate blood sugar levels due to its low glycemic index.</li>
                    <li>Supports weight management and overall health.</li>
                    <li>Contains antioxidants and anti-inflammatory properties.</li>
                </ul>
            </div>

            <div className="section">
                <h2>Other Names for All Mix Millet</h2>
                <ul>
                    <li>Mixed Millet (English)</li>
                    <li>Millet Mix (English)</li>
                    <li>Varied Millets (Common term)</li>
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
                            <td>350 kcal</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>12.0g</td>
                        </tr>
                        <tr>
                            <td>Fiber</td>
                            <td>9.0g</td>
                        </tr>
                        <tr>
                            <td>Carbohydrates</td>
                            <td>68.0g</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>3.5g</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Popular Recipes with All Mix Millet</h2>
                <ul>
                    <li>All Mix Millet Khichdi</li>
                    <li>Mixed Millet Upma</li>
                    <li>Millet Pancakes</li>
                    <li>Millet Porridge</li>
                    <li>Mixed Millet Biryani</li>
                </ul>
            </div>

            <div className="section">
                <h2>Environmental Benefits of Growing All Mix Millet</h2>
                <p>Growing a mix of millets contributes to biodiversity and soil health. It is a sustainable option that requires less water and is resilient to climate changes.</p>
            </div>

            <div className="section">
                <h2>Customer Reviews</h2>
                <p><strong>Sara :</strong> "I love the All Mix Millet! It adds so much variety to my meals!"</p>
                <p><strong>Vikram :</strong> "This mix is perfect for my family. Healthy and delicious!"</p>
            </div>

            <div className="section">
                <h2>All Mix Millet vs. Other Millets</h2>
                <ul>
                    <li><strong>All Mix Millet:</strong> A blend that maximizes nutritional benefits.</li>
                    <li><strong>Foxtail Millet:</strong> Known for its high protein content.</li>
                    <li><strong>Great Millet:</strong> Excellent for digestive health.</li>
                    <li><strong>Pearl Millet:</strong> Supports heart health and is nutrient-dense.</li>
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

export default All;
