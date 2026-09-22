'use client';


import { BookContext } from '@/contex/BookContex';
import { IBooks } from '@/types/books.type';
import { useContext, useState } from 'react';
import ListedBookCard from './ListedBookCard';

const ListBooks = () => {
  const context = useContext(BookContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  if (!context) {
    return <p>BookProvider not found</p>;
  }

  const { readBook, wishList } = context;

  const sortedReadBooks = [...readBook].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }

    if (sortBy === 'pages') {
      return b.totalPages - a.totalPages;
    }

    if (sortBy === 'year') {
      return b.yearOfPublishing - a.yearOfPublishing;
    }

    return 0;
  });

  const sortedWishList = [...wishList].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }

    if (sortBy === 'pages') {
      return b.totalPages - a.totalPages;
    }

    if (sortBy === 'year') {
      return b.yearOfPublishing - a.yearOfPublishing;
    }

    return 0;
  });



  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-5xl border rounded-3xl p-4 text-center font-bold">
        Books
      </h1>
      <div className="text-center my-3">
        <select
          value={sortBy}
          onChange={e =>
            setSortBy(e.target.value as 'rating' | 'pages' | 'year')
          }
          className="select select-success text-center "
        >
          <option disabled={true}>Sort By</option>
          <option value={'rating'}>Raring</option>
          <option value={'pages'}>Number of pages</option>
          <option value={'year'}>Publisher year</option>
        </select>
      </div>

      <div className="tabs tabs-border">
        {/* ================= READ BOOKS ================= */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBook.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-5 md:p-10">
          {sortedReadBooks.length > 0 ? (
            <div className="space-y-5">
              {sortedReadBooks.map((book: IBooks) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-2xl font-bold">
              No read books found
            </p>
          )}
        </div>

        {/* ================= WISHLIST ================= */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishList.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-5 md:p-10">
          {sortedWishList.length > 0 ? (
            <div className="space-y-5">
              {sortedWishList.map((book: IBooks) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-2xl font-bold">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
