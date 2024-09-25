import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative h-[800px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%);' }}>
      <div className="relative h-[calc(100vh+800px)] -top-[100vh] w-full bottom-0 bg-slate-700">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <div className="flex gap-4 pt-[calc(100vh-800px)]">
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
      {/* <div className="fixed h-[800px] w-full bottom-0 bg-slate-400">
        <div className="flex gap-4">
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
      </div> */}
    </footer>
  );
};
