import Image from 'next/image';
import Link from 'next/link';
import { IBooks } from '@/types/books.type';

interface ListedBookCardProps {
  book: IBooks;
}

const ListedBookCard = ({ book }: ListedBookCardProps) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col gap-5 p-5 sm:flex-row">
        {/* Book Image */}
        <div className="relative flex h-56 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 sm:w-40">
          <Image
            src={image}
            alt={bookName}
            width={160}
            height={220}
            className="h-full w-auto object-cover transition duration-300 group-hover:scale-105"
          />

          {/* Category */}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur">
            {category}
          </span>
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 transition group-hover:text-indigo-600">
            {bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-sm text-gray-500">
            by <span className="font-medium text-gray-700">{author}</span>
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags?.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Book Stats */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-gray-400">Pages</p>
              <p className="mt-1 font-semibold text-gray-700">{totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Published</p>
              <p className="mt-1 font-semibold text-gray-700">
                {yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Publisher</p>
              <p className="mt-1 truncate font-semibold text-gray-700">
                {publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Rating</p>
              <p className="mt-1 font-semibold text-gray-700">⭐ {rating}</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="rounded-lg bg-indigo-50 px-3 py-2">
              <span className="text-xs text-indigo-400">Book ID</span>
              <p className="font-bold text-indigo-600">#{bookId}</p>
            </div>

            <Link
              href={`/books/${bookId}`}
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
