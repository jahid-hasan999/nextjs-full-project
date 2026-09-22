
"use client"
import { BookContext } from '@/contex/BookContex';
import  { useContext } from 'react';
import { IBooks } from '@/types/books.type';
import { toast } from 'react-toastify';


const ReadBtn = ({ book }: { book: IBooks }) => {
  
  const context = useContext(BookContext);
   
  const { readBook, setReadBook } = context;

    const handleReadBook = () => {
      const alreadyRead = readBook.some(item => item.bookId === book.bookId);

      if (alreadyRead) {
        toast('This book is already in your read list!');
        return;
      }

      setReadBook([...readBook, book]);

     toast(book.bookName);
    };

  return (
    <div>

    <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg" onClick={()=>handleReadBook()}>
      Read Now
    </button>
    </div>
  );
};

export default ReadBtn;