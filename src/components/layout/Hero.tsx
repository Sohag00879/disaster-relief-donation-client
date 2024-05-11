import { Link} from "react-router-dom"

const Hero = () => {
  const dark = localStorage.getItem('isDark') === 'true';
  return (
    <div className={dark ? 'bg-neutral-950 text-white' : 'bg-white'} style={{marginTop:'-25px'}}>
      <div className="flex flex-wrap mt-5">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                JOIN US<span className="text-[#008080]">.</span>
              </div>
              <div>
                <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold"> <span className="text-[#008080]">Post-Disaster</span>  Relief Donation Platform</h1>
                <div className="w-20 h-2 bg-[#008080] my-4"></div>
                <p className="text-xl mb-10">Welcome to our Post-Disaster Relief Donation Platform, where every donation helps rebuild lives. Together, we can make a difference. Join us in providing essential support to communities affected by disasters. Your contribution can bring hope and help those in need rebuild their lives.</p>
                <Link to='/about-us'>
                  <button className="btn btn:hover">Know More</button>
                </Link>
              </div>
            </header>
          </div>
        </div>
        <img 
          src="https://img.freepik.com/free-photo/volunteers-holding-boxes-containing-donations-charity_23-2149230563.jpg?t=st=1715317898~exp=1715321498~hmac=f7d0c7568be9cc237f9ba68f52b11306bb1a543022eff841dc60b5feabcd39e0&w=740" 
          alt="Leafs" 
          className="w-full h-48 object-fit sm:h-screen sm:w-4/12 rounded-lg shadow-lg px-5"
        />
      </div>
    </div>
  )
}

export default Hero;
