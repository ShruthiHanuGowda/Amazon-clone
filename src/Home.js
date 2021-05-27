import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          src='https://ak.picdn.net/shutterstock/videos/1011741725/thumb/3.jpg'
          alt=''
        />
        <div className='home_row'>
          {/*  product */}
          <Product
            id='6567'
            title='The lean startup'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6zKQpZZlZy4RnkXeMXslIklt9aZQdvLavA&usqp=CAU'
            price={9.99}
            rating={5}
          />
          <Product
            id='78687'
            title='Influential Books About Business and Leadership'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY83dpwgJwWh0hkxWkYanu4fpRDNoayiGsEA&usqp=CAU'
            price={9.99}
            rating={5}
          />
          {/*  product */}
        </div>

        <div className='home_row'>
          <Product
            id='67678'
            title='The lean startup'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbPLq7L4AJB78ljSjU4EmToHmHPwLMxaJIg&usqp=CAU'
            price={9.99}
            rating={5}
          />
          <Product
            id='7687'
            title='The lean startup'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6sD97ibA5SYlcLwdkDk7Z860LleHxfdrkA&usqp=CAU'
            price={9.99}
            rating={5}
          />
          <Product
            id='678678'
            title='The lean startup'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZ0byNtRfTYFtHPmmqron0DKglwA9kf2Icw&usqp=CAU'
            price={9.99}
            rating={5}
          />
        </div>

        <div className='home_row'>
          <Product
            id='45767'
            title='The 12 Best Investing Books of 2021'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSds0qL2hGIcTS-w9fOo0H7KQat4NKgIXq13w&usqp=CAU'
            price={9.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
