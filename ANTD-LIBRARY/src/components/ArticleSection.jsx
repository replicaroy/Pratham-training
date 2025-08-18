const ArticleSection = ({ title, articles }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 border-l-4 border-blue-200 bg-gray-50">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">{article.title}</h3>
              <div className="text-sm text-gray-600">
                <span>{article.date}</span>
                <span className="mx-2">in</span>
                <span className="text-blue-600">{article.category}</span>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
              {article.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArticleSection


// import ArticleItem from "./ArticleItem";
// import { articles } from "./config";

// function ArticlesSection() {
//   return (
//     <section className="flex flex-wrap justify-between px-6 py-8 max-w-7xl mx-auto gap-6">
//       <div className="w-full md:w-1/2">
//         <h2 className="font-bold mb-4">Featured Articles</h2>
//         <ul>
//           {articles.featured.map((a, i) => (
//             <ArticleItem key={`featured-${i}`} article={a} />
//           ))}
//         </ul>
//       </div>
//       <div className="w-full md:w-1/2">
//         <h2 className="font-bold mb-4">Latest Articles</h2>
//         <ul>
//           {articles.latest.map((a, i) => (
//             <ArticleItem key={`latest-${i}`} article={a} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default ArticlesSection