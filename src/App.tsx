import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Denver", "Kansas City", "Las Vegas", "Los Angeles"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
