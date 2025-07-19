#!/bin/bash

# Go to the app directory
cd my-app || exit

# Run the development server in background
npm run dev &

# Wait for a few seconds to make sure the server starts
sleep 3

# Open the default browser to http://localhost:3000
xdg-open http://localhost:5173
