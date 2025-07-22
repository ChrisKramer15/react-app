import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kansas City", "Detroit", "Minnesota", "Chicago", "Cleveland"];

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
