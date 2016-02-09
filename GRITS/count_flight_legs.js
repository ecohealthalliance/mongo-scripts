//returns the number legs for all flights in our flights collection
db.flights.aggregate([
  {
    $group: 
      { _id: null, 
        totalLegs: 
          {$sum: {$add: ["$stops",1]}}
      }
  }
])
