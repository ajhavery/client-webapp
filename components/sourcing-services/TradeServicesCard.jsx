import Image from "next/image";

const TradeServicesCard = ({ service }) => {
  return (
    <div className="shadow-lg border border-gray-50 rounded-md overflow-hidden group">
      <div className="relative w-full">
        <Image
          src={service.bgImageUrl}
          alt={service.heading}
          className="h-40 w-full object-cover"
        />
        {/* black overlay div */}
        {/* inset-0 means top-0 left-0 right-0 bottom-0 */}
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        {/* initial text */}
        <div className="text-sm absolute top-1/3 px-4 py-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <p className="text-white font-opensans">{service.desc}</p>
        </div>
        <div className="text-sm absolute top-0 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full flex flex-col justify-between">
          <div>
            <p className="text-gray-100">Benefits:</p>
            <ul className="text-white font-opensans hidden group-hover:block list-disc px-6">
              {service.benefits.map((benefit, bfIndex) => (
                <li key={bfIndex}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="text-white">Learn More</div>
        </div>
      </div>
      {/* below image text section */}
      <div className="p-4 space-y-2">
        <p className="font-bold text-sm">{service.heading}</p>
        <p className="text-xs uppercase">{service.subheading}</p>
      </div>
    </div>
  );
};

export default TradeServicesCard;
