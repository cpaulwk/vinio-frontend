interface AutocompleteData {
  name: string;
  category: string;
}

function convertToSentenceCase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export async function fetchAutocompleteData() {
  const response = await fetch("http://localhost:3001/autocomplete/");
  const data = await response.json();

  const appellationData = data.allData
    .filter((products: AutocompleteData) => products.category === "appellation")
    .map((appellation: AutocompleteData) => convertToSentenceCase(appellation.name));

  const cheeseData = data.allData
    .filter((products: AutocompleteData) => products.category === "cheese")
    .map((cheese: AutocompleteData) => convertToSentenceCase(cheese.name));

  const meatData = data.allData
    .filter((products: AutocompleteData) => products.category === "meat")
    .map((meat: AutocompleteData) => convertToSentenceCase(meat.name));

  const grapeVarietyData = data.allData
    .filter((products: AutocompleteData) => products.category === "grape_variety")
    .map((grapeVariety: AutocompleteData) => convertToSentenceCase(grapeVariety.name));

  const result = {
    appellation: appellationData,
    cheese: cheeseData,
    meat: meatData,
    grapeVariety: grapeVarietyData,
  };

  return result;
}
