import Row from "./Row";
import requests from "./request";
import "./App.css"
function App() {
  return (
    <>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
        <Row title="Treanding Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentation" fetchUrl={requests.fetchDocumentaries}/>
    </>
  );
}

export default App;
