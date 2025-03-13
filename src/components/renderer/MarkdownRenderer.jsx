import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import rehypeMathJax from 'rehype-mathjax';

const MarkdownViewer = ({ url }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(url);
        setMarkdown(response.data);
      } catch (error) {
        console.error('Error fetching the Markdown:', error);
      }
    };

    fetchMarkdown();
  }, [url]);

  return (
    <div className="markdown-content prose max-w-full my-5 mx-5 lg:mx-10 text-neutral-800 dark:text-neutral-200">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeMathJax]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                style={dracula}
                customStyle={{
                  fontSize: '0.9rem',
                  margin: '0',
                  border: 'none',
                  background: 'none',
                  overflowX: 'auto',
                }}
                codeTagProps={{
                  style: { padding: '0', margin: '0', border: 'none' },
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          h1({ node, ...props }) {
            return <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100" {...props} />;
          },
          h2({ node, ...props }) {
            return <h2 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-200" {...props} />;
          },
          h3({ node, ...props }) {
            return <h3 className="text-2xl font-medium text-neutral-900 dark:text-neutral-300" {...props} />;
          },
          h4({ node, ...props }) {
            return <h4 className="text-xl font-medium text-neutral-900 dark:text-neutral-400" {...props} />;
          },
          h5({ node, ...props }) {
            return <h5 className="text-lg font-medium text-neutral-900 dark:text-neutral-500" {...props} />;
          },
          h6({ node, ...props }) {
            return <h6 className="text-md font-medium text-neutral-900 dark:text-neutral-600" {...props} />;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
