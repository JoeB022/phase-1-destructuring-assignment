const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to declare five animal sounds.
const [moo, neigh, baa, oink, cluck] = ['moo', 'neigh', 'baa', 'oink', 'cluck']; // Assigning animal sounds

// 2. Use destructuring to declare the four traditional animal names.
const [bessie, dolly, babe, little] = farmAnimals.split(' ').slice(0, 4); // Assign the first four animal names correctly

// 3. Use destructuring to declare three traditional animal colors.
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig']; // Assigning colors to animals

// Arrays

// 4. Use destructuring to declare seven traditional rainbow color variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors; // Declare all seven rainbow colors

// 5. Use destructuring to declare six rainbow color variables using initials.
const [r, o, y, g, b, i] = colors; // Assign the first letters of the color names (r, o, y, g, b, i)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const indg = colors[5]; // Assigning indigo separately without redeclaring

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const { song2, song4 } = nestedMuppet.album.theMuppetMovie; // Assigning songs from nested object
const { nestedJob, nestedPartner } = nestedMuppet; // Assigning Kermit's job and partner
