import { Button, Input, message } from "antd"
import { useEffect, useState } from "react"
import { useSingleDonationQuery } from "@/redux/features/donation/getSingleDonation"
import { useNavigate, useParams } from "react-router-dom"
import { useEditDonationMutation } from "@/redux/features/donation/editDonationApi"

const EditDonation = () => {
    const {id} = useParams();
    const [image,setImage] = useState('')
    const [category,setCategory] = useState('')
    const [title,setTitile] = useState('')
    const [amount,setAmount] = useState('')
    const [description,setDescription] = useState('') 
    const navigate = useNavigate();
        
    const {data} = useSingleDonationQuery(id);
  useEffect(()=> {
    if(data){
        const {image,title,category,amount,description} = data.data;
        setImage(image)
        setCategory(category)
        setTitile(title)
        setAmount(amount)
        setDescription(description)
    }

  },[data])
const [editDonation] = useEditDonationMutation();
  const handleSubmit  = async(e :React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        const editData = {
            image,
            category,
            title,
            amount,
            description,
            email:data.data.email,
            name:data.data.name
            
        }
        const res = await editDonation({id,editData}).unwrap()
        message.success(res.message);
        navigate('/dashboard/donations')

    } catch (err) {
        console.log(err)
    }

}

  return (
    <div className="flex items-center justify-center mt-5">
<form onSubmit={handleSubmit} className="w-[25%] mx-auto">
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
        <Input type="text" onChange={(e)=>setTitile(e.target.value)} value={title}/>
      </div>
      <div>
        <label>Amount:</label>
        <Input type="number" onChange={(e)=>setAmount(e.target.value)} value={amount}/>
      </div>
      <div>
        <label>Description:</label>
        <Input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      </div>
      <div className="mt-3">
      <Button htmlType="submit" className="w-full">Edit</Button>
      </div>
    </form>
</div>
  )
}

export default EditDonation;