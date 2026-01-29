FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy only dependency files first (layer caching)
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy the rest of the source
COPY . .

# Expose API port
EXPOSE 4000

# Run in dev mode purposefully
CMD ["npm", "run", "dev"]
