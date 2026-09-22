import BookDetailsCard from "@/component/shared/BookDetailsCard";

interface IBooksParams{
  params:Promise< {
    Id: string;
  }>
}
const getData = async (Id: string) => {

 
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    
 
  const data = await res.json();
 const book = data.find(
   (item: { bookId: number }) => item.bookId === Number(Id),
 );

  return book;
};


const DetailsPage =async({params}:IBooksParams) => {

  const { Id} = await params;
  const book = await getData(Id);
   
  return (
    <div>
      <BookDetailsCard book={book} />
    </div>
  );
};

export default DetailsPage;