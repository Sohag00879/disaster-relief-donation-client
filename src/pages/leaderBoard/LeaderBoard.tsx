import { useAllDonationQuery } from "@/redux/features/donation/getAllDonationsApi";
type TDonationItem = {
  _id: string;
  name:string;
  image: string;
  category: string;
  title: string;
  amount: string;
  donationAmount: number;
  description: string;
  totalDonationAmount: number;
  donations: {
    name: string;
    email: string;
    donationAmount: string;
  }[];
}
const LeaderBoard = () => {
  const dark = localStorage.getItem('isDark') === 'true';
    const { data } = useAllDonationQuery(undefined);
    const filterData:TDonationItem[] = data?.data
    ?.filter((item:TDonationItem)=> item.donations)
    .flatMap((item:TDonationItem) => item.donations);
    filterData?.sort((a, b) => b.donationAmount - a.donationAmount);
  return (
      
    <div className={`bg-gray-50 flex items-center justify-center min-h-screen pb-5 ${dark?'bg-neutral-950' : 'bg-white'}`}>
    <main className="w-96 h-104 bg-white shadow-lg rounded-lg flex flex-col items-center">
        <div id="header" className="w-full flex items-center justify-between p-10">
            <h1 className="text-2xl font-medium text-gray-800 uppercase">Ranking</h1>
        </div>
        <div id="leaderboard" className="w-full relative">
          {
            filterData?.map((item,i)=>(
                <table className="w-full border-collapse table-auto" key={i}>
                <tbody>
                <tr className="transition-all duration-200 border-gray-200 odd:bg-gray-100 hover:bg-white transform hover:scale-110">
                        <td className="number w-8 text-2xl font-bold py-2 px-4">{i+1}</td>
                        <td className="name text-left text-lg py-2 px-4">{item.name}</td>
                        <td className="points text-right font-bold text-lg py-2 px-4">
                           {item.donationAmount}
                            <img className="gold-medal h-12 ml-6" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
                        </td>
                    </tr>
                </tbody>
            </table>
            ))
          }
        </div>
    </main>
</div>
  )
}

export default LeaderBoard