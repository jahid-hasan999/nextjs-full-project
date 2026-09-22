import Image from 'next/image';
import banner from '@/assert/hero_img.jpg';

const Banner = () => {
  return (
    <section className="px-4 py-6">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900">
        <div className="grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-12 md:py-14">
          {/* Left Content */}
          <div className="text-white">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              📚 Discover Your Next Favorite Book
            </span>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Books to
              <span className="block text-indigo-300">freshen up</span>
              your bookshelf
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Explore amazing books, discover new stories, and find something
              perfect for your bookshelf.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <button className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400 hover:shadow-lg">
                View The List →
              </button>

              <button className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Explore Books
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={banner}
                alt="Books banner"
                width={500}
                height={400}
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
