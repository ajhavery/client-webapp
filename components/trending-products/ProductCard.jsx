import Image from "next/image";

function ProductCard({ product }) {
  return (
    <div className="rounded-md border shadow-lg p-4">
      <div className="w-full pb-2">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-contain"
        />
      </div>
      <div className="text-sm">
        <h4 className="font-bold text-base">{product.name}</h4>
        <p className="text-gray-600">{product.smallDesc}</p>
        <div className="border border-dashed my-2"></div>
        <p>
          <span>No of key suppliers: </span>
          <span className=""> {product.noOfSuppliers}</span>
        </p>

        <p className="text-gray-600">
          Prices starting from: USD {product.lowestPrice} per {product.unit}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
