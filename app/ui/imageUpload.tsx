import React, { useState } from 'react';

const UploadImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await fetch('/api/upload-image', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          console.log('Image uploaded successfully!');
          // Handle success (e.g., show a success message)
        } else {
          console.error('Failed to upload image');
          // Handle error
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error
      }
    } else {
      console.error('No image selected');
      // Handle no image selected error
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default UploadImage;