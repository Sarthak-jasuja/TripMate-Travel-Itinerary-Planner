import { Input } from "@/components/ui/input"
import React, { use, useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { BudgetList, SelectTravelList } from "../constants/Options";
import { Button } from "../Components/ui/button";

const Journey = () => {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const handleInputChange = (name, value)=>{
    setFormData({
      ...formData,
      [name]: value
    })
  }
  useEffect(() => {
    console.log(formData);
  }, [formData])

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-4xl'>Where do you want to go?⛰️🏝️</h2>
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
          <Input placeholder='Example - 3 days' type='number' 
          onChange = {(e)=>handleInputChange('NoOfDays',e.target.value)}/>
        </div>
        <div>
          <h2 className="text-xl font-bold">What is your budget? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {BudgetList.map((item, index) =>
              <div key={index} className="p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">How many passengers are travelling? </h2>
          <div className="grid grid-cols-4 gap-5 mt-5">
            {SelectTravelList.map((item, index) =>
              <div key={index} className="p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button className="cursor-pointer">Generate trip</Button>
      </div>
    </div>
  );
};

export default Journey;
