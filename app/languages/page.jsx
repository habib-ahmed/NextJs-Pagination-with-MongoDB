import { connectToDatabase } from "@/constants/db";
import Link from "next/link";

async function getData(perPage, page) {
  try {
    // DB Connect
    const client = await connectToDatabase();
    const db = client.db("programming");

    // DB Query
    const items = await db
      .collection("languages")
      .find({})
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .toArray();

    const itemCount = await db.collection("languages").countDocuments({});

    const response = { items, itemCount };
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({ searchParams }) {
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 8;
  const data = await getData(perPage, page);
  // console.log(data);

  const totalPages = Math.ceil(data.itemCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <>
      <div className="container mx-auto md:w-2/3 px-4 mt-8">
        <h1 className="text-3xl font-bold text-center mb-10">
          Languages ({data.itemCount})
        </h1>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {data.items.map((item) => (
            <li
              key={item._id}
              className="bg-green-500 rounded-md p-4 text-black"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {isPageOutOfRange ? (
          <div>No more pages...</div>
        ) : (
          <div className="flex justify-center items-center mt-16">
            <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
              {page === 1 ? (
                <div className="opacity-60" aria-disabled="true">
                  Previous
                </div>
              ) : (
                <Link href={`?page=${prevPage}`} aria-label="Previous Page">
                  Previous
                </Link>
              )}

              {pageNumbers.map((pageNumber, index) => (
                <Link
                  key={index}
                  className={
                    page === pageNumber
                      ? "bg-green-500 fw-bold px-2 rounded-md text-black"
                      : "hover:bg-green-500 px-1 rounded-md"
                  }
                  href={`?page=${pageNumber}`}
                >
                  {pageNumber}
                </Link>
              ))}

              {page === totalPages ? (
                <div className="opacity-60" aria-disabled="true">
                  Next
                </div>
              ) : (
                <Link href={`?page=${nextPage}`} aria-label="Next Page">
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
