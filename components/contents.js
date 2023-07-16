
const crust = [
    "1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)<br>",
    "5 Tablespoons (70g) <strong>unsalted butter</strong>, melted<br>",
    "1/4 cup (50g) <strong>granulated sugar</strong><br>"
];

const cheesecake = [
    "four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>, softened to room temperature<br>",
    "1 cup (200g) <strong>granulated sugar</strong><br>",
    "1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature<br>",
    "1 teaspoon <strong>pure vanilla extract</strong><br>",
    "2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)<br>",
    "3 large <strong>eggs</strong>, at room temperature<br>",
    "topping suggestions: <i><strong>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</strong></i> (recipe in notes) <br>"
];

const instructions = [
    "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).",
    "<strong>Make the crust:</strong> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.",
    "<strong>Make the filling:</strong> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.",
    "<strong>Prepare the simple water bath (see note)</strong> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)",
    "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.",
    "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.",
    "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days."
];

const cookTimeTable = [
    {
        iName:"dining.svg",
        t1:"Yields",
        t2:"12 servings"
    },
    {
        iName:"schedule.svg",
        t1:"Prep TIme",
        t2:"45 minutes"
    },
    {
        iName:"schedule.svg",
        t1:"Cook Time",
        t2:"1 hour"
    },
    {
        iName:"schedule.svg",
        t1:"Total Time",
        t2:"7,75 hours"
    }
    // return iName, t1 , t2;
];

let createInstruction = () =>{
    let a = document.getElementById("instruct")
    // console.log(a)
    // let innerDiv = document.createElement('div')
    // innerDiv.className="instructionDiv";
    let list  = document.createElement("ol")
    for (let index = 0; index < instructions.length; index++) {
        let li = document.createElement("li")
        li.className = "instructions-list";
        li.innerHTML = instructions[index]
        list.appendChild(li)
    }
    // innerDiv.appendChild(list);
    // a.appendChild(innerDiv);
    a.appendChild(list);
    // console.log(a)
}

createInstruction();

const crackId = "cracker";
const cheeid = "cheesecake";

let checkboxDiv = (did , array) => {
    // console.log(did)
    let b = document.getElementById(did)
    let innerDiv = document.createElement('div')
    innerDiv.className="ingredientsDiv";
    for (let index = 0; index < array.length; index++) {
        
        let chbox = document.createElement("input");
        // console.log(lid.concat(`${index + 1}`));
        chbox.id = did.concat(`${index + 1}`);
        chbox.type = "checkbox";
        chbox.name = `checkbox${index + 1}`;
        innerDiv.appendChild(chbox);
        
        let label = document.createElement("label");
        label.className = "ingredient-crack-cheese";
        label.innerHTML = array[index];
        label.htmlFor = did.concat(`${index + 1}`);
        innerDiv.appendChild(label);
    }
    b.appendChild(innerDiv)
    // console.log(b)
}

checkboxDiv( crackId, crust );
checkboxDiv( cheeid, cheesecake);


let cookingTime = (TimeDisplay) =>{
    // console.log(iName[index].t2);
    let c = document.getElementById("timetable");

    for (let index = 0; index < TimeDisplay.length; index++) {
        
        let mainDiv = document.createElement("div")
        mainDiv.className = "mainDiv";
    
            let image = document.createElement("img");
            image.className = `svgImages${index+1}`;
            image.src = `./images/svg/${TimeDisplay[index].iName}`;
        
            mainDiv.appendChild(image);
        
                let innerDiv1 = document.createElement("div")
                innerDiv1.className = "innerDiv";
            
                    let p1 = document.createElement("p");
                    p1.className = "txtHead";
                    // p1.className = `txtHead${index+1}`;
                    p1.innerHTML = TimeDisplay[index].t1;
                    innerDiv1.appendChild(p1);
                
                    let p2 = document.createElement("p");
                    p2.className = "txtDesc";
                    // p2.className = `txtDesc${index+1}`;
                    p2.innerHTML = TimeDisplay[index].t2;
                    if (TimeDisplay[index].t2 === "12 servings") {
                        p2.style.color = "orange";
                    }

                innerDiv1.appendChild(p2);
        
            mainDiv.appendChild(innerDiv1);
    
        c.appendChild(mainDiv);
    }
    
}

cookingTime(cookTimeTable);