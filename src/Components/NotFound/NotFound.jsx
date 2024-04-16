import React from 'react'

export default function NotFound() {
  return (
    <div style={styles.container}>
    <h1 style={styles.heading}>404 - Not Found</h1>
    <p style={styles.text}>
      Oops! The page you are looking for could not be found.
    </p>
  </div>
);
}

const styles = {
container: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
},
heading: {
  fontSize: '2rem',
  marginBottom: '1rem',
  color: '#333',
},
text: {
  fontSize: '1rem',
  color: '#666',
  textAlign: 'center',
},
};