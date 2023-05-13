import Image from "next/image";

function SupplierCard({ supplier }) {
  return (
    <div className="rounded border shadow-lg p-4">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2 md:col-span-1 border rounded p-2">
          <Image
            src={supplier.logoUrl}
            alt={supplier.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="col-span-2 md:col-span-3">
          <h4 className="font-bold text-sm sm:text-base mb-2">
            {supplier.name}
          </h4>
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Established Since:</span>{" "}
            {supplier.established}
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Deals In:</span> {supplier.dealsIn}
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Factory Cerifications:</span>{" "}
            {supplier.factoryStandards}
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Product Standards:</span>{" "}
            {supplier.productStandards}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupplierCard;
