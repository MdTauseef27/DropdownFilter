// import React, { useState, useEffect } from "react";
// export const FilterDataEx = () => {
//   const [filteredPolls, setfilteredPolls] = useState([]);
//   const [polls, setPolls] = useState();

//   const [dpolls, setdpolls] = useState([
//     {
//       id: 4,
//       type: "C",
//       name: "Test 1",
//     },
//     {
//       id: 6,
//       type: "B",
//       name: "Test 2",
//     },
//     {
//       id: 7,
//       type: "A",
//       name: "Test 3",
//     },
//     {
//       id: 8,
//       type: "A",
//       name: "Test 9",
//     },
//     {
//       id: 17,
//       type: "B",
//       name: "Test 39",
//     },
//   ]);
//   useEffect(() => {
//     setPolls(dpolls);
//     setfilteredPolls(dpolls.filter((e) => e.type === "A"));
//   }, [setPolls]);
//   console.log("polls data", polls);

//   //   useEffect(() => {
//   //     setPolls(dpolls);
//   //     setfilteredPolls(dpolls.filter((e) => e.type === "A"));
//   //   }, [setPolls]);

//   var A = polls.filter((e) => e.type === "A");
//   var B = polls.filter((e) => e.type === "B");
//   var C = polls.filter((e) => e.type === "C");

//   function showA() {
//     setfilteredPolls(A);
//   }

//   function showB() {
//     setfilteredPolls(B);
//   }

//   function showC() {
//     setfilteredPolls(C);
//   }

//   function removeFiter() {
//     setfilteredPolls(polls);
//   }
//   return (
//     <div className="polls">
//       <button onClick={() => showA()}>A</button>
//       <button onClick={() => showB()}>B</button>
//       <button onClick={() => showC()}>C</button>
//       <button onClick={() => removeFiter()}>Remove Filter</button>

//       {filteredPolls &&
//         filteredPolls.map((poll) => (
//           <div key={poll.id}>
//             <FilterDataEx poll={poll} />
//             <hr style={{ opacity: ".1" }} />
//           </div>
//         ))}
//     </div>
//   );
// };
