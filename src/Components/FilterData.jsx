import React, { useState } from "react";
export const FilterData = () => {
  const [showData, setShowData] = useState([
    {
      name: "James",
      age: 31,
    },
    {
      name: "John",
      age: 46,
    },
    {
      name: "paul",
      age: 65,
    },
    {
      name: "George",
      age: 34,
    },
  ]);
  return (
    <div>
      {showData
        .filter((person) => person.age < 60)
        .map((filteredPerson) => (
          <li>
            {filteredPerson.name}
            <br></br>
            {filteredPerson.age}
          </li>
        ))}
      <button onClick={() => setShowData(showData)}>Filtered Data</button>
    </div>
  );
};

//     <div>
//       {showData
//         .filter((person) => person.age > 60)
//         .map((filteredPerson) => (
//           <li>
//             {filteredPerson.name}
//             <br></br>
//             {filteredPerson.age}
//           </li>
//         ))}
//       <Button onClick={() => setShowData(showData)}>Filtered Data</Button>
//     </div>
//   );
// };
