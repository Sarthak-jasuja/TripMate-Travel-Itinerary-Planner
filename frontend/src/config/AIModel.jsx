import {
  GoogleGenAI,
} from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for a Location {destination} for {days} Days for {NoOfTravelers} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format. `,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Constructing the JSON Response**

I've initiated the process of developing a JSON response for a travel plan. My primary focus involves deconstructing the user's request, specifically identifying the core task of travel plan generation. I am currently working on extracting key input variables, such as \`{destination}\` and \`{days}\`, to populate the JSON structure effectively.


**Analyzing Input Parameters**

I'm now deep-diving into the user's request. I'm focusing on dissecting the input parameters, particularly \`{NoOfTravelers}\` and \`{budget}\`, to understand how they influence the JSON structure. My goal is to determine the optimal way to integrate these variables into the travel plan details and related elements, such as hotel recommendations.


**Mapping User Requirements**

I'm now focused on the JSON structure. I've broken down the user's requirements into key objects like 'TravelPlanDetails,' 'HotelOptions,' and 'Itinerary.' I'm working to ensure each object has the necessary fields like destination, duration, hotel details, and daily plans with place descriptions, images, and coordinates.


**Finalizing JSON Structure**

I've successfully mapped the input parameters to the desired JSON structure. I'm now focusing on filling in the specific data for Paris. I'm gathering details for Hotel F 1, Hotel Malte, and Le Meurice, ensuring that I have all the required information: address, price, image URL, coordinates, rating, and description for each hotel option. I also plan to populate the itinerary with suggested places to visit for each day, including names, descriptions, images, and prices.


**Developing the Itinerary**

I'm now populating the itinerary for the three days in Paris. I've gathered details on landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame. Day 1 focuses on iconic landmarks, Day 2 on art and history, and Day 3 will include charming neighborhoods. I'm ensuring each day's plan aligns with the theme and time considerations.


**Structuring the Paris Itinerary**

I'm now deeply immersed in structuring the three-day itinerary for Paris. My work involves organizing the information into daily themes and attractions. I've focused on creating \`place\` objects for each location, including names, descriptions, images, coordinates, ticket prices, ratings, and suggested time. These objects will be placed within the array of each day-plan, which itself resides within the \`itinerary\` array. The emphasis is ensuring that the overall JSON output meets all the specified requirements.


**Crafting the Hotel Options**

I'm now populating the 'HotelOptions' array with sample hotel data for Paris. I'm focusing on crafting descriptions that highlight each hotel's unique selling points and include accurate geo-coordinates. I'm also gathering the final touches for the itinerary.

**Developing the JSON Payload**

My primary task is to finalize the JSON structure, specifically the 'placesToVisit' array within the itinerary for Paris. The goal is to accurately represent the city's key attractions, their estimated ticket prices, and the suggested visit duration for each day.

**Refining Itinerary Details**

I am currently working on filling the 'placesToVisit' array for the three-day Paris itinerary. I am also working on adding a descriptive theme to each day and fine-tuning the \`geoCoordinates\` for precise map integration. My primary focus remains on crafting a JSON response that is both valid and valuable.


**Refining Hotel Data**

I'm presently focused on adding additional hotels to the 'HotelOptions' array, ensuring a wider selection for different budgets. Moreover, I am refining existing descriptions to enhance clarity. Simultaneously, I am incorporating placeholder images to enrich the visual appeal of the JSON output.


**Developing Hotel Data**

I'm now focusing on curating the hotel options. I'm collecting data for the chosen hotels, ensuring I have accurate addresses, prices per night, image URLs, geo-coordinates, ratings, and descriptions. My emphasis is on generating varied and compelling hotel descriptions.


`,
        },
        {
          text: `\`\`\`json
{
  "travelPlan": {
    "destination": "{destination}",
    "durationInDays": "{days}",
    "numberOfTravelers": "{NoOfTravelers}",
    "budget": "{budget}",
    "bestTimeToVisit": "Spring (April to June) and Fall (September to October) for pleasant weather and fewer crowds."
  },
  "hotelOptions": [
    {
      "hotelName": "Generator Paris",
      "address": "9-11 Pl. du Colonel Fabien, 75010 Paris, France",
      "pricePerNight": "Approx. $50 - $150",
      "imageUrl": "https://images.unsplash.com/photo-1550567649-1293a8e48c10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "geoCoordinates": {
        "latitude": 48.8792,
        "longitude": 2.3693
      },
      "rating": 4.1,
      "description": "A trendy and budget-friendly hostel/hotel offering both private rooms and dorms. Features a rooftop bar with views of Montmartre."
    },
    {
      "hotelName": "Hotel Malte - Astotel",
      "address": "63 Rue de Richelieu, 75002 Paris, France",
      "pricePerNight": "Approx. $200 - $350",
      "imageUrl": "https://images.unsplash.com/photo-1444201991207-48d8c62b1a87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "geoCoordinates": {
        "latitude": 48.8682,
        "longitude": 2.3375
      },
      "rating": 4.6,
      "description": "A stylish and highly-rated mid-range hotel located centrally, close to the Louvre. Known for its excellent service and complimentary snacks and drinks."
    },
    {
      "hotelName": "Le Meurice",
      "address": "228 Rue de Rivoli, 75001 Paris, France",
      "pricePerNight": "Approx. $1200+",
      "imageUrl": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "geoCoordinates": {
        "latitude": 48.8651,
        "longitude": 2.3275
      },
      "rating": 4.7,
      "description": "An opulent palace hotel in the heart of Paris, opposite the Tuileries Garden. Offers 18th-century style with a contemporary twist and a 2-Michelin-star restaurant."
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "theme": "Iconic Landmarks & River Views",
      "placesToVisit": [
        {
          "placeName": "Eiffel Tower",
          "placeDetails": "The quintessential symbol of Paris. Ascend to the top for breathtaking panoramic views of the city. It's highly recommended to book tickets in advance online to avoid long queues.",
          "imageUrl": "https://images.unsplash.com/photo-1543349689-9b4d4262e84c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8584,
            "longitude": 2.2945
          },
          "ticketPrice": "€20 - €30 per person (depending on summit access)",
          "rating": 4.6,
          "timeToSpend": "2-3 hours"
        },
        {
          "placeName": "Louvre Museum",
          "placeDetails": "Home to masterpieces like the Mona Lisa and the Venus de Milo. The museum is vast, so plan your visit to focus on specific wings or artworks. The glass pyramid entrance is an icon in itself.",
          "imageUrl": "https://images.unsplash.com/photo-1589255752335-9478f785b54a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8606,
            "longitude": 2.3376
          },
          "ticketPrice": "€17 per person (Free for under 18s)",
          "rating": 4.7,
          "timeToSpend": "3-4 hours"
        },
        {
          "placeName": "Seine River Cruise",
          "placeDetails": "A relaxing way to see many of Paris's famous landmarks from a different perspective. Evening cruises are particularly magical as the city's monuments are beautifully illuminated.",
          "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8582,
            "longitude": 2.2945
          },
          "ticketPrice": "€15 - €25 per person",
          "rating": 4.5,
          "timeToSpend": "1-1.5 hours"
        }
      ]
    },
    {
      "day": 2,
      "theme": "Art, History & Bohemian Charm",
      "placesToVisit": [
        {
          "placeName": "Montmartre & Sacré-Cœur Basilica",
          "placeDetails": "A historic, charming hilltop neighborhood known for its artistic past. Explore the cobbled streets, visit the stunning Sacré-Cœur Basilica for free, and enjoy panoramic city views.",
          "imageUrl": "https://images.unsplash.com/photo-1579541626292-823a0399d34a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8867,
            "longitude": 2.3431
          },
          "ticketPrice": "Free (Donation welcome). A small fee to climb the dome.",
          "rating": 4.7,
          "timeToSpend": "3-4 hours"
        },
        {
          "placeName": "Notre-Dame Cathedral & Sainte-Chapelle",
          "placeDetails": "Visit the Île de la Cité. View the exterior of Notre-Dame as it undergoes restoration. Nearby, don't miss Sainte-Chapelle, a Gothic marvel with breathtaking stained-glass windows.",
          "imageUrl": "https://images.unsplash.com/photo-1506544849318-c340576a47a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          "geoCoordinates": {
            "latitude": 48.8530,
            "longitude": 2.3499
          },
          "ticketPrice": "Notre-Dame (Exterior free), Sainte-Chapelle: €11.50 per person",
          "rating": 4.8,
          "timeToSpend": "2-3 hours"
        },
        {
          "placeName": "Shakespeare and Company",
          "placeDetails": "A legendary English-language bookstore opposite Notre-Dame. A magical, labyrinthine space that has been a gathering place for writers and readers for decades.",
          "imageUrl": "https://images.unsplash.com/photo-1621935639148-0a09a5b67272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8525,
            "longitude": 2.3473
          },
          "ticketPrice": "Free to enter",
          "rating": 4.6,
          "timeToSpend": "1 hour"
        }
      ]
    },
    {
      "day": 3,
      "theme": "Royal Grandeur & Parisian Chic",
      "placesToVisit": [
        {
          "placeName": "Palace of Versailles",
          "placeDetails": "A short train ride from Paris, this opulent palace was the home of French royalty. Explore the Hall of Mirrors, the King's Grand Apartments, and the vast, magnificent gardens.",
          "imageUrl": "https://images.unsplash.com/photo-1592128747469-5a5a8a1b02b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8049,
            "longitude": 2.1204
          },
          "ticketPrice": "€20 - €28.50 per person (Passport ticket for full access)",
          "rating": 4.6,
          "timeToSpend": "5-6 hours (including travel)"
        },
        {
          "placeName": "Arc de Triomphe",
          "placeDetails": "Standing at the western end of the Champs-Élysées, this monument honors those who fought and died for France. Climb to the top for a spectacular view down the 12 radiating avenues.",
          "imageUrl": "https://images.unsplash.com/photo-1590214392434-793836798363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          "geoCoordinates": {
            "latitude": 48.8738,
            "longitude": 2.2950
          },
          "ticketPrice": "€13 per person",
          "rating": 4.7,
          "timeToSpend": "1-1.5 hours"
        },
        {
          "placeName": "Avenue des Champs-Élysées",
          "placeDetails": "Arguably the most famous avenue in the world. Perfect for a stroll, window shopping at luxury boutiques, and people-watching from a classic Parisian café.",
          "imageUrl": "https://images.unsplash.com/photo-1558961363-fa8fdfc97373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          "geoCoordinates": {
            "latitude": 48.8699,
            "longitude": 2.3072
          },
          "ticketPrice": "Free",
          "rating": 4.2,
          "timeToSpend": "2 hours"
        }
      ]
    }
  ]
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();