
import './App.css';

function App() {
  const test = 59;
  const isAuth = true;

  return (
    <div className="App">
       <h4>{7+9}</h4>
       <h4>{"Yiğit".toUpperCase()}</h4>
       <h4>{test}</h4>
       <div>
        {
          isAuth ? <p>Kullanıcı Kayıtlı</p>
          : null
        }
       </div>
        </div>
  );
}

export default App;
