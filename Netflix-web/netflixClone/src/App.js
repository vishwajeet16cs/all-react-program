import Row from "./Row";
import requests from "./request";
function App() {
  return (
    <>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Treanding Now" fetchUrl={requests.fetchTrending}/>
    </>
  );
}

export default App;
