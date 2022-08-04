import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styles from "./paragraph.module.scss"

const Paragraph = ({color,children})=>{
  return (
    <div data-testid="Paragraph" className="">
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  children:PropTypes.string
};

Paragraph.defaultProps = {
  color:"#00aeef",
  children:"Lorem ipsum"
};




export { Paragraph as default}