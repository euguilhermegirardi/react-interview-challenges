// Explain what is a three structure in code.

import { useState } from 'react';
import './threeLogic.css';

type FileProps = {
  name: string;
  children?: FileProps[]
};

const files = {
  children: [
    {
      name: 'node_modules',
      children: [
        {
          name: 'some_library',
          children: [
            {
              name: 'some_library',
              children: [
                {
                  name: 'some_library',
                }
              ]
            },
          ]
        }
      ]
    },
    {
      name: 'package.json'
    },
    {
      name: 'vite.config.ts'
    },
  ]
};

const File = ({ file, depth }: { file: FileProps, depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div key={file.name} style={{ padding: '10px' }}>
      {file.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '-' : '+'} {file.name}
        </button>
      ) : (
        <div>{file.name}</div>
      )}

      {isExpanded && (
        <ul className='is-expanded' style={{ paddingLeft: `${depth * 10}px` }}>
          {file.children?.map((files) => (
            <li key={files.name}>
              <File file={files} depth={depth + 1} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ThreeLogic = () => {
  return (
    <ul className='three-content'>
      {files.children.map((eachFile) => (
        <li key={eachFile.name}>
          <File file={eachFile} depth={1} />
        </li>
      ))}
    </ul>
  );
};

export default ThreeLogic;