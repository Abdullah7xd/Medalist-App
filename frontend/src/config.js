const app_config = {
  apiUrl: "http://localhost:5000",
  title: "",
  themeColor: "#0e8aee",
  secondaryColor: "#0e8aee",
  status: {
    login: {
      success: 201,
      fail: 401,
    },
  },
  games: [
    { id: 1, name: "Cricket", image: "cricket.jpg", type: "team" },
    { id: 5, name: "Badminton", image: "badminton.jpg", type: "solo" },
    { id: 2, name: "Football", image: "football.jpg", type: "team" },
    { id: 3, name: "Basketball", image: "basketball.jpg", type: "team" },
    { id: 4, name: "Tennis", image: "tennis.jpg", type: "solo" },
  ],
  categoryData: {
    Cricket: [],
    Football: [],
    Basketball: [],
    Tennis: [
      "Men Singles",
      "Men Doubles",
      "Women Singles",
      "Women Doubles",
      "Mixed Doubles",
    ],
    Badminton: [
      "Men Singles",
      "Men Doubles",
      "Women Singles",
      "Women Doubles",
      "Mixed Doubles",
    ],
  },
  scoringModel: {
    Badminton: (totalScore) => {
      return { totalScore, playerA: 0, playerB: 0 };
    },
    Tennis: (totalScore) => {
      return { totalScore, playerA: 0, playerB: 0 };
    },
    Cricket: (overs) => {
      return {
        overs,
        teamA: { runs: 0, wickets: 0, overs: 0 },
        teamB: { runs: 0, wickets: 0, overs: 0 },
      };
    }

  },
};

export default app_config;
