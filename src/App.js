import React from 'react';
import './App.css';
import Category from './Category.js';

const products = [
  { name: 'Shirt 1' },
  { name: 'Shirt 2' },
  { name: 'Shirt 3' },
  { name: 'Shirt 4' },
  { name: 'Shirt 5' },
  { name: 'Shirt 6' },
  { name: 'Shirt 7' },
  { name: 'Shirt 8' },
  { name: 'Shirt 9' },
  { name: 'Shirt 10' }
];

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-center p-5 mx-auto">
      <div className="bg-white p-2 w-full md:w-1/5">
        <Category />
      </div>
      <div className="p-5 bg-white cursor-pointer w-full md:w-4/5">
        <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full h-[282.59px] bg-gray-300 p-5 text-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >


              <div className="mt-2">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;







// import React from 'react';
// import './App.css';
// import Category from './Category';
// import image from './assets/image.jpg';

// const products = [
//   { name: 'Shirt 1',img:"/assets/images.jpg" },
//   { name: 'Shirt 2' },
//   { name: 'Shirt 3' },
//   { name: 'Shirt 4' },
//   { name: 'Shirt 5' },
//   { name: 'Shirt 1' },
//   { name: 'Shirt 2' },
//   { name: 'Shirt 3' },
//   { name: 'Shirt 4' },
//   { name: 'Shirt 5' }
// ];

// function App() {
//   return (
//     <div className="flex  flex-col justify-center p-5 mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-[20%,80%] w-full h-screen">
//         <div className="bg-white p-2">
//           <Category />
//         </div>
//         <div className="p-5 bg-white cursor-pointer">
//           <div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-5">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[282.59px] bg-gray-300 p-5 text-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
//               >
//                 {product.name}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;