'use client';
import { BookContext } from '@/contex/BookContex';
import { useContext } from 'react';
import { IBooks } from '@/types/books.type';
import { toast } from 'react-toastify';

const WishListBtn = ({ book }: { book: IBooks }) => {
  const context = useContext(BookContext);

  const { wishList, setWishList } = context;
  
   const handleWishList = () => {
     const alreadyWishList = wishList.some(item => item.bookId === book.bookId);

     if (alreadyWishList) {
       toast('This book is already in your add list!');
       return;
     }

    setWishList([...wishList, book]);

     toast(book.bookName);
   };
  
  return (
    <div>
      <button
        className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 hover:shadow-lg"
        onClick={() => handleWishList()}
      >
       Wish List
      </button>
    </div>
  );
};

export default WishListBtn;
