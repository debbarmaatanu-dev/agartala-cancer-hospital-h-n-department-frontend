import React from 'react';

interface PatientIdentificationSectionProps {
  formData: {
    formId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    sex: string;
    phone: string;
    address: string;
    emergencyContact: string;
    allergies: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  isRequired?: boolean;
}

export const PatientIdentificationSection: React.FC<
  PatientIdentificationSectionProps
> = ({formData, handleInputChange, isRequired = false}) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h2 className="mb-4 text-xl font-bold text-blue-600">
        Patient Identification
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="formId"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Form ID / Serial No.{' '}
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="formId"
            name="formId"
            value={formData.formId}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter form ID or serial number"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-gray-700">
              First Name {isRequired && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required={isRequired}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-gray-700">
              Last Name {isRequired && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required={isRequired}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="dateOfBirth"
              className="mb-2 block text-sm font-semibold text-gray-700">
              Date of Birth{' '}
              {isRequired && <span className="text-red-500">*</span>}
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required={isRequired}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="sex"
              className="mb-2 block text-sm font-semibold text-gray-700">
              Sex {isRequired && <span className="text-red-500">*</span>}
            </label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              required={isRequired}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">
              <option value="">Select sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Phone Number {isRequired && <span className="text-red-500">*</span>}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required={isRequired}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows={3}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter full address"
          />
        </div>

        <div>
          <label
            htmlFor="emergencyContact"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Emergency Contact
          </label>
          <input
            type="text"
            id="emergencyContact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Name and phone number"
          />
        </div>

        <div>
          <label
            htmlFor="allergies"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Allergies / Medical Alerts
          </label>
          <textarea
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleInputChange}
            rows={2}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="List any allergies or medical alerts"
          />
        </div>
      </div>
    </div>
  );
};
