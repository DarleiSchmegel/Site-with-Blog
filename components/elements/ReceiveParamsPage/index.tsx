import { useRouter } from 'next/router';
import React from 'react';
import ReceiveParamsPageTemplate from './template';
import { Params } from './template';
const ReceiveParamsPage: React.FC = () => {
  const router = useRouter();
  //const { name, date } = router.query;
  // console.log('[params]', name, date);
  const params = router.query;
  console.log(params);
  return <ReceiveParamsPageTemplate params={params as Params} />;
};

export default ReceiveParamsPage;
