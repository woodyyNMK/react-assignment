import Card from "./components/Card";
import List from "./components/List";
import TypeMe from "./components/TypeMe";
import MyForm from "./components/MyForm";
  function App(){
      const user = {
      name: 'John Doe',
      job: 'Engineer',
      hobby: 'Listening to music',
    }
  return (
    <div className="App">
      <div>
      <Card user={user} />
      </div>
      <List />
      <TypeMe /> 
      <br />
      <div className="Form">
        <MyForm />
      </div>
    </div>
  );
    
}
  
export default App