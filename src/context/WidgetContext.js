import React, { createContext, useState } from 'react';

// Create Context
export const WidgetContext = createContext();

// Widget Provider
export const WidgetProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget1',
          name: 'Widget 1',
          data: [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 }],
          chartType: 'pie'
        }
      ]
    },
    {
      id: 2,
      name: 'Operations Dashboard',
      widgets: [
        {
          id: 'widget2',
          name: 'Widget 2',
          data: [{ name: 'Group C', value: 200 }, { name: 'Group D', value: 500 }],
          chartType: 'pie'
        }
      ]
    }
  ]);

  // Add widget to a category
  const addWidget = (categoryId, widget) => {
    setCategories(prevCategories =>
      prevCategories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            widgets: [...cat.widgets, widget]
          };
        }
        return cat;
      })
    );
  };

  // Remove widget from a category
  const removeWidget = (categoryId, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            widgets: cat.widgets.filter(w => w.id !== widgetId)
          };
        }
        return cat;
      })
    );
  };

  return (
    <WidgetContext.Provider value={{ categories, addWidget, removeWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};
