# NextIF Event Website

This is the official website for the NextIF event. It provides information about the event schedule, speakers, and partners. It also includes a registration and payment portal for attendees.

## Features

*   **Event Information:** Detailed pages for the event agenda, speakers, and partners.
*   **Registration:** A user-friendly registration form for attendees.
*   **Payment Portal:** Secure payment processing for tickets, with support for multiple payment gateways.
*   **Responsive Design:** The website is optimized for viewing on both desktop and mobile devices.

## Tech Stack

*   **Frontend:** React, Vite, Tailwind CSS
*   **Backend (Payment Portal):** Node.js, Express
*   **Payment Gateway:** Stripe, Paystack, Flutterwave

## Folder Structure

The project is organized into two main parts: the main event website and a separate payment portal.

```
.
├── /payment-portal         # Sub-project for payment processing
│   ├── /server             # Express backend for payments
│   └── /src                # React frontend for the payment portal
├── /src                    # Main event website source code
│   ├── /components         # Reusable React components
│   ├── /pages              # Application pages (Home, About, etc.)
│   └── /assets             # Static assets like images
└── ...
```

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd nextif-event
    ```

2.  **Install dependencies for the main project:**
    ```bash
    npm install
    ```

3.  **Install dependencies for the payment portal:**
    ```bash
    cd payment-portal
    npm install
    ```

4.  **Install dependencies for the payment portal server:**
    ```bash
    cd server
    npm install
    ```

### Running the Application

You will need to run three separate processes for the full application to work correctly.

1.  **Run the main event website:**
    In the root directory (`/`):
    ```bash
    npm run dev
    ```
    This will start the main website, typically on `http://localhost:5173`.

2.  **Run the payment portal frontend:**
    In the `/payment-portal` directory:
    ```bash
    npm run dev
    ```
    This will start the payment portal, typically on a different port.

3.  **Run the payment portal backend:**
    In the `/payment-portal/server` directory:
    ```bash
    npm start
    ```
    This will start the backend server, typically on `http://localhost:3001`.

## Environment Variables

The payment portal requires API keys for the payment gateways. Create a `.env` file in the `/payment-portal/server` directory and add the necessary keys:

```
STRIPE_SECRET_KEY=your_stripe_secret_key
```