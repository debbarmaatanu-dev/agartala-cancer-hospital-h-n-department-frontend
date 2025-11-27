import {toJpeg} from 'html-to-image';
import jsPDF from 'jspdf';

interface PatientFormData {
  formId: string;
  firstName: string;
  lastName: string;
  [key: string]: string;
}

export const generatePatientRecordPDF = async (
  formData: PatientFormData,
): Promise<void> => {
  const recordElement = document.getElementById('patient-record-content');
  const actionButtons = document.getElementById('action-buttons');
  const mediaSection = document.getElementById('media-section');
  const searchParamInfo = document.getElementById('search-param-info');

  if (!recordElement) {
    alert('Could not find patient record content.');
    return;
  }

  try {
    // Store original styles
    const originalStyles = {
      width: recordElement.style.width,
      maxWidth: recordElement.style.maxWidth,
    };

    // Temporarily remove action buttons, media section, and search param from DOM
    const actionButtonsParent = actionButtons?.parentNode;
    const mediaSectionParent = mediaSection?.parentNode;
    const searchParamInfoParent = searchParamInfo?.parentNode;

    if (actionButtons && actionButtonsParent) {
      actionButtonsParent.removeChild(actionButtons);
    }
    if (mediaSection && mediaSectionParent) {
      mediaSectionParent.removeChild(mediaSection);
    }
    if (searchParamInfo && searchParamInfoParent) {
      searchParamInfoParent.removeChild(searchParamInfo);
    }

    // Force consistent layout for capture
    recordElement.style.width = '1024px';
    recordElement.style.maxWidth = '1024px';

    // Wait a bit for layout to settle
    await new Promise(resolve => setTimeout(resolve, 100));

    // Capture the content as JPEG for smaller file size
    const imgData = await toJpeg(recordElement, {
      quality: 0.85,
      pixelRatio: 1.5,
      cacheBust: true,
      skipFonts: false,
    });

    // Restore original styles and re-add removed elements
    recordElement.style.width = originalStyles.width;
    recordElement.style.maxWidth = originalStyles.maxWidth;

    if (actionButtons && actionButtonsParent) {
      actionButtonsParent.appendChild(actionButtons);
    }
    if (mediaSection && mediaSectionParent) {
      mediaSectionParent.appendChild(mediaSection);
    }
    if (searchParamInfo && searchParamInfoParent) {
      searchParamInfoParent.appendChild(searchParamInfo);
    }

    // Load the image first
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = imgData;
    });

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm
    const margin = 10; // Margin in mm

    // Calculate dimensions
    const imgWidth = img.width;
    const imgHeight = img.height;

    // Calculate width to fit on page with margins
    const availableWidth = pdfWidth - 2 * margin;
    const scaleFactor = availableWidth / imgWidth;
    const scaledHeight = imgHeight * scaleFactor;

    // Calculate how many pages we need
    const availableHeight = pdfHeight - 2 * margin;
    const totalPages = Math.ceil(scaledHeight / availableHeight);

    // Split content across multiple pages
    for (let page = 0; page < totalPages; page++) {
      if (page > 0) {
        pdf.addPage();
      }

      // Calculate the portion of the image for this page
      const sourceY = (page * availableHeight) / scaleFactor;
      const sourceHeight = Math.min(
        availableHeight / scaleFactor,
        imgHeight - sourceY,
      );

      // Calculate the height for this page
      const pageHeight = sourceHeight * scaleFactor;

      // Use canvas to crop the image for this page
      const canvas = document.createElement('canvas');
      canvas.width = imgWidth;
      canvas.height = sourceHeight;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(
          img,
          0,
          sourceY,
          imgWidth,
          sourceHeight,
          0,
          0,
          imgWidth,
          sourceHeight,
        );

        const pageImgData = canvas.toDataURL('image/jpeg', 0.85);
        pdf.addImage(
          pageImgData,
          'JPEG',
          margin,
          margin,
          availableWidth,
          pageHeight,
        );
      }
    }

    // Save PDF
    const fileName = `Patient_Record_${formData.formId}_${formData.firstName}_${formData.lastName}.pdf`;
    pdf.save(fileName);

    console.log('PDF Downloaded successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};
