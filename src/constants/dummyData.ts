export interface MediaFile {
  type: 'image' | 'video' | 'pdf';
  url: string;
  name: string;
}

export const dummyPatientData = {
  formId: 'PT-2024-001',
  firstName: 'Rajesh',
  lastName: 'Kumar',
  dateOfBirth: '1965-03-15',
  sex: 'male',
  phone: '+91-9876543210',
  address: '123 MG Road, Sector 12, New Delhi, 110001',
  emergencyContact: 'Priya Kumar - +91-9876543211',
  allergies: 'Penicillin, Sulfa drugs',
  typeOfCancer: 'Squamous cell carcinoma',
  placeOfCancer: 'Oral cavity - Buccal mucosa',
  stageOfCancer: 'stage-3',
  currentDiagnoses:
    'T3N1M0 - Locally advanced squamous cell carcinoma of the right buccal mucosa with ipsilateral cervical lymph node involvement.',
  treatmentSuccess: 'partially-successful',
  patientAlive: 'alive',
  howLongUnderTreatment: '8 months',
  dateOfSurgery: '2024-02-20',
  surgerySuccess: 'successful',
  surgeryNotes:
    'Wide local excision with 1.5cm margins performed. Selective neck dissection (levels I-III) completed. Reconstruction with pectoralis major myocutaneous flap.',
  postOpNotes:
    'Patient recovered well post-operatively. Minor wound dehiscence managed conservatively. Flap viable with good vascularity.',
  lastFollowUpDate: '2024-10-15',
  nextFollowUpDate: '2025-01-15',
  followUpNotes:
    'Patient tolerating adjuvant radiotherapy well. No signs of local recurrence. Continue monitoring for 3-month intervals.',
};

export const dummyMediaUrls: MediaFile[] = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800',
    name: 'CT_Scan_Axial_View.jpg',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800',
    name: 'Pre_Surgery_Photo.jpg',
  },
  {
    type: 'video',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    name: 'Surgical_Procedure_Recording.mp4',
  },
  {
    type: 'pdf',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    name: 'Pathology_Report.pdf',
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800',
    name: 'Follow_Up_Scan.jpg',
  },
];
