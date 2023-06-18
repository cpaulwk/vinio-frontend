interface AutocompleteData {
  name: string;
  category: string;
}

// function convertToOptions(options) {
//   return options.map((option) => {
//     return {
//       value: option.name,
//       label: option.name.charAt(0).toUpperCase() + option.name.slice(1),
//     };
//   });
// }

function convertToSentenceCase(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export async function fetchAutocompleteData() {
  const response = await fetch("http://localhost:3001/autocomplete/");
  const data = await response.json();

  // const cheeseData = data.allData.filter(
  //   (obj: AutocompleteData) => obj.category === "cheese"
  // );
  // const meatData = data.allData.filter(
  //   (obj: AutocompleteData) => obj.category === "meat"
  // );
  // const grapeVarietyData = data.allData.filter(
  //   (obj: AutocompleteData) => obj.category === "grape_variety"
  // );

  // const cheeseAutoCompletion = convertToOptions(cheeseData);
  // const meatAutoCompletion = convertToOptions(meatData);
  // const grapeVarietyAutoCompletion = convertToOptions(grapeVarietyData);

  // const cheeseAutoCompletion = cheeseData;
  // const meatAutoCompletion = convertToOptions(meatData);
  // const grapeVarietyAutoCompletion = convertToOptions(grapeVarietyData);

  // const result = {
  //   cheese: cheeseAutoCompletion,
  //   meat: meatAutoCompletion,
  //   grapeVariety: grapeVarietyAutoCompletion,
  // };

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
