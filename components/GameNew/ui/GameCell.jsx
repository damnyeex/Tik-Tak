

function GameCell({ children, onClick, isWinner, disabled }) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          "border border-stone-200 -ml-px -mt-px mb-px flex items-center justify-center",
          isWinner && "bg-orange-600/10",
        )}
      > 
        {children}
      </button>
    );
  }

export default GameCell