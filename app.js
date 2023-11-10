import'../styles/index.css'; // Import your global CSS styles here

function MyApp({ Component, pageProps }) {
  // You can add layout components or global context providers here

  return <Component {...pageProps} />;
}

export default MyApp;
