const Images = require('../../api/v1/images/model');
const { NotFoundError } = require('../../errors')

const generateUrlImage = async (req) => {
    const result = `uploads/${req.file.filename}`;
    return result;
};

const createImages = async (req) => {
    console.log('File:', req.file);
    const result = await Images.create({
        name: req.file
            ? `public/uploads/avatar/${req.file.filename}`
            : 'public/uploads/avatar/default.jpg',
    });
    console.log('Result:', result);
    return result;
};




const checkingImage = async (id) => {
    const result = await Images.findOne({ _id: id });
    console.log(result);
  
    if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);
    return result;
};

module.exports = { 
    createImages, 
    checkingImage , 
    generateUrlImage
};