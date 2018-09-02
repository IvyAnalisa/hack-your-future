##1.What are the names of all the cities in the Netherlands?
SELECT city.Name FROM city
 WHERE city.CountryCode = (
  SELECT country.Code FROM country
  WHERE country.Name='Netherlands'
);
##2.What is the population of Rotterdam ?
SELECT Population FROM city
WHERE Name ='Rotterdam';
 ##3 What's the name of all the countries on the continent ‘North America’ ?
SELECT country.Name from country
WHERE country.Region = 'North America';
##4 What's the top 10 countries by SurfaceArea ?
SELECT country.Name, country.SurfaceArea FROM country
ORDER BY country.SurfaceArea DESC
LIMIT 5;
