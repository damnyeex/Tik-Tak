import clsx from "clsx";
import { RxCrossCircled } from "react-icons/rx";
import { createPortal } from "react-dom";

/**
 * @param {{
 * className: string,
 * width: 'md' || 'full',
 * open: boolean,
 * onClose: Function
 * }} props
 */

function UiModal({ width = "md", className, children, open = false, onClose }) {
  const handleClick = (event) => {
    const inModal = event.target.closest("[data-id=modal]");

    if (inModal) return;
    onClose();
  };

  if (!open) {
    return null;
  }

  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-600/60 backdrop-blur-sm pt-12 pb-12 overflow-y-auto",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-80 mx-auto relative flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-sm hover:bg-white/40 flex items-center justify-center bg-white/10 transition-colors absolute top-0 left-[calc(100%)]"
        >
          <CrossCloseModal
            className={"box-border fill-none text-white size-5"}
          />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "px-6 pt-6 pb-5 text-2xl")}>{children}</div>
  );
};

UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={clsx(className, "px-6 ")}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};

function CrossCloseModal({ className }) {
  return <RxCrossCircled className={className} />;
}

export { UiModal };
