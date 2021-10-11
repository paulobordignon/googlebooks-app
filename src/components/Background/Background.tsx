import { memo } from 'react'

export const GBBackground: React.FC<{children: any}> = memo(
  ({ children }) => {
    return (
      <div className="min-w-screen min-h-screen bg-background flex justify-center">
        <div className="w-full max-w-md mx-auto mb-24">
          {children}
        </div>
      </div>
    )
  }
)
