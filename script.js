(function(){
  "use strict";

  var ACTORS = [
  {
    "name": "James Spader",
    "photo": "JamesSpader",
    "initials": "JS",
    "imdb": "https://www.imdb.com/name/nm0000652/",
    "tmdb": "https://www.themoviedb.org/person/9273-james-spader",
    "wiki": "https://en.wikipedia.org/wiki/James_Spader",
    "grokipedia": "https://grokipedia.com/page/James_Spader",
    "favs": [
      {
        "t": "Boston Legal",
        "u": "https://www.imdb.com/title/tt0402711/"
      },
      {
        "t": "Stargate",
        "u": "https://www.imdb.com/title/tt0111282/"
      }
    ]
  },
  {
    "name": "Catherine Zeta-Jones",
    "photo": "CatherineZetaJones",
    "initials": "CZ",
    "imdb": "https://www.imdb.com/name/nm0001876/",
    "tmdb": "https://www.themoviedb.org/person/2632-catherine-zeta-jones",
    "wiki": "https://en.wikipedia.org/wiki/Catherine_Zeta-Jones",
    "grokipedia": "https://grokipedia.com/page/Catherine_Zeta-Jones",
    "favs": [
      {
        "t": "Intolerable Cruelty",
        "u": "https://www.imdb.com/title/tt0138524/"
      },
      {
        "t": "The Mask of Zorro",
        "u": "https://www.imdb.com/title/tt0120746/"
      }
    ]
  },
  {
    "name": "Johnny Depp",
    "photo": "JohnnyDepp",
    "initials": "JD",
    "imdb": "https://www.imdb.com/name/nm0000136/",
    "tmdb": "https://www.themoviedb.org/person/85-johnny-depp",
    "wiki": "https://en.wikipedia.org/wiki/Johnny_Depp",
    "grokipedia": "https://grokipedia.com/page/Johnny_Depp",
    "favs": [
      {
        "t": "Secret Window",
        "u": "https://www.imdb.com/title/tt0363988/"
      },
      {
        "t": "Fear and Loathing in Las Vegas",
        "u": "https://www.imdb.com/title/tt0120669/"
      }
    ]
  },
  {
    "name": "Salma Hayek",
    "photo": "SalmaHayek",
    "initials": "SH",
    "imdb": "https://www.imdb.com/name/nm0000161/",
    "tmdb": "https://www.themoviedb.org/person/1231-salma-hayek",
    "wiki": "https://en.wikipedia.org/wiki/Salma_Hayek",
    "grokipedia": "https://grokipedia.com/page/Salma_Hayek",
    "favs": [
      {
        "t": "Once Upon a Time in Mexico",
        "u": "https://www.imdb.com/title/tt0285823/"
      },
      {
        "t": "Dogma",
        "u": "https://www.imdb.com/title/tt0120655/"
      }
    ]
  },
  {
    "name": "Jason Statham",
    "photo": "JasonStatham",
    "initials": "JS",
    "imdb": "https://www.imdb.com/name/nm0005458/",
    "tmdb": "https://www.themoviedb.org/person/976-jason-statham",
    "wiki": "https://en.wikipedia.org/wiki/Jason_Statham",
    "grokipedia": "https://grokipedia.com/page/Jason_Statham",
    "favs": [
      {
        "t": "Revolver",
        "u": "https://www.imdb.com/title/tt0365686/"
      },
      {
        "t": "Snatch",
        "u": "https://www.imdb.com/title/tt0208092/"
      }
    ]
  },
  {
    "name": "Anna Paquin",
    "photo": "AnnaPaquin",
    "initials": "AP",
    "imdb": "https://www.imdb.com/name/nm0001593/",
    "tmdb": "https://www.themoviedb.org/person/10690-anna-paquin",
    "wiki": "https://en.wikipedia.org/wiki/Anna_Paquin",
    "grokipedia": "https://grokipedia.com/page/Anna_Paquin",
    "favs": [
      {
        "t": "True Blood",
        "u": "https://www.imdb.com/title/tt0844441/"
      },
      {
        "t": "X-Men series",
        "u": "https://www.imdb.com/find/?q=x-men"
      }
    ]
  },
  {
    "name": "Jared Leto",
    "photo": "JaredLeto",
    "initials": "JL",
    "imdb": "https://www.imdb.com/name/nm0001467/",
    "tmdb": "https://www.themoviedb.org/person/170-jared-leto",
    "wiki": "https://en.wikipedia.org/wiki/Jared_Leto",
    "grokipedia": "https://grokipedia.com/page/Jared_Leto",
    "favs": [
      {
        "t": "Requiem for a Dream",
        "u": "https://www.imdb.com/title/tt0187078/"
      },
      {
        "t": "Lord of War",
        "u": "https://www.imdb.com/title/tt0399295/"
      },
      {
        "t": "♪ Thirty Seconds to Mars",
        "u": "https://www.youtube.com/watch?v=8yvGCAvOAfM"
      }
    ]
  },
  {
    "name": "Natasha Lyonne",
    "photo": "NatashaLyonne",
    "initials": "NL",
    "imdb": "https://www.imdb.com/name/nm0005169/",
    "tmdb": "https://www.themoviedb.org/person/3896-natasha-lyonne",
    "wiki": "https://en.wikipedia.org/wiki/Natasha_Lyonne",
    "grokipedia": "https://grokipedia.com/page/Natasha_Lyonne",
    "favs": [
      {
        "t": "Russian Doll",
        "u": "https://www.imdb.com/title/tt7520794/"
      },
      {
        "t": "Poker Face",
        "u": "https://www.imdb.com/title/tt14269590/"
      }
    ]
  },
  {
    "name": "Edward Norton",
    "photo": "EdwardNorton",
    "initials": "EN",
    "imdb": "https://www.imdb.com/name/nm0001570/",
    "tmdb": "https://www.themoviedb.org/person/819-edward-norton",
    "wiki": "https://en.wikipedia.org/wiki/Edward_Norton",
    "grokipedia": "https://grokipedia.com/page/Edward_Norton",
    "favs": [
      {
        "t": "Fight Club",
        "u": "https://www.imdb.com/title/tt0137523/"
      },
      {
        "t": "The Illusionist",
        "u": "https://www.imdb.com/title/tt0443543/"
      }
    ]
  },
  {
    "name": "Hayden Panettiere",
    "photo": "HaydenPanettiere",
    "initials": "HP",
    "imdb": "https://www.imdb.com/name/nm0659363/",
    "tmdb": "https://www.themoviedb.org/person/17265-hayden-panettiere",
    "wiki": "https://en.wikipedia.org/wiki/Hayden_Panettiere",
    "grokipedia": "https://grokipedia.com/page/Hayden_Panettiere",
    "favs": [
      {
        "t": "Heroes",
        "u": "https://www.imdb.com/title/tt0813715/"
      }
    ]
  },
  {
    "name": "Iain Glen",
    "photo": "IainGlen",
    "initials": "IG",
    "imdb": "https://www.imdb.com/name/nm0322513/",
    "tmdb": "https://www.themoviedb.org/person/20508-iain-glen",
    "wiki": "https://en.wikipedia.org/wiki/Iain_Glen",
    "grokipedia": "https://grokipedia.com/page/Iain_Glen",
    "favs": [
      {
        "t": "Jack Taylor",
        "u": "https://www.imdb.com/title/tt6954652/"
      }
    ]
  },
  {
    "name": "Vin Diesel",
    "photo": "VinDiesel",
    "initials": "VD",
    "imdb": "https://www.imdb.com/name/nm0004874/",
    "tmdb": "https://www.themoviedb.org/person/12835-vin-diesel",
    "wiki": "https://en.wikipedia.org/wiki/Vin_Diesel",
    "grokipedia": "https://grokipedia.com/page/Vin_Diesel",
    "favs": [
      {
        "t": "The Chronicles of Riddick",
        "u": "https://www.imdb.com/title/tt0296572/"
      },
      {
        "t": "xXx",
        "u": "https://www.imdb.com/title/tt0295701/"
      }
    ]
  },
  {
    "name": "Milla Jovovich",
    "photo": "MillaJovovich",
    "initials": "MJ",
    "imdb": "https://www.imdb.com/name/nm0000170/",
    "tmdb": "https://www.themoviedb.org/person/63-milla-jovovich",
    "wiki": "https://en.wikipedia.org/wiki/Milla_Jovovich",
    "grokipedia": "https://grokipedia.com/page/Milla_Jovovich",
    "favs": [
      {
        "t": "Resident Evil series",
        "u": "https://www.imdb.com/find/?q=resident%20evil"
      }
    ]
  },
  {
    "name": "Kevin Spacey",
    "photo": null,
    "initials": "KS",
    "imdb": "https://www.imdb.com/name/nm0000228/",
    "tmdb": "https://www.themoviedb.org/person/1100-kevin-spacey",
    "wiki": "https://en.wikipedia.org/wiki/Kevin_Spacey",
    "grokipedia": "https://grokipedia.com/page/Kevin_Spacey",
    "favs": [
      {
        "t": "American Beauty",
        "u": "https://www.imdb.com/title/tt0169547/"
      },
      {
        "t": "Seven",
        "u": "https://www.imdb.com/title/tt0114369/"
      }
    ]
  },
  {
    "name": "Michelle Rodriguez",
    "photo": null,
    "initials": "MR",
    "imdb": "https://www.imdb.com/name/nm0735442/",
    "tmdb": "https://www.themoviedb.org/person/5527-michelle-rodriguez",
    "wiki": "https://en.wikipedia.org/wiki/Michelle_Rodriguez",
    "grokipedia": "https://grokipedia.com/page/Michelle_Rodriguez",
    "favs": [
      {
        "t": "The Fast and the Furious",
        "u": "https://www.imdb.com/title/tt0232500/"
      },
      {
        "t": "Resident Evil series",
        "u": "https://www.imdb.com/find/?q=resident%20evil"
      }
    ]
  },
  {
    "name": "Hugo Weaving",
    "photo": null,
    "initials": "HW",
    "imdb": "https://www.imdb.com/name/nm0915989/",
    "tmdb": "https://www.themoviedb.org/person/509-hugo-weaving",
    "wiki": "https://en.wikipedia.org/wiki/Hugo_Weaving",
    "grokipedia": "https://grokipedia.com/page/Hugo_Weaving",
    "favs": [
      {
        "t": "V for Vendetta",
        "u": "https://www.imdb.com/title/tt0434409/"
      },
      {
        "t": "Matrix Revolutions",
        "u": "https://www.imdb.com/title/tt0242653/"
      }
    ]
  },
  {
    "name": "Eva Mendes",
    "photo": null,
    "initials": "EM",
    "imdb": "https://www.imdb.com/name/nm0578949/",
    "tmdb": "https://www.themoviedb.org/person/8170-eva-mendes",
    "wiki": "https://en.wikipedia.org/wiki/Eva_Mendes",
    "grokipedia": "https://grokipedia.com/page/Eva_Mendes",
    "favs": [
      {
        "t": "Ghost Rider",
        "u": "https://www.imdb.com/title/tt0259324/"
      },
      {
        "t": "Once Upon a Time in Mexico",
        "u": "https://www.imdb.com/title/tt0285823/"
      }
    ]
  },
  {
    "name": "Robert Downey Jr.",
    "photo": null,
    "initials": "RJ",
    "imdb": "https://www.imdb.com/name/nm0000375/",
    "tmdb": "https://www.themoviedb.org/person/3223-robert-downey-jr",
    "wiki": "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    "grokipedia": "https://grokipedia.com/page/Robert_Downey_Jr.",
    "favs": [
      {
        "t": "Zodiac",
        "u": "https://www.imdb.com/title/tt0443706/"
      },
      {
        "t": "Oppenheimer",
        "u": "https://www.imdb.com/title/tt15398776/"
      }
    ]
  },
  {
    "name": "Fiona Dourif",
    "photo": null,
    "initials": "FD",
    "imdb": "https://www.imdb.com/name/nm1875040/",
    "tmdb": "https://www.themoviedb.org/person/121986-fiona-dourif",
    "wiki": "https://en.wikipedia.org/wiki/Fiona_Dourif",
    "grokipedia": "https://grokipedia.com/page/Fiona_Dourif",
    "favs": [
      {
        "t": "Dirk Gently's Holistic Detective Agency",
        "u": "https://www.imdb.com/title/tt4047038/"
      }
    ]
  },
  {
    "name": "Richard Roxburgh",
    "photo": null,
    "initials": "RR",
    "imdb": "https://www.imdb.com/name/nm0746896/",
    "tmdb": "https://www.themoviedb.org/person/7908-richard-roxburgh",
    "wiki": "https://en.wikipedia.org/wiki/Richard_Roxburgh",
    "grokipedia": "https://grokipedia.com/page/Richard_Roxburgh",
    "favs": [
      {
        "t": "Rake",
        "u": "https://www.imdb.com/title/tt1587000/"
      },
      {
        "t": "Van Helsing",
        "u": "https://www.imdb.com/title/tt0338526/"
      }
    ]
  },
  {
    "name": "Aidan Gallagher",
    "photo": null,
    "initials": "AG",
    "imdb": "https://www.imdb.com/name/nm6200897/",
    "tmdb": "https://www.themoviedb.org/person/1394116-aidan-gallagher",
    "wiki": "https://en.wikipedia.org/wiki/Aidan_Gallagher",
    "grokipedia": "https://grokipedia.com/page/Aidan_Gallagher",
    "favs": [
      {
        "t": "Umbrella Academy",
        "u": "https://www.imdb.com/title/tt1312171/"
      }
    ]
  },
  {
    "name": "Robert Sheehan",
    "photo": null,
    "initials": "RS",
    "imdb": "https://www.imdb.com/name/nm1588066/",
    "tmdb": "https://www.themoviedb.org/person/228126-robert-sheehan",
    "wiki": "https://en.wikipedia.org/wiki/Robert_Sheehan",
    "grokipedia": "https://grokipedia.com/page/Robert_Sheehan",
    "favs": [
      {
        "t": "Misfits",
        "u": "https://www.imdb.com/title/tt1548850/"
      },
      {
        "t": "Umbrella Academy",
        "u": "https://www.imdb.com/title/tt1312171/"
      }
    ]
  },
  {
    "name": "Ian McShane",
    "photo": null,
    "initials": "IM",
    "imdb": "https://www.imdb.com/name/nm0574534/",
    "tmdb": "https://www.themoviedb.org/person/16577-ian-mcshane",
    "wiki": "https://en.wikipedia.org/wiki/Ian_McShane",
    "grokipedia": "https://grokipedia.com/page/Ian_McShane",
    "favs": [
      {
        "t": "Deadwood",
        "u": "https://www.imdb.com/title/tt0348914/"
      },
      {
        "t": "Pirates of the Caribbean series",
        "u": "https://www.imdb.com/find/?q=pirates%20of%20the%20carribean"
      }
    ]
  },
  {
    "name": "Kate Beckinsale",
    "photo": null,
    "initials": "KB",
    "imdb": "https://www.imdb.com/name/nm0000295/",
    "tmdb": "https://www.themoviedb.org/person/5679-kate-beckinsale",
    "wiki": "https://en.wikipedia.org/wiki/Kate_Beckinsale",
    "grokipedia": "https://grokipedia.com/page/Kate_Beckinsale",
    "favs": [
      {
        "t": "Underworld series",
        "u": "https://www.imdb.com/find/?q=underworld"
      },
      {
        "t": "Van Helsing",
        "u": "https://www.imdb.com/title/tt0338526/"
      }
    ]
  },
  {
    "name": "Stuart Townsend",
    "photo": null,
    "initials": "ST",
    "imdb": "https://www.imdb.com/name/nm0870204/",
    "tmdb": "https://www.themoviedb.org/person/11280-stuart-townsend",
    "wiki": "https://en.wikipedia.org/wiki/Stuart_Townsend",
    "grokipedia": "https://grokipedia.com/page/Stuart_Townsend",
    "favs": [
      {
        "t": "Queen of the Damned",
        "u": "https://www.imdb.com/title/tt0238546/"
      },
      {
        "t": "The League of Extraordinary Gentlemen",
        "u": "https://www.imdb.com/title/tt0311429/"
      }
    ]
  },
  {
    "name": "John Noble",
    "photo": null,
    "initials": "JN",
    "imdb": "https://www.imdb.com/name/nm0633604/",
    "tmdb": "https://www.themoviedb.org/person/18029-john-noble",
    "wiki": "https://en.wikipedia.org/wiki/John_Noble",
    "grokipedia": "https://grokipedia.com/page/John_Noble",
    "favs": [
      {
        "t": "Fringe",
        "u": "https://www.imdb.com/title/tt1119644/"
      }
    ]
  },
  {
    "name": "Jamie Campbell Bower",
    "photo": null,
    "initials": "JB",
    "imdb": "https://www.imdb.com/name/nm2570429/",
    "tmdb": "https://www.themoviedb.org/person/55085-jamie-campbell-bower",
    "wiki": "https://en.wikipedia.org/wiki/Jamie_Campbell_Bower",
    "grokipedia": "https://grokipedia.com/page/Jamie_Campbell_Bower",
    "favs": [
      {
        "t": "The Mortal Instruments: City of Bones",
        "u": "https://www.imdb.com/title/tt1538403/"
      }
    ]
  },
  {
    "name": "Vincent D'Onofrio",
    "photo": null,
    "initials": "VO",
    "imdb": "https://www.imdb.com/name/nm0000352/",
    "tmdb": "https://www.themoviedb.org/person/5293-vincent-d-onofrio",
    "wiki": "https://en.wikipedia.org/wiki/Vincent_D%27Onofrio",
    "grokipedia": "https://grokipedia.com/page/Vincent_D%27Onofrio",
    "favs": [
      {
        "t": "Law & Order: Criminal Intent",
        "u": "https://www.imdb.com/title/tt0275140/"
      }
    ]
  },
  {
    "name": "Theo James",
    "photo": null,
    "initials": "TJ",
    "imdb": "https://www.imdb.com/name/nm3772243/",
    "tmdb": "https://www.themoviedb.org/person/110100-theo-james",
    "wiki": "https://en.wikipedia.org/wiki/Theo_James",
    "grokipedia": "https://grokipedia.com/page/Theo_James",
    "favs": [
      {
        "t": "The Gentlemen",
        "u": "https://www.imdb.com/title/tt13210838/"
      },
      {
        "t": "Underworld series",
        "u": "https://www.imdb.com/find/?q=underworld"
      }
    ]
  },
  {
    "name": "David Suchet",
    "photo": null,
    "initials": "DS",
    "imdb": "https://www.imdb.com/name/nm0837064/",
    "tmdb": "https://www.themoviedb.org/person/3126-david-suchet",
    "wiki": "https://en.wikipedia.org/wiki/David_Suchet",
    "grokipedia": "https://grokipedia.com/page/David_Suchet",
    "favs": [
      {
        "t": "Poirot",
        "u": "https://www.imdb.com/title/tt0094525/"
      }
    ]
  },
  {
    "name": "Vinnie Jones",
    "photo": null,
    "initials": "VJ",
    "imdb": "https://www.imdb.com/name/nm0005068/",
    "tmdb": "https://www.themoviedb.org/person/10882-vinnie-jones",
    "wiki": "https://en.wikipedia.org/wiki/Vinnie_Jones",
    "grokipedia": "https://grokipedia.com/page/Vinnie_Jones",
    "favs": [
      {
        "t": "Snatch",
        "u": "https://www.imdb.com/title/tt0208092/"
      },
      {
        "t": "Lock, Stock and Two Smoking Barrels",
        "u": "https://www.imdb.com/title/tt0120735/"
      }
    ]
  },
  {
    "name": "Hugh Jackman",
    "photo": null,
    "initials": "HJ",
    "imdb": "https://www.imdb.com/name/nm0413168/",
    "tmdb": "https://www.themoviedb.org/person/6968-hugh-jackman",
    "wiki": "https://en.wikipedia.org/wiki/Hugh_Jackman",
    "grokipedia": "https://grokipedia.com/page/Hugh_Jackman",
    "favs": [
      {
        "t": "Swordfish",
        "u": "https://www.imdb.com/title/tt0244244/"
      },
      {
        "t": "X-Men",
        "u": "https://www.imdb.com/title/tt0120903/"
      }
    ]
  },
  {
    "name": "John Nettles",
    "photo": null,
    "initials": "JN",
    "imdb": "https://www.imdb.com/name/nm0626719/",
    "tmdb": "https://www.themoviedb.org/person/123770-john-nettles",
    "wiki": "https://en.wikipedia.org/wiki/John_Nettles",
    "grokipedia": "https://grokipedia.com/page/John_Nettles",
    "favs": [
      {
        "t": "Midsomer Murders",
        "u": "https://www.imdb.com/title/tt0118401/"
      }
    ]
  },
  {
    "name": "Jensen Ackles",
    "photo": null,
    "initials": "JA",
    "imdb": "https://www.imdb.com/name/nm0010075/",
    "tmdb": "https://www.themoviedb.org/person/54882-jensen-ackles",
    "wiki": "https://en.wikipedia.org/wiki/Jensen_Ackles",
    "grokipedia": "https://grokipedia.com/page/Jensen_Ackles",
    "favs": [
      {
        "t": "Supernatural",
        "u": "https://www.imdb.com/title/tt0460681/"
      }
    ]
  },
  {
    "name": "John Hannah",
    "photo": null,
    "initials": "JH",
    "imdb": "https://www.imdb.com/name/nm0001314/",
    "tmdb": "https://www.themoviedb.org/person/57755-john-hannah",
    "wiki": "https://en.wikipedia.org/wiki/John_Hannah_(actor)",
    "grokipedia": "https://grokipedia.com/page/John_Hannah_(actor)",
    "favs": [
      {
        "t": "The Mummy",
        "u": "https://www.imdb.com/title/tt0120616/"
      },
      {
        "t": "Poirot",
        "u": "https://www.imdb.com/title/tt0094525/"
      }
    ]
  },
  {
    "name": "Tom Hardy",
    "photo": null,
    "initials": "TH",
    "imdb": "https://www.imdb.com/name/nm0362766/",
    "tmdb": "https://www.themoviedb.org/person/2524-tom-hardy",
    "wiki": "https://en.wikipedia.org/wiki/Tom_Hardy",
    "grokipedia": "https://grokipedia.com/page/Tom_Hardy",
    "favs": [
      {
        "t": "Venom series",
        "u": "https://www.imdb.com/find/?q=venom"
      },
      {
        "t": "Bikeriders",
        "u": "https://www.imdb.com/title/tt21454134/"
      }
    ]
  },
  {
    "name": "Hayden Christensen",
    "photo": null,
    "initials": "HC",
    "imdb": "https://www.imdb.com/name/nm0159789/",
    "tmdb": "https://www.themoviedb.org/person/17244-hayden-christensen",
    "wiki": "https://en.wikipedia.org/wiki/Hayden_Christensen",
    "grokipedia": "https://grokipedia.com/page/Hayden_Christensen",
    "favs": [
      {
        "t": "Star Wars series",
        "u": "https://www.imdb.com/find/?q=star%20wars"
      },
      {
        "t": "Jumper",
        "u": "https://www.imdb.com/title/tt0489099/"
      }
    ]
  },
  {
    "name": "Chris Evans",
    "photo": null,
    "initials": "CE",
    "imdb": "https://www.imdb.com/name/nm0262635/",
    "tmdb": "https://www.themoviedb.org/person/16828-chris-evans",
    "wiki": "https://en.wikipedia.org/wiki/Chris_Evans_(actor)",
    "grokipedia": "https://grokipedia.com/page/Chris_Evans_(actor)",
    "favs": [
      {
        "t": "Push",
        "u": "https://www.imdb.com/title/tt0465580/"
      }
    ]
  },
  {
    "name": "Ryan Phillippe",
    "photo": null,
    "initials": "RP",
    "imdb": "https://www.imdb.com/name/nm0000202/",
    "tmdb": "https://www.themoviedb.org/person/11864-ryan-phillippe",
    "wiki": "https://en.wikipedia.org/wiki/Ryan_Phillippe",
    "grokipedia": "https://grokipedia.com/page/Ryan_Phillippe",
    "favs": [
      {
        "t": "Cruel Intentions",
        "u": "https://www.imdb.com/title/tt0139134/"
      }
    ]
  }
];
  var ASSETS = {
  "imdb": "images/imdb.png",
  "tmdb": "images/tmdb.png",
  "wikipedia": "images/wikipedia.png",
  "JamesSpader": "images/JamesSpader.jpg",
  "CatherineZetaJones": "images/CatherineZetaJones.jpg",
  "JohnnyDepp": "images/JohnnyDepp.jpg",
  "SalmaHayek": "images/SalmaHayek.jpg",
  "JasonStatham": "images/JasonStatham.jpg",
  "AnnaPaquin": "images/AnnaPaquin.jpg",
  "JaredLeto": "images/JaredLeto.jpg",
  "NatashaLyonne": "images/NatashaLyonne.jpg",
  "EdwardNorton": "images/EdwardNorton.jpg",
  "HaydenPanettiere": "images/HaydenPanettiere.jpg",
  "IainGlen": "images/IainGlen.jpg",
  "VinDiesel": "images/VinDiesel.jpg",
  "MillaJovovich": "images/MillaJovovich.jpg"
};

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- starfield ---------- */
  (function starfield(){
    var canvas = document.getElementById('starfield');
    var ctx = canvas.getContext('2d');
    var stars = [];
    var w, h, dpr;

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round((w * h) / 6500);
      stars = [];
      for (var i = 0; i < count; i++){
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + .3,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * .015 + .006
        });
      }
    }

    function draw(t){
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++){
        var s = stars[i];
        var tw = reduceMotion ? 0.75 : (Math.sin(s.phase + t * s.speed) * .35 + .65);
        ctx.globalAlpha = tw * 0.85;
        ctx.fillStyle = '#e9defb';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion) requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    requestAnimationFrame(draw);
  })();

  /* ---------- spiral layout ---------- */
  var stage = document.getElementById('stage');
  var arcsSvg = document.getElementById('arcs');
  var n = ACTORS.length;
  var GA = 137.50776 * Math.PI / 180;
  var R0 = 34, C = (48 - R0) / Math.sqrt(n);

  var points = [];
  ACTORS.forEach(function(actor, idx){
    var i = idx + 1;
    var angle = i * GA;
    var radius = R0 + C * Math.sqrt(i);
    var x = 50 + radius * Math.cos(angle);
    var y = 50 + radius * Math.sin(angle);
    var size = 98 - (idx / Math.max(1, n - 1)) * 40;
    points.push({ actor: actor, x: x, y: y, size: size, idx: idx });
  });

  var pathD = 'M 50 50';
  points.forEach(function(p){ pathD += ' L ' + p.x.toFixed(2) + ' ' + p.y.toFixed(2); });
  var arcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  arcPath.setAttribute('d', pathD);
  arcsSvg.appendChild(arcPath);

  var overlay = document.getElementById('overlay');
  var card = document.getElementById('card');
  var cardPortrait = document.getElementById('cardPortrait');
  var cardName = document.getElementById('card-name');
  var cardLinks = document.getElementById('cardLinks');
  var cardFavs = document.getElementById('cardFavs');
  var closeBtn = document.getElementById('closeBtn');
  var hint = document.getElementById('hint');

  function openCard(actor, nodeEl){
    var rect = nodeEl.getBoundingClientRect();
    var ox = ((rect.left + rect.width / 2) / window.innerWidth * 100).toFixed(1) + '%';
    var oy = ((rect.top + rect.height / 2) / window.innerHeight * 100).toFixed(1) + '%';
    card.style.setProperty('--ox', ox);
    card.style.setProperty('--oy', oy);

    if (actor.photo){
      cardPortrait.className = 'card-portrait';
      cardPortrait.style.backgroundImage = 'url(' + ASSETS[actor.photo] + ')';
      cardPortrait.innerHTML = '';
    } else {
      cardPortrait.className = 'card-portrait sigil';
      cardPortrait.style.backgroundImage = '';
      cardPortrait.innerHTML = '<span class="initials">' + actor.initials + '</span>';
    }

    cardName.textContent = actor.name;

    cardLinks.innerHTML = '';
    [
      ['imdb', actor.imdb, 'IMDb'],
      ['tmdb', actor.tmdb, 'TMDB'],
      ['wikipedia', actor.wiki, 'Wikipedia'],
      ['grokipedia', actor.grokipedia, 'Grokipedia']
    ].forEach(function(pair){
      var a = document.createElement('a');
      a.href = pair[1];
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'icon-link';
      a.setAttribute('aria-label', pair[2]);
      if (ASSETS[pair[0]]){
        var img = document.createElement('img');
        img.src = ASSETS[pair[0]];
        img.alt = pair[2];
        a.appendChild(img);
      } else {
        var mark = document.createElement('span');
        mark.className = 'mark';
        mark.textContent = 'G';
        mark.setAttribute('aria-hidden', 'true');
        a.appendChild(mark);
      }
      cardLinks.appendChild(a);
    });

    cardFavs.innerHTML = '';
    actor.favs.forEach(function(f){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = f.u;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = f.t;
      li.appendChild(a);
      cardFavs.appendChild(li);
    });

    overlay.classList.add('open');
    closeBtn.focus();
    hint.classList.add('faded');
  }

  function closeCard(){
    overlay.classList.remove('open');
  }

  closeBtn.addEventListener('click', closeCard);
  overlay.addEventListener('click', function(e){ if (e.target === overlay) closeCard(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeCard(); });

  points.forEach(function(p){
    var wrap = document.createElement('div');
    wrap.className = 'node-wrap';
    wrap.style.left = p.x + '%';
    wrap.style.top = p.y + '%';
    wrap.style.width = p.size + 'px';
    wrap.style.height = p.size + 'px';

    if (!reduceMotion){
      var angle = Math.random() * Math.PI * 2;
      var reach = 3 + Math.random() * 4;
      wrap.style.setProperty('--dx', (Math.cos(angle) * reach).toFixed(1) + 'px');
      wrap.style.setProperty('--dy', (Math.sin(angle) * reach).toFixed(1) + 'px');
      wrap.style.setProperty('--dur', (7 + Math.random() * 6).toFixed(1) + 's');
      wrap.style.setProperty('--delay', (Math.random() * -12).toFixed(1) + 's');
    }

    var el = document.createElement('button');
    el.type = 'button';
    el.className = 'node ' + (p.actor.photo ? 'photo' : 'sigil');
    el.setAttribute('aria-label', p.actor.name);

    if (p.actor.photo){
      el.style.backgroundImage = 'url(' + ASSETS[p.actor.photo] + ')';
    } else {
      var span = document.createElement('span');
      span.className = 'initials';
      span.textContent = p.actor.initials;
      el.appendChild(span);
    }

    var label = document.createElement('span');
    label.className = 'label';
    label.textContent = p.actor.name;
    el.appendChild(label);

    el.addEventListener('click', function(){ openCard(p.actor, el); });

    wrap.appendChild(el);
    stage.appendChild(wrap);

    var delay = Math.min(p.idx * 16, 480);
    setTimeout(function(){ el.classList.add('is-in'); }, reduceMotion ? 0 : delay);
  });
})();
