import React from 'react';

interface SurgeryInformationSectionProps {
  formData: {
    dateOfSurgery: string;
    surgerySuccess: string;
    surgeryNotes: string;
    postOpNotes: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export const SurgeryInformationSection: React.FC<
  SurgeryInformationSectionProps
> = ({formData, handleInputChange}) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h2 className="mb-4 text-xl font-bold text-blue-600">
        Surgery Information
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="dateOfSurgery"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Date of Surgery
          </label>
          <input
            type="date"
            id="dateOfSurgery"
            name="dateOfSurgery"
            value={formData.dateOfSurgery}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="surgerySuccess"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Surgery Success
          </label>
          <select
            id="surgerySuccess"
            name="surgerySuccess"
            value={formData.surgerySuccess}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
            <option value="">Select outcome</option>
            <option value="successful">Successful</option>
            <option value="partially-successful">Partially Successful</option>
            <option value="unsuccessful">Unsuccessful</option>
            <option value="complications">Complications</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="surgeryNotes"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Surgery Notes
          </label>
          <textarea
            id="surgeryNotes"
            name="surgeryNotes"
            value={formData.surgeryNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter surgical procedure details and observations"
          />
        </div>

        <div>
          <label
            htmlFor="postOpNotes"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Post-Operative Notes
          </label>
          <textarea
            id="postOpNotes"
            name="postOpNotes"
            value={formData.postOpNotes}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter post-operative recovery notes and complications"
          />
        </div>
      </div>
    </div>
  );
};
