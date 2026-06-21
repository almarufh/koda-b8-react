import { 
    FaArrowRight,
    FaStar,
    FaArrowTrendUp
} from "react-icons/fa6";
import { IoFlashSharp } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import StarRating from "../../components/main/StarRating";

export default function LandingPage () {

    function CategoryCard(props) {
        return (
            <div className="flex flex-col items-center bg-[#FFFFFF] p-4 gap-2 border border-[#0000001A] rounded-xl ">
            <img 
                className="w-14 h-14 rounded-xl object-cover" 
                src={props.src} 
                alt={props.alt} 
            />
            <span className="text-[12px] text-[#111827]">
                {props.title}
            </span>
            <span className="text-[#6B7280] text-[12px]">
                {props.count}
            </span>
            </div>
        )
    }

    function LihatSemua () {
        return (
            <div className="flex items-center gap-1 text-[#1A73E8] text-[14px] ">
                <span>Lihat Semua</span>
                <FaArrowRight size={12} />
            </div>
        )
    }

    function ProductCard(props) {
        const totalStars = 5;
        const goldStarsCount = Math.floor(props.ratingValue || 5);

        return (
            <div className="flex flex-col border border-[#0000001A] w-full rounded-md bg-[#FFFFFF]">
            <img 
                src={props.src} 
                alt={props.alt} 
                className="rounded-t-md w-full object-cover" 
            />
            <div className="flex flex-col p-6 gap-1">
                <span className="text-[12px] text-[#6B7280]">
                {props.brand}
                </span>
                <span className="text-[14px] text-[#111827]">
                {props.title}
                </span>
                <div className="flex gap-1">
                <StarRating 
                    ratingValue={props.ratingValue} 
                    ratingText={props.ratingText}
                />
                </div>
                <div className="flex items-center pt-1 gap-2">
                <span className="text-[16px] text-[#1A73E8]">
                    {props.price}
                </span>
                {props.oldPrice && (
                    <span className="text-[12px] text-[#6B7280] line-through">
                    {props.oldPrice}
                    </span>
                )}
                </div>
            </div>
            </div>
        );
    }

    function FooterValue (props) {
        return (
            <div className="flex flex-col items-center gap-2 w-full px-2 ">
                <span className="text-[36px] ">{props.img}</span>
                <span className="text-[#111827] text-[14px] ">{props.title}</span>
                <span className="text-[12px] text-[#6B7280] text-center ">{props.desc}</span>
            </div>
        )
    }
    
    return (
        <div className="flex flex-col items-center w-full max-w-432 gap-12">
            <div className="grid grid-cols-2 bg-[#4F39F6] w-full">
                <div className="border w-full h-105"></div>
                <div className="border w-full h-105"></div>
            </div>

            <div className="flex flex-col justify-between w-full max-w-7xl p-4 gap-6 ">
                <div className="flex justify-between">
                    <span className="text-[#111827] text-[20px]  ">Belanja Berdasarkan Kategori</span>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-6 w-full gap-3 ">
                    <CategoryCard 
                        src="/assets/main/landingpage/Elektronik.svg" 
                        alt="Kategori Elektronik" 
                        title="Elektronik" 
                        count="7 produk"
                    />
                    <CategoryCard 
                        src="/assets/main/landingpage/Fashion.svg" 
                        alt="Kategori Fashion" 
                        title="Fashion" 
                        count="5 produk"
                    />
                    <CategoryCard 
                        src="/assets/main/landingpage/Rumah & Dapur.svg" 
                        alt="Kategori Rumah & Dapur" 
                        title="Rumah & Dapur" 
                        count="4 produk"
                    />
                    <CategoryCard 
                        src="/assets/main/landingpage/Kecantikan.svg" 
                        alt="Kategori Kecantikan" 
                        title="Kecantikan" 
                        count="2 produk"
                    />
                    <CategoryCard 
                        src="/assets/main/landingpage/Olahraga.svg" 
                        alt="Kategori Olahraga" 
                        title="Olahraga" 
                        count="3 produk"
                    />
                    <CategoryCard 
                        src="/assets/main/landingpage/Buku & Alat Tulis.svg" 
                        alt="Kategori Buku & Alat Tulis" 
                        title="Buku & Alat Tulis" 
                        count="2 produk"
                    />
                </div>
            </div>
            <div className="flex flex-col bg-white w-full max-w-7xl p-4 gap-6 ">
                <div className="flex items-center justify-between  ">
                    <div className="flex justify-between gap-3">
                        <div className="flex rounded-md items-center justify-center px-3 py-1.5 gap-2 bg-[#DC2626] rounded--xl ">
                            <IoFlashSharp size={14} color="#FFFFFF" />
                            <span className="text-[#FFFFFF] text-[14px] ">Flash Deal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                                <BsClock size={14} />
                                <span className="py-0.5 text-[14px] text-[#000000] ">Berakhir dalam:</span>
                            </div>
                            <div className="flex justify-between items-center gap-1">
                                <span className="px-1.5 py-0.5 text-[14px] text-[#000000] ">05</span>
                                <span className="px-1.5 py-0.5 text-[14px] text-[#000000] ">:</span>
                            </div>
                            <div className="flex justify-between items-center gap-1">
                                <span className="px-1.5 py-0.5 text-[14px] text-[#000000] ">21</span>
                                <span className="px-1.5 py-0.5 text-[14px] text-[#000000] ">:</span>
                            </div>
                            <span className="px-1.5 py-0.5 text-[14px] text-[#000000] ">38</span>
                        </div>
                    </div>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-4 gap-6 w-full">
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={2}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={3}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={4}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={5}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-7xl gap-6 h-50 ">
                <div className="bg-red-500 rounded-xl"></div>
                <div className="bg-red-500 rounded-xl"></div>
            </div>
            <div className="flex flex-col w-full max-w-7xl p-4 gap-6">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <FaArrowTrendUp color="blue" />
                        <span className="text-[#111827] text-[20px]  ">Produk Terbaru</span>
                    </div>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-4 gap-6 w-full">
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={2}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={3}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={4}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={5}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={3}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={4}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={5}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                </div>
            </div>
            <div className="flex flex-col w-full max-w-7xl p-4 gap-6">
                <div className="flex justify-between">
                    <span className="text-[#111827] text-[20px]  ">Produk Unggulan</span>
                    <LihatSemua />
                </div>
                <div className="grid grid-cols-4 gap-6 w-full">
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={2}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={3}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={4}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={5}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={3}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={4}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                    <ProductCard 
                        src="/assets/main/landingpage/Headphone Wireless Premium.svg"
                        alt="Headphone Wireless Premium"
                        brand="SoundWave"
                        title="Headphone Wireless Premium"
                        ratingValue={5}
                        ratingText="4.8 (512)"
                        price="Rp 450.000"
                        oldPrice="Rp 650.000"
                    />
                </div>
            </div>
            <div className="border border-[#0000001A] flex flex-col bg-[#FFFFFF] w-full max-w-7xl p-4 gap-6 rounded-xl ">
                <span className="text-[20px] text-[#111827] self-center ">Kenapa Belanja di BeliMudah?</span>
                <div className="grid grid-cols-4 gap-6 ">
                    <FooterValue img="🚚" title="Gratis Ongkir" desc="Pembelian di atas Rp 100.00gratis ongkir ke seluruh Indonesia" />
                    <FooterValue img="🔒" title="Pembayaran Aman" desc="Data kamu terenkripsi dengan standar keamanan tertinggi" />
                    <FooterValue img="↩️" title="Retur Mudah" desc="Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet" />
                    <FooterValue img="💬" title="CS 24/7" desc="Tim kami siap membantu kamu kapan saja" />
                </div>
            </div>
        </div>
    )
}