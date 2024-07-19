"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import path from "path";

type IBreadcrumb = {
  link: string | false;
  name: string | JSX.Element | number;
};

const Breadcrumb = ({data}: {data: IBreadcrumb[]}) => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const [data, setData] = useState<IBreadcrumb[]>([]);

  /*useEffect(() => {
    const data: IBreadcrumb[] = pathname !== "/" ? pathname.split("/").map((item) => {
      if (item === "") {
        return {
          link: path.join("/", item),
          name: "Home",
        };
      }
      return {
        link: path.join("/", item),
        name: item,
      };
    }) : [{
      link: false,
      name: "Home",
    }];

    setData(data);
  }, [pathname]); */

  return (
    <div className="container mb-[50px]">
      <div className="breadcrumbs text-sm">
        <ul>
          {data.map((item) => {
            return (
              <li key={item.name}>
                {item.link ? (
                  <Link href={item.link}>{item.name}</Link>
                ) : (
                  item.name
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
