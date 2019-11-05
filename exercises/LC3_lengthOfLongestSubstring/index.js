// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(word) {
  const map = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < word.length; i++) {
    const endChar = word[i];

    if (map[endChar] >= start) {
      start = map[endChar] + 1;
    }

    map[endChar] = i;
    max = Math.max(max, i - start + 1);
    //test
  }
  return max;
}

module.exports = lengthOfLongestSubstring;
