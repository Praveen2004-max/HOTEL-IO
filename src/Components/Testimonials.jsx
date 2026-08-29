import React, { useState } from "react";

const testimonials = [
  {
    company: "Haltian",
    logo: "▲ haltian",
    text: `"The ability to find quick answers to customer questions and access technical product knowledge has made our GTM team more customer-focused, efficient, and confident. Realm has also helped us to share information within the team that typically sits in silos in the organization."`,
    name: "Praveen",
    position: "VP Sales at Haltian",
    image: "/Images/user1.jpg",
  },

  {
    company: "Siewo",
    logo: "Siewo",
    text: `"The platform has helped our team work more efficiently and find important information quickly. It has improved collaboration and made our daily workflow much easier."`,
    name: "Karan",
    position: "Sales Manager at Siewo",
    image: "/Images/user2.jpg",
  },

  {
    company: "QPR",
    logo: "▥ QPR",
    text: `"Having all the important information available in one place has helped our employees become more productive and confident. Our team can now find answers much faster."`,
    name: "Ritik",
    position: "Product Manager at QPR",
    image: "/Images/user3.jpg",
  },

  {
    company: "Mappedia",
    logo: "N mappedin",
    text: `"Our organization has benefited greatly from having an easy way to access and share knowledge. It has made communication between teams much smoother."`,
    name: "Hitesh",
    position: "VP Marketing at Mappedia",
    image: "/Images/user4.jpg",
  },

];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section className="h-[80vh] bg-white flex flex-col justify-center items-center px-4 py-10">
        <div className="w-full max-w-5xl mt-22">
            <div className="flex flex-col justify-center items-center mb-18">
                <span className="inline-block border border-zinc-400 text-[10x] px-3 py-1 rounded">Testimonials</span>
                <h2 className="text-zinc-300 text-3xl md:text-4xl font-medium mt-4">What our customera are saying</h2>
            </div>
            {/* Testimonials Box */}
            <div className="grid grid-cols-2 md:grid-cols-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                {
                    testimonials.map((item, index)=>(
                        <button
                            key={item.company}
                            onClick={()=>setActive(index)}
                            className={`h-14 md:h-16 flex justify-center items-center transition-all duration-300 text-sm md:text-base ${active === index ? "bg-white text-zinc-500 border-t-2 border-white" : "bg-sky-200 text-zinc-400 hover:bg-sky-100"}`}    
                        >
                            {item.logo}
                        </button>
                    ))
                }
            </div>

            {/* Testimonials Details */}
            <div className="bg-white min-h-[300px] px-6 md:px-16 py-12 flex flex-col justify-center shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                <p className="text-zinc-500 text-sm md:text-base leading-6 text-center max-w-3xl mx-auto">{current.text}</p>

                <div className="flex justify-center items-center gap-4 mt-10">
                    <img src={current.image} alt={current.name} className="w-12 h-12 rounded-full object-cover border-2 border-zinc-300" />

                    <div>
                        <h4 className="text-zinc-600 text-sm font-medium">{current.name}</h4>
                        <p className="text-zinc-400 text-xs">{current.position}</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Prevoius / Next Buttons */}
        <div className="flex justify-center gap-4 mt-6">
            <i onClick={()=>setActive(active === 0 ? testimonials.length - 1 : active - 1)} className="bi bi-arrow-left"></i>
            <i onClick={()=>setActive(active === testimonials.length - 1 ? 0 : active + 1)} class="bi bi-arrow-right"></i>
        </div>
    </section>
  );
};

export default Testimonials;