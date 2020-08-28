# Fridge Tracker 

This project is the backend for the Fridge Tracker app.
It links to the Spoonacular recipes API and requires an API key to make requests.

## Getting started



Replace `your-project-folder-name` with the folder name you wish to create for your project and run the below inside your `Projects` folder.

```
git clone git@github.com:markrea/final-project-backend.your-project-folder-name
cd your-project-folder-name
npm install
npm start
```

The project can be accessed at [http://localhost:9000/] 

## Setting up your API key

Visit [https://spoonacular.com/food-api] and create an account to get your API key. 

Once you have your API key create a file titled .env at the top level of your project. 

Inside your .env file write a single line:
API_KEY={your API key}

## End Points

### Search Recipes By Ingredient
GET [http://localhost:9000/recipes]
Searching by ingredient can take the following parameters:

#### Ingredient
A comma seperated string containing ingredients you wish to search for 
e.g. 'chicken, cream'

#### Diet
A string detailing any diet your results must adhere to. 
Supported diets are as follows:
-Gluten Free
-Ketogenic
-Vegetarian
-Vegan
-Lacto-Vegetarian
-Ovo-Vegetarian
-Pescatarian
-Paleo
-Primal
-Whole30

#### Intolerances
A string contraining food intolerances which will be excluded from results.
Supported intolerances are as follows:
-Dairy
-Egg
-Gluten
-Grain
-Peanut
-Seafood
-Sesame
-Shellfish
-Soy
-Sulfite
-Tree Nut
-Wheat

#### Example Request
GET [http://localhost:9000/recipes?ingredients=chicken&diet=glutenfree&intolerances=egg]



