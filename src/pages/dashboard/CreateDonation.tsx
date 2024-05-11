import { Input, message } from "antd"
import { useState } from "react"
import { useCreateDonationMutation } from "../../redux/features/donation/CreateDonationApi"
import { useNavigate } from "react-router-dom"

const CreateDonation = () => {
  const navigate = useNavigate()
    const [image,setImage] = useState('')
    const [category,setCategory] = useState('')
    const [title,setTitile] = useState('')
    const [amount,setAmount] = useState('')
    const [description,setDescription] = useState('')

    const [createDonation] = useCreateDonationMutation();

    const handleSubmit  = async(e :React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const donationData = {
                image,
                category,
                title,
                amount,
                donationAmount:0,
                description,
                totalDonationAmount:0
            }
            const res = await createDonation(donationData).unwrap();
            message.success(res.message)
            navigate('/dashboard/donations')

        } catch (err) {
            console.log(err)
        }

    }

  return (
    <div className="flex items-center justify-center">
<form onSubmit={handleSubmit} className="sm:w-full md:w-[50%] mx-auto">
      <div>
        <Input onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Image"/>
      </div>
      <div>
        <Input type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="Category" style={{marginTop:'10px'}}/>
      </div>
      <div>
        <Input type="text" onChange={(e)=>setTitile(e.target.value)} placeholder="Title" style={{marginTop:'10px'}}/>
      </div>
      <div>
        <Input type="number" onChange={(e)=>setAmount(e.target.value)} placeholder="Amount" style={{marginTop:'10px'}}/>
      </div>
      <div>
        <Input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" style={{marginTop:'10px'}}/>
      </div>
      <div className="mt-3">
      <button type="submit" className="btn btn:hover">Submit</button>
      </div>
    </form>
</div>
  )
}

export default CreateDonation