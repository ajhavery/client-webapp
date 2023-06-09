import ProductCard from "./ProductCard";

import ceiling_fan from "public/trending-products/ceiling_fan.jpg";
import gears_transmission from "public/trending-products/gears_transmission.jpg";
import motor from "public/trending-products/motor.jpeg";
import socket_plug from "public/trending-products/socket_plug.jpg";
import taps from "public/trending-products/taps.jpg";
import transformer from "public/trending-products/transformer.png";
import valve from "public/trending-products/valve.jpeg";
import wires from "public/trending-products/wires.jpeg";
// import telecom from "public/trending-products/telecom.jpeg";

const trendingProducts = [
  {
    id: 1,
    name: "Fans",
    imageUrl: ceiling_fan,
    smallDesc:
      "Keep cool with our wide selection of fans in various sizes, perfect for any room or outdoor space.",
    noOfSuppliers: 4,
    lowestPrice: 12,
    unit: "unit",
  },
  {
    id: 2,
    name: "Gears and Transmission",
    imageUrl: gears_transmission,
    smallDesc:
      "Upgrade your machinery with our quality gears and transmission apparatus in a range of sizes.",
    noOfSuppliers: 4,
    lowestPrice: 2,
    unit: "unit",
  },
  {
    id: 3,
    name: "Electric Motor",
    imageUrl: motor,
    smallDesc:
      "Power up your devices with our electric motors, perfect for both homes and industries.",
    noOfSuppliers: 4,
    lowestPrice: 10,
    unit: "unit",
  },
  {
    id: 4,
    name: "Plugs and Sockets",
    imageUrl: socket_plug,
    smallDesc:
      "Keep your home or workplace running smoothly with our designer range of durable plugs and sockets.",
    noOfSuppliers: 4,
    lowestPrice: 1,
    unit: "unit",
  },
  {
    id: 5,
    name: "Taps",
    imageUrl: taps,
    smallDesc:
      "Upgrade your plumbing with our durable taps, suitable for small scale to heavy duty applications.",
    noOfSuppliers: 4,
    lowestPrice: 1,
    unit: "unit",
  },
  {
    id: 6,
    name: "Electric Transformers",
    imageUrl: transformer,
    smallDesc:
      "Boost or reduce voltage with ease using our electric transformers in various capacities upto 500MVA.",
    noOfSuppliers: 4,
    lowestPrice: 20,
    unit: "unit",
  },
  {
    id: 7,
    name: "Valves",
    imageUrl: valve,
    smallDesc:
      "Control liquids and gases flow with our selection of high-quality valves for both small scale and heavy duty applications.",
    noOfSuppliers: 4,
    lowestPrice: 12,
    unit: "unit",
  },
  {
    id: 8,
    name: "Wires and Cables",
    imageUrl: wires,
    smallDesc:
      "Keep your electrical systems running smoothly with our range of wires and cables.",
    noOfSuppliers: 4,
    lowestPrice: 1,
    unit: "unit",
  },
];

function TrendingProducts() {
  return (
    <div className="w-full mt-4 sm:mt-6 lg:mt-8">
      <div className="container mx-auto">
        <h3 className="mb-4">Trending Products</h3>
        <div className="bg-white p-2 sm:p-4 lg:p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trendingProducts.map((product, pdIndex) => (
              <li key={pdIndex}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
