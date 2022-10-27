import React from "react";
import Posts from "./Posts/Posts";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      qus: "What is cors? ",
      ans: "CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content and the backend API. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain. This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as CORS Headers, each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes. There's a lot of terrible advice out there (especially on popular forums) on how to set this up where the answers generally include some variant of brutally setting wildcard response headers regardless of the request headers provided in the pre-flight request. This article attempts to dispel some of the common misconceptions about Cross-Origin Resource Sharing and provide useful advice on how to get things working correctly.",
    },
    {
      id: 2,
      qus: "Why are you using firebase? ",
      ans: " Firebase is Google’s Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014. Initially it started off as a realtime database and now offers developers and marketers a comprehensive selection of tools and products that not only help develop advanced applications, but also market them. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products. Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels, such as social media, email, web, and more found here. One of the best features of dynamic links is the fact that they are usable by both app users and those that don’t have the app installed. For a more detailed walkthrough of Dynamic Links, feel free to check out this article, written by one of my colleagues. ",
    },
    {
      id: 3,
      qus: "What other options do you have to implement authentication? ",
      ans: "Authentication methods include something users know, something users have and something users are. Not every authentication type is created equal to protect the network, however; these authentication methods range from offering basic protection to stronger security. Using more than one method -- multifactor authentication (MFA) -- is recommended. here some authentication:-  1. Password-based authentication 2.Multi-factor authentication 3. Certificate-based authentication 4. Biometric authentication",
    },
    {
      id: 4,
      qus: "How does the private route work? ",
      ans: "The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user. The App component is the root component of the example app, it contains the outer html, main nav and routes for the application. The /login route is public, and the home route (/) is protected by the private route component that uses Redux to check if the user is logged in. The last route is a catch-all redirect route that redirects any unmatched paths to the home page.",
    },
    {
      id: 5,
      qus: "What is Node? How does Node work? ",
      ans: "Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. Whenever a client requests something from the client side of the application what happens is , the request is first sent to the server and then in that server some processing or calculations goes on for the validation of the client side request and after doing all such validation a response is sent to the client side. Basically for doing all such calculations and processing , this NodeJs framework of JavaScript is used.As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking. The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between the client and server for having the same code base. As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to JavaScript, for them starting developing their projects with NodeJs is very easy.",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl my-4 underline mb-7 text-center text-sky-700">
        Blog Posts
      </h1>
      <div className="lg:pb-36">
        {blogPosts.map((posts) => (
          <Posts posts={posts} key={posts.id}></Posts>
        ))}
      </div>
    </div>
  );
};

export default Blog;
