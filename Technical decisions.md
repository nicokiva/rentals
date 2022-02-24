# Technical decisions
This project was divided in 2 folders:
1. frontend: this folder stors a React App, the minimal UI where the user interacts manages the rentals.
2. backend: minimal NodeJS app to store the rentals. The backend does not persists the data anywhere, it only stores in a local variable which is cleared when the server is restarted.

# Libraries
#### Frontend
- React: it is a very complete library used to create websites. I chose this one because of my expertise working with it.
- MaterialUI: it is a library which provides already developed visual components, so I do not have to focus on styling.

#### Backend
- Nodemon: it is a library used for hot reloading. On every change, it reloads the server preventing the developer to kill it and restart again manually.

#### Instructions to execute
1. Both in `/backend` and in `/frontend` run `npm install`.
2. Go to `/backend` folder and run the command `node index`.
3. Go to `/frontend` folder and run the command `npm start`.

# Missing parts
Unfortunatelly due to lack of time, I was unable to work on the following:
- Automated testing.
- Responsiveness of the app (currently it works for desktop only).
- Store rentals in a database.