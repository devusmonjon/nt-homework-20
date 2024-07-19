"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  tags: string[];
  category: string;
};

const Product = ({
    id,
  title,
  description,
  thumbnail,
  category,
  tags,
  price,
}: Props) => {
  const router = useRouter();
  return (
    <div className="card bg-base-100 shadow-xl md:w-full w-[99%] sm:w-1/2 lg:w-1/3 p-4 mb-4 cursor-pointer">
      <figure>
        <Image src={thumbnail} alt={title} width={300} height={300} />
      </figure>
      <div className="card-body">
        <Link href={`/product/${id}`} className="card-title flex justify-between">
          {title.slice(0, 10)} ...
          <div className="badge badge-secondary">{category}</div>
        </Link>
        <p>{description.slice(0, 100)} ...</p>
        <p className="font-bold">Price: {price}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
        <button className="btn text-white mt-4" onClick={() => router.push(`/product/${id}`)}>Buy</button>
      </div>
    </div>
  );
};

export default Product;
