import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import PrivacyPolicy from './apolo/PrivacyPolicy';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default Router;