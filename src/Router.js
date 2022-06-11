// dependencies
import React from 'react';
// components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// layouts
import { PublicLayout } from './pages/public/styles/layouts';
// pages
import { About, Contact, Experience, Is, NotFound } from './pages';
// styles

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Is />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="wp-admin" element={<NotFound wordPress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
