import './Faqs.css';

function Faqs() {
    const faqs = [
        {
            question: "What are millets, and why should I include them in my diet?",
            answer: "Millets are small-seeded grasses that are highly nutritious and rich in fiber, vitamins, and minerals. Including millets in your meals can help with digestion, regulate blood sugar levels, and improve overall health. They are gluten-free and ideal for those with gluten sensitivities or celiac disease."
        },
        {
            question: "What types of millets do you offer in your store?",
            answer: "We offer a variety of millets, including Foxtail Millet, Little Millet, Kodo Millet, Barnyard Millet, Browntop Millet, Pearl Millet, Finger Millet, Proso Millet, Great Millet, and All Millets Mix."
        },
        {
            question: "How do I cook millets?",
            answer: "Millets can be cooked similarly to rice. Rinse them thoroughly and soak them for at least 30 minutes. Then, cook them in a ratio of 1 part millet to 2.5 parts water, bringing to a boil and simmering until tender. You can also roast millets for a nuttier flavor or add them to soups, salads, and porridges."
        },
        {
            question: "Are millets gluten-free?",
            answer: "Yes, millets are naturally gluten-free, making them a great alternative for those with gluten intolerance or celiac disease. They provide a nutritious, digestible option for those seeking gluten-free grains."
        },
        {
            question: "How should I store millets to ensure freshness?",
            answer: "To preserve their freshness, store millets in airtight containers in a cool, dry place. In warmer climates, or for long-term storage, refrigerating or freezing millets is recommended. This helps to prevent them from going rancid and extends their shelf life."
        },
        {
            question: "Can I substitute millets for rice or wheat in my regular recipes?",
            answer: "Absolutely! Millets can be used as a substitute for rice, quinoa, or couscous in many recipes. You can also use millet flour as a replacement for wheat flour in gluten-free baking. Their versatility makes them a nutritious addition to soups, stews, and salads."
        },
        {
            question: "Are millets suitable for weight loss?",
            answer: "Yes, millets are great for weight loss due to their high fiber content, which promotes satiety and helps you feel fuller for longer. They are also low in calories and have a low glycemic index, which can help with weight management and maintaining steady blood sugar levels."
        },
        {
            question: "How are millets beneficial for people with diabetes?",
            answer: "Millets have a low glycemic index, meaning they release glucose into the bloodstream slowly, preventing sudden spikes in blood sugar levels. This makes them an excellent food choice for people with diabetes or those looking to maintain stable blood sugar levels."
        },
        {
            question: "Do millets have any environmental benefits?",
            answer: "Yes, millets are considered environmentally friendly crops. They require less water and can thrive in arid and semi-arid regions. Millets also need fewer pesticides and fertilizers compared to other cereal crops, making them more sustainable and eco-friendly."
        },
        {
            question: "Why should I choose organic millets?",
            answer: "Organic millets are grown without the use of synthetic pesticides or fertilizers, making them healthier and safer for consumption. By choosing organic, you support environmentally sustainable farming practices that help reduce soil degradation and promote biodiversity."
        }
    ];

    return (
        <div className="faqs-container">
            <h1>FAQ's</h1>
            <div className="faqs-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h2 className="faq-question">{faq.question}</h2>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faqs;
