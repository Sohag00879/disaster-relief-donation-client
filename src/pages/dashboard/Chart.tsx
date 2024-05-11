import { useAllDonationQuery } from "@/redux/features/donation/getAllDonationsApi";
import Chart from "react-google-charts";

type TItem = {
  category: string;
  totalDonationAmount: string;
};

export const options = {
  title: "Post-Disaster Relief Donation Platform",
};

const PieChart = () => {
  const { data: donationData } = useAllDonationQuery(undefined);

  const data = donationData?.data.map((item: TItem) => [item.category, parseFloat(item.totalDonationAmount)]);
  data?.unshift(["Task", "Donation Amount"]);

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      {data ? (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PieChart;
