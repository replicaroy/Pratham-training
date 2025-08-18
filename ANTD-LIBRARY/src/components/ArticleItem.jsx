function ArticleItem({ article }) {
  return (
    <li className="mb-3 flex justify-between">
      <div>
        <h4 className="font-semibold hover:underline cursor-pointer">{article.title}</h4>
        <small className="text-gray-500">
          {article.date} in {article.category}
        </small>
      </div>
      <div className="flex items-center text-gray-500">
        <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 7.91l6.562-.955L10 1l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
        </svg>
        <span>{article.likes}</span>
      </div>
    </li>
  );
}
export default ArticleItem;