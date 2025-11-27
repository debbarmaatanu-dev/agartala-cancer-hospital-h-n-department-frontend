import React, {useState} from 'react';
import {PatientIdentificationSection} from '@/components/patient/PatientIdentificationSection';
import {MedicalInformationSection} from '@/components/patient/MedicalInformationSection';
import {TreatmentInformationSection} from '@/components/patient/TreatmentInformationSection';
import {SurgeryInformationSection} from '@/components/patient/SurgeryInformationSection';
import {FollowUpInformationSection} from '@/components/patient/FollowUpInformationSection';
import {MedicalMediaUploadSection} from '@/components/patient/MedicalMediaUploadSection';
import {useNavigate} from 'react-router-dom';

export const AddNewRecords = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    formId: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    sex: '',
    phone: '',
    address: '',
    emergencyContact: '',
    allergies: '',
    typeOfCancer: '',
    placeOfCancer: '',
    stageOfCancer: '',
    currentDiagnoses: '',
    treatmentSuccess: '',
    patientAlive: '',
    howLongUnderTreatment: '',
    dateOfSurgery: '',
    surgerySuccess: '',
    surgeryNotes: '',
    postOpNotes: '',
    lastFollowUpDate: '',
    nextFollowUpDate: '',
    followUpNotes: '',
  });

  const [mediaFiles, setMediaFiles] = useState<File[]>([]);

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

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setMediaFiles(prev => [...prev, ...files]);
    }
  };

  const removeMedia = (index: number) => {
    setMediaFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    console.log('Media files:', mediaFiles);
  };

  const handleCancel = () => {
    setTimeout(() => {
      navigate('/home');
      scrollTo(0, 0);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Add New Patient Record
          </h1>
        </header>

        <div className="space-y-6">
          <section
            className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
            aria-labelledby="patient-identification">
            <PatientIdentificationSection
              formData={formData}
              handleInputChange={handleInputChange}
              isRequired={true}
            />
          </section>

          <section
            className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
            aria-labelledby="medical-information">
            <MedicalInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
              isRequired={true}
            />
          </section>

          <section
            className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
            aria-labelledby="treatment-information">
            <TreatmentInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
              isRequired={true}
            />
          </section>

          <section
            className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
            aria-labelledby="surgery-information">
            <SurgeryInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </section>

          <section
            className="rounded-2xl bg-white p-6 shadow-lg md:p-8"
            aria-labelledby="followup-information">
            <FollowUpInformationSection
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </section>

          <MedicalMediaUploadSection
            mediaFiles={mediaFiles}
            handleMediaUpload={handleMediaUpload}
            removeMedia={removeMedia}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full rounded-lg border-2 border-gray-300 bg-white px-8 py-3 font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-95 sm:w-auto">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 focus:outline-none active:scale-95 sm:w-auto">
              Save Patient Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
