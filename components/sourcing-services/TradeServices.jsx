import TradeServicesCard from "./TradeServicesCard";

import logistics_assurance from "public/trade-services/logistics_assurance.webp";
import payment_assurance from "public/trade-services/payment_assurance.jpeg";
import quality_assurance from "public/trade-services/quality_assurance.avif";
import trade_assurance from "public/trade-services/trade_assurance.jpeg";

const tradeServices = [
  {
    id: 1,
    heading: "Trade Assurance",
    subheading: "Order protection",
    iconUrl: "",
    bgImageUrl: trade_assurance,
    desc: "Trade assurance is a free order protection service offered by dhamika.com",
    benefits: ["On time shipping", "Quality Protection"],
  },
  {
    id: 2,
    heading: "Trade Payments",
    subheading: "Payment Solution",
    iconUrl: "",
    bgImageUrl: payment_assurance,
    desc: "Global transactions made simple through our quick, safe and secure payment system",
    benefits: [
      "20+ payment options",
      "Pay in your local currency and shop with ease",
      "Fast, safe and secure payments",
    ],
  },
  {
    id: 3,
    heading: "Quality Inspection",
    subheading: "Inspection solutions",
    iconUrl: "",
    bgImageUrl: quality_assurance,
    desc: "Production monitoring and inspection services avaialble on your orders through dhamika.com",
    benefits: [
      "Production monitoring",
      "On-site factory check",
      "Reduced risks in production delays and product quality",
    ],
  },
  {
    id: 4,
    heading: "Ocean and Air shipping",
    subheading: "Logistics service",
    iconUrl: "",
    bgImageUrl: logistics_assurance,
    desc: "Fast and resliable shipping through either ocean or air",
    benefits: [
      "Fast ocean and air shipping",
      "Competitive prices",
      "Online tracking",
    ],
  },
];

function TradeServices() {
  return (
    <div className="w-full mt-8">
      <div className="container mx-auto h-full">
        <h3 className="mb-4">Sourcing Solutions & Tailored Services</h3>
        <div className="grid grid-cols-4 gap-4">
          {tradeServices.map((service, svcIndex) => (
            <TradeServicesCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TradeServices;
