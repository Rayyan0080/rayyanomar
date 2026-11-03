export default function Prompt({ path }: { path: string }) {
  return (
    <span className="prompt">
      <span className="prompt-user">rayyan@portfolio</span>:<span className="prompt-path">{path}</span>$
      {' '}
    </span>
  );
}
