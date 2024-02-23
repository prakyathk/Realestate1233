// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(<App/>);
