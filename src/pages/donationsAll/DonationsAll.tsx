import { Link } from "react-router-dom";
import { useAllDonationQuery } from "../../redux/features/donation/getAllDonationsApi";
type TItem = {
  image: string;
  title: string;
  category: string;
  description: string;
  _id:string;
}

const DonationsAll = () => {
  const dark = localStorage.getItem('isDark') === 'true'; // Convert to boolean
  const { data } = useAllDonationQuery(undefined);
  
  return (
    <div className={dark?'bg-neutral-950':'bg-white'}>
     <h1 className={`text-4xl text-center pt-[20px] ${dark?'text-white':'text-black'}`}>Disaster Relief Support Program</h1>
    <div className='flex items-center justify-center container min-h-screen pb-10 mx-auto mt-10'>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.data.map((item : TItem, i:number) => (
          <div className={`rounded-xl shadow-lg ${dark ? 'bg-[#1A1D2B] text-white' : 'bg-white text-black'}`} key={i}>
            <div className="p-5 flex flex-col">
              <div className="rounded-xl overflow-hidden">
                <img src={item.image} alt="" />
              </div>
              <h5 className="text-2xl md:text-xl font-medium mt-3">
                {item.title}
              </h5>
              <h5 className="text-xl md:text-2xl font-medium mt-3">
                {item.category}
              </h5>
              <p>{item.description.slice(0,100)}...</p>
              <Link to={`/donations/${item._id}`}>
                <button className="btn btn-hover w-full mt-4">View Detail</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default DonationsAll;
