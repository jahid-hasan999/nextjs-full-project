import Image from 'next/image';
import Link from 'next/link';
import { IBooks } from '@/types/books.type';
import ReadBtn from '../dateils/ReadBtn';
import WishListBtn from '../dateils/WishListBtn';

interface BookDetailsCardProps {
  book: IBooks;
}

const BookDetailsCard = ({ book }: BookDetailsCardProps) => {
  const {
    
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="container mx-auto max-w-5xl">
        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="grid md:grid-cols-5">
            {/* Book Image */}
            <div className="flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-100 p-8 md:col-span-2">
              <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-lg">
                <Image
                  src={image}
                  alt={bookName}
                  width={300}
                  height={420}
                  className="h-[380px] w-[270px] rounded-xl object-cover transition duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="p-6 md:col-span-3 md:p-10">
              {/* Category */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                  {category}
                </span>

                <span className="rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-semibold text-yellow-700">
                  ⭐ {rating}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-lg text-slate-500">
                By{' '}
                <span className="font-semibold text-slate-800">{author}</span>
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-slate-600">{review}</p>

              {/* Book Info */}
              <div className="mt-7 grid grid-cols-2 gap-4 border-y border-slate-200 py-6 sm:grid-cols-4">
                <div>
                  <p className="text-sm text-slate-400">Pages</p>
                  <p className="mt-1 font-bold text-slate-800">{totalPages}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Published</p>
                  <p className="mt-1 font-bold text-slate-800">
                    {yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Publisher</p>
                  <p className="mt-1 font-bold text-slate-800">{publisher}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400">Rating</p>
                  <p className="mt-1 font-bold text-slate-800">{rating} / 5</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <ReadBtn book={book} />

                <WishListBtn book={book} />

                {/* <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                  Add to Wishlist
                </button> */}

                <Link href="/">
                  <button className="rounded-xl px-6 py-3 font-semibold text-slate-500 transition hover:text-indigo-600">
                    ← Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsCard;
