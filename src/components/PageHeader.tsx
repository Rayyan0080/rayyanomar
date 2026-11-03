export default function PageHeader({ title }: { title: string }) {
  return (
    <header className="page-header">
      <h1 className="accent bold">{title}</h1>
      <div className="muted" aria-hidden="true">{'-'.repeat(title.length)}</div>
    </header>
  );
}
