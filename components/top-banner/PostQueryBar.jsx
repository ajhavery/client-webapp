"use client";

import { useState } from "react";
import { BsCloudArrowUp } from "react-icons/bs";
import FormInput from "./FormInput";

const PostQueryBar = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      companyName,
      email,
      phone,
      product,
      query,
    });
  };

  return (
    <div className="h-full px-2 py-2 shadow border">
      {/* form heading */}

      <h4 className="font-roboto text-sm mb-3 font-bold">
        Share your request here:
      </h4>

      {/* form data */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-2 py-2">
          {/* name input */}
          <FormInput
            labelName="Your Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* company name input */}
          <FormInput
            labelName="Your Company Name"
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          {/* email input */}
          <FormInput
            labelName="Your Official Email ID"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* phone input */}
          <FormInput
            labelName="Your Official Phone No"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* product name */}
          <FormInput
            labelName="Product Name"
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          {/* product query */}
          <div>
            <label htmlFor="query" className="text-xs font-opensans ml-1">
              Submit Specifications & Quantity
            </label>
            <textarea
              id="query"
              className="border w-full rounded px-3 py-1 text-xs outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 text-xs bg-primary text-white w-full py-2 px-4 rounded-md">
              <BsCloudArrowUp size={14} />
              Submit your query
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostQueryBar;
