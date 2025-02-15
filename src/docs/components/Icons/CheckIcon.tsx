import { IconProps } from "./types";

export const CheckIcon = ({ ...delegated }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1.5rem"
    height="1.5rem"
    {...delegated}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208z"
    />
  </svg>
);
