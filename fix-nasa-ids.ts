import fs from 'fs';

let dataContent = fs.readFileSync('./server/data.ts', 'utf-8');

const replacements: Record<string, string> = {
  "nasaId: 'Mars'": "nasaId: 'Planet Mars'",
  "nasaId: \"Mars\"": "nasaId: \"Planet Mars\"",
  "nasaId: 'Moon'": "nasaId: 'Earth Moon spacecraft'",
  "nasaId: \"Moon\"": "nasaId: \"Earth Moon spacecraft\"",
  "nasaId: 'Venus'": "nasaId: 'Planet Venus'",
  "nasaId: \"Venus\"": "nasaId: \"Planet Venus\"",
  "nasaId: 'Jupiter'": "nasaId: 'Planet Jupiter'",
  "nasaId: \"Jupiter\"": "nasaId: \"Planet Jupiter\"",
  "nasaId: 'Europa'": "nasaId: 'Europa moon'",
  "nasaId: \"Europa\"": "nasaId: \"Europa moon\"",
  "nasaId: 'Asteroid'": "nasaId: 'Asteroid space'",
  "nasaId: \"Asteroid\"": "nasaId: \"Asteroid space\"",
  "nasaId: 'Saturn'": "nasaId: 'Planet Saturn'",
  "nasaId: \"Saturn\"": "nasaId: \"Planet Saturn\"",
  "nasaId: 'Mercury'": "nasaId: 'Planet Mercury'",
  "nasaId: \"Mercury\"": "nasaId: \"Planet Mercury\"",
  "nasaId: 'Titan'": "nasaId: 'Titan moon'",
  "nasaId: \"Titan\"": "nasaId: \"Titan moon\"",
  "nasaId: 'Phobos'": "nasaId: 'Phobos moon'",
  "nasaId: \"Phobos\"": "nasaId: \"Phobos moon\"",
  "nasaId: 'Earth'": "nasaId: 'Planet Earth from space'",
  "nasaId: \"Earth\"": "nasaId: \"Planet Earth from space\"",
};

for (const [key, value] of Object.entries(replacements)) {
  // Regex to replace exact matches
  dataContent = dataContent.replace(new RegExp(key, 'g'), value);
}

fs.writeFileSync('./server/data.ts', dataContent);
console.log("Updated nasaId in data.ts");
