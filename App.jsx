export default function PinterestCloneUI() {
  const posts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      title: 'Mountain Adventure',
      user: 'Sona',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',
      title: 'Travel Vibes',
      user: 'John',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1200&auto=format&fit=crop',
      title: 'Modern Workspace',
      user: 'David',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200&auto=format&fit=crop',
      title: 'Creative Ideas',
      user: 'Emma',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
      title: 'Nature View',
      user: 'Alex',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
      title: 'Team Work',
      user: 'Sophia',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              PinBoard
            </h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search inspiration..."
              className="w-full bg-gray-100 rounded-full px-5 py-3 outline-none border border-transparent focus:border-red-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300">
              Upload
            </button>

            <div className="w-11 h-11 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-10 text-white shadow-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Creative
            <br />
            Inspiration Everyday
          </h1>

          <p className="mt-5 text-lg text-white/90 max-w-2xl">
            Explore trending ideas, save inspiration, upload creative content,
            and connect with creators around the world.
          </p>

          <button className="mt-8 bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Explore Feed
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 pb-8 flex flex-wrap gap-3">
        {['Travel', 'Design', 'Coding', 'Nature', 'Photography', 'Fashion'].map(
          (category) => (
            <button
              key={category}
              className="bg-white px-5 py-2 rounded-full shadow hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              {category}
            </button>
          )
        )}
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {posts.map((post) => (
            <div
              key={post.id}
              className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                <button className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Save
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      by {post.user}
                    </p>
                  </div>

                  <button className="text-red-500 text-xl hover:scale-125 transition-all duration-300">
                    ❤
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
