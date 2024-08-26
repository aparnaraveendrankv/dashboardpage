import React from 'react';
import { WidgetProvider } from './context/WidgetContext';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <WidgetProvider>
      <div className="App">
        <h1>Dynamic Dashboard</h1>
        <Dashboard />
      </div>
    </WidgetProvider>
  );
};

export default App;
