const farmAnimals = 'cow horse sheep pig chicken';
//1
const newArray = farmAnimals.split(" ");
const moo = newArray[0];
const neigh = newArray[1]
const baa = newArray[2]
const oink = newArray[3];
const cluck = newArray[4]

//2
const bessie = newArray[0]
const dolly = newArray[2]
const babe = newArray[3]
const little = newArray[4]

//3
const blackAndWhite = newArray[0]
const black = newArray[2]
const pink = newArray[3]


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


//4 
const red = colors[0]
const orange = colors[1]
const yellow = colors[2]
const green = colors[3]
const blue = colors[4]
const indigo = colors[5]
const violet = colors[6]

//5
const r = colors[0]
const o = colors[1]
const y = colors[2]
const g = colors[3]
const b = colors[4]
const i = colors[5]
const v = colors[6]

//6
const indg = colors[5]


const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};


//7
const {muppetName} = muppet
const {color} = muppet
const {song} = muppet
const {job} = muppet
const {partner} = muppet


//8
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

const{song2, song4} = nestedMuppet.album.theMuppetMovie
const{nestedJob} = nestedMuppet
const{nestedPartner} = nestedMuppet






// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner