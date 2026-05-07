import fs from 'fs';
import path from 'path';
import https from 'https';
import { missionsData as missions } from './server/data';

const getWikiImage = (title: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'en.wikipedia.org',
      path: '/w/api.php?action=query&titles=' + encodeURIComponent(title) + '&prop=pageimages&format=json&pithumbsize=1200',
      headers: { 'User-Agent': 'CosmosArchive/1.0 (test)' }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
};

async function run() {
  const file = fs.readFileSync('./server/data.ts', 'utf8');
  let updatedFile = file;

  for (const mission of missions) {
    let titlesToTry = [mission.name, mission.name.replace(' Space Station', ''), mission.name + ' (spacecraft)', mission.name + ' (space mission)'];
    
    // specialized titles
    if (mission.name === 'Shukrayaan-1') titlesToTry = ['Venus Orbiter Mission', 'Indian_Space_Research_Organisation'];
    if (mission.name === 'LUPEX (Chandrayaan-4)') titlesToTry = ['Lunar Polar Exploration Mission'];
    if (mission.name === 'Artemis III') titlesToTry = ['Artemis 3'];
    if (mission.name === 'Gaganyaan 1') titlesToTry = ['Gaganyaan-1', 'Gaganyaan'];

    let imgUrl = null;
    for (const title of titlesToTry) {
      imgUrl = await getWikiImage(title);
      if (imgUrl) break;
    }
    
    if (imgUrl) {
      console.log('Found image for', mission.name, ':', imgUrl);
      const regex = new RegExp(`slug:\\s*'${mission.slug}'[\\s\\S]*?coverImage:\\s*['"][^'"]*['"]`);
      const updatedMatch = updatedFile.match(regex);
      if (updatedMatch) {
         const newText = updatedMatch[0].replace(/coverImage:\s*['"][^'"]*['"]/, `coverImage: '${imgUrl}'`);
         updatedFile = updatedFile.replace(updatedMatch[0], newText);
      }
    } else {
      console.log('No image found for', mission.name);
    }
    await new Promise(r => setTimeout(r, 100)); // Sleep to prevent rate limit
  }

  fs.writeFileSync('./server/data.ts', updatedFile);
  console.log('Done!');
}

run();
