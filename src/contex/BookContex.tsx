'use client';

import { createContext, ReactNode, useState } from 'react';

import { IBooks } from '@/types/books.type';

interface BookContextType {
  readBook: IBooks[];
  setReadBook: React.Dispatch<React.SetStateAction<IBooks[]>>;

  wishList: IBooks[];
  setWishList: React.Dispatch<React.SetStateAction<IBooks[]>>;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined,
);

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<IBooks[]>([]);
  const [wishList, setWishList] = useState<IBooks[]>([]);

  const sharedData = {
    readBook,
    setReadBook,
    wishList,
    setWishList,
  };

  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
