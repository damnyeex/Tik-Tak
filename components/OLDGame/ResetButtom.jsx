function ResetButton({ onClick }) {
  return (
    <button
      className="p-4 text-base cursor-pointer bg-stone-200 border-gray-700 rounded-md"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}

export default ResetButton;
