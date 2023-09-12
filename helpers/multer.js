import multer from 'multer';
import { __dirname, join, path } from '../dirname.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, '.', 'public', 'images'));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

  
export const upload = multer({ storage }).single('image');