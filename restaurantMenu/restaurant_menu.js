const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = ''; 
mainCourseMenu.forEach((item, index) =>{
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;    
});
document.getElementById('maincourseMenuItem').innerHTML = mainCourseItem;

let dessertItem = ''; 
for (let i = 0; i < dessertMenu.length; i++){
    dessertItem += `<p>item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;