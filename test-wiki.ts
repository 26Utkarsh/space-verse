import https from 'https';

const options = {
  hostname: 'en.wikipedia.org',
  path: '/w/api.php?action=query&titles=Shukrayaan-1&prop=pageimages&format=json&pithumbsize=1200',
  headers: { 'User-Agent': 'CosmosArchive/1.0 (test)' }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
