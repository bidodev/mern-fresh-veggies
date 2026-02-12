import React from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function UploadButtons({ onSelectFile }) {

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(event) => onSelectFile(event)}
        id="icon-button-file"
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
