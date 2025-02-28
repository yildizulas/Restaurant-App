# Restaurant Finder App

This is a **React Native** application that helps users search for restaurants based on different price categories. It fetches data from the Yelp API and displays relevant restaurant details.

## Features
- Search for restaurants in Istanbul
- View restaurant ratings and reviews
- Categorized results by price range (cheap, moderate, expensive)
- View restaurant details, including images and contact information

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/restaurant-finder.git
   cd restaurant-finder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Scan the QR code using **Expo Go** on your mobile device or run it on an emulator.

## File Structure
```
restaurant-finder/
│── App.js                # Main application file
│── index.js              # Entry point
│── package.json          # Project dependencies
│── .gitignore            # Git ignore file
│── app.json              # Expo configuration
│── screens/              # Screen components
│   ├── SearchScreen.js   # Search functionality
│   ├── ResultsShowScreen.js # Restaurant details page
│── components/           # Reusable components
│   ├── SearchBar.js      # Search input bar
│   ├── ResultsList.js    # List of restaurants
│   ├── ResultDetail.js   # Individual restaurant details
│── hooks/                # Custom hooks
│   ├── useResults.js     # Fetching restaurant data from API
```

## Technologies Used
- React Native
- Expo
- React Navigation
- Yelp API

## API Setup
To use the **Yelp API**, create a `.env` file in the project root and add your API key:
```sh
YELP_API_KEY=your_api_key_here
```

## Contributing
Feel free to open an issue or submit a pull request if you would like to contribute!
