#!/usr/bin/env node
// Validates that all words in levels.ts are in the dictionary
// and checks for duplicate theme words.
// Usage: node validate-levels.js

const fs = require("fs");
const path = require("path");

const wordlist = new Set(
  fs.readFileSync(path.join(__dirname, "src", "wordlist.txt"), "utf-8")
    .split("\n").map(w => w.trim()).filter(w => w.length > 0)
);

const src = fs.readFileSync(path.join(__dirname, "src", "levels.ts"), "utf-8");

// Extract theme words
const themes = [...src.matchAll(/themeWord:\s*"([^"]+)"/g)].map(m => m[1]);
// Extract target words
const targets = [...src.matchAll(/word:\s*"([^"]+)"/g)].map(m => m[1]);

console.log(`Total levels: ${themes.length}`);
console.log(`Total target words: ${targets.length}`);

// Check for duplicate themes
const themeCounts = {};
themes.forEach(t => { themeCounts[t] = (themeCounts[t] || 0) + 1; });
const dupThemes = Object.entries(themeCounts).filter(([,c]) => c > 1);
if (dupThemes.length) {
  console.log("\nDUPLICATE THEMES:");
  dupThemes.forEach(([t, c]) => console.log(`  ${t}: ${c} times`));
} else {
  console.log("\nNo duplicate themes.");
}

// Check all words are in dictionary
let missing = 0;
themes.forEach((t, i) => {
  if (!wordlist.has(t)) {
    console.log(`MISSING THEME: "${t}" (level ${i + 1})`);
    missing++;
  }
});
targets.forEach((w, i) => {
  if (!wordlist.has(w)) {
    console.log(`MISSING TARGET: "${w}" (index ${i})`);
    missing++;
  }
});

// Check target word lengths
const levelBlocks = [...src.matchAll(/id:\s*(\d+),[\s\S]*?themeWord:\s*"([^"]+)"[\s\S]*?words:\s*\[([\s\S]*?)\],?\s*\n\s*\}/g)];
// Simpler: just check all target words by position
for (let i = 0; i < targets.length; i++) {
  const expectedLen = [4, 5, 6][i % 3];
  if (targets[i].length !== expectedLen) {
    console.log(`WRONG LENGTH: "${targets[i]}" is ${targets[i].length} chars, expected ${expectedLen} (target index ${i}, level ${Math.floor(i/3) + 1})`);
    missing++;
  }
}

// Check for duplicate target words
const targetCounts = {};
targets.forEach(t => { targetCounts[t] = (targetCounts[t] || 0) + 1; });
const dupTargets = Object.entries(targetCounts).filter(([,c]) => c > 1);
if (dupTargets.length) {
  console.log(`\n${dupTargets.length} target words used more than once (overlap is OK but noted):`);
  dupTargets.forEach(([t, c]) => console.log(`  ${t}: ${c} times`));
}

if (missing === 0) {
  console.log("\nAll words validated successfully!");
} else {
  console.log(`\n${missing} issue(s) found.`);
}
