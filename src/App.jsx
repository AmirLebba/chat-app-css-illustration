import './App.css';
import Phone from "./Phone"
import Discription from "./Discription"
function App() {
  return (
    <>  
      <aside>
        
      </aside>
      <main>
        <section className='phone'>
          <Phone/>
        </section>
        <section className='message'>
          <Discription/>
        </section>
      </main>
    </>
  );
}

export default App;

