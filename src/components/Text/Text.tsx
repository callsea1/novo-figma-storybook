import React from 'react';

import styled from 'styled-components';

export interface TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "caption" | "label";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

const StyledText = styled.div<TextProps>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => color || "inherit"};
  text-align: ${({ align }) => align || "left"};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ${({ variant = "body" }) => {
    switch (variant) {
      case "h1":
        return `
          font-size: 48px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        `;
      case "h2":
        return `
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        `;
      case "h3":
        return `
          font-size: 24px;
          line-height: 1.4;
        `;
      case "h4":
        return `
          font-size: 20px;
          line-height: 1.4;
        `;
      case "body":
        return `
          font-size: 16px;
          line-height: 1.5;
        `;
      case "caption":
        return `
          font-size: 14px;
          line-height: 1.4;
        `;
      case "label":
        return `
          font-size: 14px;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        `;
    }
  }}

  ${({ weight = "regular" }) => {
    switch (weight) {
      case "regular":
        return `font-weight: 400;`;
      case "medium":
        return `font-weight: 500;`;
      case "semibold":
        return `font-weight: 600;`;
      case "bold":
        return `font-weight: 700;`;
    }
  }}
`;

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};
