const GalleryComponent = () => {
  const dark = localStorage.getItem('isDark') === 'true';
  return (

<div className={`p-5 sm:p-8 ${dark?'bg-neutral-950':'bg-white'}`}>
<h1 className={`text-center text-3xl mb-10 ${dark?'text-white':'text-black'}`}>Our Gallery</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div className="group cursor-pointer relative">
    <img
      src="https://bdrcs.org/wp-content/uploads/2021/01/getinvolve-image-3-800x373.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://uhrelief.org/wp-content/uploads/2021/11/donate-today-bg-scaled.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://www.worldbank.org/content/dam/Worldbank/Feature%20Story/bd-bccrf-400x264.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://www.malteser-international.org/fileadmin/_processed_/b/8/csm_MicrosoftTeams-image__11__0f6531b5af.png"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://www.savethechildren.org/content/dam/usa/images/catalog/gift-catalog-asia-rec.jpg/_jcr_content/renditions/original.img.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://pmedia.launchgood.com/21046%2Fbody%2F27500499_1334443903368972_1096379920207975575_o.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://www.unhcr.org/sites/default/files/legacy-images/5a339af04.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://www.islamic-relief.org.uk/wp-content/uploads/2023/10/bangladesh-education-kits-for-kids-feature.jpeg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://www.rienvangendt.com/wp-content/uploads/2020/05/Bangladesh-blog-headers.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://ecdn.banglatribune.com/contents/cache/images/825x0x1/uploads/media/2019/11/25/fc72ed1abfc570074e4d7e887575dc9b-5ddc14db1c43a.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://muslimhands.org.uk/_ui/images/f5d2f823835d.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
 
  <div className="group cursor-pointer relative">
    <img
      src="https://muslimhands.org.uk/_ui/images/cc92a04956b7.jpg"
      alt="Image 1"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    </div>
  </div>
</div>
</div>


  );
};

export default GalleryComponent;
