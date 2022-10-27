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
import TermsCondition from "../../pages/Terms&Condition/TermsCondition";
import AboutUs from "../../pages/WhyUs/AboutUs";
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
        path: "/about-us",
        element: <AboutUs></AboutUs>,
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
          fetch(
            `https://assignment-ten-server-eight.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://assignment-ten-server-eight.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: async ({ params }) =>
          fetch(
            `https://assignment-ten-server-eight.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
  { path: "/thankyou", element: <ThankyouPage></ThankyouPage> },
  { path: "/terms", element: <TermsCondition></TermsCondition> },
]);
