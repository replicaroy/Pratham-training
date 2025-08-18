const Footer = () => {
  const footerLinks = [
    "Advanced Techniques",
    "Designing In WordPress", 
    "Server & Database",
    "Theme Development",
    "Website Dev",
    "WordPress for Beginners",
    "WordPress Plugins"
  ];

  const socialIcons = ['f', 't', 'r', 'g', 'fl', 's', 'in'];

  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* How it works */}
        <div>
          <h3 className="font-bold mb-4">How it works</h3>
          <div className="space-y-4 text-sm text-gray-300">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <button className="text-gray-300 hover:text-white text-sm text-left">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Tweets */}
        <div>
          <h3 className="font-bold mb-4">Latest Tweets</h3>
          <p className="text-gray-300 text-sm">No Tweets loaded !</p>
        </div>

        {/* Flickr Photos */}
        <div>
          <h3 className="font-bold mb-4">Flickr Photos</h3>
          <div className="text-gray-300 text-sm">Flickr photos section</div>
        </div>
      </div>

      {/* Copyright and Social */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-400 text-sm mb-4">Copyright © 2013. All Rights Reserved by KnowledgeBase</p>
        <div className="flex justify-center space-x-4">
          {socialIcons.map((social, index) => (
            <div key={index} className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 cursor-pointer">
              <span className="text-xs text-white">{social}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer

// import { footerCategories } from "./config";
// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-10 px-6">
//       <div className="max-w-7xl mx-auto flex flex-wrap gap-10">
//         <div className="flex-1 min-w-[250px]">
//           <h4 className="font-bold mb-3">How it works</h4>
//           <p className="text-sm mb-2">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
//           </p>
//           <p className="text-sm">
//             Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//           </p>
//         </div>
//         <div className="flex-1 min-w-[150px]">
//           <h4 className="font-bold mb-3">Categories</h4>
//           <ul>
//             {footerCategories.map((cat, i) => (
//               <li key={i} className="mb-1 hover:underline cursor-pointer">{cat}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex-1 min-w-[150px]">
//           <h4 className="font-bold mb-3">Latest Tweets</h4>
//           <p>No Tweets loaded !</p>
//         </div>
//         <div className="flex-1 min-w-[150px]">
//           <h4 className="font-bold mb-3">Flickr Photos</h4>
//           {/* Flickr photos would go here */}
//         </div>
//       </div>
//       <div className="text-center mt-6 text-sm text-gray-500">
//         Copyright © 2013 All Rights Reserved by KnowledgeBase.
//       </div>
//     </footer>
//   );
// }
// export default Footer

