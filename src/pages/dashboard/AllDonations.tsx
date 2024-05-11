import { Button } from "@/components/ui/button";
import DonatationEditModal from "@/components/ui/donationEditModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeleteDonationMutation } from "@/redux/features/donation/deleteDonationApi";
import { useAllDonationQuery } from "@/redux/features/donation/getAllDonationsApi";
import { message, Modal } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
type TItem = {
  image: string;
  title: string;
  category: string;
  amount: number;
  _id: string;
};

const AllDonations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (id: string) => {
    handleDelete(id);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [deleteDonation] = useDeleteDonationMutation();

  const { data } = useAllDonationQuery(undefined);

  const handleDelete = async (id: string) => {
    const res = await deleteDonation(id).unwrap();
    message.success(res.message);
  };

  return (
    <Table>
      <TableCaption>A list of your recent Donations.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((item: TItem, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{i + 1}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>
              <DonatationEditModal id={item._id}/>
            </TableCell>
            <TableCell>
              <Button
                variant="destructive"
                className="hover:bg-red-400"
                onClick={showModal}
              >
                Delete
              </Button>
              <Modal
              okButtonProps={{ style: { backgroundColor: '#008080' } }}
              cancelButtonProps={{ style: { backgroundColor: '#EF5555',color:'white' } }} 
                open={isModalOpen}
                onOk={() => handleOk(item._id)}
                onCancel={handleCancel}
              >
                Are you sure to delete?
              </Modal>
            </TableCell>
            <TableCell>
              <NavLink to="/dashboard/create-donation">
                <NavLink to="/dashboard/create-donation">
                  <Button variant="outline">Add Donation</Button>
                </NavLink>
              </NavLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllDonations;
