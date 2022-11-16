import UserState from "./context/userState";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <UserState>
        <Main></Main>
      </UserState>
    </div>
  );
}

export default App;
