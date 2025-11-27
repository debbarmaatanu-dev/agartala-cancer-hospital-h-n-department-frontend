import React from 'react';

interface MedicalMediaUploadSectionProps {
  mediaFiles: File[];
  handleMediaUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeMedia: (index: number) => void;
}

export const MedicalMediaUploadSection: React.FC<
  MedicalMediaUploadSectionProps
> = ({mediaFiles, handleMediaUpload, removeMedia}) => {
  return (
    <section
      className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
      aria-labelledby="medical-media">
      <h2 id="medical-media" className="mb-6 text-2xl font-bold text-blue-600">
        Medical Media (CT Scans, Photos, Videos)
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="mediaUpload"
            className="mb-2 block text-sm font-semibold text-gray-700">
            Upload Medical Images & Videos
          </label>
          <p className="mb-3 text-sm text-gray-600">
            Accepted formats: JPEG, PNG, MP4, MOV, AVI. CT scans should be
            exported as images.
          </p>
          <input
            type="file"
            id="mediaUpload"
            multiple
            accept="image/jpeg,image/png,video/mp4,video/quicktime,video/x-msvideo"
            onChange={handleMediaUpload}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {mediaFiles.length > 0 && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-3 text-sm font-semibold text-gray-700">
              Uploaded Files ({mediaFiles.length})
            </h3>
            <ul className="space-y-2">
              {mediaFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between rounded-md bg-white px-3 py-2">
                  <span className="text-sm text-gray-700">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeMedia(index)}
                    className="text-sm font-medium text-red-600 transition-colors hover:text-red-800">
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
