export const agenciesData = [
  { slug: 'nasa', name: 'NASA', country: 'United States', founded: 1958, logo: 'https://ui-avatars.com/api/?name=NASA&background=0b3d91&color=fff&font-size=0.33', description: 'The National Aeronautics and Space Administration (NASA) is an independent agency of the US federal government responsible for the civil space program, aeronautics research, and space research. Since its establishment, NASA has led most US space exploration efforts, including the Apollo Moon landing missions, the Skylab space station, and the Space Shuttle.', missionCount: 5 },
  { slug: 'isro', name: 'ISRO', country: 'India', founded: 1969, logo: 'https://ui-avatars.com/api/?name=ISRO&background=ff9933&color=fff&font-size=0.33', description: 'The Indian Space Research Organisation (ISRO) is the national space agency of India. Known for its cost-effective and reliable space programs, ISRO has achieved significant milestones, including discovering water on the Moon with Chandrayaan-1 and successfully placing the Mangalyaan orbiter around Mars on its very first attempt.', missionCount: 3 },
  { slug: 'esa', name: 'ESA', country: 'Europe', founded: 1975, logo: 'https://ui-avatars.com/api/?name=ESA&background=003399&color=fff&font-size=0.33', description: 'The European Space Agency (ESA) is an intergovernmental organisation of 22 member states dedicated to space exploration. ESA\'s space flight programme includes human spaceflight, the launch of exploration missions to other planets and the Moon, Earth observation, science and telecommunication maintaining a major spaceport in French Guiana.', missionCount: 3 },
  { slug: 'cnsa', name: 'CNSA', country: 'China', founded: 1993, logo: 'https://ui-avatars.com/api/?name=CNSA&background=de2910&color=fff&font-size=0.33', description: 'The China National Space Administration (CNSA) is the national space agency of China, directing the national space program and planning. Among its major achievements are the Chang\'e lunar exploration program, including sample returns, and the Tianwen planetary exploration program, which successfully landed a rover on Mars.', missionCount: 2 },
  { slug: 'jaxa', name: 'JAXA', country: 'Japan', founded: 2003, logo: 'https://ui-avatars.com/api/?name=JAXA&background=000&color=fff&font-size=0.33', description: 'The Japan Aerospace Exploration Agency (JAXA) is the Japanese national aerospace and space agency. Through JAXA, Japan has become a significant contributor to international space exploration, famous for the Hayabusa asteroid sample-return missions and cutting-edge space astronomy observatories.', missionCount: 2 },
  { slug: 'roscosmos', name: 'Roscosmos', country: 'Russia', founded: 1992, logo: 'https://ui-avatars.com/api/?name=ROSC&background=0039A6&color=fff&font-size=0.33', description: 'The State Space Corporation Roscosmos is the hub for space activities in Russia, carrying forward the legacy of the Soviet space program. It manages all space flights, cosmonautics programs, and aerospace research for the Russian Federation, being a crucial partner in the International Space Station.', missionCount: 2 }
];

export const missionsData = [
  {
    slug: 'curiosity-rover',
    name: 'Curiosity Rover',
    agency: 'NASA',
    type: 'rover',
    status: 'active',
    targetBody: 'Mars',
    launchDate: new Date('2011-11-26'),
    endDate: null,
    objective: 'To investigate the Martian climate and geology, assess whether the selected field site inside Gale Crater has ever offered environmental conditions favorable for microbial life, including investigation of the role of water, and planetary habitability studies in preparation for human exploration.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Discovered evidence of ancient persistent liquid water.' },
      { date: new Date('2021-01-01'), description: 'Detected background levels and spikes of methane.' },
      { date: new Date('2022-01-01'), description: 'Found organic carbon in Martian rocks.' }
    ],
    instruments: [
      { name: 'Mastcam', purpose: 'Multispectral and true-color imaging' },
      { name: 'ChemCam', purpose: 'Chemistry and micro-imaging via laser' },
      { name: 'SAM', purpose: 'Sample analysis at Mars for organics' }
    ],
    description: 'The Curiosity rover, launched in 2011, is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA\'s Mars Science Laboratory (MSL) mission. Curiosity\'s primary physical goals include investigating the Martian climate and geology, assessing whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life, including investigating the role of water, and planetary habitability studies in preparation for human exploration. Curiosity carries a variety of advanced scientific instruments, including a stereoscopic mast camera, X-ray spectrometer, chemistry and micro-imaging laser, and a suite of meteorological and environmental sensors. Over its mission, the rover has traveled several kilometers, climbed the foothills of Mount Sharp, and sent back thousands of high-resolution images and significant data on Mars\' past and present conditions.',
    nasaId: 'Curiosity',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kom%C3%A9ta_C-2020_F3_%28NEOWISE%29.jpg/1280px-Kom%C3%A9ta_C-2020_F3_%28NEOWISE%29.jpg',
    timeline: [
      { date: new Date('2011-11-26'), event: 'Launched from Cape Canaveral' },
      { date: new Date('2012-08-06'), event: 'Successfully landed in Gale Crater' },
      { date: new Date('2014-06-24'), event: 'Completed milestone of one Martian year of primary mission' },
      { date: new Date('2021-08-05'), event: 'Celebrated 9 years on Mars' }
    ],
    budget: '$2.5 billion'
  },
  {
    slug: 'perseverance-rover',
    name: 'Perseverance Rover',
    agency: 'NASA',
    type: 'rover',
    status: 'active',
    targetBody: 'Mars',
    launchDate: new Date('2020-07-30'),
    endDate: null,
    objective: 'To seek signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Successfully deployed the Ingenuity Mars Helicopter.' },
      { date: new Date('2021-01-01'), description: 'Extracted oxygen from the Martian atmosphere using MOXIE.' },
      { date: new Date('2022-01-01'), description: 'Collected diverse rock samples for future return.' }
    ],
    instruments: [
      { name: 'Mastcam-Z', purpose: 'Advanced zoomable camera' },
      { name: 'SuperCam', purpose: 'Laser-driven compositional analysis' },
      { name: 'SHERLOC', purpose: 'UV spectrometer for organics' }
    ],
    description: 'The Perseverance rover, part of NASA\'s Mars 2020 mission, landed in Jezero Crater in February 2021. Designed to seek signs of ancient microbial life, it is exploring the past habitability of Mars. The rover is equipped with seven scientific instruments to study the Martian surface at unprecedented scales. Notably, it also carried the Ingenuity helicopter, demonstrating the first powered flight on another planet. A key part of its mission is to cache rock and soil samples in specially designed tubes, which are intended to be retrieved and brought back to Earth by a future joint NASA-ESA mission. Perseverance has also characterized the planet\'s geology and climate, paving the way for future human exploration.',
    nasaId: 'Perseverance',
    coverImage: 'https://images.unsplash.com/photo-1614729939124-032f0b5610ce?q=80&w=1200',
    timeline: [
      { date: new Date('2020-07-30'), event: 'Launched from Cape Canaveral' },
      { date: new Date('2021-02-18'), event: 'Landed in Jezero Crater' },
      { date: new Date('2021-04-19'), event: 'Ingenuity helicopter completes first flight' },
      { date: new Date('2021-09-01'), event: 'First successful core sample collected' }
    ],
    budget: '$2.7 billion'
  },
  {
    slug: 'voyager-1',
    name: 'Voyager 1',
    agency: 'NASA',
    type: 'flyby',
    status: 'active',
    targetBody: 'Jupiter',
    launchDate: new Date('1977-09-05'),
    endDate: null,
    objective: 'To fly by the giant planets Jupiter and Saturn, studying their atmosphere, magnetosphere, and moons. Later extended to explore the interstellar medium.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First spacecraft to cross the heliopause and enter interstellar space.' },
      { date: new Date('2021-01-01'), description: 'Discovered active volcanoes on Jupiter\'s moon Io.' },
      { date: new Date('2022-01-01'), description: 'Took the famous "Pale Blue Dot" photograph of Earth.' }
    ],
    instruments: [
      { name: 'ISS', purpose: 'Imaging science subsystem' },
      { name: 'MAG', purpose: 'Magnetometer' },
      { name: 'UVS', purpose: 'Ultraviolet spectrometer' }
    ],
    description: 'Voyager 1 is a space probe launched by NASA on September 5, 1977, as part of the Voyager program to study the outer Solar System. Having operated for over 45 years, the spacecraft still communicates with the Deep Space Network to receive routine commands and to transmit data to Earth. In August 2012, Voyager 1 crossed the heliopause and entered interstellar space, making it the first human-made object to do so. It contains advanced instruments originally designed to study Jupiter, Saturn, and their moons, and now sends back critical data about the composition and properties of interstellar space, including valuable measurements of plasma and cosmic rays.',
    nasaId: 'Voyager 1',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Voyager_spacecraft_model.png/1280px-Voyager_spacecraft_model.png',
    timeline: [
      { date: new Date('1977-09-05'), event: 'Launched from Earth' },
      { date: new Date('1979-03-05'), event: 'Closest approach to Jupiter' },
      { date: new Date('1980-11-12'), event: 'Closest approach to Saturn' },
      { date: new Date('2012-08-25'), event: 'Entered interstellar space' }
    ],
    budget: '$865 million'
  },
  {
    slug: 'apollo-11',
    name: 'Apollo 11',
    agency: 'NASA',
    type: 'crewed',
    status: 'completed',
    targetBody: 'Moon',
    launchDate: new Date('1969-07-16'),
    endDate: new Date('1969-07-24'),
    objective: 'To perform a crewed lunar landing and return safely to Earth, fulfilling President John F. Kennedy\'s national goal.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First humans to walk on the lunar surface.' },
      { date: new Date('2021-01-01'), description: 'Returned 21.5 kg of lunar material back to Earth.' },
      { date: new Date('2022-01-01'), description: 'Demonstrated American technological superiority during the space race.' }
    ],
    instruments: [
      { name: 'LM', purpose: 'Lunar Module for landing' },
      { name: 'EASEP', purpose: 'Early Apollo Scientific Experiments Package' },
      { name: 'Cameras', purpose: 'Hasselblad cameras for high-res photography' }
    ],
    description: 'Apollo 11 was the American spaceflight that first landed humans on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969. Armstrong became the first person to step onto the lunar surface six hours and 39 minutes later, famously describing the event as "one small step for [a] man, one giant leap for mankind." The astronauts spent over two hours together outside the spacecraft and collected 47.5 pounds (21.5 kg) of lunar material for return to Earth. The mission effectively ended the Space Race and fulfilled a national goal proposed in 1961 by President John F. Kennedy, becoming a defining moment in modern human history.',
    nasaId: 'Apollo 11',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/A_Man_on_the_Moon%2C_AS11-40-5903_%28cropped%29.jpg/1280px-A_Man_on_the_Moon%2C_AS11-40-5903_%28cropped%29.jpg',
    timeline: [
      { date: new Date('1969-07-16'), event: 'Launch of Saturn V' },
      { date: new Date('1969-07-20'), event: 'Lunar landing in Sea of Tranquility' },
      { date: new Date('1969-07-21'), event: 'Lunar liftoff' },
      { date: new Date('1969-07-24'), event: 'Splashdown in Pacific Ocean' }
    ],
    budget: '$355 million'
  },
  {
    slug: 'jwst',
    name: 'James Webb Space Telescope',
    agency: 'NASA',
    type: 'telescope',
    status: 'active',
    targetBody: 'Sun-Earth L2',
    launchDate: new Date('2021-12-25'),
    endDate: null,
    objective: 'To study every phase in the history of our Universe, ranging from the first luminous glows after the Big Bang, to the formation of solar systems capable of supporting life.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Captured the deepest and sharpest infrared image of the distant universe.' },
      { date: new Date('2021-01-01'), description: 'Detected carbon dioxide in the atmosphere of an exoplanet.' },
      { date: new Date('2022-01-01'), description: 'Revealed previously hidden star formation in the Pillars of Creation.' }
    ],
    instruments: [
      { name: 'NIRCam', purpose: 'Near-Infrared Camera' },
      { name: 'NIRSpec', purpose: 'Near-Infrared Spectrograph' },
      { name: 'MIRI', purpose: 'Mid-Infrared Instrument' }
    ],
    description: 'The James Webb Space Telescope (JWST) is an infrared space observatory launched on December 25, 2021. Developed by NASA with the European Space Agency and the Canadian Space Agency, it is the largest and most powerful space telescope ever built. Designed primarily to conduct infrared astronomy, its high-resolution and high-sensitivity instruments allow it to view objects too old, distant, or faint for the Hubble Space Telescope. The JWST operates in a halo orbit around the Sun-Earth L2 Lagrange point. Since beginning its science operations, it has captured breathtaking images of early galaxies, stellar nurseries, exoplanet atmospheres, and dramatic views of our own solar system parameters, fundamentally revolutionizing our understanding of the universe.',
    nasaId: 'Webb',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/JWST_spacecraft_model_3.png',
    timeline: [
      { date: new Date('2021-12-25'), event: 'Launched on Ariane 5 rocket' },
      { date: new Date('2022-01-24'), event: 'Arrived at L2 orbit' },
      { date: new Date('2022-07-11'), event: 'First deep field image released' },
      { date: new Date('2023-01-11'), event: 'Confirmed first exoplanet discovery' }
    ],
    budget: '$10 billion'
  },
  {
    slug: 'chandrayaan-3',
    name: 'Chandrayaan-3',
    agency: 'ISRO',
    type: 'lander',
    status: 'completed',
    targetBody: 'Moon',
    launchDate: new Date('2023-07-14'),
    endDate: new Date('2023-09-02'),
    objective: 'To demonstrate end-to-end capability in safe landing and roving on the lunar surface near the south pole.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First successful soft landing near the lunar south pole.' },
      { date: new Date('2021-01-01'), description: 'Confirmed the presence of Sulfur, Oxygen, and other elements on the surface.' },
      { date: new Date('2022-01-01'), description: 'Demonstrated ISRO\'s low-cost deep space mission capabilities.' }
    ],
    instruments: [
      { name: 'RAMBHA-LP', purpose: 'Measure the near surface plasma density' },
      { name: 'ChaSTE', purpose: 'Measure thermal properties of lunar surface' },
      { name: 'APXS', purpose: 'Alpha Particle X-ray Spectrometer on Pragyan rover' }
    ],
    description: 'Chandrayaan-3 is the third Indian lunar exploration mission under the Indian Space Research Organisation\'s (ISRO) Chandrayaan programme. It consists of a lander named Vikram and a rover named Pragyan, similar to its predecessor, Chandrayaan-2. The mission was launched on 14 July 2023 and successfully achieved a soft landing near the lunar south pole on 23 August 2023, making India the fourth country to soft-land on the Moon and the first to do so near the lunar south pole region. During its active life, the mission performed numerous in-situ experiments on the lunar surface, studying its thermal properties, elemental composition, and the presence of elements like sulfur, thereby significantly boosting global understanding of the moon\'s south polar region.',
    nasaId: 'Chandrayaan',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Chandrayaan-3_%E2%80%93_Image_of_Vikram_lander_on_lunar_surface_taken_by_Pragyan_rover_navcam_at_1104_IST%2C_30_August_2023_from_15_meters_away_%28with_text%29.webp',
    timeline: [
      { date: new Date('2023-07-14'), event: 'Launched from Sriharikota' },
      { date: new Date('2023-08-23'), event: 'Successful soft landing on Moon' },
      { date: new Date('2023-08-24'), event: 'Pragyan rover rolls out' },
      { date: new Date('2023-09-02'), event: 'Lander and rover put into sleep mode' }
    ],
    budget: '$75 million'
  },
  {
    slug: 'mangalyaan',
    name: 'Mangalyaan',
    agency: 'ISRO',
    type: 'orbiter',
    status: 'completed',
    targetBody: 'Mars',
    launchDate: new Date('2013-11-05'),
    endDate: new Date('2022-04-01'),
    objective: 'To develop the technologies required for designing, planning, management and operations of an interplanetary mission.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First Asian nation to reach Martian orbit.' },
      { date: new Date('2021-01-01'), description: 'First nation to reach Mars on its maiden attempt.' },
      { date: new Date('2022-01-01'), description: 'Produced complete atlas of Mars in true color.' }
    ],
    instruments: [
      { name: 'MCC', purpose: 'Mars Colour Camera' },
      { name: 'MENCA', purpose: 'Mars Exospheric Neutral Composition Analyser' },
      { name: 'TIS', purpose: 'Thermal Infrared Imaging Spectrometer' }
    ],
    description: 'The Mars Orbiter Mission (MOM), unofficially known as Mangalyaan, was a space probe orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by the Indian Space Research Organisation (ISRO). This was India\'s first interplanetary mission, making ISRO the fourth space agency to achieve Mars orbit, the first Asian nation to reach Martian orbit, and the first nation in the world to do so on its maiden attempt. Costing significantly less than other equivalent Mars missions, MOM carried five scientific instruments designed to study Martian surface morphology, mineralogy, and the Martian atmosphere, including looking for methane, an indicator of past life.',
    nasaId: 'Mars Orbiter Mission',
    coverImage: 'https://images.unsplash.com/photo-1632395627727-3b9aaec561be?q=80&w=1200',
    timeline: [
      { date: new Date('2013-11-05'), event: 'Launched from Sriharikota' },
      { date: new Date('2014-09-24'), event: 'Entered Mars orbit successfully' },
      { date: new Date('2015-09-24'), event: 'Completed one year in orbit' },
      { date: new Date('2022-04-01'), event: 'Mission quietly ends due to loss of communication' }
    ],
    budget: '$73 million'
  },
  {
    slug: 'aditya-l1',
    name: 'Aditya-L1',
    agency: 'ISRO',
    type: 'orbiter',
    status: 'active',
    targetBody: 'Sun-Earth L1',
    launchDate: new Date('2023-09-02'),
    endDate: null,
    objective: 'To study the solar atmosphere, solar magnetic storms and their impact on the environment around Earth.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First dedicated Indian mission to study the Sun.' },
      { date: new Date('2021-01-01'), description: 'Successfully placed in halo orbit around Lagrange Point 1.' },
      { date: new Date('2022-01-01'), description: 'Commenced scientific observations of solar flares.' }
    ],
    instruments: [
      { name: 'VELC', purpose: 'Visible Emission Line Coronagraph' },
      { name: 'SUIT', purpose: 'Solar Ultraviolet Imaging Telescope' },
      { name: 'ASPEX', purpose: 'Aditya Solar wind Particle Experiment' }
    ],
    description: 'Aditya-L1 is India\'s first dedicated solar observation mission launched by the Indian Space Research Organisation (ISRO). Inserted into a halo orbit around the Sun-Earth Lagrange point 1 (L1), roughly 1.5 million kilometers from Earth, the spacecraft has an uninterrupted, clear view of the Sun. Launched in September 2023, the mission\'s goal is to study the solar atmosphere, specifically focusing on the corona and the chromosphere, and investigate solar magnetic storms and their ultimate impact on the space environment around Earth. It carries seven payloads designed to observe the photosphere, chromosphere, and the outermost layers of the Sun (the corona) using electromagnetic and particle detectors.',
    nasaId: 'Sun flare',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Aditya_L1.png',
    timeline: [
      { date: new Date('2023-09-02'), event: 'Launched via PSLV' },
      { date: new Date('2024-01-06'), event: 'Inserted into target halo orbit at L1' },
      { date: new Date('2024-01-11'), event: 'Deployed magnetometer boom' },
      { date: new Date('2024-02-15'), event: 'Commenced scientific operations' }
    ],
    budget: '$48 million'
  },
  {
    slug: 'rosetta',
    name: 'Rosetta',
    agency: 'ESA',
    type: 'orbiter',
    status: 'completed',
    targetBody: 'Comet 67P',
    launchDate: new Date('2004-03-02'),
    endDate: new Date('2016-09-30'),
    objective: 'To perform a detailed study of comet 67P/Churyumov–Gerasimenko and deploy the Philae lander on its surface.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First spacecraft to orbit a comet nucleus.' },
      { date: new Date('2021-01-01'), description: 'First spacecraft to land a probe (Philae) on a comet.' },
      { date: new Date('2022-01-01'), description: 'Discovered molecular oxygen and organic compounds in the comet\'s coma.' }
    ],
    instruments: [
      { name: 'OSIRIS', purpose: 'Optical, Spectroscopic, and Infrared Remote Imaging System' },
      { name: 'ROSINA', purpose: 'Rosetta Orbiter Spectrometer for Ion and Neutral Analysis' },
      { name: 'VIRTIS', purpose: 'Visible and Infrared Thermal Imaging Spectrometer' }
    ],
    description: 'Rosetta was a space probe built by the European Space Agency launched on 2 March 2004. Along with its lander module Philae, it performed a detailed study of comet 67P/Churyumov-Gerasimenko. Arriving at the comet in 2014, Rosetta became the first spacecraft to orbit a comet nucleus and subsequently deployed Philae in November 2014, which performed the first successful landing on a comet. The mission provided scientists with unprecedented data regarding the composition of comets, helping to conclude studies on the solar system\'s origins and whether comets brought water and organic molecules to early Earth.',
    nasaId: 'Rosetta comet',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/7/73/RashidNorth.jpg',
    timeline: [
      { date: new Date('2004-03-02'), event: 'Launched from French Guiana' },
      { date: new Date('2014-08-06'), event: 'Arrived at Comet 67P' },
      { date: new Date('2014-11-12'), event: 'Philae lander touches down' },
      { date: new Date('2016-09-30'), event: 'Rosetta impacts the comet, ending mission' }
    ],
    budget: '$1.7 billion'
  },
  {
    slug: 'mars-express',
    name: 'Mars Express',
    agency: 'ESA',
    type: 'orbiter',
    status: 'active',
    targetBody: 'Mars',
    launchDate: new Date('2003-06-02'),
    endDate: null,
    objective: 'To study the interior, subsurface, surface and atmosphere, and environment of the planet Mars.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Discovered water ice and carbon dioxide ice at the Martian poles.' },
      { date: new Date('2021-01-01'), description: 'Mapped the Martian surface in high resolution in 3D.' },
      { date: new Date('2022-01-01'), description: 'Detected possible liquid water lakes under the south polar ice cap.' }
    ],
    instruments: [
      { name: 'HRSC', purpose: 'High Resolution Stereo Camera' },
      { name: 'MARSIS', purpose: 'Sub-surface sounding radar' },
      { name: 'OMEGA', purpose: 'Visible and infrared mineralogical mapping spectrometer' }
    ],
    description: 'Mars Express is a space exploration mission being conducted by the European Space Agency (ESA). Launched in 2003, it was the first planetary mission attempted by the agency. The "Express" portion refers originally to the speed with which the spacecraft was designed and built. Since reaching Mars, the orbiter has provided highly detailed topographical imagery and mapped the minerals on the planet\'s surface, revealing a past where water significantly shaped the Martian landscape. The spacecraft continues its prolonged scientific operations today, conducting remote sensing of the atmosphere and performing sub-surface sounding.',
    nasaId: 'Mars Express',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Mars-express-volcanoes-sm.jpg',
    timeline: [
      { date: new Date('2003-06-02'), event: 'Launched using Soyuz-Fregat' },
      { date: new Date('2003-12-25'), event: 'Entered Mars orbit' },
      { date: new Date('2018-07-25'), event: 'Evidence of subglacial liquid water reported' },
      { date: new Date('2023-06-02'), event: 'Commemorated 20 years of operations' }
    ],
    budget: '$345 million'
  },
  {
    slug: 'gaia',
    name: 'Gaia',
    agency: 'ESA',
    type: 'telescope',
    status: 'active',
    targetBody: 'Sun-Earth L2',
    launchDate: new Date('2013-12-19'),
    endDate: null,
    objective: 'To construct the largest and most precise 3D space catalog ever made, totaling approximately 1 billion astronomical objects.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Produced a catalog of over 1.8 billion stars.' },
      { date: new Date('2021-01-01'), description: 'Revealed the complex history of the Milky Way, including the Gaia-Sausage merger.' },
      { date: new Date('2022-01-01'), description: 'Discovered massive black holes and numerous exoplanets.' }
    ],
    instruments: [
      { name: 'Astrometric Instrument', purpose: 'Position mapping of stars' },
      { name: 'Photometric Instrument', purpose: 'Star spectra, color, and luminosity' },
      { name: 'RVS', purpose: 'Radial-Velocity Spectrometer' }
    ],
    description: 'Gaia is a space observatory of the European Space Agency (ESA), launched in 2013 and expected to operate until 2025. The mission aims to construct the largest and most precise 3D space catalog ever made, totaling approximately 1 billion astronomical objects, mainly stars, but also planets, comets, asteroids and quasars among others. By monitoring each of its target stars about 70 times, it is precisely charting their positions, distances, motions, and changes in brightness over time. Through the precise motions of these bodies, the mission is decoding the formation and subsequent history of the Milky Way galaxy.',
    nasaId: 'Milky Way',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Pergamonmuseum_-_Antikensammlung_-_Pergamonaltar_13_detail.jpg',
    timeline: [
      { date: new Date('2013-12-19'), event: 'Launched using Soyuz-STB' },
      { date: new Date('2014-01-08'), event: 'Reached L2 orbit' },
      { date: new Date('2016-09-14'), event: 'Gaia Data Release 1 published' },
      { date: new Date('2022-06-13'), event: 'Gaia Data Release 3 published' }
    ],
    budget: '$1 billion'
  },
  {
    slug: 'tianwen-1',
    name: 'Tianwen-1',
    agency: 'CNSA',
    type: 'rover',
    status: 'active',
    targetBody: 'Mars',
    launchDate: new Date('2020-07-23'),
    endDate: null,
    objective: 'To orbit, land, and release a rover (Zhurong) on Mars in a single mission to study morphology, geology, surface characteristics, and spatial environment.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First Chinese mission to successfully land on Mars.' },
      { date: new Date('2021-01-01'), description: 'Zhurong rover successfully drove and mapped the Martian surface.' },
      { date: new Date('2022-01-01'), description: 'Returned comprehensive high-resolution imaging of the entire planet.' }
    ],
    instruments: [
      { name: 'MoRIC', purpose: 'High Resolution Imaging Camera (Orbiter)' },
      { name: 'RoPeR', purpose: 'Rover Penetrating Radar' },
      { name: 'MarSCo', purpose: 'Mars Surface Composition Detector' }
    ],
    description: 'Tianwen-1 ("Questions to Heaven") is an interplanetary mission by the China National Space Administration (CNSA) to Mars, which consists of an orbiter, two deployable cameras, a lander, and the Zhurong rover. Launched in July 2020, the spacecraft successfully entered Martian orbit in February 2021 before the lander gently touched down in the Utopia Planitia in May 2021, making China the second nation ever to successfully land and operate a rover on Mars. The Zhurong rover subsequently descended its ramp and began exploring the surface, analyzing soil and rock composition, and searching for indications of water and ice.',
    nasaId: 'Mars rover',
    coverImage: 'https://images.unsplash.com/photo-1614214578964-b0a6fb2706bd?q=80&w=1200',
    timeline: [
      { date: new Date('2020-07-23'), event: 'Launched from Wenchang' },
      { date: new Date('2021-02-10'), event: 'Entered Mars orbit' },
      { date: new Date('2021-05-14'), event: 'Lander touches down in Utopia Planitia' },
      { date: new Date('2021-05-22'), event: 'Zhurong rover drives onto Martian surface' }
    ],
    budget: 'Undisclosed'
  },
  {
    slug: 'change-5',
    name: 'Chang\'e 5',
    agency: 'CNSA',
    type: 'lander',
    status: 'completed',
    targetBody: 'Moon',
    launchDate: new Date('2020-11-23'),
    endDate: new Date('2020-12-16'),
    objective: 'To collect lunar samples from Oceanus Procellarum and return them to Earth, demonstrating complex orbital rendezvous and docking techniques.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Returned 1,731 grams of lunar samples to Earth.' },
      { date: new Date('2021-01-01'), description: 'First sample return mission since the Soviet Luna 24 in 1976.' },
      { date: new Date('2022-01-01'), description: 'Discovered new lunar mineral, Changesite-(Y).' }
    ],
    instruments: [
      { name: 'Pancam', purpose: 'Panoramic Camera' },
      { name: 'LMS', purpose: 'Lunar Mineralogical Spectrometer' },
      { name: 'LRPR', purpose: 'Lunar Regolith Penetrating Radar' }
    ],
    description: 'Chang\'e 5 was the fifth lunar exploration mission of the Chinese Lunar Exploration Program, and China\'s first lunar sample-return mission. Like its predecessors, the spacecraft is named after the Chinese moon goddess. Launched in November 2020, it landed in the Mons Rümker region of Oceanus Procellarum, a previously unexplored area known for its relative young volcanic activity. The spacecraft drilled into the lunar surface, scooped up samples, and successfully launched an ascent vehicle to rendezvous with the orbiter, eventually returning roughly 1.731 kg (3.82 lbs) of pristine lunar rock and soil to Earth.',
    nasaId: 'Moon crater',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Chang-e-5-assembly-CG-1-Cropped.jpg/1280px-Chang-e-5-assembly-CG-1-Cropped.jpg',
    timeline: [
      { date: new Date('2020-11-23'), event: 'Launched via Long March 5' },
      { date: new Date('2020-12-01'), event: 'Landed on the Moon' },
      { date: new Date('2020-12-03'), event: 'Ascender lifted off with samples' },
      { date: new Date('2020-12-16'), event: 'Return capsule landed in Inner Mongolia' }
    ],
    budget: 'Undisclosed'
  },
  {
    slug: 'hayabusa2',
    name: 'Hayabusa2',
    agency: 'JAXA',
    type: 'flyby',
    status: 'active',
    targetBody: 'Asteroid Ryugu',
    launchDate: new Date('2014-12-03'),
    endDate: null,
    objective: 'To return a sample from the near-Earth C-type asteroid Ryugu to discover more about the origin and evolution of the solar system.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Successfully deployed rovers and a lander onto the asteroid surface.' },
      { date: new Date('2021-01-01'), description: 'Created an artificial crater to gather subsurface samples.' },
      { date: new Date('2022-01-01'), description: 'Successfully returned 5.4 grams of pristine asteroid material to Earth.' }
    ],
    instruments: [
      { name: 'ONC', purpose: 'Optical Navigation Camera' },
      { name: 'NIRS3', purpose: 'Near Infrared Spectrometer' },
      { name: 'TIR', purpose: 'Thermal Infrared Camera' }
    ],
    description: 'Hayabusa2 is an asteroid sample-return mission operated by the Japanese space agency JAXA. It follows on from the Hayabusa mission which returned asteroid samples in 2010. Designed to study the near-Earth asteroid Ryugu, Hayabusa2 was launched in 2014 and arrived at Ryugu in June 2018. It surveyed the asteroid for a year and a half, deployed rovers and landers, and created an artificial crater via an impactor to collect sub-surface pristine material. The spacecraft successfully collected samples of the carbonaceous asteroid and brought them back safely to Earth in December 2020, offering scientists unique clues into the origins of water and organic matter.',
    nasaId: 'Asteroid space',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hayabusa2_Ion_thruster.jpg/1280px-Hayabusa2_Ion_thruster.jpg',
    timeline: [
      { date: new Date('2014-12-03'), event: 'Launched' },
      { date: new Date('2018-06-27'), event: 'Arrived at Ryugu' },
      { date: new Date('2019-07-11'), event: 'Second touchdown for subsurface sampling' },
      { date: new Date('2020-12-05'), event: 'Sample capsule recovered in Australia; spacecraft departs for extended mission' }
    ],
    budget: '$260 million'
  },
  {
    slug: 'slim',
    name: 'SLIM',
    agency: 'JAXA',
    type: 'lander',
    status: 'active',
    targetBody: 'Moon',
    launchDate: new Date('2023-09-06'),
    endDate: null,
    objective: 'To demonstrate precise and pinpoint lunar landing capability within 100 meters of the target.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'Achieved pinpoint landing within 55 meters of target.' },
      { date: new Date('2021-01-01'), description: 'Deployed two small rovers successfully.' },
      { date: new Date('2022-01-01'), description: 'Survived multiple lunar nights despite not being designed for them.' }
    ],
    instruments: [
      { name: 'MBC', purpose: 'Multi-Band Camera for compositional analysis' },
      { name: 'Lander Radar', purpose: 'Precision landing sensor' },
      { name: 'LEV-1 & LEV-2', purpose: 'Lunar Excursion Vehicles (rovers)' }
    ],
    description: 'The Smart Lander for Investigating Moon (SLIM) is a lunar lander mission developed by the Japan Aerospace Exploration Agency (JAXA). The mission\'s primary objective was to demonstrate highly accurate lunar landing techniques by landing within just 100 meters of a specific target, contrasting with typical landing zones measuring kilometers across. Launched in September 2023, SLIM achieved its groundbreaking pinpoint landing in January 2024, deploying two small excursion vehicles. Though the lander ended up resting on its nose due to an engine anomaly during descent, it successfully captured and transmitted critical scientific data to Earth.',
    nasaId: 'Moon landing',
    coverImage: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1200',
    timeline: [
      { date: new Date('2023-09-06'), event: 'Launched via H-IIA' },
      { date: new Date('2024-01-19'), event: 'Soft landed on the Moon (first for Japan)' },
      { date: new Date('2024-01-28'), event: 'Re-established communication and power' },
      { date: new Date('2024-03-01'), event: 'Survived the freezing lunar night' }
    ],
    budget: '$120 million'
  },
  {
    slug: 'sputnik-1',
    name: 'Sputnik 1',
    agency: 'Roscosmos',
    type: 'orbiter',
    status: 'completed',
    targetBody: 'Earth',
    launchDate: new Date('1957-10-04'),
    endDate: new Date('1958-01-04'),
    objective: 'To test the method of placing an artificial satellite into Earth orbit, provide information on the density of the atmosphere, and test radio tracking.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First artificial satellite to orbit Earth.' },
      { date: new Date('2021-01-01'), description: 'Triggered the Space Race between the US and the USSR.' },
      { date: new Date('2022-01-01'), description: 'Provided valuable data on upper atmosphere density.' }
    ],
    instruments: [
      { name: 'Radio Transmitters', purpose: '20.005 and 40.002 MHz radio signals' },
      { name: 'Temperature sensors', purpose: 'Internal thermal readings' },
      { name: 'Pressure switches', purpose: 'Monitor for micrometeoroid shell penetration' }
    ],
    description: 'Sputnik 1 was the first artificial Earth satellite. The Soviet Union launched it into an elliptical low Earth orbit on 4 October 1957, orbiting for three weeks before its batteries died and silently orbiting for over two months before falling back into the atmosphere. Its launch triggered the Space Race between the Soviet Union and the United States, ushering in new political, military, technological, and scientific developments. A small 58 cm diameter polished metal sphere with four external radio antennas, Sputnik transmitted simple beep-beep radio codes that could be tracked by amateur radio operators around the globe.',
    nasaId: 'Earth orbit satellite',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8.jpg/1280px-%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8.jpg',
    timeline: [
      { date: new Date('1957-10-04'), event: 'Launched from Tyuratam (Baikonur)' },
      { date: new Date('1957-10-26'), event: 'Transmitter batteries ran out' },
      { date: new Date('1958-01-04'), event: 'Burned up on reentry into Earth atmosphere' },
      { date: new Date('1958-01-05'), event: 'Officially declared completed' }
    ],
    budget: 'Classified'
  },
  {
    slug: 'luna-9',
    name: 'Luna 9',
    agency: 'Roscosmos',
    type: 'lander',
    status: 'completed',
    targetBody: 'Moon',
    launchDate: new Date('1966-01-31'),
    endDate: new Date('1966-02-06'),
    objective: 'To achieve the first survivable landing on the Moon and return photographic data of the lunar surface.',
    achievements: [
      { date: new Date('2020-01-01'), description: 'First spacecraft to achieve a soft landing on another celestial body.' },
      { date: new Date('2021-01-01'), description: 'First to transmit photographic data to Earth from the surface of another body.' },
      { date: new Date('2022-01-01'), description: 'Proved that the lunar surface could support the weight of a lander without it sinking into dust.' }
    ],
    instruments: [
      { name: 'TV Camera', purpose: 'Panorama imaging system' },
      { name: 'Radiation Detector', purpose: 'Measure surface radiation levels' },
      { name: 'Radio Altimeter', purpose: 'For landing approach' }
    ],
    description: 'Luna 9, an uncrewed space mission of the Soviet Union\'s Luna programme, became the first spacecraft to achieve a survivable landing on a celestial body. Launched in 1966, Luna 9 soft-landed in the Ocean of Storms and successfully transmitted photographic data back to Earth, proving that the lunar surface could safely support the weight of a lander without sinking into supposed deep layers of lunar dust. This monumental achievement laid the foundation for future human and robotic exploration missions during the intensive lunar exploration efforts of the 1960s.',
    nasaId: 'Moon surface',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Luna_9_Musee_du_Bourget_P1010505.JPG/1280px-Luna_9_Musee_du_Bourget_P1010505.JPG',
    timeline: [
      { date: new Date('1966-01-31'), event: 'Launched from Baikonur' },
      { date: new Date('1966-02-03'), event: 'Soft landed in Oceanus Procellarum' },
      { date: new Date('1966-02-04'), event: 'Transmitted first panoramic images' },
      { date: new Date('1966-02-06'), event: 'Batteries depleted, contact lost' }
    ],
    budget: 'Classified'
  },
  {
    slug: 'europa-clipper',
    name: 'Europa Clipper',
    agency: 'NASA',
    type: 'orbiter',
    status: 'enroute',
    targetBody: 'Europa',
    launchDate: new Date('2024-10-10'),
    endDate: null,
    objective: 'To study Jupiter\'s moon Europa to investigate its habitability and subsurface ocean.',
    achievements: [
      { date: new Date('2024-10-10'), description: 'Successfully launched via Falcon Heavy.' }
    ],
    instruments: [
      { name: 'EIS', purpose: 'Europa Imaging System' },
      { name: 'REASON', purpose: 'Radar for Europa Assessment' },
      { name: 'E-THEMIS', purpose: 'Europa Thermal Emission Imaging System' }
    ],
    description: 'Europa Clipper is an interplanetary mission developed by NASA, aiming to study the Galilean moon Europa through a series of flybys while in orbit around Jupiter. The mission will investigate the ice shell, subsurface ocean, and potential vents of water vapor on Europa, expanding our understanding of habitability within the solar system.',
    nasaId: 'Europa moon',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Europa_Clipper_spacecraft_model.png/1280px-Europa_Clipper_spacecraft_model.png',
    timeline: [
      { date: new Date('2024-10-10'), event: 'Successful launch' },
      { date: new Date('2025-02-01'), event: 'Mars gravity assist (planned)' },
      { date: new Date('2030-04-11'), event: 'Jupiter orbit insertion (planned)' }
    ],
    budget: '$5.0 billion'
  },
  {
    slug: 'artemis-ii',
    name: 'Artemis II',
    agency: 'NASA',
    type: 'crewed',
    status: 'planned',
    targetBody: 'Moon',
    launchDate: new Date('2025-09-01'),
    endDate: null,
    objective: 'To perform a crewed lunar flyby test and return to Earth, paving the way for Artemis III lunar surface landing.',
    achievements: [],
    instruments: [
      { name: 'Orion', purpose: 'Crew spacecraft' },
      { name: 'SLS', purpose: 'Space Launch System rocket' }
    ],
    description: 'Artemis II is the second scheduled flight of the Artemis program and the first crewed mission to journey to the Moon since Apollo 17 in 1972. A crew of four astronauts will perform a lunar flyby aboard the Orion spacecraft, demonstrating critical technologies before putting humans back on the lunar surface.',
    nasaId: 'Artemis',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Earthset_%28art002e009288%29.jpg/1280px-Earthset_%28art002e009288%29.jpg',
    timeline: [
      { date: new Date('2025-09-01'), event: 'Target launch date' },
      { date: new Date('2025-09-11'), event: 'Target return to Earth' }
    ],
    budget: 'N/A'
  },
  {
    slug: 'mars-sample-return',
    name: 'Mars Sample Return',
    agency: 'NASA',
    type: 'rover',
    status: 'planned',
    targetBody: 'Mars',
    launchDate: new Date('2028-01-01'),
    endDate: null,
    objective: 'To gather rock and soil samples collected by the Perseverance rover and return them to Earth for laboratory analysis.',
    achievements: [],
    instruments: [
      { name: 'SRL', purpose: 'Sample Retrieval Lander' },
      { name: 'ERO', purpose: 'Earth Return Orbiter (ESA)' }
    ],
    description: 'The Mars Sample Return (MSR) mission is a proposed joint campaign between NASA and ESA to collect Martian rock and soil samples gathered by the Perseverance rover. The complex architecture involves launching a lander, retrieving the sample tubes, launching them into Mars orbit with a small rocket, and rendezvousing with an Earth-return orbiter.',
    nasaId: 'Mars Sample',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/1280px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png',
    timeline: [
      { date: new Date('2028-01-01'), event: 'Target launch window opens' },
      { date: new Date('2033-01-01'), event: 'Target sample return date' }
    ],
    budget: '$11.0 billion'
  }
,
{
  slug: "chandrayaan-1",
  name: "Chandrayaan-1",
  agency: "ISRO",
  type: "orbiter",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('2008-10-22T00:00:00.000Z'),
  endDate: new Date('2009-08-28T00:00:00.000Z'),
  objective: "To orbit the Moon and perform high-resolution remote sensing to prepare a 3D atlas of the near and far side, and to conduct chemical and mineralogical mapping.",
  achievements: [
    {
      date: new Date('2009-09-24T00:00:00.000Z'),
      description: "Discovered widespread water molecules in lunar soil."
    }
  ],
  instruments: [
    {
      name: "TMC",
      purpose: "Terrain Mapping Camera"
    },
    {
      name: "M3",
      purpose: "Moon Mineralogy Mapper"
    }
  ],
  description: "Chandrayaan-1 was India's first lunar probe. Launched by ISRO, it orbited the Moon to map its surface and study its chemical composition. Crucially, the mission carried instruments from NASA, ESA, and the Bulgarian Academy of Sciences. The NASA-provided Moon Mineralogy Mapper instrument was responsible for the groundbreaking confirmation of water molecules on the lunar surface.",
  nasaId: "Earth Moon spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/f/fd/CY1_2007_%28cropped%29.jpg",
  timeline: [
    {
      date: new Date('2008-10-22T00:00:00.000Z'),
      event: "Launch"
    },
    {
      date: new Date('2008-11-14T00:00:00.000Z'),
      event: "Moon Impact Probe released"
    }
  ],
  budget: "$54 million"
},
{
  slug: "chandrayaan-2",
  name: "Chandrayaan-2",
  agency: "ISRO",
  type: "orbiter",
  status: "active",
  targetBody: "Moon",
  launchDate: new Date('2019-07-22T00:00:00.000Z'),
  endDate: null,
  objective: "To map the location and abundance of lunar water, study lunar topography, seismography, surface chemical composition, and thermo-physical characteristics.",
  achievements: [
    {
      date: new Date('2019-09-02T00:00:00.000Z'),
      description: "Orbiter successfully inserted into lunar orbit and continues to map the Moon."
    }
  ],
  instruments: [
    {
      name: "OHRC",
      purpose: "Orbiter High Resolution Camera"
    },
    {
      name: "CLASS",
      purpose: "Chandrayaan-2 Large Area Soft X-ray Spectrometer"
    }
  ],
  description: "Chandrayaan-2 is an ongoing Indian lunar mission consisting of an orbiter, a lander (Vikram), and a rover (Pragyan). Although the lander crashed during its descent, the orbiter remains fully operational in a highly precise circular orbit and continues to return some of the highest resolution imagery of the Moon's surface to date.",
  nasaId: "Earth Moon spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/GSLV_Mk_III_M1%2C_Chandrayaan-2_-_Vikram_lander_mounted_on_top_of_orbiter.jpg/1280px-GSLV_Mk_III_M1%2C_Chandrayaan-2_-_Vikram_lander_mounted_on_top_of_orbiter.jpg",
  timeline: [
    {
      date: new Date('2019-07-22T00:00:00.000Z'),
      event: "Launch"
    },
    {
      date: new Date('2019-09-07T00:00:00.000Z'),
      event: "Vikram lander hard landing"
    }
  ],
  budget: "$141 million"
},
{
  slug: "astrosat",
  name: "AstroSat",
  agency: "ISRO",
  type: "telescope",
  status: "active",
  targetBody: "Earth Orbit",
  launchDate: new Date('2015-09-28T00:00:00.000Z'),
  endDate: null,
  objective: "To observe the universe in optical, ultraviolet, low- and high-energy X-ray regions of the electromagnetic spectrum simultaneously.",
  achievements: [
    {
      date: new Date('2020-08-24T00:00:00.000Z'),
      description: "Discovered one of the earliest galaxies in extreme ultraviolet light."
    }
  ],
  instruments: [
    {
      name: "UVIT",
      purpose: "Ultraviolet Imaging Telescope"
    },
    {
      name: "SXT",
      purpose: "Soft X-ray Telescope"
    }
  ],
  description: "AstroSat is India's first dedicated multi-wavelength space observatory. It studies supermassive black holes, neutron stars, star-forming regions, and active galaxies. The unique characteristic of AstroSat is its capability for simultaneous multi-wavelength observations of various cosmic sources in a single satellite.",
  nasaId: "Milky Way",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Astrosat-1_in_deployed_configuration_001.png",
  timeline: [
    {
      date: new Date('2015-09-28T00:00:00.000Z'),
      event: "Launch"
    }
  ],
  budget: "$25 million"
},
{
  slug: "shukrayaan-1",
  name: "Shukrayaan-1",
  agency: "ISRO",
  type: "orbiter",
  status: "planned",
  targetBody: "Venus",
  launchDate: new Date('2031-12-01T00:00:00.000Z'),
  endDate: null,
  objective: "To study the surface and atmosphere of Venus, including its complex chemistry and the effect of solar radiation.",
  achievements: [],
  instruments: [
    {
      name: "SAR",
      purpose: "Synthetic Aperture Radar"
    },
    {
      name: "VSE",
      purpose: "Venusian Spectral Explorer"
    }
  ],
  description: "Shukrayaan-1 is a planned orbiter to Venus by ISRO. It aims to map the planet's surface using a high-resolution synthetic aperture radar and study the atmospheric chemistry. The mission will contribute to understanding the runaway greenhouse effect on Venus.",
  nasaId: "Planet Venus",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Venus_Orbiter_Mission.png",
  timeline: [
    {
      date: new Date('2031-12-01T00:00:00.000Z'),
      event: "Target launch date"
    }
  ],
  budget: "TBD"
},
{
  slug: "gaganyaan-1",
  name: "Gaganyaan 1",
  agency: "ISRO",
  type: "crewed",
  status: "planned",
  targetBody: "Low Earth Orbit",
  launchDate: new Date('2025-01-01T00:00:00.000Z'),
  endDate: null,
  objective: "To conduct a test flight of the Gaganyaan orbital vehicle without a human crew.",
  achievements: [],
  instruments: [
    {
      name: "Vyommitra",
      purpose: "Humanoid robot to test life support systems"
    }
  ],
  description: "Gaganyaan 1 is an uncrewed test flight of ISRO's Gaganyaan spacecraft, which is intended to be India's first crewed spacecraft. It will carry the humanoid robot 'Vyommitra' to test life support and other critical systems before humans are sent.",
  nasaId: "Earth orbit",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Gaganyaan_vehicle_used_for_TVD1_mission.webp/1280px-Gaganyaan_vehicle_used_for_TVD1_mission.webp.png",
  timeline: [
    {
      date: new Date('2025-01-01T00:00:00.000Z'),
      event: "Target launch date"
    }
  ],
  budget: "TBD"
},
{
  slug: "nisar",
  name: "NISAR",
  agency: "ISRO",
  type: "orbiter",
  status: "planned",
  targetBody: "Earth",
  launchDate: new Date('2025-02-01T00:00:00.000Z'),
  endDate: null,
  objective: "To measure Earth's changing ecosystems, dynamic surfaces, and ice masses providing information about biomass, natural hazards, sea level rise, and groundwater.",
  achievements: [],
  instruments: [
    {
      name: "L-Band SAR",
      purpose: "NASA-provided synthetic aperture radar"
    },
    {
      name: "S-Band SAR",
      purpose: "ISRO-provided synthetic aperture radar"
    }
  ],
  description: "The NASA-ISRO Synthetic Aperture Radar (NISAR) mission is a joint project between NASA and ISRO to co-develop and launch a dual-frequency synthetic aperture radar on an Earth observation satellite. The satellite will be the first radar imaging satellite to use dual frequencies.",
  nasaId: "Planet Earth from space",
  coverImage: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=1200",
  timeline: [
    {
      date: new Date('2025-02-01T00:00:00.000Z'),
      event: "Target launch"
    }
  ],
  budget: "$1.5 billion"
},
{
  slug: "xposat",
  name: "XPoSat",
  agency: "ISRO",
  type: "telescope",
  status: "active",
  targetBody: "Earth Orbit",
  launchDate: new Date('2024-01-01T00:00:00.000Z'),
  endDate: null,
  objective: "To study the polarization of astronomical X-rays from extreme sources like black holes and neutron stars.",
  achievements: [
    {
      date: new Date('2024-01-01T00:00:00.000Z'),
      description: "Successfully launched into a circular low Earth orbit."
    }
  ],
  instruments: [
    {
      name: "POLIX",
      purpose: "Polarimeter Instrument in X-rays"
    },
    {
      name: "XSPECT",
      purpose: "X-ray Spectroscopy and Timing"
    }
  ],
  description: "XPoSat (X-ray Polarimeter Satellite) is India's first dedicated polarimetry mission to study various dynamics of bright astronomical X-ray sources in extreme conditions. The spacecraft carries two scientific payloads in a low Earth orbit.",
  nasaId: "Black hole",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/PSLV-C58%2C_XPoSat_-_Render_of_XPoSat_satellite_in_deployed_configuration.png/1280px-PSLV-C58%2C_XPoSat_-_Render_of_XPoSat_satellite_in_deployed_configuration.png",
  timeline: [
    {
      date: new Date('2024-01-01T00:00:00.000Z'),
      event: "Launch"
    }
  ],
  budget: "$30 million"
},
{
  slug: "lupex",
  name: "LUPEX (Chandrayaan-4)",
  agency: "ISRO",
  type: "rover",
  status: "planned",
  targetBody: "Moon",
  launchDate: new Date('2028-06-01T00:00:00.000Z'),
  endDate: null,
  objective: "To explore the lunar south pole region for water ice and demonstrate new surface exploration technologies.",
  achievements: [],
  instruments: [
    {
      name: "Rover",
      purpose: "JAXA-provided lunar rover"
    },
    {
      name: "Lander",
      purpose: "ISRO-provided lunar lander"
    }
  ],
  description: "The Lunar Polar Exploration Mission (LUPEX) is a joint robotic lunar mission concept by JAXA and ISRO. It will send a lunar rover and lander to explore the south pole region of the Moon for water ice.",
  nasaId: "Moon rover",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/a/a4/LUPEX_rover.jpg",
  timeline: [
    {
      date: new Date('2028-06-01T00:00:00.000Z'),
      event: "Target launch date"
    }
  ],
  budget: "TBD"
},
{
  slug: "mom-2",
  name: "Mars Orbiter Mission 2",
  agency: "ISRO",
  type: "orbiter",
  status: "planned",
  targetBody: "Mars",
  launchDate: new Date('2026-11-01T00:00:00.000Z'),
  endDate: null,
  objective: "To further study the Martian surface, atmosphere, and mineralogy with upgraded instruments.",
  achievements: [],
  instruments: [
    {
      name: "Upgraded MCC",
      purpose: "High-resolution imaging"
    }
  ],
  description: "Mars Orbiter Mission 2 (MOM 2), also called Mangalyaan-2, is India's second interplanetary mission planned for launch to Mars. It will primarily feature an orbiter but aims to include significantly more capable scientific instruments than the original Mangalyaan mission.",
  nasaId: "Planet Mars",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/1280px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
  timeline: [
    {
      date: new Date('2026-11-01T00:00:00.000Z'),
      event: "Planned"
    }
  ],
  budget: "TBD"
},
{
  slug: "spadex",
  name: "SPADEX",
  agency: "ISRO",
  type: "orbiter",
  status: "planned",
  targetBody: "Low Earth Orbit",
  launchDate: new Date('2024-12-01T00:00:00.000Z'),
  endDate: null,
  objective: "To demonstrate orbital rendezvous, docking, and formation flying capabilities.",
  achievements: [],
  instruments: [
    {
      name: "Docking mechanism",
      purpose: "For autonomous docking"
    }
  ],
  description: "Space Docking Experiment (SPADEX) is a twin spacecraft mission being developed by ISRO to mature technologies related to orbital rendezvous, docking, formation flying, with scope of applications in human spaceflight, in-space satellite servicing and other proximity operations.",
  nasaId: "Spacecraft docking",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg",
  timeline: [
    {
      date: new Date('2024-12-01T00:00:00.000Z'),
      event: "Planned"
    }
  ],
  budget: "TBD"
},
{
  slug: "change-1",
  name: "Chang'e 1",
  agency: "CNSA",
  type: "orbiter",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('2007-10-24T00:00:00.000Z'),
  endDate: new Date('2009-03-01T00:00:00.000Z'),
  objective: "To obtain a 3D map of the lunar surface and analyze the distribution of lunar elements.",
  achievements: [
    {
      date: new Date('2007-11-20T00:00:00.000Z'),
      description: "Transmitted its first picture of the Moon."
    }
  ],
  instruments: [
    {
      name: "Stereo Camera",
      purpose: "3D imaging"
    }
  ],
  description: "Chang'e 1 was an unmanned Chinese lunar-orbiting spacecraft, part of the first phase of the Chinese Lunar Exploration Program. It created an accurate 3D map of the lunar surface and provided data on the chemical composition of the Moon.",
  nasaId: "Earth Moon spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Chang_e_1.jpg/1280px-Chang_e_1.jpg",
  timeline: [
    {
      date: new Date('2009-03-01T00:00:00.000Z'),
      event: "Controlled crash onto the lunar surface"
    }
  ],
  budget: "TBD"
},
{
  slug: "change-2",
  name: "Chang'e 2",
  agency: "CNSA",
  type: "orbiter",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('2010-10-01T00:00:00.000Z'),
  endDate: new Date('2014-01-01T00:00:00.000Z'),
  objective: "To conduct a higher resolution imaging of the Moon and serve as a technology testbed for later missions.",
  achievements: [
    {
      date: new Date('2012-12-13T00:00:00.000Z'),
      description: "Flew by Near-Earth asteroid 4179 Toutatis."
    }
  ],
  instruments: [
    {
      name: "High-res CCD",
      purpose: "Detailed imaging"
    }
  ],
  description: "Chang'e 2 was the second Chinese lunar exploration mission. After completing its primary objective of mapping the Moon at high resolution, it left lunar orbit for the Earth-Sun L2 Lagrangian point, and subsequently performed a flyby of asteroid 4179 Toutatis.",
  nasaId: "Asteroid space",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chang%27e-2_mockup_at_BASM.jpg/1280px-Chang%27e-2_mockup_at_BASM.jpg",
  timeline: [
    {
      date: new Date('2012-12-13T00:00:00.000Z'),
      event: "Asteroid flyby"
    }
  ],
  budget: "TBD"
},
{
  slug: "change-3",
  name: "Chang'e 3",
  agency: "CNSA",
  type: "lander",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('2013-12-01T00:00:00.000Z'),
  endDate: new Date('2014-01-01T00:00:00.000Z'),
  objective: "To soft-land on the Moon and deploy the Yutu rover.",
  achievements: [
    {
      date: new Date('2013-12-14T00:00:00.000Z'),
      description: "Achieved the first soft landing on the Moon since 1976."
    }
  ],
  instruments: [
    {
      name: "Lander Camera",
      purpose: "Descent imaging"
    },
    {
      name: "Yutu Rover",
      purpose: "Surface exploration"
    }
  ],
  description: "Chang'e 3 was a robotic lunar exploration mission operated by CNSA. It incorporated a robotic lander and China's first lunar rover named Yutu. It marked the first soft landing on the Moon in 37 years.",
  nasaId: "Moon lander",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/5/55/Yutu_rover.jpg",
  timeline: [
    {
      date: new Date('2013-12-14T00:00:00.000Z'),
      event: "Soft landing"
    }
  ],
  budget: "TBD"
},
{
  slug: "change-4",
  name: "Chang'e 4",
  agency: "CNSA",
  type: "lander",
  status: "active",
  targetBody: "Moon",
  launchDate: new Date('2018-12-07T00:00:00.000Z'),
  endDate: null,
  objective: "To achieve the first soft landing on the far side of the Moon.",
  achievements: [
    {
      date: new Date('2019-01-03T00:00:00.000Z'),
      description: "First ever soft landing on the lunar far side."
    }
  ],
  instruments: [
    {
      name: "Yutu-2 Rover",
      purpose: "Far side surface exploration"
    }
  ],
  description: "Chang'e 4 is a robotic spacecraft mission by CNSA that achieved the first soft landing on the far side of the Moon. A communication relay satellite, Queqiao, was first launched to a halo orbit near the Earth-Moon L2 point to provide continuous communication with the lander and the Yutu-2 rover.",
  nasaId: "Earth Moon spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ChangE-4_-_PCAM.png/1280px-ChangE-4_-_PCAM.png",
  timeline: [
    {
      date: new Date('2019-01-03T00:00:00.000Z'),
      event: "Landed in Von Kármán crater"
    }
  ],
  budget: "TBD"
},
{
  slug: "change-6",
  name: "Chang'e 6",
  agency: "CNSA",
  type: "lander",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('2024-05-03T00:00:00.000Z'),
  endDate: new Date('2024-06-25T00:00:00.000Z'),
  objective: "To collect and return the first sample ever gathered from the far side of the Moon.",
  achievements: [
    {
      date: new Date('2024-06-25T00:00:00.000Z'),
      description: "Returned far-side lunar samples to Earth."
    }
  ],
  instruments: [
    {
      name: "Sample Coring System",
      purpose: "Extracting deep lunar material"
    }
  ],
  description: "Chang'e 6 is a robotic lunar exploration mission by CNSA. Its main objective was to conduct China's second lunar sample return mission, and notably, the world's first return of materials from the lunar far side. It successfully landed in the South Pole-Aitken basin.",
  nasaId: "Moon crater",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/bd/The_Moon_Goddess_Chang_E_-_Unidentified_artist%2C_after_Tang_Yin.jpg",
  timeline: [
    {
      date: new Date('2024-05-03T00:00:00.000Z'),
      event: "Launched"
    },
    {
      date: new Date('2024-06-25T00:00:00.000Z'),
      event: "Sample return capsule arrived back to Earth"
    }
  ],
  budget: "TBD"
},
{
  slug: "tianwen-2",
  name: "Tianwen-2",
  agency: "CNSA",
  type: "rover",
  status: "planned",
  targetBody: "Asteroid Kamoʻoalewa",
  launchDate: new Date('2025-05-01T00:00:00.000Z'),
  endDate: null,
  objective: "To return samples from the near-Earth asteroid Kamoʻoalewa and then study the main-belt comet 311P/PANSTARRS.",
  achievements: [],
  instruments: [
    {
      name: "Sample Return Module",
      purpose: "Bring asteroid sample to Earth"
    }
  ],
  description: "Tianwen-2 is a planned asteroid sample return and comet rendezvous mission by CNSA. It will first visit the near-Earth object Kamoʻoalewa to collect a sample and return it to Earth. Following the drop-off, the main spacecraft will continue its journey to the main-belt comet 311P.",
  nasaId: "Asteroid space",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%E5%A4%A9%E9%97%AE%E4%BA%8C%E5%8F%B7%E5%8F%91%E5%B0%84%E9%9A%BE%E5%BA%A6%E7%8A%B9%E5%A6%82%E2%80%9C%E5%8C%97%E4%BA%AC%E6%8A%95%E7%AF%AE%E4%B8%8A%E6%B5%B7%E8%BF%9B%E7%AD%90%E2%80%9D%EF%BC%9F1.png/1280px-%E5%A4%A9%E9%97%AE%E4%BA%8C%E5%8F%B7%E5%8F%91%E5%B0%84%E9%9A%BE%E5%BA%A6%E7%8A%B9%E5%A6%82%E2%80%9C%E5%8C%97%E4%BA%AC%E6%8A%95%E7%AF%AE%E4%B8%8A%E6%B5%B7%E8%BF%9B%E7%AD%90%E2%80%9D%EF%BC%9F1.png",
  timeline: [
    {
      date: new Date('2025-05-01T00:00:00.000Z'),
      event: "Target launch"
    }
  ],
  budget: "TBD"
},
{
  slug: "tianwen-3",
  name: "Tianwen-3",
  agency: "CNSA",
  type: "lander",
  status: "planned",
  targetBody: "Mars",
  launchDate: new Date('2028-11-01T00:00:00.000Z'),
  endDate: null,
  objective: "To collect Martian rock profiles and return them to Earth for extensive laboratory analysis.",
  achievements: [],
  instruments: [
    {
      name: "Mars Ascent Vehicle",
      purpose: "Launch sample to Mars orbit"
    }
  ],
  description: "Tianwen-3 is a planned Mars sample return mission by CNSA. It aims to collect Martian rock and soil samples and bring them back to Earth around 2031. This ambitious mission will utilize two Long March 5 launches to send an orbiter-returner and a lander-ascender.",
  nasaId: "Planet Mars",
  coverImage: "https://images.unsplash.com/photo-1632395627727-3b9aaec561be?q=80&w=1200",
  timeline: [
    {
      date: new Date('2028-11-01T00:00:00.000Z'),
      event: "Target launch window"
    }
  ],
  budget: "TBD"
},
{
  slug: "tianwen-4",
  name: "Tianwen-4",
  agency: "CNSA",
  type: "orbiter",
  status: "planned",
  targetBody: "Jupiter",
  launchDate: new Date('2029-10-01T00:00:00.000Z'),
  endDate: null,
  objective: "To explore the Jupiter system and then proceed to a flyby of Uranus.",
  achievements: [],
  instruments: [
    {
      name: "Jupiter Orbiter",
      purpose: "Study Jovian system"
    },
    {
      name: "Uranus Flyby Probe",
      purpose: "Study Uranus"
    }
  ],
  description: "Tianwen-4 is a planned mission by CNSA to the outer Solar System. The primary spacecraft will orbit Jupiter and study its moons, while a smaller secondary probe will separate and continue on to perform a flyby of Uranus.",
  nasaId: "Planet Jupiter",
  coverImage: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200",
  timeline: [
    {
      date: new Date('2029-10-01T00:00:00.000Z'),
      event: "Target launch"
    }
  ],
  budget: "TBD"
},
{
  slug: "shenzhou-5",
  name: "Shenzhou 5",
  agency: "CNSA",
  type: "crewed",
  status: "completed",
  targetBody: "Earth Orbit",
  launchDate: new Date('2003-10-15T00:00:00.000Z'),
  endDate: new Date('2003-10-16T00:00:00.000Z'),
  objective: "To send a Chinese astronaut into space, making China the third country to independently achieve human spaceflight.",
  achievements: [
    {
      date: new Date('2003-10-15T00:00:00.000Z'),
      description: "Yang Liwei became the first Chinese citizen in space."
    }
  ],
  instruments: [
    {
      name: "Shenzhou spacecraft",
      purpose: "Crew transport"
    }
  ],
  description: "Shenzhou 5 was the first human spaceflight mission of the Chinese space program, launched on October 15, 2003. The Shenzhou spacecraft carried astronaut Yang Liwei, making China the third nation to launch humans into space independently, after the Soviet Union and the United States.",
  nasaId: "Earth orbit",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shenzhou-5_mockup_and_parachute_at_NMC.jpg/1280px-Shenzhou-5_mockup_and_parachute_at_NMC.jpg",
  timeline: [
    {
      date: new Date('2003-10-15T00:00:00.000Z'),
      event: "Launch"
    },
    {
      date: new Date('2003-10-16T00:00:00.000Z'),
      event: "Landing in Inner Mongolia"
    }
  ],
  budget: "TBD"
},
{
  slug: "tiangong",
  name: "Tiangong Space Station",
  agency: "CNSA",
  type: "crewed",
  status: "active",
  targetBody: "Earth Orbit",
  launchDate: new Date('2021-04-29T00:00:00.000Z'),
  endDate: null,
  objective: "To assemble and operate a permanently crewed modular space station in Low Earth Orbit.",
  achievements: [
    {
      date: new Date('2022-11-01T00:00:00.000Z'),
      description: "Completed assembly of the core T-shape structure."
    }
  ],
  instruments: [
    {
      name: "Tianhe Core Module",
      purpose: "Living quarters and control"
    },
    {
      name: "Mengtian",
      purpose: "Science laboratory"
    }
  ],
  description: "The Tiangong space station is a permanent modular space station constructed by China in low Earth orbit. Launched in stages starting with the Tianhe core module in 2021, the station represents a major milestone in China's human spaceflight program, conducting extensive microgravity research.",
  nasaId: "Space Station",
  coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
  timeline: [
    {
      date: new Date('2021-04-29T00:00:00.000Z'),
      event: "Tianhe launch"
    }
  ],
  budget: "TBD"
},
{
  slug: "sputnik-2",
  name: "Sputnik 2",
  agency: "Roscosmos",
  type: "orbiter",
  status: "completed",
  targetBody: "Earth",
  launchDate: new Date('1957-11-03T00:00:00.000Z'),
  endDate: new Date('1958-04-14T00:00:00.000Z'),
  objective: "To carry a living animal into orbit and monitor its physiological parameters in space.",
  achievements: [
    {
      date: new Date('1957-11-03T00:00:00.000Z'),
      description: "Carried Laika, the first living creature (a dog) into Earth orbit."
    }
  ],
  instruments: [
    {
      name: "Life support system",
      purpose: "For Laika"
    }
  ],
  description: "Sputnik 2 was the second spacecraft launched into Earth orbit and the first to carry a living animal, a Soviet space dog named Laika. The mission provided the first data on the behavior of living organisms in the space environment.",
  nasaId: "Earth orbit",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Laika_ac_Sputnik_2_Replica_%286995685051%29.jpg/1280px-Laika_ac_Sputnik_2_Replica_%286995685051%29.jpg",
  timeline: [
    {
      date: new Date('1957-11-03T00:00:00.000Z'),
      event: "Launch"
    }
  ],
  budget: "Classified"
},
{
  slug: "vostok-1",
  name: "Vostok 1",
  agency: "Roscosmos",
  type: "crewed",
  status: "completed",
  targetBody: "Earth Orbit",
  launchDate: new Date('1961-04-12T00:00:00.000Z'),
  endDate: new Date('1961-04-12T00:00:00.000Z'),
  objective: "To place a human in Earth orbit and return him safely.",
  achievements: [
    {
      date: new Date('1961-04-12T00:00:00.000Z'),
      description: "Yuri Gagarin became the first human in space and the first to orbit the Earth."
    }
  ],
  instruments: [
    {
      name: "Vostok 3KA spacecraft",
      purpose: "Crew transport"
    }
  ],
  description: "Vostok 1 was the first spaceflight of the Vostok programme and the first human spaceflight in history. The Vostok 3KA spacecraft was launched with Soviet cosmonaut Yuri Gagarin aboard, making him the first human to cross into outer space and orbit the Earth.",
  nasaId: "Earth from space",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82_%D0%AE%D1%80%D0%B8%D0%B9_%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD_%28cropped%29.jpg/1280px-%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82_%D0%AE%D1%80%D0%B8%D0%B9_%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD_%28cropped%29.jpg",
  timeline: [
    {
      date: new Date('1961-04-12T00:00:00.000Z'),
      event: "Launch and landing on the same day"
    }
  ],
  budget: "Classified"
},
{
  slug: "vostok-6",
  name: "Vostok 6",
  agency: "Roscosmos",
  type: "crewed",
  status: "completed",
  targetBody: "Earth Orbit",
  launchDate: new Date('1963-06-16T00:00:00.000Z'),
  endDate: new Date('1963-06-19T00:00:00.000Z'),
  objective: "To further study the effect of spaceflight on the human body, specifically on a female cosmonaut.",
  achievements: [
    {
      date: new Date('1963-06-16T00:00:00.000Z'),
      description: "Valentina Tereshkova became the first woman in space."
    }
  ],
  instruments: [
    {
      name: "Vostok 3KA spacecraft",
      purpose: "Crew transport"
    }
  ],
  description: "Vostok 6 was the first human spaceflight to carry a woman, cosmonaut Valentina Tereshkova, into space. During her 70.8-hour flight, she completed 48 orbits of the Earth, a remarkable achievement that remained unmatched by any other female astronaut for decades.",
  nasaId: "Spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vostok_6_capsule_on_display%2C_2016.jpg/1280px-Vostok_6_capsule_on_display%2C_2016.jpg",
  timeline: [
    {
      date: new Date('1963-06-16T00:00:00.000Z'),
      event: "Launch"
    },
    {
      date: new Date('1963-06-19T00:00:00.000Z'),
      event: "Successful return"
    }
  ],
  budget: "Classified"
},
{
  slug: "luna-1",
  name: "Luna 1",
  agency: "Roscosmos",
  type: "flyby",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('1959-01-02T00:00:00.000Z'),
  endDate: new Date('1959-01-04T00:00:00.000Z'),
  objective: "To impact the Moon, but due to a timing error, it missed the Moon and became the first spacecraft to leave geocentric orbit.",
  achievements: [
    {
      date: new Date('1959-01-04T00:00:00.000Z'),
      description: "First spacecraft to reach escape velocity and leave Earth's gravity."
    }
  ],
  instruments: [
    {
      name: "Magnetometer",
      purpose: "Discovered the Moon lacks a magnetic field"
    }
  ],
  description: "Luna 1, also known as Mechta (Dream), was the first spacecraft to reach the vicinity of the Earth's Moon, and the first spacecraft to be placed in heliocentric orbit. It made significant scientific discoveries, including revealing that the Moon has no detectable magnetic field.",
  nasaId: "Earth Moon spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/c/cc/RIAN_archive_510848_Interplanetary_station_Luna_1_-_blacked.jpg",
  timeline: [
    {
      date: new Date('1959-01-02T00:00:00.000Z'),
      event: "Launch"
    }
  ],
  budget: "Classified"
},
{
  slug: "luna-2",
  name: "Luna 2",
  agency: "Roscosmos",
  type: "lander",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('1959-09-12T00:00:00.000Z'),
  endDate: new Date('1959-09-13T00:00:00.000Z'),
  objective: "To reach and impact the surface of the Moon.",
  achievements: [
    {
      date: new Date('1959-09-13T00:00:00.000Z'),
      description: "First human-made object to reach the surface of the Moon."
    }
  ],
  instruments: [
    {
      name: "Scintillation counter",
      purpose: "Radiation measurement"
    }
  ],
  description: "Luna 2 was the second of the Soviet Union's Luna programme spacecraft launched in the direction of the Moon. It was the first spacecraft to reach the surface of the Moon, successfully impacting the lunar surface east of Mare Serenitatis.",
  nasaId: "Moon crater",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Luna_1_-_2_Spacecraft.png",
  timeline: [
    {
      date: new Date('1959-09-13T00:00:00.000Z'),
      event: "Impacted the Moon"
    }
  ],
  budget: "Classified"
},
{
  slug: "luna-3",
  name: "Luna 3",
  agency: "Roscosmos",
  type: "flyby",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('1959-10-04T00:00:00.000Z'),
  endDate: new Date('1960-04-29T00:00:00.000Z'),
  objective: "To fly by the Moon and return the first photographs of its far side.",
  achievements: [
    {
      date: new Date('1959-10-07T00:00:00.000Z'),
      description: "Returned the first ever images of the far side of the Moon."
    }
  ],
  instruments: [
    {
      name: "Yenisey-2 camera",
      purpose: "Photography of the far side"
    }
  ],
  description: "Luna 3 was a Soviet spacecraft launched in 1959. It was the third spacecraft to reach the neighborhood of the Moon, and the first to send back photographs of the Moon's far side, revealing a distinctly different landscape dominated by heavily cratered highlands.",
  nasaId: "Moon far side",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/%D0%9B%D1%83%D0%BD%D0%B0-3_%2814562265547%29.jpg/1280px-%D0%9B%D1%83%D0%BD%D0%B0-3_%2814562265547%29.jpg",
  timeline: [
    {
      date: new Date('1959-10-07T00:00:00.000Z'),
      event: "First far-side photos taken"
    }
  ],
  budget: "Classified"
},
{
  slug: "venera-7",
  name: "Venera 7",
  agency: "Roscosmos",
  type: "lander",
  status: "completed",
  targetBody: "Venus",
  launchDate: new Date('1970-08-17T00:00:00.000Z'),
  endDate: new Date('1970-12-15T00:00:00.000Z'),
  objective: "To successfully land a probe on the surface of Venus and transmit data back to Earth.",
  achievements: [
    {
      date: new Date('1970-12-15T00:00:00.000Z'),
      description: "First spacecraft to successfully soft-land on another planet and transmit data from its surface."
    }
  ],
  instruments: [
    {
      name: "Thermometer & Barometer",
      purpose: "Measure surface conditions"
    }
  ],
  description: "Venera 7 was a Soviet spacecraft, part of the Venera series of probes to Venus. It became the first man-made spacecraft to successfully land on another planet and transmit information back to Earth, confirming the extremely hostile nature of the Venusian surface.",
  nasaId: "Planet Venus",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Venera-7_spuskaemiy_apparat.jpg/1280px-Venera-7_spuskaemiy_apparat.jpg",
  timeline: [
    {
      date: new Date('1970-12-15T00:00:00.000Z'),
      event: "Landed on Venus and transmitted data for 53 minutes"
    }
  ],
  budget: "Classified"
},
{
  slug: "venera-9",
  name: "Venera 9",
  agency: "Roscosmos",
  type: "lander",
  status: "completed",
  targetBody: "Venus",
  launchDate: new Date('1975-06-08T00:00:00.000Z'),
  endDate: new Date('1975-10-22T00:00:00.000Z'),
  objective: "To orbit Venus, acting as a communication relay, and deploy a lander to take the first surface images.",
  achievements: [
    {
      date: new Date('1975-10-22T00:00:00.000Z'),
      description: "Returned the first photographs from the surface of another planet."
    }
  ],
  instruments: [
    {
      name: "Panoramic camera",
      purpose: "Surface imaging"
    }
  ],
  description: "Venera 9, an uncrewed Soviet space mission to Venus, consisted of an orbiter and a lander. The lander operated on the extreme Venusian surface for 53 minutes, sending back the very first images ever taken on the surface of another planet.",
  nasaId: "Venus surface",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Venera_9_Space_Probe_01.jpg/1280px-Venera_9_Space_Probe_01.jpg",
  timeline: [
    {
      date: new Date('1975-10-22T00:00:00.000Z'),
      event: "Landed and took first image"
    }
  ],
  budget: "Classified"
},
{
  slug: "mir",
  name: "Mir Space Station",
  agency: "Roscosmos",
  type: "crewed",
  status: "completed",
  targetBody: "Earth Orbit",
  launchDate: new Date('1986-02-20T00:00:00.000Z'),
  endDate: new Date('2001-03-23T00:00:00.000Z'),
  objective: "To operate a continuously inhabited long-term research station in space.",
  achievements: [
    {
      date: new Date('1995-03-22T00:00:00.000Z'),
      description: "Cosmonaut Valeri Polyakov completed the longest single spaceflight in history (437 days)."
    }
  ],
  instruments: [
    {
      name: "Core Module",
      purpose: "Living quarters"
    },
    {
      name: "Kvant-1",
      purpose: "Astrophysics lab"
    }
  ],
  description: "Mir was a space station that operated in low Earth orbit from 1986 to 2001, operated by the Soviet Union and later by Russia. Mir was the first continuously inhabited long-term research station in orbit and held the record for the longest continuous human presence in space for many years.",
  nasaId: "Mir space station",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/STS089_Mir.jpg/1280px-STS089_Mir.jpg",
  timeline: [
    {
      date: new Date('1986-02-20T00:00:00.000Z'),
      event: "Core module launched"
    },
    {
      date: new Date('2001-03-23T00:00:00.000Z'),
      event: "Deorbited into the Pacific Ocean"
    }
  ],
  budget: "$4.2 billion"
},
{
  slug: "luna-25",
  name: "Luna 25",
  agency: "Roscosmos",
  type: "lander",
  status: "failed",
  targetBody: "Moon",
  launchDate: new Date('2023-08-10T00:00:00.000Z'),
  endDate: new Date('2023-08-19T00:00:00.000Z'),
  objective: "To land near the lunar south pole and prospect for water ice while testing new landing technologies.",
  achievements: [],
  instruments: [
    {
      name: "LML",
      purpose: "Lunar Manipulator Complex"
    },
    {
      name: "ADRON-LR",
      purpose: "Neutron and gamma spectrometer"
    }
  ],
  description: "Luna 25 was a Russian lunar lander mission that aimed to land at the lunar south pole region. It was Russia's first lunar mission since the Soviet Luna 24 in 1976. During an orbital maneuver pre-landing, an anomaly caused the spacecraft to crash into the Moon's surface.",
  nasaId: "Earth Moon spacecraft",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Maquette-Luna-Glob-Lander-b-DSC_0075.jpg/1280px-Maquette-Luna-Glob-Lander-b-DSC_0075.jpg",
  timeline: [
    {
      date: new Date('2023-08-10T00:00:00.000Z'),
      event: "Launched"
    },
    {
      date: new Date('2023-08-19T00:00:00.000Z'),
      event: "Spacecraft lost control and crashed"
    }
  ],
  budget: "$130 million"
},
{
  slug: "cassini-huygens",
  name: "Cassini-Huygens",
  agency: "NASA",
  type: "orbiter",
  status: "completed",
  targetBody: "Saturn",
  launchDate: new Date('1997-10-15T00:00:00.000Z'),
  endDate: new Date('2017-09-15T00:00:00.000Z'),
  objective: "To explore the Saturnian system, including its rings and moons, and to drop the Huygens probe onto Titan.",
  achievements: [
    {
      date: new Date('2005-01-14T00:00:00.000Z'),
      description: "Huygens probe became the first to land on Titan."
    },
    {
      date: new Date('2006-03-09T00:00:00.000Z'),
      description: "Discovered liquid water erupting from Enceladus."
    }
  ],
  instruments: [
    {
      name: "CIRS",
      purpose: "Composite Infrared Spectrometer"
    },
    {
      name: "ISS",
      purpose: "Imaging Science Subsystem"
    }
  ],
  description: "The Cassini-Huygens mission was a cooperative project of NASA, ESA, and ASI. It successfully orbited Saturn for over 13 years, revolutionizing our understanding of the planet, its complex rings, and its diverse moons, particularly Titan and Enceladus.",
  nasaId: "Planet Saturn",
  coverImage: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200",
  timeline: [
    {
      date: new Date('2004-07-01T00:00:00.000Z'),
      event: "Saturn orbital insertion"
    },
    {
      date: new Date('2017-09-15T00:00:00.000Z'),
      event: "Grand Finale plunge into Saturn"
    }
  ],
  budget: "$3.26 billion"
},
{
  slug: "psyche",
  name: "Psyche",
  agency: "NASA",
  type: "orbiter",
  status: "enroute",
  targetBody: "Asteroid Psyche",
  launchDate: new Date('2023-10-13T00:00:00.000Z'),
  endDate: null,
  objective: "To study the metallic asteroid 16 Psyche to better understand the cores of early planets.",
  achievements: [
    {
      date: new Date('2023-10-13T00:00:00.000Z'),
      description: "Successfully launched via Falcon Heavy."
    }
  ],
  instruments: [
    {
      name: "Multispectral Imager",
      purpose: "Surface imaging"
    },
    {
      name: "Gamma Ray and Neutron Spectrometer",
      purpose: "Elemental composition"
    }
  ],
  description: "Psyche is a NASA Discovery Program mission to explore the origin of planetary cores by studying the metallic asteroid 16 Psyche. This asteroid may be the exposed core of an early planet, offering a unique window into the violent history of collisions and accretion that created terrestrial planets.",
  nasaId: "Asteroid Psyche",
  coverImage: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
  timeline: [
    {
      date: new Date('2029-08-01T00:00:00.000Z'),
      event: "Planned arrival at Psyche"
    }
  ],
  budget: "$1.2 billion"
},
{
  slug: "artemis-iii",
  name: "Artemis III",
  agency: "NASA",
  type: "crewed",
  status: "planned",
  targetBody: "Moon",
  launchDate: new Date('2026-09-01T00:00:00.000Z'),
  endDate: null,
  objective: "To land the first astronauts (including the first woman and first person of color) near the lunar South Pole.",
  achievements: [],
  instruments: [
    {
      name: "HLS",
      purpose: "Human Landing System (Starship)"
    },
    {
      name: "Axiom Spacesuits",
      purpose: "Next-gen lunar EVA suits"
    }
  ],
  description: "Artemis III is the first planned crewed lunar landing mission of NASA's Artemis program. A crew of astronauts will launch aboard the Orion spacecraft, transfer to a SpaceX Starship Human Landing System in lunar orbit, and descend to the lunar surface near the South Pole for a week of exploration.",
  nasaId: "Artemis moon landing",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Artemis_III_ESM3_Engine_Nozzle_Install_Completion_%28KSC-20260217-PH-JBS01_0002%29.jpg/1280px-Artemis_III_ESM3_Engine_Nozzle_Install_Completion_%28KSC-20260217-PH-JBS01_0002%29.jpg",
  timeline: [
    {
      date: new Date('2026-09-01T00:00:00.000Z'),
      event: "Target launch window"
    }
  ],
  budget: "TBD"
},
{
  slug: "dragonfly",
  name: "Dragonfly",
  agency: "NASA",
  type: "rover",
  status: "planned",
  targetBody: "Titan",
  launchDate: new Date('2028-07-01T00:00:00.000Z'),
  endDate: null,
  objective: "To fly a rotorcraft lander across multiple locations on Saturn’s moon Titan to study prebiotic chemistry and extraterrestrial habitability.",
  achievements: [],
  instruments: [
    {
      name: "Mass Spectrometer",
      purpose: "Chemical composition analysis"
    },
    {
      name: "Drill",
      purpose: "Surface sampling"
    }
  ],
  description: "Dragonfly is an upcoming NASA New Frontiers mission that will send a robotic rotorcraft to Saturn's largest moon, Titan. Benefiting from Titan's dense atmosphere and low gravity, Dragonfly will fly between locations, sampling the surface chemistry and looking for signatures of biological processes.",
  nasaId: "Titan moon",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Red_grasshawk_%28Neurothemis_fluctuans%29_male_Phuket_2.jpg/1280px-Red_grasshawk_%28Neurothemis_fluctuans%29_male_Phuket_2.jpg",
  timeline: [
    {
      date: new Date('2034-01-01T00:00:00.000Z'),
      event: "Target arrival at Titan"
    }
  ],
  budget: "$3.35 billion"
},
{
  slug: "bepicolombo",
  name: "BepiColombo",
  agency: "ESA",
  type: "orbiter",
  status: "enroute",
  targetBody: "Mercury",
  launchDate: new Date('2018-10-20T00:00:00.000Z'),
  endDate: null,
  objective: "To perform a comprehensive study of Mercury, including its magnetic field, magnetosphere, interior structure, and surface.",
  achievements: [
    {
      date: new Date('2021-10-01T00:00:00.000Z'),
      description: "Successfully completed its first Mercury flyby."
    }
  ],
  instruments: [
    {
      name: "MPO",
      purpose: "Mercury Planetary Orbiter (ESA)"
    },
    {
      name: "Mio",
      purpose: "Mercury Magnetospheric Orbiter (JAXA)"
    }
  ],
  description: "BepiColombo is a joint mission of the European Space Agency (ESA) and the Japan Aerospace Exploration Agency (JAXA) to the planet Mercury. It comprises two satellites launched together that will map the planet and study its magnetic field.",
  nasaId: "Planet Mercury",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/BepiColombo_spacecraft_model.png/1280px-BepiColombo_spacecraft_model.png",
  timeline: [
    {
      date: new Date('2025-12-05T00:00:00.000Z'),
      event: "Target orbital insertion"
    }
  ],
  budget: "$2.0 billion"
},
{
  slug: "juice",
  name: "JUICE",
  agency: "ESA",
  type: "orbiter",
  status: "enroute",
  targetBody: "Jupiter",
  launchDate: new Date('2023-04-14T00:00:00.000Z'),
  endDate: null,
  objective: "To explore Jupiter and its three largest icy moons, focusing particularly on Ganymede as a potential planetary habitat.",
  achievements: [
    {
      date: new Date('2023-04-14T00:00:00.000Z'),
      description: "Successfully launched via Ariane 5."
    }
  ],
  instruments: [
    {
      name: "JANUS",
      purpose: "Optical camera system"
    },
    {
      name: "MAJIS",
      purpose: "Moons and Jupiter Imaging Spectrometer"
    }
  ],
  description: "Jupiter Icy Moons Explorer (JUICE) is an ESA interplanetary spacecraft in development. The mission will study three of Jupiter's Galilean moons: Ganymede, Callisto, and Europa, characterizing these orbital bodies to see if they possess habitable subsurface oceans.",
  nasaId: "Jupiter moons",
  coverImage: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200",
  timeline: [
    {
      date: new Date('2031-07-01T00:00:00.000Z'),
      event: "Target Jupiter orbit insertion"
    }
  ],
  budget: "$1.6 billion"
},
{
  slug: "mmx",
  name: "Martian Moons eXploration (MMX)",
  agency: "JAXA",
  type: "rover",
  status: "planned",
  targetBody: "Phobos",
  launchDate: new Date('2026-09-01T00:00:00.000Z'),
  endDate: null,
  objective: "To bring back the first samples from Mars’ largest moon, Phobos, and conduct detailed studies of Deimos.",
  achievements: [],
  instruments: [
    {
      name: "TENGOO",
      purpose: "Telescopic camera"
    },
    {
      name: "Idefix",
      purpose: "Rover provided by CNES/DLR"
    }
  ],
  description: "Martian Moons eXploration (MMX) is a robotic space probe in development by JAXA. The mission aims to investigate the origin of the Martian moons, Phobos and Deimos. It will land on Phobos, collect a surface sample, and return it to Earth.",
  nasaId: "Phobos moon",
  coverImage: "https://images.unsplash.com/photo-1632395627727-3b9aaec561be?q=80&w=1200",
  timeline: [
    {
      date: new Date('2026-09-01T00:00:00.000Z'),
      event: "Target launch"
    },
    {
      date: new Date('2031-07-01T00:00:00.000Z'),
      event: "Target sample return"
    }
  ],
  budget: "TBD"
},
{
  slug: "galileo",
  name: "Galileo",
  agency: "NASA",
  type: "orbiter",
  status: "completed",
  targetBody: "Jupiter",
  launchDate: new Date('1989-10-18T00:00:00.000Z'),
  endDate: new Date('2003-09-21T00:00:00.000Z'),
  objective: "To study the planet Jupiter and its moons, as well as the Gaspra and Ida asteroids.",
  achievements: [
    {
      date: new Date('1995-12-07T00:00:00.000Z'),
      description: "Deployed first probe into Jupiter's atmosphere."
    }
  ],
  instruments: [
    {
      name: "SSI",
      purpose: "Solid State Imager"
    }
  ],
  description: "The Galileo spacecraft was an unmanned spacecraft designed to study the planet Jupiter and its moons. Named after the astronomer Galileo Galilei, it became the first spacecraft to orbit Jupiter.",
  nasaId: "Planet Jupiter",
  coverImage: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200",
  timeline: [
    {
      date: new Date('1995-12-07T00:00:00.000Z'),
      event: "Orbital insertion"
    }
  ],
  budget: "$1.4 billion"
},
{
  slug: "osiris-rex",
  name: "OSIRIS-REx",
  agency: "NASA",
  type: "rover",
  status: "completed",
  targetBody: "Asteroid Bennu",
  launchDate: new Date('2016-09-08T00:00:00.000Z'),
  endDate: new Date('2023-09-24T00:00:00.000Z'),
  objective: "To travel to a near-Earth asteroid, Bennu, and bring a small sample back to Earth for study.",
  achievements: [
    {
      date: new Date('2023-09-24T00:00:00.000Z'),
      description: "Returned asteroid sample to Earth."
    }
  ],
  instruments: [
    {
      name: "TAGSAM",
      purpose: "Touch-And-Go Sample Acquisition Mechanism"
    }
  ],
  description: "OSIRIS-REx is a NASA asteroid-study and sample-return mission. The mission's primary goal was to obtain a sample of at least 60 grams from 101955 Bennu, a carbonaceous near-Earth asteroid.",
  nasaId: "Asteroid space",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/OSIRIS-REx_spacecraft_model.png/1280px-OSIRIS-REx_spacecraft_model.png",
  timeline: [
    {
      date: new Date('2023-09-24T00:00:00.000Z'),
      event: "Return capsule lands"
    }
  ],
  budget: "$1 billion"
},
{
  slug: "osiris-apex",
  name: "OSIRIS-APEX",
  agency: "NASA",
  type: "orbiter",
  status: "enroute",
  targetBody: "Asteroid Apophis",
  launchDate: new Date('2016-09-08T00:00:00.000Z'),
  endDate: null,
  objective: "To study the near-Earth asteroid Apophis during its close approach to Earth in 2029.",
  achievements: [],
  instruments: [
    {
      name: "OCAMS",
      purpose: "OSIRIS-REx Camera Suite"
    }
  ],
  description: "Following the successful sample return from Bennu, the OSIRIS-REx spacecraft was redirected on an extended mission to study the near-Earth asteroid Apophis, renamed as OSIRIS-APEX.",
  nasaId: "Asteroid space",
  coverImage: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1200",
  timeline: [
    {
      date: new Date('2029-04-13T00:00:00.000Z'),
      event: "Planned arrival at Apophis"
    }
  ],
  budget: "$200 million"
},
{
  slug: "davinci",
  name: "DAVINCI",
  agency: "NASA",
  type: "lander",
  status: "planned",
  targetBody: "Venus",
  launchDate: new Date('2029-06-01T00:00:00.000Z'),
  endDate: null,
  objective: "To measure the composition of Venus' atmosphere to understand how it formed and evolved, plus determine whether the planet ever had an ocean.",
  achievements: [],
  instruments: [
    {
      name: "VMS",
      purpose: "Venus Mass Spectrometer"
    }
  ],
  description: "Deep Atmosphere Venus Investigation of Noble gases, Chemistry, and Imaging (DAVINCI) is a planned mission to Venus. It will send a descent sphere to plunge through the planet's thick atmosphere.",
  nasaId: "Planet Venus",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/a/ae/DAVINCI_Venus_mission_descent.jpg",
  timeline: [
    {
      date: new Date('2029-06-01T00:00:00.000Z'),
      event: "Planned launch"
    }
  ],
  budget: "$500 million"
},
{
  slug: "veritas",
  name: "VERITAS",
  agency: "NASA",
  type: "orbiter",
  status: "planned",
  targetBody: "Venus",
  launchDate: new Date('2031-12-01T00:00:00.000Z'),
  endDate: null,
  objective: "To map Venus' surface to determine the planet's geologic history and understand why it developed so differently than Earth.",
  achievements: [],
  instruments: [
    {
      name: "VISAR",
      purpose: "Venus Interferometric Synthetic Aperture Radar"
    }
  ],
  description: "Venus Emissivity, Radio Science, InSAR, Topography, and Spectroscopy (VERITAS) is a planned NASA mission to map the surface of Venus in high resolution.",
  nasaId: "Planet Venus",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/VERITAS_array.jpg/1280px-VERITAS_array.jpg",
  timeline: [
    {
      date: new Date('2031-12-01T00:00:00.000Z'),
      event: "Planned"
    }
  ],
  budget: "$500 million"
},
{
  slug: "gsat-1",
  name: "GSAT-1",
  agency: "ISRO",
  type: "orbiter",
  status: "failed",
  targetBody: "Earth",
  launchDate: new Date('2001-04-18T00:00:00.000Z'),
  endDate: new Date('2001-04-18T00:00:00.000Z'),
  objective: "To conduct communication tests and demonstrate digital audio, video, and data broadcasting.",
  achievements: [],
  instruments: [
    {
      name: "Transponders",
      purpose: "Communication"
    }
  ],
  description: "GSAT-1 was an experimental communication satellite launched by ISRO on the first flight of the GSLV rocket. It failed to reach its intended geosynchronous orbit due to a premature shutdown of the rocket's final stage.",
  nasaId: "Satellite",
  coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
  timeline: [
    {
      date: new Date('2001-04-18T00:00:00.000Z'),
      event: "Launch failed to reach correct orbit"
    }
  ],
  budget: "TBD"
},
{
  slug: "risat-1",
  name: "RISAT-1",
  agency: "ISRO",
  type: "orbiter",
  status: "completed",
  targetBody: "Earth Orbit",
  launchDate: new Date('2012-04-26T00:00:00.000Z'),
  endDate: new Date('2017-03-01T00:00:00.000Z'),
  objective: "To use synthetic aperture radar (SAR) to observe Earth in all weather conditions, day and night.",
  achievements: [
    {
      date: new Date('2012-04-30T00:00:00.000Z'),
      description: "Started delivering vital crop and weather monitoring data."
    }
  ],
  instruments: [
    {
      name: "C-band SAR",
      purpose: "All-weather imaging"
    }
  ],
  description: "RISAT-1 was India's first indigenous all-weather Radar Imaging Satellite, whose images facilitated agriculture and disaster management. It notably used a C-band Synthetic Aperture Radar payload.",
  nasaId: "Radar satellite",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/2/27/Render_of_Radar_Imaging_Satellite_RISAT-1_in_deployed_configuration.png",
  timeline: [
    {
      date: new Date('2012-04-26T00:00:00.000Z'),
      event: "Launch"
    }
  ],
  budget: "TBD"
},
{
  slug: "mars-2",
  name: "Mars 2",
  agency: "Roscosmos",
  type: "lander",
  status: "failed",
  targetBody: "Mars",
  launchDate: new Date('1971-05-19T00:00:00.000Z'),
  endDate: new Date('1971-11-27T00:00:00.000Z'),
  objective: "To orbit Mars and land a probe on the Martian surface.",
  achievements: [
    {
      date: new Date('1971-11-27T00:00:00.000Z'),
      description: "First man-made object to reach the surface of Mars (crashed)."
    }
  ],
  instruments: [
    {
      name: "Lander module",
      purpose: "Surface probe"
    }
  ],
  description: "Mars 2 was an unmanned space probe of the Soviet Mars program. Its descent module became the first man-made object to reach the surface of Mars, although its descent system failed and the lander crashed.",
  nasaId: "Mars surface",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/f/f7/1972_CPA_4113.jpg",
  timeline: [
    {
      date: new Date('1971-11-27T00:00:00.000Z'),
      event: "Lander crashed on Mars"
    }
  ],
  budget: "Classified"
},
{
  slug: "mars-3",
  name: "Mars 3",
  agency: "Roscosmos",
  type: "lander",
  status: "completed",
  targetBody: "Mars",
  launchDate: new Date('1971-05-28T00:00:00.000Z'),
  endDate: new Date('1971-12-02T00:00:00.000Z'),
  objective: "To achieve the first fully successful soft landing on Mars.",
  achievements: [
    {
      date: new Date('1971-12-02T00:00:00.000Z'),
      description: "First spacecraft to attain a soft landing on Mars."
    }
  ],
  instruments: [
    {
      name: "PROP-M",
      purpose: "Mars rover"
    }
  ],
  description: "Mars 3 was a robotic space probe of the Soviet Mars program. The Mars 3 lander achieved the first soft landing on Mars on December 2, 1971. However, communication was inexplicably lost after 14.5 seconds.",
  nasaId: "Planet Mars",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/8/81/1972_CPA_4114.jpg",
  timeline: [
    {
      date: new Date('1971-12-02T00:00:00.000Z'),
      event: "Soft landing achieved, but failed soon after"
    }
  ],
  budget: "Classified"
},
{
  slug: "venera-13",
  name: "Venera 13",
  agency: "Roscosmos",
  type: "lander",
  status: "completed",
  targetBody: "Venus",
  launchDate: new Date('1981-10-30T00:00:00.000Z'),
  endDate: new Date('1982-03-01T00:00:00.000Z'),
  objective: "To return high-resolution color images of the surface of Venus and perform soil core sampling.",
  achievements: [
    {
      date: new Date('1982-03-01T00:00:00.000Z'),
      description: "Returned the first color photographs of the Venusian surface."
    }
  ],
  instruments: [
    {
      name: "X-ray fluorescence spectrometer",
      purpose: "Determine soil composition"
    }
  ],
  description: "Venera 13 was a probe in the Soviet Venera program for the exploration of Venus. It survived on the surface for 127 minutes, functioning well past its design life, and famously transmitted the first color images from the hellish surface of Venus.",
  nasaId: "Venus surface",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Venera_13_probe_-_illustrated.jpg",
  timeline: [
    {
      date: new Date('1982-03-01T00:00:00.000Z'),
      event: "Landed on Venus"
    }
  ],
  budget: "Classified"
},
{
  slug: "bion-m1",
  name: "Bion-M No. 1",
  agency: "Roscosmos",
  type: "orbiter",
  status: "completed",
  targetBody: "Earth Orbit",
  launchDate: new Date('2013-04-19T00:00:00.000Z'),
  endDate: new Date('2013-05-19T00:00:00.000Z'),
  objective: "To conduct biological research in space using living organisms (mice, geckos, fish, etc.).",
  achievements: [],
  instruments: [
    {
      name: "Bio-capsule",
      purpose: "Housing animals"
    }
  ],
  description: "Bion-M No.1 was a Russian space biology mission that carried various animals and plants into space for 30 days to study the effects of microgravity and radiation on living organisms.",
  nasaId: "Earth orbit",
  coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
  timeline: [
    {
      date: new Date('2013-05-19T00:00:00.000Z'),
      event: "Return capsule landed"
    }
  ],
  budget: "TBD"
},
{
  slug: "akatsuki",
  name: "Akatsuki",
  agency: "JAXA",
  type: "orbiter",
  status: "active",
  targetBody: "Venus",
  launchDate: new Date('2010-05-20T00:00:00.000Z'),
  endDate: null,
  objective: "To study the stratification of the atmosphere, atmospheric dynamics, and cloud physics of Venus.",
  achievements: [
    {
      date: new Date('2015-12-07T00:00:00.000Z'),
      description: "Successfully entered Venus orbit after a 5-year delay."
    }
  ],
  instruments: [
    {
      name: "IR1/IR2",
      purpose: "Infrared cameras"
    }
  ],
  description: "Akatsuki is a Japanese space probe tasked to study the atmosphere of Venus. After a failure to enter orbit in 2010, clever engineering allowed it to finally enter Venus orbit five years later in 2015, where it continues to return spectacular images of the planet's acid clouds.",
  nasaId: "Venus clouds",
  coverImage: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=1200",
  timeline: [
    {
      date: new Date('2015-12-07T00:00:00.000Z'),
      event: "Second attempt: successful orbital insertion"
    }
  ],
  budget: "$300 million"
},
{
  slug: "ikaros",
  name: "IKAROS",
  agency: "JAXA",
  type: "flyby",
  status: "completed",
  targetBody: "Venus",
  launchDate: new Date('2010-05-20T00:00:00.000Z'),
  endDate: new Date('2015-05-21T00:00:00.000Z'),
  objective: "To demonstrate solar sail technology in interplanetary space.",
  achievements: [
    {
      date: new Date('2010-07-09T00:00:00.000Z'),
      description: "First spacecraft to successfully demonstrate solar sail technology in interplanetary space."
    }
  ],
  instruments: [
    {
      name: "Solar Sail",
      purpose: "Propulsion and power"
    }
  ],
  description: "IKAROS (Interplanetary Kite-craft Accelerated by Radiation Of the Sun) was a JAXA experimental spacecraft. It was the first spacecraft to successfully demonstrate solar sail technology in interplanetary space, proving that sunlight alone can propel a craft.",
  nasaId: "Solar sail",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/IKAROS_IAC_2010.jpg/1280px-IKAROS_IAC_2010.jpg",
  timeline: [
    {
      date: new Date('2010-12-08T00:00:00.000Z'),
      event: "Flew past Venus"
    }
  ],
  budget: "$16 million"
},
{
  slug: "kaguya",
  name: "Kaguya (SELENE)",
  agency: "JAXA",
  type: "orbiter",
  status: "completed",
  targetBody: "Moon",
  launchDate: new Date('2007-09-14T00:00:00.000Z'),
  endDate: new Date('2009-06-10T00:00:00.000Z'),
  objective: "To obtain scientific data of the lunar origin and evolution, and to develop the technology for future lunar exploration.",
  achievements: [
    {
      date: new Date('2007-10-31T00:00:00.000Z'),
      description: "Captured first high-definition video of the \"Earth-rise\" from lunar orbit."
    }
  ],
  instruments: [
    {
      name: "HDTV",
      purpose: "High Definition Television Camera"
    }
  ],
  description: "SELENE, better known by its nickname Kaguya, was the second Japanese lunar orbiter spacecraft. It carried 15 scientific instruments and two small sub-satellites, successfully generating a comprehensive map of the Moon's gravity and topography.",
  nasaId: "Moon earth rise",
  coverImage: "https://images.unsplash.com/photo-1522030299830-16b8d3d049d9?q=80&w=1200",
  timeline: [
    {
      date: new Date('2009-06-10T00:00:00.000Z'),
      event: "Controlled impact on the Moon"
    }
  ],
  budget: "$480 million"
},
];
