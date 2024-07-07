export default async function getStarWarsCharacters() {
  try {
    const response = await fetch('https://swapi.dev/api/people/', {
      method: 'GET',
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `An error occurred while getting the Star Wars characters: ${error.message}`
      );
    } else {
      throw new Error(
        'An unknown error occurred while getting the Star Wars characters'
      );
    }
  }
}
