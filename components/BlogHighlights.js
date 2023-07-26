/** @format */

const BlogHighlights = ({ blogs }) => {
  return (
    <section className="py-12 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Blog Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={blog.imageSrc}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="mt-4 inline-block px-4 py-2 text-sm font-medium text-indigo-600 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
