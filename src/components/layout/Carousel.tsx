import { useAllTestimonialsQuery } from "@/redux/features/testimonial/getAllTestimonialsApi";
import { Carousel } from "antd";

type  TTestimonial ={
  _id: string;
  title: string;
  testimonial: string;
  name: string;
  email: string;
}
const CarouselComponent = () => {
  const {data} = useAllTestimonialsQuery(undefined); 
  const dark = localStorage.getItem('isDark') === 'true';
  return (
    <section id="testimonials"  className={dark?' bg-neutral-950 py-10 lg:py-20':'white py-10 lg:py-20 '}>
      <div className="container mx-auto">
        <p className={`uppercase tracking-wider mb-10 ${dark?'text-white':'text-gray-600'} text-center text-3xl`}>
          What customers are saying
        </p>
        <Carousel
          autoplay
          className="flex flex-col md:flex-row md:-mx-3"
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
      {
        data?.data?.map((item:TTestimonial)=>(
          <div className="flex-1 px-3"key={item._id}>
          <div key={item._id}
          className={`p-12 rounded-lg border border-solid border-gray-200 mb-8
          box-shadow:0 10px 28px rgba(0,0,0,.08) ${dark?'bg-[#1A1D2B]':'white'}`}
        >
          <p className={`text-xl font-semibold ${dark?'text-white':'text-black'}`}>
            {item.title}
          </p>
          <p className={`mt-6 ${dark?'text-white':'text-black'}`}>
           {item.testimonial}
          </p>
          <div className="flex items-center mt-8">
            <img
              className="w-12 h-12 mr-4 rounded-full"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdlbnRsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Jane Doe"
            />
            <div className={dark?'text-white mt-6':'text-black mt-6'}>
              <p>{item.name}</p>
              <p className={`${dark?'text-white':'text-black text-sm text-gray-600"'}`}>
               {item.email}
              </p>
            </div>
          </div>
        </div>
            </div>
        ))
      }
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselComponent;