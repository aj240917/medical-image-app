import { readFileSync } from 'dicom-parser';

export const parseDICOMFile = (file: File) => {
  const arrayBuffer = readFileSync(file);
  const dataSet = dicomParser.parseDicom(arrayBuffer);

  return {
    patientName: dataSet.string('x00100010'),
    studyDate: dataSet.string('x00080020'),
    pixelSpacing: dataSet.string('x00280030'),
  };
};
