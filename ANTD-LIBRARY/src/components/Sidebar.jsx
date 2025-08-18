const Sidebar = () => {
  const quickLinks = [
    { name: "Home", icon: "🏠" },
    { name: "Articles List", icon: "📝" },
    { name: "FAQs", icon: "❓" },
    { name: "Contact", icon: "📧" }
  ];

  const tags = [
    "basic", "beginner", "blogging", "colour", "css", "date",
    "design", "files", "format", "header", "images", "plugins",
    "selling", "templates", "theme", "time", "videos", "website", "wordpress"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Support Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-gray-800">Support</h3>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Need more support? If you did not found an answer, contact us for further help.
        </p>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
        <ul className="space-y-2">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar  



// import { quickLinks, supportText, tags } from "./config";

// function Sidebar() {
//   return (
//     <aside className="max-w-xs p-6 bg-yellow-50 rounded shadow space-y-8">
//       <div>
//         <h3 className="font-bold mb-2">Support</h3>
//         <p className="text-sm">{supportText}</p>
//       </div>
//       <div>
//         <h4 className="font-semibold mb-2">Quick Links</h4>
//         <ul className="grid grid-cols-2 gap-x-6 text-blue-600">
//           {quickLinks.map(({ label, href }, i) => (
//             <li key={i}>
//               <a href={href} className="hover:underline">
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h4 className="font-semibold mb-2">Tags</h4>
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className="bg-gray-200 px-3 py-1 rounded text-xs cursor-pointer hover:bg-gray-300"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// }
// export default Sidebar
