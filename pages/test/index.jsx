import React from 'react';
import Link from 'next/link';

import {Layout} from '@layout';
// import {find} from '@api_manager';

const Test = ({data}) => {
  return (
    <Layout>
      {data.title}
    </Layout>
  )
}

export const getServerSideProps = find;

export default Test;
