import ArticleSection from "../components/ArticleSection";

const HomePage = () => {
  const featuredArticles = [
    { title: "Integrating WordPress with Your Website", date: "25 Feb, 2013", category: "Server & Database", count: "66" },
    { title: "WordPress Site Maintenance", date: "24 Feb, 2013", category: "Website Dev", count: "15" },
    { title: "Meta Tags in WordPress", date: "23 Feb, 2013", category: "Website Dev", count: "8" },
    { title: "WordPress in Your Language", date: "22 Feb, 2013", category: "Advanced Techniques", count: "6" },
    { title: "Know Your Sources", date: "22 Feb, 2013", category: "Website Dev", count: "2" },
    { title: "Validating a Website", date: "21 Feb, 2013", category: "Website Dev", count: "3" }
  ];

  const latestArticles = [
    { title: "Integrating WordPress with Your Website", date: "26 Feb, 2013", category: "Server & Database", count: "66" },
    { title: "Using Javascript", date: "26 Feb, 2013", category: "Advanced Techniques", count: "18" },
    { title: "Using Images", date: "25 Feb, 2013", category: "Designing in WordPress", count: "7" },
    { title: "Using Video", date: "24 Feb, 2013", category: "WordPress Plugins", count: "7" },
    { title: "WordPress Site Maintenance", date: "24 Feb, 2013", category: "Website Dev", count: "15" },
    { title: "WordPress CSS Information and Techniques", date: "24 Feb, 2013", category: "Theme Development", count: "1" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ArticleSection title="Featured Articles" articles={featuredArticles} />
            <ArticleSection title="Latest Articles" articles={latestArticles} />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <CategoriesSection />
    </div>
  );
};

export default HomePage;  


// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home