// this is just temporary data for testing. We need to fetch some images,randomly from our API and display only 4 in the div

const data = [
  {
      id: 1,
      title: "Life Lessons",
      description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" .",
      price: 136,
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      stats: {
          rating: 5.0,
          reviewCount: 6
      },
      city: "London",
      openSpots: 0,
  },
  {
      id: 2,
      title: "Welcome Home",
      description: "Interested in my home? Live the happy couple with memories that'll last a lifetime.",
      price: 125,
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stats: {
          rating: 5.0,
          reviewCount: 30
      },
      city: "Athens",
      openSpots: 27,
  },
  {
      id: 3,
      title: "Summer at the Seaside",
      description: "Experience the beautiful Greek Island.",
      price: 50,
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stats: {
          rating: 4.8,
          reviewCount: 2
      },
      city: "Naxos",
      openSpots: 3,
  },

  {
      id: 4,
      title: "Explore Africa",
      description: "Safari on a budget.",
      price: 50,
      image: "https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlJTIwemFuemliYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stats: {
          rating: 4.8,
          reviewCount: 2
      },
      city: "Zanzibar",
      openSpots: 3,
  },
]

export default data