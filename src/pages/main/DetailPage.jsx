import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { LiaAngleRightSolid } from 'react-icons/lia';
import PathProduct from '../../components/main/PathProduct';
import StarRating from '../../components/main/StarRating';
import ProductActions from '../../components/main/ProductActions';
import WishlistButton from '../../components/main/WishlistButton';

function BoxTop(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl flex-1 text-center">
      <div className="flex items-center justify-center w-10 h-10 bg-[#1A73E81F] rounded-full text-[#1A73E8]">
        <img className="w-[18px] h-[18px]" src={props.img} alt={props.alt} />
      </div>
      <span className="text-[#111827] text-[14px] font-semibold mt-1">{props.header}</span>
      <span className="text-[#6B7280] text-[12px]">{props.sub}</span>
    </div>
  );
}

function DetailPage() {
  const path = ['Beranda', 'Toko', 'Electronics', 'Headphone Wireless Premium'];
  
  const [selectedColor, setSelectedColor] = useState('Hitam');
  const [quantity, setQuantity] = useState(1);

  const productDetails = {
    brand: "SoundWave",
    category: "Audio",
    title: "Headphone Wireless Premium",
    rating: 4.8,
    reviews: 512,
    stock: 45,
    price: 450000,
    oldPrice: 650000,
    discount: "31%",
    savedAmount: 200000
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleIncrease = () => {
    if (quantity < productDetails.stock) setQuantity(prev => prev + 1);
  };

  const getPayloadData = (actionType) => {
    return {
      action: actionType,
      productName: productDetails.title,
      brand: productDetails.brand,
      category: productDetails.category,
      price: productDetails.price,
      quantity: quantity,
      color: selectedColor,
      totalPrice: productDetails.price * quantity
    };
  };

  const handleAddToCart = () => {
    const payload = getPayloadData("Tambah ke Keranjang");
    window.alert(JSON.stringify(payload, null, 2));
  };

  const handleBuyNow = () => {
    const payload = getPayloadData("Beli Sekarang");
    window.alert(JSON.stringify(payload, null, 2));
  };

  const handleWishlist = () => {
    const payload = getPayloadData("Tambah ke Wishlist");
    window.alert(JSON.stringify(payload, null, 2));
  };

  return (
    <div className="flex flex-col w-full max-w-7xl gap-6 px-6 py-6 mx-auto font-sans bg-[#F8F9FA]">
      <PathProduct paths={path} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-4">
          <div className="relative border border-[#0000001A] rounded-2xl overflow-hidden bg-white aspect-square flex items-center justify-center p-8">
            <span className="absolute top-4 left-4 bg-[#DC2626] text-white text-[12px] font-bold px-3 py-1 rounded-full">
              -{productDetails.discount}
            </span>
            <img 
              src="/assets/main/landingpage/Headphone Wireless Premium.svg" 
              alt={productDetails.title} 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex gap-3">
            <button className="w-20 h-20 border-2 border-[#1A73E8] rounded-xl overflow-hidden p-1 bg-white">
              <img src="/assets/main/landingpage/Headphone Wireless Premium.svg" alt="Preview 1" className="w-full h-full object-contain" />
            </button>
            <button className="w-20 h-20 border border-[#0000001A] rounded-xl overflow-hidden p-1 bg-white opacity-60 hover:opacity-100">
              <img src="/assets/main/landingpage/Headphone Wireless Premium.svg" alt="Preview 2" className="w-full h-full object-contain" />
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-white gap-6 p-2">
          <div className="flex flex-col gap-1">
            <span className="text-[#6B7280] text-[14px]">{productDetails.brand} · {productDetails.category}</span>
            <h1 className="text-[#111827] font-bold text-[32px] tracking-tight">{productDetails.title}</h1>
            <div className="flex gap-3 items-center mt-1">
              <div className="flex items-center gap-1">
                <StarRating ratingValue={5} />
                <span className="text-[14px] text-[#6B7280] ml-1">{productDetails.rating} ({productDetails.reviews})</span>
              </div>
              <span className="text-[#00A63E] text-[14px] font-medium flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-[#00A63E]"></span>
                Stok tersedia ({productDetails.stock})
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-[#EFF6FF] p-5 gap-1 rounded-2xl border border-[#1A73E81F]">
            <div className="flex gap-3 items-baseline">
              <span className="font-bold text-[32px] text-[#1A73E8]">Rp {productDetails.price.toLocaleString('id-ID')}</span>
              <span className="text-[16px] text-[#6B7280] line-through">Rp {productDetails.oldPrice.toLocaleString('id-ID')}</span>
              <span className="bg-[#DC2626] px-2.5 py-0.5 rounded-full text-[12px] font-semibold text-white">
                Hemat {productDetails.discount}
              </span>
            </div>
            <span className="text-[14px] text-[#00A63E] font-medium">Kamu hemat Rp {productDetails.savedAmount.toLocaleString('id-ID')}</span>
          </div>

          <div className="w-full flex flex-col gap-2.5">
            <div className="flex items-center gap-1 text-[14px]">
              <span className="text-[#6B7280]">Warna:</span>
              <span className="text-[#1A73E8] font-semibold">{selectedColor}</span>
            </div>
            <div className="flex items-center gap-2">
              {['Hitam', 'Putih', 'Biru'].map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-xl text-[14px] font-medium transition-all ${
                    selectedColor === color 
                      ? "border-[#1A73E8] bg-[#EFF6FF] text-[#1A73E8]" 
                      : "border-[#E5E7EB] text-[#4B5563] bg-white hover:border-[#9CA3AF]"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[14px] text-[#6B7280]">Jumlah</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-xl border border-[#E5E7EB] bg-white overflow-hidden shadow-sm">
                <button 
                  type="button" 
                  onClick={handleDecrease}
                  className="px-4 py-3 text-[#4B5563] hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <FaMinus size={10} />
                </button>
                <span className="px-4 text-[16px] font-semibold text-[#111827] min-w-[24px] text-center select-none">
                  {quantity}
                </span>
                <button 
                  type="button" 
                  onClick={handleIncrease}
                  className="px-4 py-3 text-[#4B5563] hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <FaPlus size={10} />
                </button>
              </div>
              <span className="text-[#6B7280] text-[14px]">Stok: {productDetails.stock} pcs</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full mt-2">
            <ProductActions 
              onAddToCart={handleAddToCart} 
              onBuyNow={handleBuyNow} 
            />
            <WishlistButton 
              onClick={handleWishlist} 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-2">
            <BoxTop
              img="/assets/main/landingpage/mobil.svg" 
              alt="Ongkir"
              header="Gratis Ongkir"
              sub="Min. Rp 100.000"
            />
            <BoxTop
              img="/assets/main/landingpage/prisai.svg" 
              alt="Pembayaran"
              header="Pembayaran Aman"
              sub="SSL Terenkripsi"
            />
            <BoxTop
              img="/assets/main/landingpage/reload.svg" 
              alt="Pengembalian"
              header="Retur 30 Hari"
              sub="Gratis & mudah"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl mt-4">
        <div className="flex border-b border-[#E5E7EB] px-6">
          <button className="py-4 px-2 border-b-2 border-[#1A73E8] text-[#1A73E8] font-semibold text-[14px]">Deskripsi</button>
          <button className="py-4 px-6 text-[#6B7280] font-medium text-[14px] hover:text-[#111827]">Spesifikasi</button>
          <button className="py-4 px-6 text-[#6B7280] font-medium text-[14px] hover:text-[#111827]">Ulasan (2)</button>
        </div>
        <div className="p-6">
          <p className="text-[#4B5563] text-[15px] leading-relaxed">
            Headphone wireless dengan teknologi noise-cancelling terdepan. Nikmati musik favoritmu tanpa gangguan dengan kualitas suara yang memukau.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;