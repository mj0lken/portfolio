import React from 'react';
import Head from 'next/head';
import { Input } from '../components/input';
import { useHistory } from '../hooks/history';
import { History } from '../components/history';
import { NextPageContext } from 'next';
import packageJson from '../../package.json';
import { getQuote } from '../api';
import { banner } from '../utils/bin';

const IndexPage: React.FC<{ version: string; quote: string }> = ({
  version,
  quote,
}) => {
  const inputRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const { history, command, setCommand, setHistory, clearHistory } = useHistory(
    [],
  );
  function initTheme(): any {
    if (typeof window !== 'undefined') {
      const theme = window.localStorage.theme ? window.localStorage.theme : 'dark'
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      const root = window.document.documentElement.classList
      root.remove(newTheme)
      root.add(theme)
      window.localStorage.setItem('theme', theme)
    }
  }
  const init = React.useCallback(() => {
    setHistory(banner())
    initTheme()
  }, []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);



  return (
    <>
      <Head>
        <title>mj0lken | Home</title>
      </Head>

      <div className="p-5 overflow-hidden h-full border-2 rounded border-light-foreground dark:border-dark-foreground cursor-text">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />
          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            setCommand={setCommand}
            setHistory={setHistory}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const { quote } = await getQuote();

  return {
    props: {
      version: packageJson.version,
      quote,
    },
    revalidate: true,
  };
}

export default IndexPage;
