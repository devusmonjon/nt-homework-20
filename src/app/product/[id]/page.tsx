"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";

type Props = {
  params: {
    id: number;
  };
};

const Page = ({ params: { id } }: Props) => {
  const [product, setProduct] = useState<IProduct>();

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "GET",
      next: {
        revalidate: 5000,
      },
    });

    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // price with discount
  const price = ((product?.price ?? 1) * (product?.discountPercentage ?? 1))
    .toString()
    .split(".")
    .map((num, i) => (i !== 1 ? num : num.slice(0, 2)))
    .join(".");

  return (
    <div className="container mb-[100px]">
      <div className="mb-4 w-full flex- justify-between">
        <button className="btn mb-10" onClick={() => window.history.back()}>
          Back
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">
        {product?.title ?? <span className="loading loading-spinner"></span>}
      </h1>
      <span className="divider mb-4 w-full h-1 content-center"></span>
      {/* responsive flex product codes write here */}
      <div className="carousel carousel-vertical rounded-box h-96 w-[300px]">
        {product?.images.map((image, index) => (
          <div className="carousel-item h-full" key={index}>
            <Image
              src={image}
              alt={product?.title}
              width={300}
              height={350}
              className="rounded-box w-full object-cover bg-[#303030]"
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p>{product?.description}</p>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <ReactStars
            count={5}
            value={product?.rating}
            size={24}
            color2={"#ffd700"}
          />
          <span className="font-bold text-xl">{product?.rating}</span>
          <span className="text-sm">Rating</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl">{product?.stock}</span>
          <span className="text-sm">Stock</span>
        </div>
      </div>

      <div className="mt-4">
        <span className="font-bold text-xl line-through text-red-500">
          {product?.price}
        </span>{" "}
        ~ <span className="font-bold text-xl">{price}</span>
      </div>

      <div className="mt-4 flex w-full flex-col md:flex-row justify-between md:gap-0 gap-4">
        <button className="btn w-full md:w-[49%]">Add to cart</button>
        <button className="btn btn-primary w-full md:w-[49%]">Buy now</button>
      </div>
    </div>
  );
};

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
