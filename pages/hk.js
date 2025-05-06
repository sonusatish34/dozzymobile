// 'use client';

// export default function GroupedProperties() {
//   const aerah = [
//     { property_price: 8000, weekend_price: 12000, property_name: "KVP Farmhouse" },
//     { property_price: 8000, weekend_price: 12000, property_name: "tets Farmhouse" },
//     { property_price: 2000, weekend_price: 121000, property_name: "43 Farmhouse" },
//     { property_price: 10000, weekend_price: 12000, property_name: "hki Farmhouse" },
//     { property_price: 10000, weekend_price: 12000, property_name: "yy Farmhouse" },
//     { property_price: 10000, weekend_price: 12000, property_name: "56 Farmhouse" },
//     { property_price: 9000, weekend_price: 12000, property_name: "ew Farmhouse" },
//   ];

//   const groupByPrice = aerah.reduce((acc, curr) => {
//     const price = curr.property_price;
//     if (!acc[price]) {
//       acc[price] = [];
//     }
//     acc[price].push(curr);
//     return acc;
//   }, {});

//   return (
//     <div className="text-red-300">
//       <p>Grouped Properties by Price</p>
//       {Object.keys(groupByPrice).sort((a, b) => a - b).map((price) => (
//         <div key={price}>
//           <h3>₹{price} Properties</h3>
//           <ul>
//             {groupByPrice[price].map((property, idx) => (
//               <li key={idx}>
//                 {property.property_name} - Weekend: ₹{property.weekend_price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';

export default function GroupedSliders() {
  const aerah = [
    { property_price: 8000, weekend_price: 12000, property_name: "KVP Farmhouse" },
    { property_price: 8000, weekend_price: 12000, property_name: "plp Farmhouse" },
    { property_price: 2000, weekend_price: 121000, property_name: "43 Farmhouse" },
    { property_price: 10000, weekend_price: 12000, property_name: "hki Farmhouse" },
    { property_price: 9000, weekend_price: 12000, property_name: "ew Farmhouse" },
  ];

  // Group by property_price
  const groupByPrice = aerah.reduce((acc, curr) => {
    const price = curr.property_price;
    if (!acc[price]) {
      acc[price] = [];
    }
    acc[price].push(curr);
    return acc;
  }, {});

  return (
    <div>
      <h2>Farmhouses by Price</h2>
      {Object.keys(groupByPrice).sort((a, b) => a - b).map((price) => (
        <div key={price} style={{ marginBottom: '40px' }}>
          <h3>₹{price} Farmhouses</h3>
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}>
            {groupByPrice[price].map((property, idx) => (
              <div key={idx} style={{
                minWidth: '200px',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                borderRadius: '6px'
              }}>
                <strong>{property.property_name}</strong><br />
                Price: ₹{property.property_price}<br />
                Weekend: ₹{property.weekend_price}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
