import React from "react";
import { LocalStorageExChild1 } from "./LocalStorageExChild1";
const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};
export const LocalStorageEx1 = () => {
  const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage");

  const onChange = (event) => setValue(event.target.value);
  return (
    <div>
      <div>
        <h1>Hello React with Local Storage!</h1>
        <input value={value} type="text" onChange={onChange} />
        <LocalStorageExChild1 value={value} />;{/* <p>{value}</p> */}
      </div>
    </div>
  );
};
