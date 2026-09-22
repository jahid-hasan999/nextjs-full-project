import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IBooks } from '@/types/books.type';

interface IBookProps{
  books: IBooks;
}

const BooksCard = ({ books }:IBookProps) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = books;

  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center bg-slate-100 p-5">
        <Image
          src={image}
          alt={bookName}
          width={220}
          height={280}
          className="h-full w-auto rounded-lg object-cover shadow-md transition duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {tags?.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold transition group-hover:text-indigo-600">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{author}</span>
        </p>

        {/* Book Information */}
        <div className="mt-4 grid grid-cols-2 gap-3 border-y border-base-200 py-4 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold">{totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>
        </div>

        {/* Rating + Button */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-bold">{rating}</span>
            <span className="text-sm text-gray-400">/ 5</span>
          </div>

          <Link href={`/books/${bookId}`}>
            <button className="btn btn-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
