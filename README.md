# Sedap Admin Dashboard
## Screenshots
<div>
 <img src='./screenshots/1.png'/>
 <img src='./screenshots/2.png'/>
 <img src='./screenshots/3.png'/>
 <img src='./screenshots/4.png'/>
</div>


---

# Express API Server

This is a basic Express API server that provides endpoints for retrieving customer, product, sales, and worker data. The data is sourced from local JSON files, and the server allows users to query specific data using query parameters or URL parameters.

## Features

- **CORS Enabled**: Cross-Origin Resource Sharing (CORS) is enabled, allowing requests from different origins.
- **JSON Response**: All responses are in JSON format.
- **Search Functionality**: Allows searching for customers, products, sales, and workers by name or title.

## Endpoints

### 1. `/customers`
- **GET**: Fetches all customers.
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ]
  ```

### 2. `/customers/:name`
- **GET**: Fetches customers by their name (case-insensitive).
  
  **Example URL**: `/customers/john`
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
  ```

### 3. `/products`
- **GET**: Fetches all products.
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Product A",
      "price": 100
    },
    {
      "id": 2,
      "title": "Product B",
      "price": 150
    }
  ]
  ```

### 4. `/products/:title`
- **GET**: Fetches products by their title (case-insensitive).
  
  **Example URL**: `/products/product-a`
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Product A",
      "price": 100
    }
  ]
  ```

### 5. `/sales`
- **GET**: Fetches all sales data.
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "productName": "Product A",
      "quantity": 2,
      "totalPrice": 200
    },
    {
      "id": 2,
      "productName": "Product B",
      "quantity": 3,
      "totalPrice": 450
    }
  ]
  ```

### 6. `/sales/:productName`
- **GET**: Fetches sales by product name (case-insensitive).
  
  **Example URL**: `/sales/product-a`
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "productName": "Product A",
      "quantity": 2,
      "totalPrice": 200
    }
  ]
  ```

### 7. `/workers`
- **GET**: Fetches all workers.
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Alice",
      "role": "Manager"
    },
    {
      "id": 2,
      "name": "Bob",
      "role": "Worker"
    }
  ]
  ```

### 8. `/workers/:name`
- **GET**: Fetches workers by their name (case-insensitive).
  
  **Example URL**: `/workers/alice`
  
  **Example Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Alice",
      "role": "Manager"
    }
  ]
  ```

## Setup

To run the server locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/onesmuskipchumba0/AdminDashboard.git
cd AdminDashboard/api
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the server:
```bash
npm start
```

The server will start running on [http://localhost:3000](http://localhost:3000).

### 4. Test the API:
You can test the API using Postman or any API testing tool, or use your browser for GET requests.

## Dependencies
- `express`: A web framework for Node.js.
- `cors`: Middleware for enabling CORS support.
- `axios` (if using to make requests from front end).
  
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
# Pages
Here’s a README for the provided `HomePage` component code:

---

# HomePage Component

The `HomePage` component is the main dashboard screen for an admin interface. It displays various statistics and charts that give an overview of sales, customers, and orders. It includes a responsive layout with cards, charts, and customer details.

## Features

- **Drawer Sidebar**: A slide-out drawer is implemented using the `DrawerComponent`. It can be toggled on and off.
- **Search Bar**: A search bar is provided to quickly search for customer data.
- **Dashboard Overview**: Displays key statistics using cards, including total orders, delivered orders, canceled orders, and total sales.
- **Charts**: 
  - **Pie Chart**: Displays a pie chart visualizing certain data (e.g., sales or customer distribution).
  - **Sales Chart**: Displays a sales-related chart.
  - **Sales Line Chart**: A line chart showing sales trends over time.
- **Starred Customers**: A section that highlights or features top customers with customer cards.
  
## Structure

1. **Drawer Sidebar**: 
   - A slide-out navigation drawer is rendered on the left side of the screen.
   - The drawer can be toggled open and closed via the `toggleDrawer` function.

2. **Search Bar**: 
   - A search bar at the top allows users to search for customers, triggering route changes and fetching relevant data.

3. **Dashboard Cards**:
   - The dashboard has four cards that display the following information:
     - Total Orders
     - Total Delivered
     - Total Canceled
     - Total Sales

4. **Charts Section**:
   - **Pie Chart**: Displays a visual representation of a metric, such as sales distribution.
   - **Sales Chart**: Displays a more detailed visualization of sales, likely in bar or other chart formats.
   - **Sales Line Chart**: Shows sales trends over a period of time.

5. **Starred Customers**:
   - A section that highlights top customers, providing a summary of important customer data in a card format.

## Setup

### 1. Clone the repository:
```bash
git clone <repository_url>
cd <repository_directory>
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```

This will launch the application, and you can navigate to the HomePage to view the dashboard.

## Dependencies
- **@mui/material**: Material UI components used for layout, typography, buttons, and more.
- **@mui/icons-material**: Material icons used for buttons and icons on the page.
- **React**: The core library for building the UI.
- **React Router**: For managing navigation between different routes.
  
## How It Works

- The page is divided into sections:
  - **Drawer**: The `DrawerComponent` is displayed using Material UI's Drawer. It's used for navigation purposes.
  - **Search Bar**: The `SearchBar` component allows users to search for customer data.
  - **Statistics Cards**: Each card displays information about a specific category (orders, delivered, canceled, total sales).
  - **Charts**: The `PieChartComponent`, `SalesChart`, and `SalesLineChart` components are used to visually represent data.
  - **Customer Cards**: The `CustomerCards` component displays the details of featured customers.




# Customers Component

The `Customers` component is used for displaying a list of customers and their details. It integrates a DataGrid from Material UI to display customer information such as name, email, phone number, and address. The component also supports searching for customers by name and includes a sidebar with a drawer for navigation.

## Features

- **Drawer Sidebar**: A slide-out drawer is implemented using the `DrawerComponent`. It can be toggled on and off.
- **Search Bar**: A search bar at the top allows users to search for customers by name, fetching specific customer data from the backend.
- **Customer Data Table**: Displays customer data in a paginated table with options for sorting and checkbox selection.
- **Pagination**: Allows users to paginate through customer records, with the ability to change the number of records displayed per page.

## Structure

1. **Drawer Sidebar**:
   - The `DrawerComponent` renders a slide-out sidebar for navigation, which can be toggled via a button in the header.

2. **Search Bar**:
   - The `SearchBar` component allows users to search for customers by name. The `name` parameter is fetched from the route parameters (`useParams` from `react-router-dom`), which is used to filter customers.

3. **Customer Data Table**:
   - The `DataGrid` component from Material UI is used to display customer data in a tabular format. The data includes fields such as customer ID, name, email, phone, and address.
   - Pagination is supported, and users can select the number of rows per page.

4. **State Management**:
   - The component uses React's `useState` and `useEffect` hooks for managing the state of customers and updating the data when the search parameter changes.

5. **API Integration**:
   - The component fetches customer data from an external API (`localhost:3000/customers`) using Axios. If a name parameter is present, it fetches specific customer data filtered by name.

## Setup

### 1. Clone the repository:
```bash
git clone https://github.com/onesmuskipchumba0/AdminDashboard.git
cd AdminDashboard/frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```

This will launch the application, and you can navigate to the `/customers` route to view the customer list.

## Dependencies
- **@mui/material**: Material UI components used for layout, typography, buttons, and more.
- **@mui/icons-material**: Material icons used for buttons and icons on the page.
- **@mui/x-data-grid**: A Material UI component used to display tabular data with features like pagination and sorting.
- **axios**: A promise-based HTTP client used for making API requests.
- **react-router-dom**: Used for routing and handling the `name` parameter in the URL.
- **react**: The core library for building the UI.

## How It Works

1. **Drawer Sidebar**: The sidebar can be toggled open and closed using the `toggleDrawer` function, providing easy navigation options.
2. **Search Bar**: Users can enter a customer name into the search bar, which triggers a request to the backend to fetch the relevant customer data based on the entered name.
3. **DataGrid**: The `DataGrid` component is used to display a list of customers. Each customer has information such as ID, name, email, phone, and address. The table supports pagination and checkbox selection.
4. **Fetching Customer Data**: On initial load, the `fetchCustomers` function fetches all customer data. If a `name` parameter is passed in the URL, the data is filtered to return customers that match the given name.


---

# Analytics Component

The `Analytics` component is used to display various analytical visualizations, such as charts, within the application. It includes a pie chart, a sales chart, and a sales line chart, helping users to visually analyze data trends and performance.

## Features

- **Drawer Sidebar**: A slide-out drawer is implemented using the `DrawerComponent` that provides navigation options. It can be toggled on and off.
- **Search Bar**: A search bar is included at the top of the page to search for customers or other entities, which can trigger specific actions.
- **Pie Chart**: Displays a pie chart using the `PieChartComponent` for visual representation of a particular dataset.
- **Sales Chart**: A chart component (`SalesChart`) that visualizes sales data over time or other dimensions.
- **Sales Line Chart**: A line chart (`SalesLineChart`) to track and visualize sales trends over a given period.

## Structure

1. **Drawer Sidebar**:
   - The sidebar is implemented using the `DrawerComponent`, which can be toggled open or closed based on the user's interaction.
   
2. **Search Bar**:
   - A search bar is placed at the top, allowing users to search for customers or other relevant data. The route is set to `customers` and can be modified as needed for other data sources.
   
3. **Charts**:
   - The `PieChartComponent`, `SalesChart`, and `SalesLineChart` components are used to display visual data in different chart formats.
     - **Pie Chart**: Visualizes proportional data.
     - **Sales Chart**: Shows overall sales data.
     - **Sales Line Chart**: Depicts sales data over time, typically for trend analysis.

4. **State Management**:
   - The component uses React’s `useState` hook to manage the open state of the drawer (`open`).

5. **API Integration**:
   - While this component doesn't include specific API calls, it is designed to work with data-driven components like charts that would likely fetch their data from an API endpoint.

## Setup

### 1. Clone the repository:
```bash
git clone https://github.com/onesmuskipchumba0/AdminDashboard.git
cd AdminDashboard/frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```

This will launch the application, and you can navigate to the `/analytics` route to view the analytics visualizations.

## Dependencies
- **@mui/material**: Material UI components for layout, typography, buttons, and more.
- **@mui/icons-material**: Material icons used for buttons and icons.
- **@mui/x-data-grid**: Material UI DataGrid component for displaying tabular data.
- **axios**: A promise-based HTTP client for making API requests (although not directly used here, can be used for fetching data for the charts).
- **react**: The core library for building the UI.

## How It Works

1. **Drawer Sidebar**: The sidebar can be toggled open and closed via the `toggleDrawer` function, providing a clean navigation panel.
2. **Search Bar**: The search bar component allows users to search for customer-related data by interacting with the `route="customers"` path.
3. **Charts**: 
   - The `PieChartComponent`, `SalesChart`, and `SalesLineChart` render various types of charts based on data (typically fetched from an API).
   - These chart components are placed within responsive `Box` containers that ensure proper alignment and styling.


---

# Products Component

The `Products` component is used to display a list of products in a tabular format. It includes a data grid for viewing product details, such as the product name, amount, price, and description. It also features a sidebar for navigation, as well as a search bar to filter products.

## Features

- **Drawer Sidebar**: A side drawer (`DrawerComponent`) is implemented to provide navigation options, which can be toggled open or closed.
- **Search Bar**: A search bar (`SearchBar`) is included to search for products by name or other attributes, integrated with the `route="products"` API endpoint.
- **Product Data Grid**: Displays the product information in a table format using the `DataGrid` component. The grid allows for pagination and provides details like:
  - **ID**: Unique identifier for each product.
  - **Name**: Name of the product.
  - **Amount**: Quantity or stock of the product.
  - **Price**: Price of the product.
  - **Description**: Detailed description of the product.

## Structure

1. **Drawer Sidebar**:
   - The sidebar is rendered using the `DrawerComponent` and can be toggled with a button to provide navigation options to the user.

2. **Search Bar**:
   - The search bar component allows users to search for products using the `route="products"` API endpoint. It integrates with the main view and dynamically filters the products.

3. **DataGrid**:
   - The `DataGrid` component from Material UI is used to display the product data in a table. The grid allows users to scroll through and view product details.
   - **Columns**: The columns define the data that is displayed for each product (ID, Name, Amount, Price, Description).
   - **Pagination**: Pagination options are included to manage the amount of rows displayed per page, which is set to a default of 8 per page.

4. **API Integration**:
   - The component uses `axios` to fetch the product data from the API (`http://localhost:3000/Products`). It fetches all products or a specific product based on the `title` parameter.
   - The `useEffect` hook is used to fetch products when the component mounts or when the `title` parameter changes.

5. **State Management**:
   - The component uses React’s `useState` hook to manage the state of products (`Products`) and the drawer's visibility (`open`).
   - Pagination settings are also managed using the `paginationModel` state.

## Setup

### 1. Clone the repository:
```bash
git clone https://github.com/onesmuskipchumba0/AdminDashboard.git
cd AdminDashboard/frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```

This will launch the application, and you can navigate to the `/products` route to view the product list.

## Dependencies
- **@mui/material**: Material UI components for layout, typography, buttons, and more.
- **@mui/icons-material**: Material icons used for buttons and icons.
- **@mui/x-data-grid**: Material UI DataGrid component for displaying tabular data.
- **axios**: A promise-based HTTP client for making API requests.
- **react**: The core library for building the UI.
- **react-router-dom**: For handling routing and navigation.

## How It Works

1. **Drawer Sidebar**: The sidebar can be toggled open or closed using the `toggleDrawer` function, providing navigation links for users.
2. **Search Bar**: The search bar component allows users to search for products by interacting with the API through the `route="products"`.
3. **DataGrid**: 
   - The product data is displayed in a tabular format using the `DataGrid`. The columns define the information to be displayed for each product, and users can scroll through this data.
   - Pagination allows users to navigate through a list of products efficiently.


---

# Sales Component

The `Sales` component is responsible for displaying a list of sales records in a table format. It includes a sidebar for navigation, a search bar for filtering sales, and a data grid for displaying detailed sales data such as product name, quantity, total, and payment status.

## Features

- **Drawer Sidebar**: A side drawer (`DrawerComponent`) is used for navigation and can be toggled open or closed.
- **Search Bar**: A search bar (`SearchBar`) integrated with the `route="sales"` API endpoint allows users to filter sales records.
- **Sales Data Grid**: Displays the sales data in a table format using the `DataGrid` component. The grid allows for pagination and displays key sales details, including:
  - **ID**: Unique identifier for each sale.
  - **Product Name**: Name of the product sold.
  - **Date**: Date when the sale occurred.
  - **Quantity**: Quantity of the product sold.
  - **Customer Name**: Name of the customer who made the purchase.
  - **Total**: Total amount for the sale.
  - **Payment Status**: Status of the payment (e.g., paid, pending).

## Structure

1. **Drawer Sidebar**:
   - The sidebar is implemented with the `DrawerComponent` and can be toggled using the `toggleDrawer` function, offering navigation options.

2. **Search Bar**:
   - The search bar component allows users to search for sales records, integrated with the main view and dynamically filtering data from the API.

3. **DataGrid**:
   - The `DataGrid` component from Material UI is used to display the sales data. The grid is configured to show relevant columns such as ID, Product Name, Date, Quantity, Customer Name, Total, and Payment Status.
   - **Pagination**: Pagination options are included to manage the number of rows displayed per page. The default page size is set to 8 rows.

4. **API Integration**:
   - The component uses `axios` to fetch sales data from the API (`http://localhost:3000/sales`). It can fetch all sales data or a specific sale based on the `title` parameter passed via the URL.
   - The `useEffect` hook is used to fetch sales data when the component is mounted or when the `title` parameter changes.

5. **State Management**:
   - The component uses React’s `useState` hook to manage the state of the sales records (`sales`) and the visibility of the drawer (`open`).
   - The pagination settings are managed using the `paginationModel` state.

## Setup

### 1. Clone the repository:
```bash
git clone https://github.com/onesmuskipchumba0/AdminDashboard.git
cd AdminDashboard/frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```

This will launch the application, and you can navigate to the `/sales` route to view the sales records.

## Dependencies
- **@mui/material**: Material UI components for layout, typography, buttons, and more.
- **@mui/icons-material**: Material icons used for buttons and icons.
- **@mui/x-data-grid**: Material UI DataGrid component for displaying tabular data.
- **axios**: A promise-based HTTP client for making API requests.
- **react**: The core library for building the UI.
- **react-router-dom**: For handling routing and navigation.

## How It Works

1. **Drawer Sidebar**: The sidebar can be toggled open or closed using the `toggleDrawer` function, providing navigation options for the user.
2. **Search Bar**: The search bar component allows users to filter the displayed sales data by interacting with the API through the `route="sales"` endpoint.
3. **DataGrid**: 
   - The sales data is displayed in a tabular format using the `DataGrid`. Columns are defined to show the relevant sale information (ID, Product Name, Date, Quantity, Customer Name, Total, Payment Status).
   - Pagination allows users to navigate through the list of sales efficiently.


---

# Workers Component

The `Workers` component is used to display a list of workers in a table format. It includes a sidebar for navigation, a search bar for filtering workers, and a data grid to show detailed worker information such as name and email.

## Features

- **Drawer Sidebar**: A side drawer (`DrawerComponent`) provides navigation options and can be toggled open or closed.
- **Search Bar**: A search bar (`SearchBar`) is integrated with the route (`workers`), allowing users to filter workers by name.
- **Workers Data Grid**: Displays the list of workers in a table format using the `DataGrid` component. The grid includes the following columns:
  - **ID**: Unique identifier for each worker.
  - **Name**: Name of the worker.
  - **Email**: Email address of the worker.

## Structure

1. **Drawer Sidebar**:
   - The sidebar is implemented with the `DrawerComponent`, which can be opened or closed using the `toggleDrawer` function to provide navigation options.

2. **Search Bar**:
   - The search bar component (`SearchBar`) is used to filter the workers list dynamically from the `workers` API endpoint.

3. **DataGrid**:
   - The `DataGrid` component from Material UI is used to display the workers' data. The grid is configured to show columns like ID, Name, and Email.
   - **Pagination**: Pagination is enabled with the `paginationModel` state, allowing users to navigate between pages of data. The default page size is set to 8.

4. **API Integration**:
   - The component uses `axios` to fetch workers' data from the API (`http://localhost:3000/workers`). It can fetch all workers' data or filter by a specific worker's name based on the `name` parameter passed via the URL.
   - The `useEffect` hook is used to fetch the workers' data when the component is mounted or when the `name` parameter changes.

5. **State Management**:
   - The component uses React's `useState` hook to manage the state of the workers' list (`Workers`) and the visibility of the drawer (`open`).
   - The pagination settings are managed using the `paginationModel` state.

## Setup

### 1. Clone the repository:
```bash
git clone https://github.com/onesmuskipchumba0/AdminDashboard.git
cd AdminDashboard/frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the application:
```bash
npm start
```

This will start the application, and you can navigate to the `/workers` route to view the list of workers.

## Dependencies
- **@mui/material**: Material UI components for layout, typography, buttons, and more.
- **@mui/icons-material**: Material icons used for buttons and icons.
- **@mui/x-data-grid**: Material UI DataGrid component for displaying tabular data.
- **axios**: A promise-based HTTP client for making API requests.
- **react**: The core library for building the UI.
- **react-router-dom**: For handling routing and navigation.

## How It Works

1. **Drawer Sidebar**: The sidebar can be toggled using the `toggleDrawer` function, providing navigation options for the user.
2. **Search Bar**: The search bar component allows users to filter the displayed workers' data by interacting with the API through the `route="workers"` endpoint.
3. **DataGrid**: 
   - The workers' data is displayed in a table format using the `DataGrid` component, showing relevant columns like ID, Name, and Email.
   - Pagination allows users to navigate through the list of workers efficiently.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
