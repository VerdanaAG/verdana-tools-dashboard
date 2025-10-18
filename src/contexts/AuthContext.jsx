import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Hardcoded password (in production, this should be handled server-side)
const CORRECT_PASSWORD = 'Verdana2025!';
const AUTH_KEY = 'verdana_tools_auth';

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authData = localStorage.getItem(AUTH_KEY);
    if (authData) {
      try {
        const { timestamp, authenticated } = JSON.parse(authData);
        // Session valid for 30 days
        const thirtyDays = 30 * 24 * 60 * 60 * 1000;
        if (authenticated && Date.now() - timestamp < thirtyDays) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(AUTH_KEY);
        }
      } catch (e) {
        localStorage.removeItem(AUTH_KEY);
      }
    }
  }, []);

  const login = (password) => {
    if (password === CORRECT_PASSWORD) {
      const authData = {
        authenticated: true,
        timestamp: Date.now()
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

