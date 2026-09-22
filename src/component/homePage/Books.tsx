
import BooksCard from '../shared/BooksCard';
import { IBooks } from '@/types/books.type';

const getData = async () => {

  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
 
}

const Books = async() => {

  const books = await getData();
  return (
    <div>
      Books page
      <div className='grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-2.5'>
        {books.map((book:IBooks )=> (
          <BooksCard key={book.bookId} books={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;