import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

export const StyledDropzone = styled(Dropzone)`
	width: 200px;
	height: 100px;
	line-height: 100px;
	text-align: center;
	border: 2px dashed #666;
	borderRadius: 5px;
`;