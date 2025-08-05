export const SelectTravelList = [
    {
        id: 1, 
        title: "Just Me",
        desc: '(A sole traveles in exploration)', 
        icon: '+',
        people: '1 person'
    },
    {
        id: 2, 
        title: "A couple",
        desc: '(Two traveles in tandem)', 
        icon: '🥂',
        people: '2 people'
    },
    {
        id: 3, 
        title: "Family",
        desc: '(A group of fun and love)', 
        icon: '🏡',
        people: '3-5 people'
    },
    {
        id: 4, 
        title: "Friends",
        desc: '(A group of friends in adventure)', 
        icon: '🚌',
        people: '5+ people'
    }

]
export const BudgetList = [
    {
        id: 1, 
        title: "Budget",
        desc: 'A budget friendly trip', 
        icon: '💰',
        budget: 'Low'
    },
    {
        id: 2, 
        title: "Mid Range",
        desc: 'A trip with moderate expenses', 
        icon: '💳',
        budget: 'Medium'
    },
    {
        id: 3, 
        title: "Luxury",
        desc: 'A luxurious and comfortable trip', 
        icon: '💎',
        budget: 'High'
    }
]
export const AI_PROMPT = 'Generate a travel itinerary for a trip to {destination} for {days} days with a budget of {budget}. The trip is planned for {travelers} travelers. Give me hotels option list with Hotel name, Hotel address, Hotel rating, Hotel price, and Hotel image url. Also give me a day-wise plan with activities, places to visit, and food options. The itinerary should be in JSON format with the following structure: { "destination": "string", "days": number, "budget": "string", "travelers": "string", "itinerary": [ { "day": "Day 1", "activities": [ "Visit to XYZ location", "Lunch at ABC restaurant", ... ] }, ... ] } Only return valid JSON. No explanation, no markdown — just pure JSON.'; ;
