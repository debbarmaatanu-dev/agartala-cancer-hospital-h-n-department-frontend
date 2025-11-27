import React from 'react';

interface FollowUpInformationSectionProps {
  formData: {
    lastFollowUpDate: string;
    nextFollowUpDate: string;
    followUpNotes: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export const FollowUpInformationSection: React.FC<
  FollowUpInformationSectionProps
> = ({formData, handleInputChange}) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-blue-600">
        Follow-up Information
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="lastFollowUpDate"
              className="mb-2 block text-sm font-semibold text-gray-700">
              Last Follow-up Date
            </label>
            <input
              type="date"
              id="lastFollowUpDate"
              name="lastFollowUpDate"
              value={formData.lastFollowUpDate}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="nextFollowUpDate"
              className="mb-2 block text-sm font-semibold text-gray-700">
              Next Follow-up Date
            </label>
            <input
              type="date"
              id="nextFollowUpDate"
              name="nextFollowUpDate"
              value={formData.nextFollowUpDate}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="followUpNotes"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Follow-up Notes
          </label>
          <textarea
            id="followUpNotes"
            name="followUpNotes"
            value={formData.followUpNotes}
            onChange={handleInputChange}
            rows={3}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Enter follow-up observations and next steps"
          />
        </div>
      </div>
    </div>
  );
};
