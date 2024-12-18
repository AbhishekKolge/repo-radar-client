import { FileRejection } from 'react-dropzone';
import { UNITS } from './defaults';
import { warningToast } from './error';

export const bytesFormat = (x: number | string) => {
  let index = 0;
  let value = parseInt(x.toString(), 10) || 0;

  while (value >= 1024 && ++index) {
    value = value / 1024;
  }

  return value.toFixed(value < 10 && index > 0 ? 1 : 0) + ' ' + UNITS[index];
};

export const validateDropzoneSingleFile = (rejectedFiles: FileRejection[], maxSize: number) => {
  const rejectedFile = rejectedFiles[0];
  if (rejectedFile) {
    const {
      errors: [{ code }],
      file: { name },
    } = rejectedFile;

    switch (code) {
      case 'file-too-large': {
        warningToast(`${name} is larger than ${bytesFormat(maxSize)}`);
        break;
      }
      default:
        break;
    }
  }
};
