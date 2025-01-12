# Posts - A Simplified Social Media Platform

Posts is a minimalistic clone of <https://posts.cv/>, which is itself a simplified and scaled-down alternative to Twitter. We built this clone solely for educational purposes.

This repository contains the CRUD operations for posts. It focuses on the frontend part of the application. The backend part is a mock server API that serves the frontend with data.

## Run locally

1. Clone this repository.

2. Navigate to the project directory.

3. To run the mock server API, please navigate to the `api` directory and run `pnpm start`. This will start the mock server on `http://localhost:3000`.

4. Next, add `.env` file to `web` directory with the following content:

    ```bash
    VITE_API_URL=http://localhost:3000
    ```

5. Finally, start the flash cards web application with `pnpm run dev` inside the `web` directory. This will run the application on `http://localhost:5173`.