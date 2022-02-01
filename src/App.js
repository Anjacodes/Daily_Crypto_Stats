import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Header from './components/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route
          path="*"
          element={(
            <main>
              <p>There&apos;s nothing here!</p>
            </main>
            )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
