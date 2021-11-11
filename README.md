# Team-Project 4
# Couch Vibes - TV Shows vs Moods

**[Couch Vibes Heroku Link](Update the Heroku link HERE)**

## **Table of Contents**

- [Background & General Info](https://github.com/meetk5/Team-Project4#background--general-info)
- [Technologies](https://github.com/meetk5/Team-Project4#technologies)
- [Deploy](https://github.com/meetk5/Team-Project4#deploy)
- [Website Design](https://github.com/meetk5/Team-Project4#website-design)
- [Visualizations & Analysis](https://github.com/meetk5/Team-Project4#visualizations--analysis)
- [Run Flask](https://github.com/meetk5/Team-Project4#run-flask)
- [Heroku](https://github.com/meetk5/Team-Project4#heroku)
- [Lessons Learned](https://github.com/meetk5/Team-Project4#lessons-learned)
- [Inspiration](https://github.com/meetk5/Team-Project4#inspiration)
- [Team Members](https://github.com/meetk5/Team-Project4#team-members)

## **Background** & General Info (STORY WILL COME HERE)



#### **Data sources:** 

For our website, we used [TV Times Shows Dataset](https://www.kaggle.com/oscarfry/tvtime-shows) that contains data of restaurants, their location, cuisines, inspection report, violations and their description of all boroughs in NYC. Our dataset had 382k rows and 26 columns. While going through our data we were able to decide that we will do visualizations around cuisine data by borough, restaurant's locations on map and violation details for the restaurants.

For our project, we filtered out data from January 1, 2020 till August 31, 2021 and to deploy our website in Heroku, we used a reduced dataset from January 1, 2021 till July 31, 2021.

## **Technologies**

- Python (Jupyter Notebook, Pandas)
- Flask 
- SQL/ Postgres DB
- JavaScript Libraries (D3, Plotly, Leaflet)
- HTML/ CSS (Bootstrap)
- Excel
- Machine Learning
- Tableau


## Deploy

In visual studio code using javascript, we used our JSON files to call our data queries. Once the data was called, we were able to create visualizations for our website.

We later deployed flask app to run our visualization on local server.

## Website Design

- There are a total of 5 Webpages (1 Landing page, 1 For Creators page, 1 For Audience page, 1 For Visualizations page, 1 Team page) that were built using HTML, CSS, and Bootstrap

- The Landing Page is responsive and has four icon images linked to other pages. Each icon expands on hover. These icons are "**For Creators**", "**For Audience**", "**For Visualizations**" and "**Team**".

  ![homepageimage](https://github.com/meetk5/Team-Project3/blob/main/Images/homepage.jpg)

- Each visualization page has a navbar that will indicate what the active page is. The navbar also has an image of the logo.

  ![navbarimage](https://github.com/meetk5/Team-Project3/blob/main/Images/navbar.jpg)

- Each page has a favicon that will appear in the browser tab

  ![faviconimage](https://github.com/meetk5/Team-Project3/blob/main/Images/faviconscreenshot.jpg)

## Visualizations & Analysis

We created several visualizations for our website using JavaScript libraries like Leaflet, Plotly and D3.

### Restaurant Finder

We used D3, Openstreetmap & Leaflet to create and plot markers of restaurant locations in NYC based on Latitude and Longitude details. We also created a borough layer in our map that assigns different colors to each borough and helps in distinguishing better. We created popups on each location pin that would display the restaurant's name, cuisine info, contact number, and borough details.

![restfinder](https://github.com/meetk5/Team-Project3/blob/main/gifs/NYC-Restaurant-Inspections%20restaurant%20finder.gif)

### NYC Cuisines

This is an interactive webpage with a dropdown feature that lets user selects any of the five boroughs of NYC and based on their selection displays a pie chart that provides a percentage breakdown of all the cuisines in that particular borough.

Below this, we have a horizontal bar chart that displays the number of restaurants for the top 10 popular cuisines for a selected borough. We also have a standard bar chart that displays the number of restaurants for all the NYC cuisines.  From this data, we can see that American cuisine is the most predominant in the city with a total of 2527 restaurants followed by Chinese cuisine with a total of 1220 restaurants.  We can also see from this graph that there are only 13 Australian cuisines in all of NYC. 

Upon exploring each borough, we see that Manhattan has the greatest number of restaurants compared to any other borough. American cuisine alone in this borough dominates with 1221 restaurants as compared to Staten Island, the most popular cuisine is also American with only 99 total restaurants.

For each borough, you can also see the top 5 violations.

![cuisines](https://github.com/meetk5/Team-Project3/blob/main/gifs/NYC-Restaurant-Inspections.gif)

### Restaurant Violations

To be consistent with our design throughout our website, we decided to keep the violation webpage also as an interactive page with the same dropdown feature. Here users can select a borough and see a bar graph that displays the list of Top 15 Violation Codes and the number of times it has been recorded in the inspection report. We had a total of 35 violations but we decided to go ahead with the most occurred Top 15 violation codes to make our visualization more readable.

Since our data had two separate fields which explained the violation code and their detailed description, we have provided a legend-style table that mentions all the violations in detail for each violation code. We incorporated Plotly's "**plotly-click**" function to make this page more interactive by displaying the list of 20 restaurants when users click on any of the violation code bars in the bar graph.

![violation](https://github.com/meetk5/Team-Project3/blob/main/gifs/Violation-Data.gif)



## Run Flask



## Heroku

**[Couch Vibes Heroku Link](https://the-data-restaurateurs.herokuapp.com/)** We were able to deploy our app to Heroku.

## Lessons Learned

1. One of the biggest challenges in this project was to deploy our website on Heroku. Since our data had around 43k rows of data, we had to reduce our dataset to 7k entries to deploy on Heroku. Since we were deploying this on Heroku for the first time, we learned many new things like importing correct libraries, modifying flask, connecting to Heroku's database, and ensuring that your data is under 10k records.
2. While establishing a connection with Flask using SQL Alchemy, we faced an error because we had not defined the primary key in our violations table.
3. When we removed all null values from our violations dataset, For loop in our JavaScript was throwing an error as it was missing an iterable element.
4. In our "Restaurant Finder" webpage, we were not able to see layers for map objects because of null values in our data which break the chain of the codes. As we had 7873 restaurants appear on the map, we are not able to see the borough colors clearly, especially for Manhattan. Because number of the restaurants, zoom in and out functions don't work properly and distorts popups for such a big number. It takes time for map to reform back.

## Inspiration

Our inspiration for this project were Rutgers Data Science Bootcamp and Good TV Shows.

## **Team Members**

- [Brian Johnson](https://github.com/Bjohnson08021/)

- [Kate Yayla](https://github.com/Kate-Yayla)

- [Jay Dhruv](https://github.com/jaybdhruv)

- [Meet K Kaur Sahni](https://github.com/meetk5)

- [Saleha Ahmed](https://github.com/saleha456)

