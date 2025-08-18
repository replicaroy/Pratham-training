const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'Home 2', key: 'home2' },
    { name: 'Home 3', key: 'home3' },
    { name: 'Articles List', key: 'articles' },
    { name: 'FAQs', key: 'faqs' },
    { name: 'Skins', key: 'skins' },
    { name: 'More', key: 'more' },
    { name: 'Contact', key: 'contact' }
  ];

  return (
<nav className="bg-gray-800 text-white py-4 px-70 xl:px-80">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">KnowledgeBase</h1>
          <p className="text-sm text-gray-400">Premium HTML Template</p>
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setCurrentPage(item.key)}
                className={`hover:text-blue-200 transition-colors ${
                  currentPage === item.key ? 'text-blue-300 font-bold' : ''
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar




// function Navbar({ navLinks, activeIndex, onNavClick }) {
//   return (
//     <nav className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         <div className="text-white font-bold text-lg">KnowledgeBase</div>
//         <ul className="hidden md:flex space-x-6">
//           {navLinks.map(({ label }, i) => (
//             <li key={label}>
//               <button
//                 onClick={() => onNavClick(i)}
//                 className={`hover:text-white focus:outline-none ${
//                   activeIndex === i
//                     ? "text-white font-semibold"
//                     : "text-gray-400"
//                 }`}
//               >
//                 {label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;
