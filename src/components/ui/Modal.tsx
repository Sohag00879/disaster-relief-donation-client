import { useEffect, useState } from "react";
import { Input, Modal, message } from "antd";
import { useCreateUserDonationMutation } from "@/redux/features/donation/userDonationApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

type TDonationData = {
  _id: string;
  image: string;
  category: string;
  title: string;
  amount: string;
  donationAmount: number;
  description: string;
  totalDonationAmount: number;
  donations: {
    name: undefined | string;
    email: string;
    donationAmount: string;
  }[];
};

type TUser = {
  email?: string;
  name?: string;
  exp?: number;
  iat?: number;
};

const DonateModal = ({ data }: { data: TDonationData }) => {
  const token = useAppSelector(useCurrentToken);
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    if (token) {
      const userInfo = verifyToken(token);
      setUser(userInfo);
    }
  }, []);

  const userName = user ? user.name : "";
  const userEmail = user ? user.email : "";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createUserDonation] = useCreateUserDonationMutation();

  const donationData = {
    id: data?._id,
    donationAmount,
    name: userName || name,
    email: userEmail || email,
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const id = data._id;
    try {
      const res = await createUserDonation({ donationData, id }).unwrap();
      message.success(res?.message);
      navigate("/leaderboard");
    } catch (error) {
      console.log(error);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="btn btn:hover" onClick={showModal}>
        Donate Now
      </button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#008080" } }}
        cancelButtonProps={{ style: { backgroundColor: "#EF5555",color:'white' } }}
        title="Donation Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ padding: "30px" }}
      >
        {!token && (
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Your Email"
              style={{ marginTop: "20px" }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <Input
          type="number"
          placeholder="Amount of Donation"
          style={{ marginTop: "20px" }}
          onChange={(e) => setDonationAmount(e.target.value)}
          required
        />
      </Modal>
    </>
  );
};
export default DonateModal;
