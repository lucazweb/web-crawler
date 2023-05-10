import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <span>Hello crawler</span>;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
