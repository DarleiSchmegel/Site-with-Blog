import React from 'react';
import { ReceiveParamsPageWrapper } from './styles';

export type Params = {
  name: string;
  date: string;
};

export type ReceiveParmsTemplateProps = {
  params: Params;
};

const ReceiveParmsTemplate: React.FC<ReceiveParmsTemplateProps> = ({ params }) => {
  return (
    <ReceiveParamsPageWrapper>
      <div>
        <strong>Name: </strong> {params.name}
      </div>
      <div>
        <strong>Data: </strong> {params.date}
      </div>
    </ReceiveParamsPageWrapper>
  );
};

export default ReceiveParmsTemplate;
