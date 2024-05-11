import { useEffect, useState } from "react";
import { Input, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEditDonationMutation } from "@/redux/features/donation/editDonationApi";
import { Button } from "./button";
import { useSingleDonationQuery } from "@/redux/features/donation/getSingleDonation";

const DonatationEditModal = ({ id}: { id: string}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editDonation] = useEditDonationMutation();

  const {data} = useSingleDonationQuery(id);
  useEffect(()=> {
    if(data){
        const {image,title,category,amount,description} = data.data;
        setImage(image)
        setCategory(category)
        setTitle(title)
        setAmount(amount)
        setDescription(description)
    }

  },[data])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const donationData = {
      image,
      category,
      title,
      amount,
      description
    };
    try {
      const res = await editDonation({ id, donationData }).unwrap();
      message.success(res?.message);
      navigate("/dashboard/donations");
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
      <Button className="bg-[#008080] hover:bg-slate-700" onClick={showModal}>Edit</Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: '#008080' } }}
        cancelButtonProps={{ style: { backgroundColor: '#EF5555',color:'white' } }} 
        title="Donation Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ padding: "30px" }}
      >
          <div>
        <label>Image:</label>
        <Input onChange={(e)=>setImage(e.target.value)} type="text" value={image}/>
      </div>
      <div>
        <label>Category:</label>
        <Input type="text" onChange={(e)=>setCategory(e.target.value)} value={category}/>
      </div>
      <div>
        <label>Title:</label>
        <Input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
      </div>
      <div>
        <label>Amount:</label>
        <Input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount}/>
      </div>
      <div>
        <label>Description:</label>
        <Input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      </div>
      </Modal>
    </>
  );
};
export default DonatationEditModal;
