export const fetchRecipes = (ingredients: any[]) => {
    const categoryItems: any[] = [
        {
            "title": "Roasted Garlic Grilling Sauce",
            "href": "http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx",
            "ingredients": "garlic, onions, hot sauce",
            "thumbnail": "http://img.recipepuppy.com/634118.jpg"
        },
        {
            "title": "Steamed Mussels I",
            "href": "http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx",
            "ingredients": "garlic, mussels, onions",
            "thumbnail": "http://img.recipepuppy.com/29318.jpg"
        },
        {
            "title": "Braised Beef and Onions",
            "href": "http://www.epicurious.com/recipes/food/views/Braised-Beef-and-Onions-232969",
            "ingredients": "allspice, garlic, onions",
            "thumbnail": "http://img.recipepuppy.com/103021.jpg"
        },
        {
            "title": "Dashi Basic Korean Kelp Stock Recipe",
            "href": "http://www.grouprecipes.com/508/dashi-basic-korean-kelp-stock.html",
            "ingredients": "anchovies, garlic, onions",
            "thumbnail": "http://img.recipepuppy.com/351817.jpg"
        },
        {
            "title": "Oven-Saut&#233;ed Onions and Garlic",
            "href": "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1860015",
            "ingredients": "onions, garlic, olive oil",
            "thumbnail": "http://img.recipepuppy.com/527595.jpg"
        },
        {
            "title": "Three-in-One Meals Meaty Tomato Sauce",
            "href": "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1857779",
            "ingredients": "ground beef, onions, garlic",
            "thumbnail": "http://img.recipepuppy.com/555389.jpg"
        },
        {
            "title": "\nPerfect Roast Chicken Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/perfect-roast-chicken-41630",
            "ingredients": "onions, garlic, salt",
            "thumbnail": "http://img.recipepuppy.com/806946.jpg"
        },
        {
            "title": "\nMexican Rice Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/mexican-rice-47559",
            "ingredients": "onions, garlic, crisco",
            "thumbnail": "http://img.recipepuppy.com/816298.jpg"
        },
        {
            "title": "\nCreamed Zucchini Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/creamed-zucchini-60366",
            "ingredients": "zucchini, onions, garlic",
            "thumbnail": "http://img.recipepuppy.com/821781.jpg"
        },
        {
            "title": "\nChile Con Queso (Spicy Cheese Dip) Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/chile-con-queso-spicy-cheese-dip-2037",
            "ingredients": "salsa, onions, garlic",
            "thumbnail": "http://img.recipepuppy.com/823756.jpg"
        },
        {
            "title": "TOMBSTONE® Kickoff Pizza \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/tombstone-kickoff-pizza-55652.aspx?cm_re=1-_-1-_-RecipeAlsoEnjoy",
            "ingredients": "pepperoni",
            "thumbnail": "http://img.recipepuppy.com/674683.jpg"
        },
        {
            "title": "Pepperoni Chips",
            "href": "http://www.recipezaar.com/Pepperoni-Chips-107235",
            "ingredients": "black pepper, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/34134.jpg"
        },
        {
            "title": "Pizza Pinwheels",
            "href": "http://allrecipes.com/Recipe/Pizza-Pinwheels/Detail.aspx",
            "ingredients": "mozzarella cheese, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/3399.jpg"
        },
        {
            "title": "Rainbow Pasta Salad I",
            "href": "http://allrecipes.com/Recipe/Rainbow-Pasta-Salad-I/Detail.aspx",
            "ingredients": "broccoli, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/7107.jpg"
        },
        {
            "title": "PHILADELPHIA® Zesty Pepperoni Dip \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/philadelphia-zesty-pepperoni-dip-64834.aspx",
            "ingredients": "cream cheese, green chilies, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/626514.jpg"
        },
        {
            "title": "Cheesy Pepperoni Bites \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/cheesy-pepperoni-bites-64321.aspx",
            "ingredients": "cheddar cheese, sandwich rolls, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/626476.jpg"
        },
        {
            "title": "Cheesy Pizza Dip \r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/cheesy-pizza-dip-57272.aspx",
            "ingredients": "velveeta cheese, tomato, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/627792.jpg"
        },
        {
            "title": "Little Pizzas \r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/little-pizzas-113038.aspx",
            "ingredients": "crackers, cheddar cheese, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/630333.jpg"
        },
        {
            "title": "Terrific Tortilla Wedges \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/terrific-tortilla-wedges-56916.aspx",
            "ingredients": "corn tortillas, pepperoni, pizza sauce",
            "thumbnail": "http://img.recipepuppy.com/650466.jpg"
        },
        {
            "title": "Pizza Dip",
            "href": "http://allrecipes.com/Recipe/Pizza-Dip/Detail.aspx",
            "ingredients": "mozzarella cheese, onions, pepperoni",
            "thumbnail": "http://img.recipepuppy.com/6194.jpg"
        },
        {
            "title": "Chilled Mushroom Salad",
            "href": "http://www.recipezaar.com/Chilled-Mushroom-Salad-132294",
            "ingredients": "mushroom",
            "thumbnail": "http://img.recipepuppy.com/302742.jpg"
        },
        {
            "title": "\nMarinated Mushroom Salad Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/marinated-mushroom-salad-50923",
            "ingredients": "mushroom",
            "thumbnail": "http://img.recipepuppy.com/902017.jpg"
        },
        {
            "title": "A.1.® Mushroom Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
            "href": "http://www.kraftfoods.com/kf/recipes/a1-mushroom-sauce-56598.aspx",
            "ingredients": "steak sauce, mushroom",
            "thumbnail": "http://img.recipepuppy.com/631254.jpg"
        },
        {
            "title": "Cooked Mushrooms",
            "href": "http://www.recipezaar.com/Cooked-Mushrooms-123980",
            "ingredients": "butter, mushroom",
            "thumbnail": "http://img.recipepuppy.com/321714.jpg"
        },
        {
            "title": "Broiled Polenta With Mushrooms and Cheese",
            "href": "http://www.recipezaar.com/Broiled-Polenta-With-Mushrooms-and-Cheese-135392",
            "ingredients": "water, mushroom",
            "thumbnail": "http://img.recipepuppy.com/195749.jpg"
        },
        {
            "title": "Tipsy Fat-Free Microwave -Sauteed Mushrooms",
            "href": "http://www.recipezaar.com/Tipsy-Fat-Free-Microwave-Sauteed-Mushrooms-323900",
            "ingredients": "sherry, mushroom",
            "thumbnail": "http://img.recipepuppy.com/36887.jpg"
        },
        {
            "title": "Easy Two Ingredient Stuffed Mushrooms",
            "href": "http://www.recipezaar.com/Easy-Two-Ingredient-Stuffed-Mushrooms-229799",
            "ingredients": "mushroom, cheese",
            "thumbnail": "http://img.recipepuppy.com/39055.jpg"
        },
        {
            "title": "Stuffed Mushrooms I",
            "href": "http://allrecipes.com/Recipe/Stuffed-Mushrooms-I/Detail.aspx",
            "ingredients": "garlic salt, mushroom",
            "thumbnail": "http://img.recipepuppy.com/20704.jpg"
        },
        {
            "title": "Four Chanterelles",
            "href": "http://www.recipezaar.com/Four-Chanterelles-334507",
            "ingredients": "mushroom, butter",
            "thumbnail": "http://img.recipepuppy.com/571503.jpg"
        },
        {
            "title": "\nCrock Pot Beef Roast Recipe\n\n",
            "href": "http://cookeatshare.com/recipes/crock-pot-beef-roast-7888",
            "ingredients": "french onion soup, mushroom",
            "thumbnail": "http://img.recipepuppy.com/753918.jpg"
        }
    ];


    let sortedCategoryItems: any[] = [];

    for(let i=0; i<ingredients.length; i++){
        let filteredCategoryItems = categoryItems.filter((item: any) => item.ingredients.includes(ingredients[i]));

        sortedCategoryItems = [...sortedCategoryItems, ...filteredCategoryItems];
    }


    return new Promise<any[]>((resolve, reject) => {
        let wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(sortedCategoryItems);
            reject('Wrong')
        }, 1000)
    });
};