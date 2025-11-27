import React from 'react';

interface TreatmentInformationSectionProps {
  formData: {
    treatmentSuccess: string;
    howLongUnderTreatment: string;
    patientAlive: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  isRequired?: boolean;
}

export const TreatmentInformationSection: React.FC<
  TreatmentInformationSectionProps
> = ({formData, handleInputChange, isRequired = false}) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h2 className="mb-4 text-xl font-bold text-blue-600">
        Treatment Information
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="treatmentSuccess"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Treatment Success{' '}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <select
            id="treatmentSuccess"
            name="treatmentSuccess"
            value={formData.treatmentSuccess}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
            <option value="">Select status</option>
            <option value="successful">Successful</option>
            <option value="partially-successful">Partially Successful</option>
            <option value="unsuccessful">Unsuccessful</option>
            <option value="ongoing">Ongoing</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="howLongUnderTreatment"
            className="mb-2 block text-sm font-semibold text-gray-700">
            How Long Under Treatment
          </label>
          <input
            type="text"
            id="howLongUnderTreatment"
            name="howLongUnderTreatment"
            value={formData.howLongUnderTreatment}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="e.g., 6 months, 1 year"
          />
        </div>

        <div>
          <label
            htmlFor="patientAlive"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Patient Status{' '}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <select
            id="patientAlive"
            name="patientAlive"
            value={formData.patientAlive}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
            <option value="">Select status</option>
            <option value="alive">Alive</option>
            <option value="deceased">Deceased</option>
          </select>
        </div>
      </div>
    </div>
  );
};
