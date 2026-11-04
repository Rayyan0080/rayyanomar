import { useLocation } from 'react-router-dom';
import Terminal from './components/Terminal';
import NodePage from './components/NodePage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { nodeForPathname } from './fs/tree';

/** Every URL is a directory in the tree; its page is chosen from the node. */
function Page() {
  const { pathname } = useLocation();
  const node = nodeForPathname(pathname);
  if (!node) {
    return (
      <p className="line-error not-found">
        cd: no such file or directory: {decodeURIComponent(pathname)}. Type "cd ~" to go home.
      </p>
    );
  }
  if (node.view === 'home') return <Home />;
  if (node.view === 'contact') return <Contact node={node} />;
  return <NodePage node={node} />;
}

export default function App() {
  return (
    <Terminal>
      <Page />
    </Terminal>
  );
}
