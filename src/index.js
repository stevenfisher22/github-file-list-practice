// React Elements
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Other Components
import Time from './Time';

// CSS
import './index.css';



// Main Component
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
        <FileName file={file}/>
        <CommitMessage commit={file.latestCommit}/>
        <td className="age">
            <Time time={file.updated_at}/>
        </td>
    </tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};


// File Name that sits in 'FileListItem' Row
function FileName({file}) {
    return (
        <>
            <FileIcon file={file}/>
            <td className="file-name">{file.name}</td>
        </>
    );
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};


// Icon that is nested in 'FileName' Component
function FileIcon({file}) {
    let icon = 'fa-file-alt';
    if(file.type === 'folder') {
        icon = 'fa-folder'
    }
    return (
        <td className="file-icon">
            <i className={`fa ${icon}`}/>
        </td>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};


// Commit Message that sits in 'FileListItem' Row
const CommitMessage = ({commit}) => (
    <td className="commit-message">
        {commit.message}
    </td>
);
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
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
