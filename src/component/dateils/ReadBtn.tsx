'use client';

import { BookContext } from '@/contex/BookContex';
import { IBooks } from '@/types/books.type';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadBtn = ({ book }: { book: IBooks }) => {
  const context = useContext(BookContext);

  if (!context) {
    return <p>BookProvider not found</p>;
  }

  const { readBook, setReadBook } = context;

  const handleReadBook = () => {
    const alreadyRead = readBook.some(
      (item: IBooks) => item.bookId === book.bookId,
    );

    if (alreadyRead) {
      toast('This book is already in your read list!');
      return;
    }

    setReadBook([...readBook, book]);

    toast(book.bookName);
  };

  return (
    <div>
      <button
        className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg"
        onClick={handleReadBook}
      >
        Read Now
      </button>
    </div>
  );
};

export default ReadBtn;
