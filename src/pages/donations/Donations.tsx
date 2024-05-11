import { useAllDonationQuery } from "../../redux/features/donation/getAllDonationsApi";
import { Link } from "react-router-dom";

type TItem = {
  image: string;
  title: string;
  category: string;
  description: string;
  _id: string;
};

const Donations = () => {
  const dark = localStorage.getItem('isDark') === 'true';
  const { data } = useAllDonationQuery(undefined);
  return (
    <div className={dark?' bg-neutral-950 pb-10 pt-10':'white pb-10'}>
      <h1 className={dark?'text-white text-4xl text-center mt-[60px]':'text-black text-4xl text-center mt-[60px]'}>Disaster Relief Support Program</h1>
      <div className="flex items-center justify-center container min-h-screen mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.data.slice(0, 6).map((item: TItem, i: number) => (
            <div className={dark?'rounded-xl shadow-lg bg-[#1A1D2B] text-white border border-gray-50':'rounded-xl shadow-lg bg-white'} key={i}>
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={item.image} alt="" />
                </div>
                <h5 className="text-2xl md:text-xl font-medium mt-3">
                  {item.title}
                </h5>
                <h5 className="text-xl md:text-2xl font-medium mt-3 mb-2">
                  {item.category}..
                </h5>
                <p>{item.description.slice(0,80)}...</p>
                <Link to={`/donations/${item._id}`}>
                <button className="btn btn:hover w-full mt-4">View Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/donations" className="flex justify-center items-center mt-10">
      <button className="btn btn:hover mt-4">View All</button>
      </Link>
    </div>
  );
};

export default Donations;
