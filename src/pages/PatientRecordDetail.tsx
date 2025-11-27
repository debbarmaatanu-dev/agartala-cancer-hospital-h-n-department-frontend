import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Modal from '../components/Modal';
import {PatientIdentificationSection} from '@/components/patient/PatientIdentificationSection';
import {MedicalInformationSection} from '@/components/patient/MedicalInformationSection';
import {TreatmentInformationSection} from '@/components/patient/TreatmentInformationSection';
import {SurgeryInformationSection} from '@/components/patient/SurgeryInformationSection';
import {FollowUpInformationSection} from '@/components/patient/FollowUpInformationSection';
import {MedicalMediaSection} from '@/components/patient/MedicalMediaSection';
import {dummyPatientData, dummyMediaUrls} from '@/constants/dummyData';
import {generatePatientRecordPDF} from '@/utils/pdfGenerator';

export const PatientRecordDetail = (): React.JSX.Element => {
  const navigate = useNavigate();
  const {searchParam} = useParams<{searchParam: string}>();
  const [formData, setFormData] = useState(dummyPatientData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Record saved:', formData);
    setTimeout(() => {
      alert('Record saved successfully!');
    }, 250);
  };

  const handleCancel = () => {
    setTimeout(() => {
      navigate('/home');
      scrollTo(0, 0);
    }, 250);
  };

  const handlePrint = () => {
    setIsModalOpen(true);
  };

  const handleDownloadPDF = async () => {
    setIsModalOpen(false);
    await generatePatientRecordPDF(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div
          id="patient-record-content"
          className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <header className="mb-6 border-b border-gray-200 pb-6">
            <h1 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
              Patient Record Details
            </h1>
            <p
              id="search-param-info"
              className="mt-2 text-center text-sm text-gray-600">
              Search Parameter:{' '}
              <span className="font-semibold">{searchParam}</span>
            </p>
          </header>

          <div className="space-y-6">
            <PatientIdentificationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <MedicalInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <TreatmentInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <SurgeryInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <FollowUpInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <MedicalMediaSection mediaUrls={dummyMediaUrls} />
          </div>

          <div
            id="action-buttons"
            className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full rounded-lg border-2 border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-95 sm:w-auto">
              Cancel
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="w-full rounded-lg border-2 border-teal-600 bg-white px-8 py-3 font-semibold text-teal-600 transition-all hover:bg-teal-50 active:scale-95 sm:w-auto">
              Print PDF
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:outline-none active:scale-95 sm:w-auto">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onDownload={handleDownloadPDF}
        />
      )}
    </div>
  );
};
