import DonateModal from "@/components/ui/Modal";
import { useSingleDonationQuery } from "@/redux/features/donation/getSingleDonation";
import { useParams } from "react-router-dom";

const DonationsDetails = () => {
  const { donationId } = useParams();
  const { data } = useSingleDonationQuery(donationId);

  return (
    <div className="grid sm:grid-cols-1 mt-5 md:grid-cols-1 lg:grid-cols-2 lg:h-screen items-center container">
         <figure className="w-full">
          <img src={data?.data?.image} alt="Album" />
        </figure>
        <div className="w-full">
          <div className="card-body">
            <h2 className="card-title text-3xl font-semibold">Category: {data?.data?.category}</h2>
            <h3 className="text-2xl font-semibold mt-3">Title: {data?.data?.title}</h3>
            <p className="text-xl font-bold mt-3">Amount: {data?.data?.amount}</p>
            <p className="mt-3">Description: {data?.data?.description}</p>
            <div className="card-actions justify-end mt-3 mb-5">
              <DonateModal data={data?.data}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DonationsDetails;
