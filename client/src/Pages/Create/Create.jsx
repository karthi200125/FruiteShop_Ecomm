import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import apirequest from '../../Utils/ApiRequest';
import app from '../../firebase';
import './create.scss';

const Create = () => {
  const [input, setInput] = useState({
    title: '',
    desc: '',
    price: '',
    category: '',
    productImg: '',
  });
  const [isloading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const { user } = useSelector((state) => state.user);

  const handlechange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleUpload = () => {
    return new Promise((resolve, reject) => {
      if (file) {
        const storage = getStorage(app);
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },
          (error) => {
            console.error(error);
            reject('Upload failed');
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUrl(downloadURL);
              resolve(downloadURL);
            });
          }
        );
      } else {
        resolve(''); 
      }
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (isloading || !input.category || input.category === 'Category') return;
    setIsLoading(true);
    try {
      const uploadedImageUrl = await handleUpload();
      const userId = user?._id;
      const res = await apirequest.post(`http://localhost:8800/product/createproduct/${userId}`, {
        ...input,
        productImg: uploadedImageUrl,
      });
      console.log('Product created successfully');
      setInput({
        title: '',
        desc: '',
        price: '',
        category: '',
        productImg: '',
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const options = [
    'Category',
    'fruits',
    'vegetables',
    'meals',
    'groceries',
    'petsupply',
    'organic',
  ];

  return (
    <div className="create">
      <Navbar/>
      <form action="" onSubmit={handlesubmit}>
        <div className="drop">
          <label htmlFor="imgUpload">
            <input type="file" id="imgUpload" onChange={handleSelect} accept=".jpg, .png, .jpeg" />
            <div className="mid">
              <AiOutlineCloudUpload size={40} />
              <span>Upload image</span>
            </div>
          </label>
          {imagePreview && <img src={imagePreview} alt="Selected Image" />}
        </div>
        <div className="right">
          <h1>Create Product</h1>
          <div className="title">
            <label htmlFor="title">Product Title</label>
            <input type="text" name="title" placeholder="Product Title" required onChange={handlechange} />
          </div>
          <div className="tp">
            <label htmlFor="price">Price</label>
            <div className="inputbox">
              <input type="number" name="price" placeholder="Price" required onChange={handlechange} />
              <select name="category" onChange={handlechange} required>
                {options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <textarea name="desc" cols="30" rows="10" placeholder="Write Product Description Here..." onChange={handlechange}></textarea>
          {progress}
          <button type="submit">{isloading ? "Creating..." : "Create Product"}</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
