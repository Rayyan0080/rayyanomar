/** Shown when the URL doesn't match any directory. */
export default function NotFound({ pathname }: { pathname: string }) {
  return (
    <p className="line-error not-found">
      cd: no such file or directory: {decodeURIComponent(pathname)}. Type "cd ~" to go home.
    </p>
  );
}
