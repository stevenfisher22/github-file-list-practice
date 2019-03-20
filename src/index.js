// React Elements
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Other Components
import Time from './components/Time';
import CommitMessage from './components/CommitMessage'
import FileName from './components/FileName'

// CSS
import './index.css';



// Main Component
// Props "files" is passed through ReactDOM
const FileList = ({files}) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file}/>
            ))}
        </tbody>
    </table>
);
FileList.propTypes = {
    files: PropTypes.array
};

// Row that sits in Main 'FileList' Component
const FileListItem = ({file}) => (
    <tr className="file-list-item">
        <td className="file-icon"><FileIcon file={file}/></td>
        <td className="file-name"><FileName file={file}/></td>
        <td className="commit-message"><CommitMessage commit={file.latestCommit}/></td>
        <td className="age"><Time time={file.updated_at}/></td>
    </tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};


// File Icon
function FileIcon({file}) {
    let icon = 'fa-file-alt';
    if(file.type === 'folder') {
        icon = 'fa-folder'
    }
    return (
        <>
            <i className={`fa ${icon}`}/>
        </>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};


// Fake Data 
const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: '2019-02-11 21:24:00',
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: '2019-03-11 21:24:00',
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: '2019-03-12 21:24:00',
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

ReactDOM.render(<FileList files={testFiles}/>, document.querySelector('#root'))
