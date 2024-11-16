"use client";

export default function Modal({ modalState }: { modalState: () => void }) {
  return (
    <dialog className="modal bg-opacity-50 bg-base-100" open>
      <div className="modal-box">
        <form method="dialog">
          <button
            onClick={() => modalState()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg text-base-content">Error</h3>
        <p className="py-4">
          {"I'm"} sorry to inform you that the GitHub repository is private and
          cannot be viewed publicly at this time, but feel free to see the
          current product via the {'"Visit TecTOC.ca"'} button!
        </p>
      </div>
    </dialog>
  );
}
