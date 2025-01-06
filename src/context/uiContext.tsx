import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definimos el tipo para el tema, que puede ser "light" o "dark"
type Theme = 'light' | 'dark';

// Definimos el tipo para el contexto
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Creamos el contexto con un valor predeterminado
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor del contexto
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Estado para el tema
  const [theme, setTheme] = useState<Theme>('light');

  // Función para alternar entre "light" y "dark"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};