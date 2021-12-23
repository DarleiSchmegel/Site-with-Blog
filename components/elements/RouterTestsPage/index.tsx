import { useRouter } from 'next/router';
import React from 'react';
import RouterTestsPageTemplate from './template';

const RouterTestesPage: React.FC = () => {
  const router = useRouter();
  const { params } = router.query;
  if (params) console.log('foi', params);
  console.log(router.query);
  return <RouterTestsPageTemplate />;
};

export default RouterTestesPage;
