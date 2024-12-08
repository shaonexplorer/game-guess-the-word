export default function setWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}
