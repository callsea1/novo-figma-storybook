import React from 'react';

import styled from 'styled-components';

export interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: #007AFF;
          color: white;
          &:hover {
            background-color: #0056b3;
          }
        `;
      case "secondary":
        return `
          background-color: transparent;
          color: #007AFF;
          border: 1px solid #007AFF;
          &:hover {
            background-color: rgba(0, 122, 255, 0.1);
          }
        `;
      case "tertiary":
        return `
          background-color: transparent;
          color: #007AFF;
          &:hover {
            background-color: rgba(0, 122, 255, 0.1);
          }
        `;
    }
  }}

  ${({ size = "medium" }) => {
    switch (size) {
      case "small":
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "medium":
        return `
          padding: 12px 20px;
          font-size: 16px;
        `;
      case "large":
        return `
          padding: 16px 24px;
          font-size: 18px;
        `;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: inherit;
    }
  `}
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
