# New Guide

This is a web application that allows users to explore New York Times news. The project was developed using [Vite](https://vitejs.dev/), [Yarn](https://yarnpkg.com/), [React.js](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

The project can be viewed at [https://profparedes-newsguide.netlify.app](https://profparedes-newsguide.netlify.app).

## Prerequisites

To run this project, you need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed on your computer.

## Setup

Before you start, you will need to get your Marvel API keys:

1. Sign up on the [New York Times API](https://developer.nytimes.com/apis).
2. After logging in, go to "My Apps" to get your public API key.
3. Clone this repository on your computer.
4. At the project root, copy the `.env.example` file and rename the copy to `.env`.
5. Open the `.env` file and replace `<your_api_key>` with your New York Times API keys, respectively.

```
VITE_API_KEY=<your_api_key>
```

## Installation

At the project root, run the following command to install all necessary dependencies:

```
yarn
```

## Running

To run the app, use the following command:

```
yarn dev
```

This will start the development server on port 3000. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app.

## Contributions

Contributions are welcome. Feel free to open an issue or make a pull request.

## License

This project is licensed under the MIT license.
