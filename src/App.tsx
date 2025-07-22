import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kansas City", "Detroit", "Minnesota", "Chicago", "Cleveland"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
