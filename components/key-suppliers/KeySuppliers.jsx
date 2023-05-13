import SupplierCard from "./SupplierCard";

import jagriti_logo from "public/supplier-logo/jagriti_logo.png";
import kanohar_logo from "public/supplier-logo/kanohar_logo.png";
import suman_logo from "public/supplier-logo/suman_logo.png";
import tesla_logo from "public/supplier-logo/tesla_logo.png";

const keySuppliers = [
  {
    id: 1,
    name: "Kanohar Electricals Ltd",
    logoUrl: kanohar_logo,
    dealsIn: "Power Transformers, Gas Insulated Switchgear",
    established: 1981,
    factoryStandards: "ISO 9001, ISO 14001 and OHSAS 18001 certified",
    productStandards: "IEC, ANSI, BS and various other standards",
  },
  {
    id: 2,
    name: "Jagriti Enterprises",
    logoUrl: jagriti_logo,
    dealsIn: "Ceiling fans, Table fans, Standalone fans",
    established: 1991,
    factoryStandards: "ISO 9001, ISO 14001 and OHSAS 18001 certified factories",
    productStandards: "IEC, ANSI, BS and various other standards",
  },
  {
    id: 3,
    name: "Tesla Transformers India Pvt Ltd",
    logoUrl: tesla_logo,
    dealsIn:
      "Power, Distribution and Special transformers up to 200 MVA 220 KV.",
    established: 1991,
    factoryStandards: "ISO 9001, ISO 14001 and OHSAS 18001 certified",
    productStandards:
      "IEC ESKOM Standards, ANSI SESCO Standards, BIS SABS Standards, BS (British Standards)",
  },
  {
    id: 4,
    name: "Suman Electricals",
    logoUrl: suman_logo,
    dealsIn:
      "Power, Distribution and Special transformers, Insulated Copper wires and Strips.",
    established: 1991,
    factoryStandards: "ISO 9001, ISO 14001 and OHSAS 18001 certified",
    productStandards:
      "IEC ESKOM Standards, ANSI SESCO Standards, BIS SABS Standards, BS (British Standards)",
  },
];

function KeySuppliers() {
  return (
    <div className="w-full mt-4 sm:mt-6 lg:mt-8">
      <div className="container mx-auto">
        <h3 className="mb-4">Key Suppliers</h3>
        <div className="bg-white p-2 sm:p-4 lg:p-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keySuppliers.map((supplier, spIndex) => (
              <li key={spIndex}>
                <SupplierCard supplier={supplier} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KeySuppliers;
