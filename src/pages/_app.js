import '../styles/globals.css'; // Add this import for global styles

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
    </div>
  )
}