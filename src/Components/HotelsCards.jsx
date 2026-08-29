import React, { useRef } from 'react'

const cards = [
    {
        image: './Images/Hotel1.jpg',
        name: 'Taj Hotel-Nice facilities...',
        location: 'Jodhpur, Rajasthan',
        ratingNo: "8.9",
        rating: "Exellent",
        discount: "10% today's night",
        price: "5,999",
    },
    {
        image: './Images/Hotel2.jpg',
        name: 'Laheriya-Nice view ever...',
        location: 'Jodhpur, Rajasthan',
        ratingNo: "8.7",
        rating: "Good",
        discount: "20% for one week",
        price: "4,999",
    },
    {
        image: './Images/Hotel3.jpg',
        name: 'Taj Mahal Palace-Luxury...',
        location: 'Mumbai, Maharashtra',
        ratingNo: "9.0",
        rating: "Very Good",
        discount: "5% for family",
        price: "9,999",
    },
    {
        image: './Images/Hotel4.jpg',
        name: 'Regenta SGS Greenotel-...',
        location: 'Lonavala, Maharashtra',
        ratingNo: "9.1",
        rating: "Good",
        discount: "10% today's night",
        price: "10,999",
    },
    {
        image: './Images/Hotel5.jpg',
        name: 'Regenta SGS Greenotel-...',
        location: 'Lonavala, Maharashtra',
        ratingNo: "9.1",
        rating: "Good",
        discount: "10% today's night",
        price: "10,999",
    },
    {
        image: './Images/Hotel6.jpg',
        name: 'Regenta SGS Greenotel-...',
        location: 'Lonavala, Maharashtra',
        ratingNo: "9.1",
        rating: "Good",
        discount: "10% today's night",
        price: "10,999",
    },
    {
        image: './Images/Hotel1.jpg',
        name: 'Regenta SGS Greenotel-...',
        location: 'Lonavala, Maharashtra',
        ratingNo: "9.1",
        rating: "Good",
        discount: "10% today's night",
        price: "10,999",
    },
]

const HotelsCards = () => {
   const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    console.log(scrollRef.current);
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className='w-full h-[80vh] mt-20 mb-18'>
        <div className='h-full flex flex-col overflow-hidden gap-4 justify-center items-center'>
            <i className="bi bi-house-door"></i>
            <h1 className='text-3xl font-bold font-sans'>
                Choose your favorite hotel and fun to more Hot deals
            </h1>
            <div ref={scrollRef} className='scrollbar-hide flex w-full h-full gap-5 overflow-x-auto scroll-smooth px-5'>
                {cards.map((item, index)=>(
                <div key={index} className='shrink-0 h-95 w-70 overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl'>
                    <img className='w-full object-cover transition duration-500 hover:scale-110' src={item.image} alt="HotelImage" />
                    <div className='flex flex-col px-2 py-1.5 overflow-hidden'>
                        <h1 className='text-xl font-bold'>{item.name}</h1>
                        <p className='font-extralight text-[11px]'><i className="bi bi-geo-alt"></i>  {item.location}</p>
                        <div className='flex gap-2 mt-1'>
                            <p className='h-5 w-8 text-sm text-white bg-emerald-500 rounded-3xl text-center'>{item.ratingNo}</p>
                            <p className='text-sm font-bold'>{item.rating}</p>
                        </div>
                        <p className='w-50 rounded px-2 py-1 bg-red-400 text-[11px] mt-5 text-white'>{item.discount}</p>
                        <p className='text-xl font-medium mt-8'><i className="bi bi-currency-rupee"></i>{item.price} <span className='text-[12px] font-light text-zinc-500'>per night</span> </p>
                    </div>
                </div>
                )
            )}
            </div>
            <div className='flex gap-3'>
                <img onClick={scrollLeft} className='h-10 w-10 hover:bg-emerald-500 cursor-pointer' src="./arrow-left-square.svg" alt="left-arrow" />
                <img onClick={scrollRight} className='h-10 w-10 hover:bg-emerald-500 cursor-pointer' src="./arrow-right-square.svg" alt="left-arrow" />
            </div>
        </div>
    </div>
    )
}

export default HotelsCards