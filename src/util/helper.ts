export function createRandomGenerator(limit: number) {
  if (limit < 1) throw new Error("Limit must be greater than or equal to 1");

  // Initialize an array with numbers from 1 to limit
  let numbers = Array.from({ length: limit }, (_, i) => i + 1);
  let index = 0;

  // Shuffle the array
  function shuffle(array: number[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(numbers);

  return function nextNumber(): number {
    if (index >= limit) {
      shuffle(numbers);
      index = 0;
    }

    const number = numbers[index];
    index++;
    return number;
  };
}

