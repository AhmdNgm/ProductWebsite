import React from "react";
import Image from "next/image";
import Link from "next/link";
const product6 = () => {
  return (
    <>
      <div className="section">
        <div className="proContainer">
          <div className="imgCon rounded-xl overflow-hidden">
            <Image
              src="/p6.jpg"
              height={700}
              width={1200}
              alt="person"
              layout="responsive"
            />
          </div>
          <div className="proBody ">
            <h3>title of the product</h3>
            <hr />
            <p>
              product description product descriptionproduct description product
              description product description product description product
              description product description product description product
              description product description product description product
              description product description product description product
              description
            </p>
            <Link href="/">
              <a className="probtn">Back</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default product6;
