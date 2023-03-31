import './App.css';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>This is the title</h1>
        <Testimonial
          image='fry.jpg'
          name='Fry'
          time='Future'
          ocupation='Delivery'
          testimonial='Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla'
          />
      </div>

    </div>
  );
}

export default App;
