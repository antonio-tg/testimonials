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
          testimonial='Bla Bla Bla Bla Bla Bla <strong> Bla </strong>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla' />
        <Testimonial
          image='descarga.png'
          name='Yoming'
          time='Past'
          ocupation='Meme'
          testimonial='Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla' />
        <Testimonial
          image='motherofgod.jpg'
          name='Mother'
          time='Present'
          ocupation='Housewife'
          testimonial='Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla' />
      </div>

    </div>
  );
}

export default App;
