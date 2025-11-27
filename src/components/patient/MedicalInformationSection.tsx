import React from 'react';

interface MedicalInformationSectionProps {
  formData: {
    typeOfCancer: string;
    placeOfCancer: string;
    stageOfCancer: string;
    currentDiagnoses: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  isRequired?: boolean;
}

export const MedicalInformationSection: React.FC<
  MedicalInformationSectionProps
> = ({formData, handleInputChange, isRequired = false}) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h2 className="mb-4 text-xl font-bold text-blue-600">
        Medical Information
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="typeOfCancer"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Type of Cancer{' '}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="typeOfCancer"
            name="typeOfCancer"
            value={formData.typeOfCancer}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="e.g., Squamous cell carcinoma"
          />
        </div>

        <div>
          <label
            htmlFor="placeOfCancer"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Place of Cancer{' '}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="placeOfCancer"
            name="placeOfCancer"
            value={formData.placeOfCancer}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="e.g., Oral cavity, Larynx, Pharynx"
          />
        </div>

        <div>
          <label
            htmlFor="stageOfCancer"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Stage of Cancer{' '}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <select
            id="stageOfCancer"
            name="stageOfCancer"
            value={formData.stageOfCancer}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
            <option value="">Select stage</option>
            <option value="stage-0">Stage 0 (In situ)</option>
            <option value="stage-1">Stage I</option>
            <option value="stage-2">Stage II</option>
            <option value="stage-3">Stage III</option>
            <option value="stage-4">Stage IV</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="currentDiagnoses"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Current Diagnoses / Clinical Notes
          </label>
          <textarea
            id="currentDiagnoses"
            name="currentDiagnoses"
            value={formData.currentDiagnoses}
            onChange={handleInputChange}
            rows={4}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter detailed diagnosis and clinical observations"
          />
        </div>
      </div>
    </div>
  );
};
