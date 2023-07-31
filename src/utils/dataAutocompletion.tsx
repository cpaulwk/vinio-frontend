interface AutocompleteData {
  name: string;
  category: string;
}

function convertToSentenceCase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export async function fetchAutocompleteData() {
  const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/autocomplete/`);
  const data = await response.json();

  const filterAndMapData = (category: string) => {
    return data.allData
      .filter((product: AutocompleteData) => product.category === category)
      .map((product: AutocompleteData) => convertToSentenceCase(product.name));
  };

  const appellationData = filterAndMapData("appellation");
  const cheeseData = filterAndMapData("cheese");
  const meatData = filterAndMapData("meat");
  const grapeVarietyData = filterAndMapData("grape_variety");

  const result = {
    appellation: appellationData,
    cheese: cheeseData,
    meat: meatData,
    grapeVariety: grapeVarietyData,
  };

  return result;
}
