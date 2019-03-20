import React from 'react';
import PropTypes from 'prop-types';

function FileName({file}) {
    return (
        <div>
            {file.name}
        </div>
    );
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileName