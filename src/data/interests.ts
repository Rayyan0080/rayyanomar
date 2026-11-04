import { Section, Topic } from '../types';

/**
 * Personal interests.
 *
 * Personal statements are quoted from Rayyan's own writing (his SEG3125
 * portfolio and the profile on this site). Factual overviews describe each
 * subject in general terms and are kept apart from personal opinion. Never add
 * a title to a "watched", "completed" or "favourite" list unless Rayyan has
 * said so; use a `todo` block until then.
 */

const myTake = (what: string): Section => ({
  heading: 'My take',
  body: [{ todo: `Your personal thoughts on ${what}` }],
});

const watchedList = (what: string): Section => ({
  heading: 'Watched / favourites',
  body: [{ todo: `Titles from ${what} you have watched, and any favourites` }],
});

export const interests: Topic[] = [
  {
    slug: 'outdoor-activities',
    title: 'Outdoor Activities',
    summary: 'Mountain biking, walking, ice skating, rollerblading',
    sections: [
      {
        heading: 'Overview',
        body: ['Staying active and resetting off-screen through long-distance walking and mountain biking across Ontario\'s trails.'],
      },
      { heading: 'Mountain biking', body: [{ todo: 'Trails or areas you ride, and what you enjoy about it' }] },
      { heading: 'Walking', body: [{ todo: 'Favourite routes or long-distance walks' }] },
      { heading: 'Ice skating', body: [{ todo: 'Where and how often you skate' }] },
      { heading: 'Rollerblading', body: [{ todo: 'Where you rollerblade' }] },
    ],
  },
  {
    slug: 'anime',
    title: 'Anime',
    summary: 'Watchlist, completed titles, favourites and genres',
    sections: [{ heading: 'Genres', body: [{ todo: 'Genres you enjoy most' }] }],
    children: [
      { slug: 'watchlist', title: 'Watchlist', summary: 'Titles I plan to watch', sections: [{ heading: 'Watchlist', body: [{ todo: 'Anime you plan to watch' }] }] },
      { slug: 'completed', title: 'Completed', summary: 'Titles I have finished', sections: [{ heading: 'Completed', body: [{ todo: 'Anime you have finished' }] }] },
      { slug: 'favourites', title: 'Favourites', summary: 'Favourite titles and ratings', sections: [{ heading: 'Favourites', body: [{ todo: 'Favourite anime, with your own ratings if you want to include them' }] }] },
    ],
  },
  {
    slug: 'movies',
    title: 'Movies and Shows',
    summary: 'Marvel, Fast & Furious and Bollywood collections',
    sections: [{ heading: 'Collections', body: ['Films and series grouped by franchise or industry. Each collection has a factual overview; personal lists are kept separately.'] }],
    children: [
      {
        slug: 'marvel-cinematic-universe',
        title: 'Marvel Cinematic Universe',
        summary: 'Marvel Studios shared universe films',
        sections: [
          {
            heading: 'Overview',
            body: [
              "A shared universe of superhero films produced by Marvel Studios, beginning with Iron Man (2008). The films are released in numbered Phases, grouped into larger Sagas: Phases One to Three form the Infinity Saga, and Phases Four to Six form the Multiverse Saga.",
              { links: [{ label: 'My MCU watch-path project', href: '/projects/personal-projects/mcu-watchpath' }] },
            ],
          },
          watchedList('the MCU'),
        ],
      },
      {
        slug: 'disney-plus-marvel',
        title: 'Disney+ Marvel Productions',
        summary: 'Marvel Studios series on Disney+',
        sections: [
          {
            heading: 'Overview',
            body: ['Marvel Studios began releasing series set in the MCU on Disney+ in 2021, starting with WandaVision. The series run alongside the films and share their continuity.'],
          },
          watchedList('Disney+ Marvel series'),
        ],
      },
      {
        slug: 'fast-and-furious',
        title: 'Fast & Furious',
        summary: 'Street racing and heist action franchise',
        sections: [
          {
            heading: 'Overview',
            body: ['An action franchise that began with The Fast and the Furious (2001). It started around street racing in Los Angeles and grew into a series of large-scale heist and action films, plus the spin-off Hobbs & Shaw (2019).'],
          },
          watchedList('the Fast & Furious franchise'),
        ],
      },
      {
        slug: 'bollywood',
        title: 'Bollywood',
        summary: 'Hindi-language cinema',
        sections: [
          {
            heading: 'Overview',
            body: ['Bollywood is the Hindi-language film industry based in Mumbai, India. Its films are known for combining drama, romance and action with song-and-dance sequences.'],
          },
          watchedList('Bollywood'),
        ],
      },
    ],
  },
  {
    slug: 'motorsports',
    title: 'Motorsports',
    summary: 'Formula 1, endurance racing and rallying',
    sections: [
      {
        heading: 'Overview',
        body: ['Following and engaging with high-performance mechanical sports, from single-seater racing to endurance and rally.'],
      },
      myTake('motorsport in general'),
    ],
    children: [
      {
        slug: 'formula-1',
        title: 'Formula 1',
        summary: 'FIA Formula One World Championship',
        sections: [
          {
            heading: 'Overview',
            body: ['The FIA Formula One World Championship is the highest class of international single-seater circuit racing. The first World Championship season was held in 1950.'],
          },
          {
            heading: 'Format',
            body: [
              {
                list: [
                  'Each Grand Prix weekend has practice sessions, a three-part knockout qualifying session that sets the grid, and the race.',
                  'Some weekends are sprint weekends, which add a shorter sprint race with its own qualifying.',
                  'Points go to the top ten finishers (25-18-15-12-10-8-6-4-2-1).',
                  "Two titles are awarded each season: the Drivers' Championship and the Constructors' Championship.",
                ],
              },
            ],
          },
          {
            heading: 'Teams and manufacturers (2026)',
            body: [
              { fields: [
                ['teams', 'Alpine, Aston Martin, Audi, Cadillac, Ferrari, Haas, McLaren, Mercedes, Racing Bulls, Red Bull Racing, Williams'],
                ['power units', 'Audi, Ferrari, Honda, Mercedes, Red Bull Ford'],
              ] },
              '2026 introduced new chassis and power-unit regulations, with a larger share of electrical power and fully sustainable fuel.',
            ],
          },
          { heading: 'Related', body: [{ links: [{ label: 'My F1 dashboard project', href: '/projects/university-projects/f1-dashboard' }] }] },
          myTake('Formula 1'),
        ],
      },
      {
        slug: 'wec',
        title: 'World Endurance Championship (WEC)',
        summary: 'FIA World Endurance Championship',
        sections: [
          {
            heading: 'Overview',
            body: ['The FIA World Endurance Championship, first held in 2012, is a world championship for sports-car endurance racing, run with the Automobile Club de l\'Ouest (ACO). Races last from six hours up to the 24 Hours of Le Mans, and two or three drivers share each car.'],
          },
          {
            heading: 'Categories',
            body: [
              { list: [
                'Hypercar: the top class, combining Le Mans Hypercar (LMH) and LMDh prototypes, equalized by Balance of Performance.',
                'LMGT3: production-based GT3 cars, introduced in 2024.',
              ] },
            ],
          },
          {
            heading: 'Manufacturers',
            body: ['Manufacturers that have raced in the Hypercar class include Toyota, Ferrari, Porsche, Peugeot, Cadillac, BMW, Alpine, Lamborghini and Aston Martin.'],
          },
          myTake('the WEC'),
        ],
      },
      {
        slug: 'le-mans-24',
        title: '24 Hours of Le Mans',
        summary: 'The 24-hour race on the Circuit de la Sarthe',
        sections: [
          {
            heading: 'Overview',
            body: ['The 24 Hours of Le Mans has been held since 1923 on the Circuit de la Sarthe near Le Mans, France, and is organized by the Automobile Club de l\'Ouest (ACO). The circuit, about 13.6 km long, combines a permanent track with public roads, including the Mulsanne Straight.'],
          },
          {
            heading: 'Format',
            body: [
              { list: [
                'A round of the FIA World Endurance Championship.',
                'Several classes race at once; recent editions have run Hypercar, LMP2 and LMGT3.',
                'One of the three races of the Triple Crown of Motorsport, with the Monaco Grand Prix and the Indianapolis 500.',
              ] },
            ],
          },
          myTake('Le Mans'),
        ],
      },
      {
        slug: 'rolex-24-daytona',
        title: 'Rolex 24 at Daytona',
        summary: 'IMSA season-opening 24-hour race',
        sections: [
          {
            heading: 'Overview',
            body: ['A 24-hour sports-car race at Daytona International Speedway in Florida, run on a road course that uses parts of the oval\'s banking and the infield. It is held in late January and opens the IMSA WeatherTech SportsCar Championship season.'],
          },
          {
            heading: 'Categories',
            body: [{ list: ['GTP (prototypes, including LMDh cars)', 'LMP2', 'GTD PRO', 'GTD'] }],
          },
          myTake('the Rolex 24'),
        ],
      },
      {
        slug: 'wrc',
        title: 'World Rally Championship (WRC)',
        summary: 'FIA World Rally Championship',
        sections: [
          {
            heading: 'Overview',
            body: ['The FIA World Rally Championship has run since 1973. Instead of racing wheel to wheel, crews of a driver and a co-driver run timed special stages on closed public roads, one car at a time, over several days.'],
          },
          {
            heading: 'Format',
            body: [
              { list: [
                'Rallies are held on gravel, tarmac, snow and ice.',
                'The co-driver reads pace notes describing the road ahead.',
                'The lowest total time across all stages wins; a final Power Stage awards bonus points.',
              ] },
            ],
          },
          {
            heading: 'Categories and manufacturers',
            body: [
              { fields: [
                ['top class', 'Rally1'],
                ['support classes', 'WRC2 (Rally2 cars) and others'],
                ['Rally1 teams', 'Toyota Gazoo Racing, Hyundai Motorsport, M-Sport Ford'],
              ] },
            ],
          },
          myTake('the WRC'),
        ],
      },
      {
        slug: 'nurburgring-24',
        title: '24 Hours of Nürburgring',
        summary: '24-hour race on the Nordschleife',
        sections: [
          {
            heading: 'Overview',
            body: ['A 24-hour race held at the Nürburgring in Germany since 1970. It combines the Nordschleife with the Grand Prix circuit for a lap of over 25 km.'],
          },
          {
            heading: 'Format',
            body: [
              { list: [
                'Fields often exceed 100 cars, mixing professional and amateur drivers.',
                'Cars range from production-based entries to GT3 machinery, which contests the top class (SP9).',
                'Factory-supported GT3 teams have included Porsche, BMW, Mercedes-AMG and Audi.',
              ] },
            ],
          },
          myTake('the Nürburgring 24'),
        ],
      },
    ],
  },
  {
    slug: 'photography',
    title: 'Photography',
    summary: 'Photography interest and selected photos',
    sections: [
      { heading: 'Why photography', body: [{ todo: 'What draws you to photography' }] },
      { heading: 'Categories', body: [{ todo: 'Kinds of photography you shoot (e.g. landscape, street, automotive)' }] },
      { heading: 'Selected photographs', body: [{ todo: 'Photos you choose to publish (add the files to public/photos/)' }] },
      { heading: 'Equipment and techniques', body: [{ todo: 'Camera, lenses and techniques you use' }] },
    ],
  },
  {
    slug: 'technology',
    title: 'Technology',
    summary: 'Software, security, hardware and emerging tech',
    sections: [
      {
        heading: 'Software engineering',
        body: ['Building scalable, event-driven architectures and multi-agent AI systems. I study Software Engineering (Co-op) at the University of Ottawa.'],
      },
      {
        heading: 'Cybersecurity',
        body: [
          'Designing secure network architectures, DNS routing, VPN implementations and resilient cloud deployments.',
          { links: [{ label: 'AeroGuard, an AI security operations platform', href: '/projects/software-development/aeroguard' }] },
        ],
      },
      {
        heading: 'Programming',
        body: [{ fields: [['languages', 'Java, Python, JavaScript, TypeScript, SQL, HTML/CSS'], ['frameworks', 'FastAPI, React, Node.js, Spring Boot, Express, JUnit']] }],
      },
      {
        heading: 'Computer hardware',
        body: [
          'Configuring self-hosted Linux server infrastructure, including secure remote networking.',
          { todo: 'Hardware you build or run (servers, PCs, components)' },
        ],
      },
      {
        heading: 'Emerging technologies',
        body: ['Experimenting with offline, locally hosted large language models to explore AI capabilities, data privacy and secure deployment.'],
      },
      {
        heading: 'Hackathons',
        body: [
          'Competing to build professional-grade security tools and command centres under strict time constraints.',
          { links: [{ label: 'Hackathon history', href: '/experience/hackathons' }] },
        ],
      },
    ],
  },
];
