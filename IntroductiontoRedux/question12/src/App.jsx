import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import WatchlistPage from './pages/Watchlist';
import Bookings from './pages/Bookings';
import ProtectedRoute from './components/ProtectedRoute';

function App(){
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Container maxW="container.xl" py="4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watchlist" element={
                <ProtectedRoute><WatchlistPage /></ProtectedRoute>
              }/>
              <Route path="/bookings" element={
                <ProtectedRoute><Bookings /></ProtectedRoute>
              }/>
            </Routes>
          </Container>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
