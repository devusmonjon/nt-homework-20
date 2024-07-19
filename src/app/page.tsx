"use client";
import { Breadcrumb, Product } from "@/components";
import { useEffect, useState } from "react";

/*export const metadata = {
  title: "MyShop - Home",
  description: "MyStore - online internet store from Usmonjon Hasanov - Home",
}; */

const fetchData = async (skip: number) => {
  const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${skip}`, {
    method: "GET",
    next: {
      revalidate: 5000,
    }
  });
  const resData = await response.json();
  return resData;
}
const Page = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [skipCount, setSkipCount] = useState<number>(0);

  const fetchHandler = async (skip: number) => {
    setIsLoading(true);
    await fetchData(skip).then((res) => {
      setSkipCount(skip + 12);
      setIsLoading(false);
      return res.products
    })
    .then((res) => setData([...data, ...res])).finally(() => setIsLoading(false));
  };

  // server sider rendering
  useEffect(() => {
    fetchData(skipCount).then((res) => {
      setSkipCount(skipCount + 12);
      setIsLoading(false);
      return res.products
    })
    .then((res) => setData([...data, ...res])).finally(() => setIsLoading(false));
  }, []);

  return (
    <>
    <Breadcrumb data={[
      {link: false, name: "Home"}
    ]} />
    <main>
      <div className="container">
        {/* responsive flex */}
        <div className="flex flex-wrap -m-4">
        {data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            thumbnail={item.thumbnail}
            category={item.category}
            tags={item.tags}
            price={item.price}
          />
        ))}
        </div>
        <button className="btn text-white my-10 w-full" onClick={() => fetchHandler(skipCount)}>
          {isLoading ? (<span className="loading loading-spinner"></span>) : "Load More"}
          </button>
      </div>
    </main>
    </>
  );
};

interface IProducts {
  products: IProduct[];
}

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviews[];
  returnPolicy: string;
  minimumOrderQuantity: 1;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface IReviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export default Page;
