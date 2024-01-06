#chose the node image
FROM node:18-alpine 
WORKDIR '/app'

#copy package.json
COPY package.json .
COPY package-lock.json .
COPY postcss.config.cjs .

# RUN npm install --save-dev webpack

# Install all our packages
RUN npm install 

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY package-lock.json /app/
COPY postcss.config.cjs /app/


# Here, we are implementing the multi-stage build. it greatly reduces our
# size, it also won't  expose our code in our container as we will only copy
# the build output fron the first stage 


# Build the project

# Begining of the second stage

EXPOSE 3000

CMD ["npm","start"]