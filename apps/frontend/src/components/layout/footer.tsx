import React from 'react';

export const Footer = () => {
  return (
    <footer
      className="relative h-[600px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh] w-full bottom-0 bg-[#ff991c]">
        <div className="sticky container top-[calc(100vh-600px)] h-[600px]">
          <div className="flex gap-4 pt-[calc(100vh-600px)]">
            <div className="flex flex-col gap-2">
              <h3>Titl</h3>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Titl</h3>
              <p>content</p>
              <p>content</p>
              <p>content</p>
              <p>content</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
