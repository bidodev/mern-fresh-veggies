# Register an Account
METHOD: POST
URL: localhost:5000

## Create an account as user
/account/register/user

## Crete an account as farmer
/account/register/farmer

## Json Body
{
    "name": "Claudinei",
    "email": "bido.cd@gmail.com",
    "password": "password102030",
    "passwordConfirmation": "password102030"
}

# Login 
## Login into an Account
METHOD: POST
ENDPOINT: /account/login/

### JSON Body
{
    "email": "claudinei.bido@gmail.com"
    "password": "102030"
}

# Manage Products
## role: farmer or admin
METHOD: GET / POST / PATCH / DELETE

## Retrieve all products from the farmer
METHOD: GET
ENDPOINT: /farmer/products

Obs: You don't neet pass any aditional param to the query, we just have to be logged with the account of the farmer you want the products

## Create Product
METHOD: POST
ENDPOINT: /farmer/products

## Json Body
{
    "name": "Claudinei",
    "type": "type of the item",
    "description": "description of the product",
}


# Retrieve farmers
## Select all the Farmers
METHOD: GET
ENDPOINT /farmers


## Select only 1 Farmer
##