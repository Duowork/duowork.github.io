import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

export default function TestimonialsSection({testimonials}:any) {

  return (
    <section id="testimonials-section" className="mb-20 sm:mb-40">
      <div className="px-5 sm:px-10 mb-20 | section-heading">
        <span className="text-gray-800 text-md font-bold block mb-5">
          Testimonials
        </span>
        <h2 id="service-header" className="mb-5 mt-2 text-3xl font-bold">
          What <span className="custom-bg-green-accent">Our Clients</span> say
        </h2>
      </div>

      <div className="testimonials">
        <div className="testimonials__card-container mb-10">
          {testimonials.length > 0 &&
            testimonials.map((testimonial: any, Idx:number) => {
              const image = getImage(testimonial.clientImage);

              return (
                <div className="testimonials__card" key={testimonial.id}>
                  <div className="testimonials__card-image">
                    {image !== undefined ? (
                      <GatsbyImage image={image} alt="Testimonial image" />
                    ) : (
                      <img
                        src={image}
                        alt="testimonials__card-image"
                        placeholder="dominantColor"
                      />
                    )}
                  </div>
                  <div className="testimonials__card-body">
                    <StaticImage
                      src={"../assets/svgs/quote-icon.png"}
                      alt="Double quote icon"
                      className="quote-icon"
                    />
                    <p className="testimonials__testimonial">
                      {testimonial.clientQuote}
                    </p>
                    <div className="text-[0.8rem] font-light">
                      <p className="testimonials__testimonial-name">
                        {testimonial.clientName.toUpperCase()}
                      </p>
                      <p className="testimonials__testimonial-company | text-gray-400">
                        {testimonial.clientCompany}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div id="testimonial-side-btn" className="flex justify-evenly w-[147px] mx-auto">
          <button type="button" title="Testimonial slide button" className="w-10 h-10 shadow-md rounded-full text-gray-500 text-2xl">
            &larr;
          </button>
          <button type="button" title="Testimonial slide button" className="w-10 h-10 shadow-md rounded-full text-2xl">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
