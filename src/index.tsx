//import React from 'react';
import { createRoot } from 'react-dom/client';
//import el from './01-r-css/slide';
import './index.css';
//import el from './react-boot/react_boot';
import 'bootstrap/dist/css/bootstrap.min.css';
//import finalEL from './react-fragment/react-frag'; 
//import el from './react-component/slide-element';
//import el from './05-props-react/slide-demo';
//import el from './06-react-state/05-props-react/slide-demo';
import App from './07-events/events-demo';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error('Root element not found');
}
