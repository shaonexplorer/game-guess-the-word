export default async function getRandomWords(word) {
  try {
    let req = await fetch(
      ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (req.ok) {
      let data = await req.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
