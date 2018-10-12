// Campaign Data

const sangerCampaign = {
  district: "25",

  platforms: [
    { 
      topic: "Taxes",
      stance: "No taxes"
    },
    {
      topic: "Jobs",
      stance: "More jobs"
    },
    {
      topic: "Infrastructure",
      stance: "Fix the potholes"
    },
    {
      topic: "Health care",
      stance: "Make it affordable"
    },
    {
      topic: "Crime and enforcement",
      stance: "No crime"
    }
  ],

  donationUrl: "http://donatetosanger.com",

  calendar: {
    events: [
      {
        name: "Fun Fundraiser",
        date: "10/15/2018",
        location: "Nashville, TN",
        description: "A really fun fundraiser to raise funds."
      },
      {
        name: "Boring Fundraiser",
        date: "10/25/2018",
        location: "Memphis, TN",
        description: "This fundraiser is oging to be boring."
      },
      {
        name: "Winning Celebration",
        date: "11/06/2018",
        location: "Washington, DC",
        description: "Gather to celebrate Sanger winning the election"
      }
    ],
    meetings: []
  },

  volunteers: [
    {
      name: "John Smith",
      address: "123 Street",
      email: "john@smith.com",
      phone: "123-456-7890",
      availability: ["Monday", "Wednesday", "Friday"],
      activityPrefs: ["Phone calls", "getting coffee"]
    },
    {
      name: "Larry Jones",
      address: "123 Street",
      email: "larry@jones.com",
      phone: "123-456-0987",
      availability: ["Tuesday", "Wednesday", "Thursday"],
      activityPrefs: ["Taking Polls", "Phone Calls"]
    }
  ],
  
  biography: "Elizabeth Sanger is a Democrat running for the 25th congressional district in Tennessee.",
  
  images: [
    {
      description: "Headshot",
      url: "headshot.jpg"
    },
    {
      description: "Family Photo",
      url: "family.jpg"
    },
    {
      description: "Constituents",
      url: "loyalvoters.jpg"
    }
  ],
  
  mission: "To be the representative voice of the constituents in my District.",
  
  registerUrl: "https://registertovote.org",

  
  // Method for adding a new platform
  addPlatform(newTopic, newStance) {
    this.platforms.push({
      topic: newTopic,
      stance: newStance
    });
  },
  // Method for adding an event or meeting to the calendar
  addCalendar(type, name, date, location, description) {
    this.calendar[type].push({
      name: name,
      date: date,
      location: location,
      description: description
    });
  },
  // Method for adding a new volunteer
  addVolunteer(name, address, email, phone, availability, activityPrefs) {
    this.volunteers.push({
      name: name,
      address: address,
      email: email,
      phone: phone,
      availability: availability,
      activityPrefs: activityPrefs
    });
  },
  // Method for adding new images
  addImage(description, url) {
    this.images.push({
      description: description,
      url: url
    });
  },

  // method to find and edit any existing objects in an array.
  edit(array, prop, oldValue, newValue) {
    let index = array.findIndex(x => x[prop] == oldValue);
    if (index >= 0) {
      array[index][prop] = newValue;
    } else {
      alert(`${prop} was not found with value ${oldValue} in ${array}`);
    }
  }

};


//test adding methods
sangerCampaign.addPlatform("Coding", "Everyone should learn to code");
sangerCampaign.addCalendar("events", "Coding Event", "10/25/2018", "Nashville, TN", "Sanger talks about how everyone needs to learn to code");
sangerCampaign.addCalendar("meetings", "Meeting with Barack Obama", "10/31/2018", "Chicago, IL", "Meeting to discuss platforms");

console.log(sangerCampaign.calendar);

// test edit method
sangerCampaign.edit(sangerCampaign.calendar.events, "date", "10/15/2018", "10/16/2018");

console.log(sangerCampaign.calendar)
