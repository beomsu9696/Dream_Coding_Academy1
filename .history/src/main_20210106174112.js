// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => console.log(json.items[0]));
}

// main
loadItems()
  .then((items) => {
    // displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
