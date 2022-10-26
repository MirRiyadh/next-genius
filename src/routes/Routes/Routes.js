import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Checkout from "../../pages/Checkout/Checkout";
import ThankyouPage from "../../pages/Checkout/ThankyouPage/ThankyouPage";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Rightside from "../../pages/Courses/Rightside";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import WhyUs from "../../pages/WhyUs/WhyUs";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/whyus",
        element: <WhyUs></WhyUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "courses-details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
  { path: "/thankyou", element: <ThankyouPage></ThankyouPage> },
]);
