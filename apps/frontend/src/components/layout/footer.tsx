import React from 'react';

import { Text } from "../common/text";
import { Title } from "../common/title";

export const Footer = () => {
  return (
    <footer
      className="relative h-[600px]"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh] w-full bottom-0 bg-[#ff991c]">
        <div className="sticky container top-[calc(100vh-600px)] h-[600px] flex flex-col justify-end pb-4">
          <div className="flex gap-4 pt-[calc(100vh-600px)]">
            <div className="flex flex-col gap-2">
              <Title>Titl</Title>
              <Text>content</Text>
              <Text>content</Text>
              <Text>content</Text>

            </div>
            <div className="flex flex-col gap-2">
              <Title>Titl</Title>
              <Text>content</Text>
              <Text>content</Text>
              <Text>content</Text>
              <Text>content</Text>
              <Text>content</Text>
              <Text>content</Text>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
