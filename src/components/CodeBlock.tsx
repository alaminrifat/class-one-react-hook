interface CodeBlockProps {
  code: string;
  title?: string;
}

const CodeBlock = ({ code, title }: CodeBlockProps) => {
  return (
    <div className="my-4">
      {title && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg font-semibold text-sm">
          {title}
        </div>
      )}
      <pre
        className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto ${title ? "rounded-b-lg" : "rounded-lg"}`}
      >
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
