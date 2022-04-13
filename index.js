// // Code your solution here
// function findMatching () {
// const drivers = [
//     { driveName: "Bobby", 
//       homeTown: "Nairobi",    
//     }
//     // {
//     //  driveName: "bobby", 
//     //   homeTown: "Kisumu",    
//     // }
//     // { 
//     // driveName: "Brian", 
//     // homeTown: "Nakuru",    
//     // }
// ];
// }

const drivers = [
    {
      driverName: "Bobby",
      driverHomeTown: "Kisumu",
      
    },
    {
      driverName: "bobby",
      driverHomeTown: "Makindani",
    },
    {
      driverName: "Josh",
      driverHomeTown: "Kajiado",
    },
    {
      driverName: "bobby",
      driverHomeTown: "Nakuru",
    },
    {
      driverName: "John",
      driverHomeTown: "Nairobi",
    },
    {
      driverName: "Kelly",
      driverHomeTown: "Mombasa",
    },
  ];
  function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((publish) => publish.name === soughtName);
  }
