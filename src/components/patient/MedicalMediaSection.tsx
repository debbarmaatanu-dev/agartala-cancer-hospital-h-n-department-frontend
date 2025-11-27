import React from 'react';
import type {MediaFile} from '@/constants/dummyData';

interface MedicalMediaSectionProps {
  mediaUrls: MediaFile[];
}

export const MedicalMediaSection: React.FC<MedicalMediaSectionProps> = ({
  mediaUrls,
}) => {
  return (
    <div id="media-section" className="border-t border-gray-200 pt-6">
      <h2 className="mb-4 text-xl font-bold text-blue-600">
        Medical Media (CT Scans, Photos, Videos)
      </h2>
      <div className="space-y-4">
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Note:</span> Media files need to be
            downloaded separately and cannot be printed with this record.
          </p>
        </div>
        <p className="text-sm text-gray-600">
          Attached medical images and videos or other media files
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mediaUrls.map((media, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              {media.type === 'image' ? (
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block">
                  <img
                    src={media.url}
                    alt={media.name}
                    className="h-48 w-full object-cover transition-transform hover:scale-105"
                  />
                </a>
              ) : media.type === 'video' ? (
                <video
                  controls
                  className="h-48 w-full object-cover"
                  preload="metadata">
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : media.type === 'pdf' ? (
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-48 w-full items-center justify-center bg-gray-100 transition-colors hover:bg-gray-200">
                  <i className="fa-solid fa-file-pdf text-6xl text-red-600"></i>
                </a>
              ) : null}
              <div className="p-3">
                <p className="truncate text-sm font-medium text-gray-700">
                  {media.name}
                </p>
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs text-blue-600 transition-colors hover:text-blue-800 hover:underline">
                  {media.type === 'pdf' ? 'Open PDF' : 'View Full Size'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
