import React from 'react';


import { Placeholder } from 'rsuite';

const Step1 = () => (
  <>
   
  
    <Placeholder.Paragraph style={{ marginTop: 30 }} graph="image" />
    <hr />
    <p>You can also customize the number of lines, spacing, etc.:</p>
    <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} graph="image" active />
  </>
);

export default Step1;