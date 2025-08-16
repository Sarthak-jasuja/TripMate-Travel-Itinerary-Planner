import { Input } from "../Components/ui/input";
import React, { use, useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { BudgetList, SelectTravelList, AI_PROMPT } from "../constants/Options";
import { Button } from "../Components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import generateItinerary from '../config/AIModel';

const generateTripId = () => {
  const now = new Date();
  return (
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0") +
    String(now.getMilliseconds()).padStart(3, "0")
  );
};


const Journey = () => {
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (name, value) => {

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const tripid = generateTripId();
  const onGenerateTrip = async () => {
    if (!formData.location || !formData.NoOfDays || !formData.budget || !formData.travelers) {
      toast("Please fill all the fields");
      return { success: false };
    }
    if (formData?.NoOfDays > 5) {
      toast('Trip days cannot be more than 5');
      return { success: false };
    }
    const FINAL_PROMPT = AI_PROMPT
      .replace('{destination}', formData?.location?.label)
      .replace(/({days})/g, formData?.NoOfDays)
      .replace('{budget}', formData?.budget)
      .replace('{travelers}', formData?.travelers)
    console.log(FINAL_PROMPT);
    setLoading(true);
    try {
      const result = await generateItinerary(FINAL_PROMPT);
      console.log(result);
      const tripData = {
        tripid,
        formData,
        result
      };
      localStorage.setItem(tripid, JSON.stringify(tripData));
      return { success: true };
    }

    catch (error) {
      console.error("Error generating itinerary:", error);
      toast.error("Failed to generate trip. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }

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
              onChange: (v) => { setPlace(v); handleInputChange('location', v) }
            }}
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">How many Days are you planning your trip?</h2>
          <Input placeholder='Enter days between 1 - 5' type='number'
            onChange={(e) => handleInputChange('NoOfDays', e.target.value)} />
        </div>
        <div>
          <h2 className="text-xl font-bold">What is your budget? </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {BudgetList.map((item, index) =>
              <div key={index}
                onClick={() => handleInputChange('budget', item.desc)}
                className={`p-4 border cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-300
                ${formData.budget === item.desc ? 'border-black border-2' : ''}`}>
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
        <Button onClick={async () => {
          const res = await onGenerateTrip();
          if (res.success) {
            toast("Trip generated successfully!");
            navigate(`/viewtrip/${tripid}`);
          }
        }
        }
          className="cursor-pointer hover:bg-gray-800"
          disabled={loading}>
          {loading ? "Generating..." : "Generate trip"}
        </Button>
      </div>
    </div>
  );
};

export default Journey;
