import React, { useState } from 'react';

const categories = [
  { title: "Category", items: ["Men's T-shirts", "Polos & Shirts", "Men's T-Shirts", "Men's Polos", "Women's Tops", "T-Shirts & Shirts", "Women's T-Shirts", "Men's Sports T-Shirts", "Jerseys", "Boys' T-Shirts", "Polos", "Customer Review", "4 Stars & Up & Up"] },
  { title: "Brand", items: ["LEOTUDE", "Allen Solly", "EYEBOGLER", "Van Heusen", "Leriya Fashion", "Veirdo", "London Hills"] },
  { title: "Deals & Discounts", items: ["All Discounts", "Today's Deals", "Apparel Fashion Brands", "Top Brands", "Made for Amazon", "Premium Brands"] },
  { title: "Men's Size", items: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL", "Free Size"] },

  { title: "Shirt Neck Style", items: ["Asymmetric Neck", "Boat Neck", "Collared Neck", "Cowl Neck", "Crew Neck", "Halter Neck", "Henley Neck", "High Neck", "Hooded Neck", "Keyhole Neck", "Mandarin Neck"] },
  { title: "Special Features", items: ["Breathable", "Lightweight", "Moisture Wicking", "Quick Dry", "Sun Protection", "Adjustable", "Reversible"] },
  { title: "Sleeve Length Description", items: ["Sleeveless", "Short Sleeve", "Half Sleeve", "3/4 Sleeve", "Long Sleeve"] },
  { title: "Closure Type", items: ["Button", "Pull On", "Snap", "Zipper", "Buckle", "Drawstring", "Hook and Eye"] },
  { title: "Pocket Description", items: ["Cargo Pocket", "Coin Pocket", "Flap Pocket", "Jetted Pocket", "Kangaroo Pocket", "Patch Pocket", "Round Pocket", "Seam Pocket", "Slant Pocket", "Slit Pocket", "Straight Pocket"] },
  { title: "Occasion", items: ["Anniversary", "Baby Shower", "Bachelor Party", "Bachelorette Party", "Baptism", "Birthday", "Christmas"] },
  { title: "Apparel Material", items: ["Art Silk", "Chiffon", "Cotton", "Crepe", "Denim", "Fleece", "Fur"] },
  { title: "Care Instructions", items: ["Dry Clean Only", "Hand Wash Only", "Machine Wash"] },
  { title: "Lifestyle", items: ["Business Casual", "Casual", "Comfort", "Evening", "Formal"] },
  { title: "Sleeve Cuff Style", items: ["Barrel Cuff", "Double Cuff", "Ribbed Cuff", "Round Cut Cuff", "Single Cuff"] },
  { title: "New Arrivals", items: ["Last 30 days", "Last 90 days"] },
  { title: "Discount", items: ["10% Off or more", "25% Off or more", "35% Off or more", "50% Off or more", "60% Off or more", "70% Off or more"] },
  { title: "Pay On Delivery", items: ["Eligible for Pay On Delivery"] }
];

const Category = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories(expandedCategories.filter(item => item !== index));
    } else {
      setExpandedCategories([...expandedCategories, index]);
    }
  };

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h3 className="category-title font-bold">{category.title}</h3>
          <ul className="category-list text-blue-900">
            {category.items.slice(0, 4).map((item, itemIndex) => (
              <li key={itemIndex} className="category-item">
                <label>
                  <input type="checkbox" />
                  {item}
                </label>
              </li>
            ))}
            {category.items.length > 4 && (
              <li
                className="see-more  text-red-500"
                onClick={() => toggleCategory(index)}
              >
                <span>{expandedCategories.includes(index) ? 'See less' : 'See more'}</span>
              </li>
            )}
            {expandedCategories.includes(index) &&
              category.items.slice(4).map((item, itemIndex) => (
                <li key={itemIndex} className="category-item">
                  <label>
                    <input type="checkbox" />
                    {item}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Category;

// import React from 'react';

// const categories = [
//   { title: "Category", items: [
//     "Men's T-shirts, Polos & Shirts",
//     "Men's T-Shirts",
//     "Men's Polos",
//     "Women's Tops, T-Shirts & Shirts",
//     "Women's T-Shirts",
//     "Men's Sports T-Shirts & Jerseys",
//     "Boys' T-Shirts & Polos",
//     "Boys' T-Shirts",
//     "Boys' Polos"
//   ]},
//   { title: "Customer Review", items: [
//     "4 Stars & Up & Up"
//   ]},
//   { title: "Brand", items: [
//     "LEOTUDE",
//     "Allen Solly",
//     "EYEBOGLER",
//     "Van Heusen",
//     "Leriya Fashion",
//     "Veirdo",
//     "London Hills"
//   ]},
//   { title: "Deals & Discounts", items: [
//     "All Discounts",
//     "Today's Deals",
//     "Apparel Fashion Brands",
//     "Top Brands",
//     "Made for Amazon",
//     "Premium Brands"
//   ]},
//   { title: "Men's Size", items: [
//     "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL", "Free Size"
//   ]},
//   { title: "Pay On Delivery", items: [
//     { label: "Eligible for Pay On Delivery", type: "checkbox" }
//   ]},
//   { title: "Shirt Neck Style", items: [
//     { label: "Asymmetric Neck", type: "checkbox" },
//     { label: "Boat Neck", type: "checkbox" },
//     { label: "Collared Neck", type: "checkbox" },
//     { label: "Cowl Neck", type: "checkbox" },
//     { label: "Crew Neck", type: "checkbox" },
//     { label: "Halter Neck", type: "checkbox" },
//     { label: "Henley Neck", type: "checkbox" },
//     { label: "High Neck", type: "checkbox" },
//     { label: "Hooded Neck", type: "checkbox" },
//     { label: "Keyhole Neck", type: "checkbox" },
//     { label: "Mandarin Neck", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Special Features", items: [
//     { label: "Breathable", type: "checkbox" },
//     { label: "Lightweight", type: "checkbox" },
//     { label: "Moisture Wicking", type: "checkbox" },
//     { label: "Quick Dry", type: "checkbox" },
//     { label: "Sun Protection", type: "checkbox" },
//     { label: "Adjustable", type: "checkbox" },
//     { label: "Reversible", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Sleeve Length Description", items: [
//     { label: "Sleeveless", type: "checkbox" },
//     { label: "Short Sleeve", type: "checkbox" },
//     { label: "Half Sleeve", type: "checkbox" },
//     { label: "3/4 Sleeve", type: "checkbox" },
//     { label: "Long Sleeve", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Closure Type", items: [
//     { label: "Button", type: "checkbox" },
//     { label: "Pull On", type: "checkbox" },
//     { label: "Snap", type: "checkbox" },
//     { label: "Zipper", type: "checkbox" },
//     { label: "Buckle", type: "checkbox" },
//     { label: "Drawstring", type: "checkbox" },
//     { label: "Hook and Eye", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Pocket Description", items: [
//     { label: "Cargo Pocket", type: "checkbox" },
//     { label: "Coin Pocket", type: "checkbox" },
//     { label: "Flap Pocket", type: "checkbox" },
//     { label: "Jetted Pocket", type: "checkbox" },
//     { label: "Kangaroo Pocket", type: "checkbox" },
//     { label: "Patch Pocket", type: "checkbox" },
//     { label: "Round Pocket", type: "checkbox" },
//     { label: "Seam Pocket", type: "checkbox" },
//     { label: "Slant Pocket", type: "checkbox" },
//     { label: "Slit Pocket", type: "checkbox" },
//     { label: "Straight Pocket", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Occasion", items: [
//     { label: "Anniversary", type: "checkbox" },
//     { label: "Baby Shower", type: "checkbox" },
//     { label: "Bachelor Party", type: "checkbox" },
//     { label: "Bachelorette Party", type: "checkbox" },
//     { label: "Baptism", type: "checkbox" },
//     { label: "Birthday", type: "checkbox" },
//     { label: "Christmas", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Apparel Material", items: [
//     { label: "Art Silk", type: "checkbox" },
//     { label: "Chiffon", type: "checkbox" },
//     { label: "Cotton", type: "checkbox" },
//     { label: "Crepe", type: "checkbox" },
//     { label: "Denim", type: "checkbox" },
//     { label: "Fleece", type: "checkbox" },
//     { label: "Fur", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Care Instructions", items: [
//     { label: "Dry Clean Only", type: "checkbox" },
//     { label: "Hand Wash Only", type: "checkbox" },
//     { label: "Machine Wash", type: "checkbox" }
//   ], seeMore: true },
//   { title: "Lifestyle", items: [
//     { label: "Business Casual", type: "checkbox" },
//     { label: "Casual", type: "checkbox" },
//     { label: "Comfort", type: "checkbox" },
//     { label: "Evening", type: "checkbox" },
//     { label: "Formal", type: "checkbox" }
//   ]},
//   { title: "Sleeve Cuff Style", items: [
//     { label: "Barrel Cuff", type: "checkbox" },
//     { label: "Double Cuff", type: "checkbox" },
//     { label: "Ribbed Cuff", type: "checkbox" },
//     { label: "Round Cut Cuff", type: "checkbox" },
//     { label: "Single Cuff", type: "checkbox" }
//   ]},
//   { title: "New Arrivals", items: [
//     "Last 30 days",
//     "Last 90 days"
//   ]},
//   { title: "Discount", items: [
//     "10% Off or more",
//     "25% Off or more",
//     "35% Off or more",
//     "50% Off or more",
//     "60% Off or more",
//     "70% Off or more"
//   ]},
// ];

// const Category = () => (
//   <div>
//     {categories.map((category, index) => (
//       <div key={index} className="mb-4">
//         <h3 className="text-[#0F1111] font-bold text-[14px] leading-5">{category.title}</h3>
//         <ul className="list-none p-0">
//           {category.items.map((item, idx) => (
//             <li key={idx} className="my-2">
//               {item.type === 'checkbox' ? (
//                 <label className="text-[#0F1111] text-[14px] leading-5">
//                   <input type="checkbox" className="mr-2" />
//                   {item.label}
//                 </label>
//               ) : (
//                 <span className="text-[#0F1111] text-[14px] leading-5">{item}</span>
//               )}
//             </li>
//           ))}
//           {category.seeMore && (
//             <li className="my-2 text-red-500 text-[14px] leading-5 cursor-pointer">See more</li>
//           )}
//         </ul>
//       </div>
//     ))}
//   </div>
// );

// export default Category;