# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy app files to the working directory
COPY . .

# Build the app
# RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD [ "yarn", "start" ]
