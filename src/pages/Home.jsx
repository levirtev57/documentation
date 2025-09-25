import { useEffect, useState } from 'react';
import axios from 'axios';
import banner from '../assets/banner.jpg';
import Footer from './Footer';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/movies') // Your API endpoint
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  // Function to download image by creating an anchor and clicking it programmatically
  
  return (
    <>
    
      <div>
        <img
          src={banner}
          alt="Movie Banner"
          style={{ width: '100%', height: '400px', display: 'block', margin: 'auto' }}
        />
      </div>
<marquee
  behavior="scroll"
  direction="left"
  scrollAmount="10"
  style={{
    backgroundColor: '#222',
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
  }}
>
  🎬 Welcome to Movie App! | 🐭 Now Showing: Tom and Jerry, Scooby-Doo, SpongeBob SquarePants, The Simpsons | 🍿 Enjoy your favorite cartoons here!

</marquee>

      <center>
        <h2>Best Movies</h2>
      </center>
      <button
  className="logout-button"
  onClick={() => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  }}
>
  Logout
</button>



      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              width: '220px',
              textAlign: 'center',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: '15px',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={movie.src}
              alt={movie.alt}
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h4 style={{ margin: '12px 0 8px' }}>Movie:{movie.title}</h4>
            <p style={{ margin: '0 0 12px', fontWeight: 'bold'}}> Rating:⭐ {movie.rating}</p>

           <button 
  onClick={() => {
    window.open('https://www.moviesda.love/tamil-dubbed-movies/', '_blank');
  }}
  style={{
    padding: '8px 16px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
  }}
>
  Download Image
</button>

          </div>
        ))}
      </div>
      <div><Footer /></div>
      
    </>
  );
};

export default Home;
