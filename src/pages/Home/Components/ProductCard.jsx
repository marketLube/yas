import React from "react";
import Product1 from "../../../assets/images/product1.png";
import ProductCardContent from "./ProductCardContent";
import ProductCardPricetag from "./ProductCardPricetag";
export default function ProductCard() {
  const product = [
    {
      image: Product1,
      name: "Driving Experience",
      description:
        "Drive your dream car with a Ferrari-trained instructor and experience the thrill of high-performance driving on a professional race track.",
      price: 100,
      tax: +96.43,
      taxDescription: "VAT & tax",
      currency: "AED",
    },
  ];

  return (
    <div className="ProductCard">
      {product.map((product) => (
        <div className="ProductCard__card">
          <div className="ProductCard__card__image">
            <img src={product.image} alt={product.name} />
          </div>
          <ProductCardContent
            name={product.name}
            description={product.description}
          />
          <ProductCardPricetag
            price={product.price}
            tax={product.tax}
            currency={product.currency}
            taxDescription={product.taxDescription}
          />
        </div>
      ))}
    </div>
  );
}
