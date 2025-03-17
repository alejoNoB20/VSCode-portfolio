import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content="Alejo Viviani Portfolio" />
      <meta
        property="og:description"
        content="Un desarrollador Full-Stack que crea sitios web que te gustaría usar."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://alejo-portfolio.vercel.app" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Alejo Viviani',
};
