import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomGreeting } from '../redux/greetingsSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const greetingStyle = {
    color: getRandomColor(),
  };

  return (
    <section>
      <h1>Random Greeting</h1>
      <h2 style={greetingStyle}>{greeting}</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

// <div>
//   <h1>Hallowwwween </h1>
//   <h3>{greeting}</h3>
// </div>
