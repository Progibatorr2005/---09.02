function filterAnagrams(word: string, words: string[]): string[] {
    const sortLetters = (str: string): string => str.split('').sort().join('');
    const sortedWord = sortLetters(word);
  
    return words.filter((candidate) => sortLetters(candidate) === sortedWord);
  }
  
  console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); 
  // ['aabb', 'bbaa']
  
  console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); 
  // ['carer', 'racer']
  
  console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer'])); 
  // []
  