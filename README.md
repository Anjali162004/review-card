### Review Sentiment Analysis React App

#### Project Overview

This project involves creating a React application to display reviews, highlight sentences based on sentiment analysis, and provide tooltips with sentiment topics. Reviews and their associated sentiment analytics are fetched from a JSON file (`reviewsData.json`). The application will utilize React components to achieve functionality and styling according to provided design specifications.

#### Project Structure

The project consists of several components:

1. **ReviewList Component**:
   - Fetches and displays reviews from `reviewsData.json`.
   - Each review includes details such as reviewer name, content, date, rating, source, and sentiment analytics.

2. **ReviewHighlighter Component**:
   - Highlights sentences in the review text based on sentiment using colors specified for each sentiment type (Positive, Negative, Mixed, Neutral).
   - Utilizes the `analytics` property in each review object to determine which sentences to highlight.

3. **Tooltip Component**:
   - Displays sentiment topic when hovering over highlighted sentences.
   - Extracts the sentiment topic from the `analytics` data of the hovered sentence.

4. **Styling**:
   - Applies CSS styles to ensure proper formatting, alignment, and responsive design.
   - Uses color codes provided for each sentiment to visually differentiate highlighted sentences.

#### Project Setup Instructions

To run the React application locally, follow these steps:

1. **Clone the Repository**:
   - Clone this repository to your local machine using Git:
     ```
     git clone https://github.com/Anjali162004/review-card
     ```

2. **Navigate to Project Directory**:
   - Change directory to the project folder:
     ```
     cd review-list
     ```

3. **Install Dependencies**:
   - Install required dependencies using npm (Node Package Manager):
     ```
     npm install
     ```

4. **Start Development Server**:
   - Start the React development server:
     ```
     npm run dev
     ```
   - This command runs the app in development mode.
   - Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### Optional Features

If you choose to implement the optional feature using `highlight_indices`, follow these additional steps:

5. **Implement Highlight Indices**:
   - Modify the `ReviewHighlighter` component to utilize the `highlight_indices` property from each review.
   - Highlight sentences based on the specific start and end indices provided in `highlight_indices`.


#### Resources

- **Color Codes for Sentiments**:
  - Positive: #D9F2DD
  - Negative: #F2DBD9
  - Mixed: #e8bd6d3d
  - Neutral: #eaf09b6b

 
