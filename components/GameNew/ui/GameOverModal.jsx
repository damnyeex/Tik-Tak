import { UiButton } from "../../uikit";
import { UiModal } from "../../uikit";

function GameOverModal({ winnerName, players }) {
  return (
    <UiModal width="md" open={winnerName} onClose={() => console.log("close")}>
      <UiModal.Header>Результат игры</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-500">{winnerName}</span>
        </div>
        <div className="mt-2 bg-slate-100 rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 justify-between gap-3">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Начать заново
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}

export { GameOverModal };
