// Explain what is a three structure in code.

import { useState } from 'react';
import './styles.css';

type FileProps = {
  name: string;
  children?: FileProps[]
};

const files = [
  {
    name: 'node_modules',
    children: [
      {
        name: '.bin',
        children: [
          {
            name: 'acorn',
          },
        ]
      },
      {
        name: '.vite',
        children: [
          {
            name: 'deps',
            children: [
              {
                name: '_metadata.json',
              },
              {
                name: 'chunck-MYQCF5U.js',
              },
              {
                name: 'package.json',
              }
            ]
          },
        ]
      },
    ]
  },
  {
    name: 'package.json'
  },
  {
    name: 'vite.config.ts'
  },
];

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
        <ul className='is-expanded'>
          {file.children?.map((files) => (
            <li key={files.name} style={{ paddingLeft: `${depth * 30}px` }}>
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
      {files.map((eachFile) => (
        <li key={eachFile.name}>
          <File file={eachFile} depth={1} />
        </li>
      ))}
    </ul>
  );
};

export default ThreeLogic;