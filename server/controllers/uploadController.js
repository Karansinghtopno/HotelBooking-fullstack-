// const uploadImage = async (req, res) => {
//   try {
//     return res.status(200).json({ message: "file uploaded successfully" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// module.exports = { uploadImage };

const uploadController = require ("express").Router();

const multer= require("multer");

const {verifyToken} = require("../middlewares/verifyToken")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, res, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({ storage: storage });


uploadController.post("/image", verifyToken, upload.single("image"), async (req, res) => {
  try {
    return res.status(200).json({ message: "file uploaded successfully" });
  } catch (error) {
    console.log(error.message);
  }
})


module.exports = uploadController;