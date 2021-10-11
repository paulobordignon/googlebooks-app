import { memo } from 'react';
import { GBBookNavProps } from './types'

export const GBBookNav: React.FC<GBBookNavProps> = memo(
  ({ title, link }) => {
    return (
      <div className="mt-7 mx-5">
        <p className="flex justify-between">
          <span className="text-lg">{title}</span>
          <span className="text-sm text-link">{link}</span>
        </p>
        <div className= "mt-2 flex justify-center">
          <svg className="bg-readingBook rounded-lg" width="335" height="181">
            <path d="M0 5C0 2.23858 2.23858 0 5 0H330C332.761 0 335 2.23858 335 5V181H0V5Z" fill="#D8D8D8" opacity="0.2" />
          </svg>
        </div>
      </div>
    );
  }
);
