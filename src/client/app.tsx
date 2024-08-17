
import { createRoot } from 'react-dom/client';

function App()
{
	return (
		<div>
			hello world!
		</div>
	);
}

const root = createRoot(document.getElementById('app')!);
root.render(<App/>);