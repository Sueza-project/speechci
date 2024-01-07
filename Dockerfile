# Dockerfile

# Use an existing node alpine image as a base image.
FROM node:20-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json file.
#copy package.json
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
# COPY ngnix.conf .

# # Install application dependencies using clean installation 
RUN npm ci

# Copy the rest of the application files.
COPY public/ public
COPY src/ src

# Expose the port.
EXPOSE 3000

# Run the application.
CMD ["npm", "start"]