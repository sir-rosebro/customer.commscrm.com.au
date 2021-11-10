import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal} from 'antd';
import { PlusOutlined } from "@ant-design/icons";

import { uploadImage } from '../../redux/actions';

const ImageUploadModal = ({showModal, setShowModal}) => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    // const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowModal(false);
        //setLoading(true);
        if (file) { 
                    const data =new FormData();
                    const filename = Date.now() + file.name;
                    data.append("name", filename);
                    data.append("file", file);
                    dispatch(uploadImage(data));
    }
}
    const imageUploadForm = () => (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fileInput" className="imageUploadWidget">
               <PlusOutlined/>
               <span>Click here to Upload</span>
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                accept="images/*"
                onChange={(e) => setFile(e.target.files[0])}
            />
            { file && (
                <input 
                    type="submit" 
                    value="Set this as Profile Picture"
                    style={{width:'100%', marginTop:'20px'}}
                />
            )} 
        </form>
    );

    return (
            <Modal
                visible={showModal}
                title="Upload Profile Image"
                onOk={() => handleSubmit}
                onCancel={() => setShowModal(false)}
                footer={[
                      null
                    ]}
            >  
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            { imageUploadForm() }
            </Modal> 
    )
}

ImageUploadModal.propTypes = {
    showModal:PropTypes.bool, 
    setShowModal:PropTypes.func,
}

export default ImageUploadModal;