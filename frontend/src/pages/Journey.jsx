import { Input } from "@/components/ui/input"
import React, { use, useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { BudgetList, SelectTravelList,AI_PROMPT } from "../constants/Options";
import { Button } from "../Components/ui/button";
import { toast } from "sonner";


const Journey = () => {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const handleInputChange = (name, value)=>{
    
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const onGenerateTrip = async() => {
    if(!formData.location || !formData.NoOfDays || !formData.budget || !formData.travelers) {
      toast("Please fill all the fields");
      return;
    }
    if(formData?.NoOfDays>5) {
      toast('Trip days cannot be more than 5');
      return;
    }
    const FINAL_PROMPT = AI_PROMPT
    .replace('{destination}', formData?.location?.label)
    .replace('{days}', formData?.NoOfDays)
    .replace('{budget}', formData?.budget)
    .replace('{travelers}', formData?.travelers)
    console.log(FINAL_PROMPT);
    const result = await generateItinerary.sendMessage(FINAL_PROMPT)
    console.log(result?.response?.text());
  }
  useEffect(() => {
    console.log(formData);
  }, [formData])

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-4xl'>Where do you want to go?
        <span className="material-symbols-outlined text-6xl align-middle">flight</span>
      </h2>
      <p className=''>"Enter the basic details, Tripmate will do the rest for you"</p>
      <div className='mt-12 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-bold'>What is your destination choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v);handleInputChange('location', v)}
            }}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">How many Days are you planning your trip?</h2>
          <Input placeholder='Enter days between 1 - 5' type='number' 
          onChange = {(e)=>handleInputChange('NoOfDays',e.target.value)}/>
        </div>
        <div>
          <h2 className="text-xl font-bold">What is your budget? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {BudgetList.map((item, index) =>
              <div key={index}
              onClick={() => handleInputChange('budget', item.desc)}
              className={`p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-300
                ${formData.budget === item.desc ? 'border-black border-2': ''}`}>
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-sm ">{item.desc}</h2>
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">How many passengers are travelling? </h2>
          <div className="grid grid-cols-4 gap-5 mt-5">
            {SelectTravelList.map((item, index) =>
              <div key={index} 
              onClick={() => handleInputChange('travelers', item.title)}
              className={`p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-300
              ${formData.travelers === item.title ? 'border-black border-2' : ''}`}>
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-sm ">{item.people}</h2>
                <h2 className="text-sm ">{item.desc}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-10 justify-items-start flex">
        <Button onClick={() => onGenerateTrip()}
        className="cursor-pointer">Generate trip</Button>
      </div>
    </div>
  );
};

export default Journey;
