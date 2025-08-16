import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewTrip = () => {
  const { tripid } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const storedTrip = localStorage.getItem(tripid);
    if (storedTrip) {
      setTrip(JSON.parse(storedTrip));
    }
  }, [tripid]);

  if (!trip) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading trip details...</p>
      </div>
    );
  }

  const { formData, result } = trip;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {result}
    </div>
  );
};

export default ViewTrip;
