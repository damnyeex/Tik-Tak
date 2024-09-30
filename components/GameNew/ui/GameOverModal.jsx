import { UiButton } from "../../uikit";
import { UiModal } from "../../uikit";

function GameOverModal() {
  return (
    <UiModal
      width="md"
      open={winnerSymbol}
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Результат игры</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-500">Sergey</span>
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

export default GameOverModal;
