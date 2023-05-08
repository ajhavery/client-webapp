function SupplierCard({ supplier }) {
  return (
    <div className="rounded shadow p-4">
      <div className="grid grid-cols-4 gap-2">
        <div className="border rounded">Supplier Image goes here</div>
        <div className="col-span-3">
          <h5>Supplier Name</h5>
          <p>Supplier description 1</p>
          <p>Supplier description 2</p>
          <p>Established Since</p>
        </div>
      </div>
    </div>
  );
}

export default SupplierCard;
