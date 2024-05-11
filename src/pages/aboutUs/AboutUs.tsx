import { useAllVolunteersQuery } from "@/redux/features/volunteer/getAllVolunteersApi"
import { NavLink} from "react-router-dom";

type TProfile = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  profession: string;
  image: string;
}

const AboutUs = () => {
  const dark = localStorage.getItem('isDark') === 'true';

    const {data} = useAllVolunteersQuery(undefined);
  return (
<div className={dark?'bg-neutral-950 mt-[-20px] pb-[1px]':'bg-white pb-10'}>
<div className={dark?'bg-neutral-950':'bg-gray-100'}>
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className={`text-3xl font-extrabold  sm:text-4xl ${dark?'text-white':'text-gray-900'}`}>About Us</h2>
                <p className={`mt-4  text-lg ${dark?'text-white':'text-gray-600'}`}>Disaster Relief Donation Platform is a non-profit organization dedicated to providing assistance to those affected by disasters. Founded in [year], our mission is to offer a helping hand to communities in times of crisis. We provide immediate assistance to communities affected by disasters, including natural disasters such as hurricanes, earthquakes, floods, and wildfires, as well as man-made disasters such as conflicts and humanitarian crises..</p>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://heed-bangladesh.com/wp-content/uploads/2022/12/Flood-2-min-scaled.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</div>
<div>
<h3 className="text-3xl text-center sm:text-5xl pt-10 leading-normal font-extrabold tracking-tight text-gray-900">
  <span className={dark?'text-white':'text-black'}> Our</span> <span className="text-[#008080]">Volunteers</span>
      </h3>
<div className='py-14'>
  <div className="max-w-screen-xl mx-auto container flex flex-col sm:flex-row justify-between ">

    <div className="sm:w-6/12 order-last sm:order-first ">
      <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10 ">
   {
    data?.data?.map((item:TProfile)=>(
        <li className="bg-gray-100 p-5 py-10 text-center " key={item._id}>
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0 ">
            <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src={item.image}/></a>
          </div>
          <div className="text-center">
            <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
              <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">{item.name}</a>
            </h4>
            <p className="text-sm leading-6 text-gray-500 uppercase">{item.profession}</p>
            <p className="text-sm leading-6 text-gray-500 uppercase">{item.location}</p>
          </div>
        </div>
      </li>
    ))
   }
      </ul>
    </div>

    <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
      <p className={`mt-4 text-sm leading-7  font-regular ${dark?'text-white':'text-gray-500'}`}>THE TEAM</p>
      <h3 className={`text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight ${dark?'text-white':'text-gray-900'}`}>
        Meet Our Team
      </h3>
      <p className={`mt-4 text-md leading-7 font-light ${dark?'text-white':'text-gray-500 '}`}>
      Our team are responsible for the technical development and maintenance of our platform
      Their communication with donors, partners, and the communities we serve.They are dedicated to building strong relationships and ensuring that everyone involved feels informed and valued.. <br/>
      </p>
    </div>
  </div>
</div>
<div className="flex justify-center items-center flex-col">
    <h1 className={`text-2xl text-center ${dark?'text-white':'text-black'}`}>Do You Want To Be a Volunteer?</h1>
<NavLink to='/volunteer'>
<button type="submit" className="btn btn:hover mt-4">Sign Up</button>
</NavLink>
</div>
</div>
</div>

  )
}

export default AboutUs