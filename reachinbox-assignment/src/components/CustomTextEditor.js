import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CustomTextEditor = () => {
  return (
    <div>
      <Editor
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
          inline: { options: ['bold', 'italic', 'underline', 'strikethrough'] },
        }}
      />
      <button>SAVE</button>
      <button>Variables</button>
    </div>
  );
};

export default CustomTextEditor;
