const course1 = {name: "Programming Hero"};
const course2 = {name: "Next Level Web Development"};

const map = new Map();

map.set(course1, { courseId: "Level1"});
map.set(course2, { courseId: "Level2"});

// map.clear();  clear everything in map

// map.delete(course1);

map.forEach((value, key)=> console.log("Key: ", key, "Value: ", value));

// console.log(map);