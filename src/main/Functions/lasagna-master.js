export function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  }
  if (!time) {
    return "You forgot to set the timer.";
  }
  return "Not done, polease wait.";
}
console.log(cookingStatus(12));
console.log(cookingStatus());

export function preparationTime(layers, time) {
  if (!time) {
    return layers.length * 2;
  }
  return layers.length * time;
}
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
console.log(preparationTime(layers, 3));
console.log(preparationTime(layers));

export function quantities(layers) {
  let noodles = layers.filter((n) => n === "noodles").length * 50;
  let sauce = layers.filter((s) => s === "sauce").length * 0.2;
  return { noodles, sauce };
}
console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
);

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

addSecretIngredient(friendsList, myList);
console.log(myList);

export function scaleRecipe(recipe, portions) {
  const scaled = { ...recipe };

  const factor = portions / 2;

  for (let ingredient in scaled) {
    scaled[ingredient] *= factor;
  }

  return scaled;
}
