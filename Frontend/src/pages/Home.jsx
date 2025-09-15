// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { Link } from "react-router-dom"; //chn

const categories = [
  "Trending",
  "Casual",
  "Ethnic",
  "Party",
  "Workwear",
  "Men",
  "Women",
];

const featuredSlides = [
  {
    id: 1,
    name: "Designer Kurta Set",
    price: 2199,
    oldPrice: 3499,
    discount: 37,
    rating: 4.9,
    reviews: 200,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 2,
    name: "Minimalist Blazer",
    price: 3299,
    oldPrice: 4499,
    discount: 27,
    rating: 4.6,
    reviews: 78,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
  },
  {
    id: 3,
    name: "Boho Maxi Dress",
    price: 1599,
    oldPrice: 1999,
    discount: 20,
    rating: 4.4,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80",
  },
];

export default function Home({ vibeDataFetch }) {
  const { addToCart } = useCart(); // ✅ hook from context
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const [imageData, setImageData] = useState([]);
  const [catrgoryImage, setImage] = useState(imageData);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`http://localhost:5000/api/fetch-Image`);
        if (res.data.status === true) {
          setImageData(res.data.fetchImage);
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, []);

  useEffect(() => {
    setImage(imageData);
  }, [imageData]);

  const handleCategory = (cat) => {
    setIsLoading(true);
    setActiveCategory(cat);

    setTimeout(() => {
      if (cat === "Trending") {
        setImage(imageData);
      } else {
        const filter = imageData.filter((item) =>
          item.tags.some((tag) => tag.toLowerCase().includes(cat.toLowerCase()))
        );
        setImage(filter);
      }
      setIsLoading(false);
    }, 200);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [index]);

  function startAuto() {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % featuredSlides.length);
    }, 4000);
  }
  function stopAuto() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }
  function prev() {
    setIndex((i) => (i - 1 + featuredSlides.length) % featuredSlides.length);
    startAuto();
  }
  function next() {
    setIndex((i) => (i + 1) % featuredSlides.length);
    startAuto();
  }
  function goTo(i) {
    setIndex(i);
    startAuto();
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        <span className="ml-4 text-lg font-semibold">Loading images...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-6">
      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              activeCategory === cat
                ? "bg-trybePink text-white shadow"
                : "bg-trybeGrey text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Head */}
      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold">Discover Your Perfect Style</h1>
        <p className="text-gray-500 text-sm mt-1 max-w-2xl mx-auto">
          Curated fashion pieces that match your vibe. From trending streetwear
          to elegant formals, find everything you need to express your unique
          style.
        </p>
      </div>

      {/* Simple Slider */}
      <div className="mt-10 relative max-w-4xl mx-auto">
        <p className="text-red-500 font-medium mb-2">🔥 Flash Sale</p>

        <div
          className="bg-gradient-to-r from-trybeGrey/50 to-trybeLav/30 rounded-2xl shadow-md overflow-hidden relative"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {featuredSlides.map((slide, sidx) => (
            <div
              key={slide.id}
              className={`p-6 flex items-center gap-6 transition-transform duration-700 ease-in-out ${
                sidx === index
                  ? "translate-x-0"
                  : sidx < index
                  ? "-translate-x-full absolute left-0 top-0 w-full"
                  : "translate-x-full absolute left-0 top-0 w-full"
              }`}
              aria-hidden={sidx !== index}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-36 h-48 object-cover rounded-xl flex-shrink-0"
              />
              <div className="flex-1">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  {slide.discount}
                </span>
                <h2 className="mt-2 font-semibold text-lg">{slide.name}</h2>
                <div className="flex items-center gap-2 text-yellow-500 text-sm mt-1">
                  <FaStar /> {slide.rating} ({slide.reviews} reviews)
                </div>
                <p className="mt-2 text-trybePink text-2xl font-bold">
                  ₹{slide.price}{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ₹{slide.oldPrice}
                  </span>
                </p>
                <p className="text-green-600 text-sm">
                  You save ₹{slide.oldPrice - slide.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="px-4 py-2 rounded-full bg-trybePink text-white text-sm hover:bg-pink-400">
                    Shop Now
                  </button>
                  <button
                    onClick={() => addToCart(slide)} // ✅ add to cart
                    className="px-4 py-2 rounded-full bg-white text-gray-700 border hover:bg-gray-50"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* arrows */}
          <button
            aria-label="prev"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <FiChevronLeft />
          </button>
          <button
            aria-label="next"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <FiChevronRight />
          </button>

          {/* dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-trybePink" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {vibeDataFetch.length == 0 ? (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {catrgoryImage.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow rounded-2xl p-3 hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs rounded-full">
                  {p.discount}
                </div>
              </div>
              <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
              <p className="text-trybePink font-bold">
                ₹{p.price}{" "}
                <span className="line-through text-gray-400 text-xs">
                  ₹{p.old_price}
                </span>
              </p>
              <div className="flex items-center text-yellow-500 text-xs gap-1 mt-1">
                <FaStar size={12} /> {p.rating}
              </div>
              <button
                onClick={() => addToCart(p)} // ✅ add to cart
                className="mt-3 w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm hover:opacity-90"
              >
                Add to Cart
              </button>
              <Link to={`/product/${p.id}`}>
            <button className="mt-3 w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm hover:opacity-90">
              View Details
            </button>
          </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {vibeDataFetch.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow rounded-2xl p-3 hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 text-xs rounded-full">
                  {p.discount}
                </div>
              </div>
              <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
              <p className="text-trybePink font-bold">
                ₹{p.price}{" "}
                <span className="line-through text-gray-400 text-xs">
                  ₹{p.old_price}
                </span>
              </p>
              <div className="flex items-center text-yellow-500 text-xs gap-1 mt-1">
                <FaStar size={12} /> {p.rating}
              </div>
              <button
                onClick={() => addToCart(p)} // ✅ add to cart
                className="mt-3 w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm hover:opacity-90"
              >
                Add to Cart
              </button>
               <Link to={`/product/${p.id}`}>
            <button className="mt-3 w-full py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white text-sm hover:opacity-90">
              View Details
            </button>
          </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}