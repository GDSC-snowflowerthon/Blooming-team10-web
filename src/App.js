import { Outlet } from 'react-router-dom';
import './App.css';

function App () {
  return (
    <div className="App">
      <Outlet/>
    </div>
  )
}

export default App;



/*const Wrapper = styled("div", {
  padding: "0 27.5px",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@bp": {
    justifyContent: "center",
  },
});

const PageWrapper = styled("div", {
  width: "100%",
  maxWidth: "$bp2",
  position: "relative",
});*/