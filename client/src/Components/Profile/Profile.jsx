import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';
import { useState } from 'react';
import noimage from '../../assets/userprofile.png';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import app from '../../firebase';
import apirequest from '../../Utils/ApiRequest';

import './Profile.scss';

const Profile = ({ onclose }) => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [input, setinput] = useState({
        username: user.username || '',
        phoneNo: user.phoneNo || '',
        street: user.address?.street || '',
        city: user.address?.city || '',
        state: user.address?.state || '',
        zipCode: user.address?.zipCode || '',
        profilePic: user.profilePic || ''
    });
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handlechange = (e) => {
        setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const uploadedImageUrl = await handleUpload();
            const userId = user._id;
            const response = await apirequest.put(
                `http://localhost:8800/user/updateuser/${userId}`,
                { ...input, profilePic: uploadedImageUrl || user.profilePic }
            );
            dispatch(login(response.data));
            onclose(false);
            setLoading(false);
        } catch (error) {
            console.error('Error updating user:', error);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="profile">
            <AiOutlineClose size={25} onClick={() => onclose(false)} />
            <div className="imgcon">
                <img
                    src={imagePreview ? imagePreview : input.profilePic || noimage}
                    alt=""
                />
                <label htmlFor="imgUpload">
                    <input
                        type="file"
                        id="imgUpload"
                        onChange={handleSelect}
                        accept=".jpg, .png, .jpeg"
                        style={{ display: "none" }}
                    />
                    <div className="mid">
                        <FiEdit2 size={25} />
                    </div>
                </label>
            </div>
            <div className="inputbox">
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={input.username}
                    onChange={handlechange}
                />
            </div>
            <div className="inputbox">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNo"
                    value={input.phoneNo}
                    onChange={handlechange}
                />
            </div>
            <h1>Address</h1>
            <div className="inputbox">
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    placeholder="Street name"
                    name="street"
                    value={input.street}
                    onChange={handlechange}
                />
            </div>
            <div className="inputbox">
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    placeholder="City name"
                    name="city"
                    value={input.city}
                    onChange={handlechange}
                />
            </div>
            <div className="sz">
                <div className="inputbox">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={input.state}
                        onChange={handlechange}
                    />
                </div>
                <div className="inputbox">
                    <label htmlFor="zipCode">ZipCode</label>
                    <input
                        type="text"
                        placeholder="Zip Code"
                        name="zipCode"
                        value={input.zipCode}
                        onChange={handlechange}
                    />
                </div>
            </div>
            <button type="submit">
                {loading ? 'submitting...' : 'submit'}
            </button>
        </form>
    );
};

export default Profile;
