import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from './Context API/AuthProvider.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import AllMovies from './Pages/AllMovies.jsx';
import AddMovies from './Pages/AddMovies.jsx';
import MyFavorites from './Pages/MyFavorites.jsx';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Movies from './components/Movies.jsx';
import MovieDetails from './Pages/MovieDetails.jsx';
import UpcomingReleases from './components/upcomingReleases .jsx';
import UpdateMovie from './Pages/UpdateMovie.jsx';
import DynamicTitle from './Dynamic Title/DynamicTitle.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/allmovies',
        element: <AllMovies />,
      },
      {
        path: '/addmovies',
        element: (
          <PrivateRoute>
            <AddMovies />
          </PrivateRoute>
        ),
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://cine-hive-server.vercel.app/movies/${params.id}`),
      },
      {
        path: '/myfavorites',
        element: <PrivateRoute><MyFavorites /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://cine-hive-server.vercel.app/favorites/${params.email}`),
      },
      {
        path: '/upcoming-releases',
        element: <UpcomingReleases />,
      },
      {
        path: '/update-movie/:movieId',
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
     
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
