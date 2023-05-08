import SupplierCard from "./SupplierCard";

const keySuppliers = [
  { id: 1, name: "Supplier 1" },
  { id: 2, name: "Supplier 2" },
  { id: 3, name: "Supplier 3" },
  { id: 4, name: "Supplier 4" },
];

function KeySuppliers() {
  return (
    <div className="w-full mt-4">
      <div className="container mx-auto bg-white p-4 h-full">
        <h3>Key Suppliers</h3>
        <ul className="grid grid-cols-2 gap-4">
          {keySuppliers.map((supplier, spIndex) => (
            <li key={spIndex}>
              <SupplierCard supplier={supplier} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KeySuppliers;
