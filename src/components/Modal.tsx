import React from 'react';

interface ModalProps {
  onClose: () => void;
  onDownload: () => void;
}

const Modal: React.FC<ModalProps> = ({onClose, onDownload}) => {
  return (
    <div
      className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}>
      <div
        className="mx-4 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg"
        onClick={e => e.stopPropagation()}>
        <h2 className="mb-4 text-center text-lg font-semibold">
          Download Patient Record
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600">
          Do you want to download the patient record as a PDF?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-500 px-4 py-2 text-white transition hover:bg-gray-600">
            Cancel
          </button>
          <button
            onClick={onDownload}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
