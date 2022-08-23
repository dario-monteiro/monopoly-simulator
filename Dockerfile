FROM node:17

WORKDIR /app

# INSTALL APP DEPENDENCIES
COPY package*.json ./
RUN npm install

# BUNDLE APP SOURCE
COPY . .
RUN npm run build

EXPOSE 8080

# START SYSTEM
CMD ["npm", "start"]