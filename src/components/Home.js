import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Navbar from "./Navbar";
import Cart from "./Cart";
import Footer from "./Footer";
import ShopContext from "../context/context";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // const {Count,setCount} = useContext(ShopContext)

  const productData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.products);
      });
  };

  useEffect(() => {
    productData();
    // eslint-disable-next-line
  }, []);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(true);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const filterProduct = product.filter((result) => {
    const titleMatch = result.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const priceMatch =
      (result.price >= parseFloat(minPrice) || isNaN(parseFloat(minPrice))) &&
      (result.price <= parseFloat(maxPrice) || isNaN(parseFloat(maxPrice)));

    return titleMatch && priceMatch;
  });


  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div  >
      <Navbar handleShow={handleShow} quantity={cart.length} />
      {/* <button onClick={()=>setCount(Count+1)} >count  == {Count} </button> */}
      {showCart ? (
        <div className=" mt-12 sm:mt-4 ml-2 sm:ml-16 " >
          <div className=" flex flex-col xsm2:flex-row justify-around " >
           <div>
           <input
              className="mb-4 flex-1 modal1-ip-field w-full text-[16px] py-[15px] px-[30px] border border-gray-500 outline-none rounded-[15px] "
              type="text"
              placeholder="🔍 Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
           </div>
          <div className="flex   flex-wrap " >
          <select
              className="mb-4 flex-1 modal1-ip-field w-full text-[16px] mx-4 p-3 rounded-[13px] border border-gray-500 "
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            >
              <option value="">Select Min Price</option>
              <option value="10">10</option>
              <option value="200">200</option>
              <option value="1000">1000</option>
              {/* Add more options as needed */}
            </select>

            <select
              className="mb-4 flex-1 modal1-ip-field w-full text-[16px] mx-4 p3 rounded-[13px] border border-gray-500 "
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            >
              <option value="">Select Max Price</option>
              <option value="100">100</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              {/* Add more options as needed */}
            </select>
          </div>
          </div>
          <div className="flex flex-wrap ">
            {filterProduct.length > 0 ? (
              filterProduct.map((data) => {
                return (
                  <div key={data.id}>
                    <ProductCard
                      data={data}
                      addToCart={addToCart}
                      cart={cart}
                    />
                  </div>
                );
              })
            ) : (
              <div>
                <p>Product Not Found</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <Cart cart={cart} />
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
