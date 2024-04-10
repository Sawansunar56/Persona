/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";
import HomePage from './pages/Home';

import './index.css'
import AboutPage from './pages/About';
import ProjectPage from './pages/Project';
import Navbar from './components/Navbar';

const root = document.getElementById('root')

type AppProps = {
    children?: JSX.Element;
}

function App(props: AppProps) {
    return (
        <main>
            <Navbar />
            {props.children}
        </main>
    );
}

render(() => <Router root={App}>
    <Route path="/" component={HomePage} />
    <Route path="/projects" component={ProjectPage} />
    <Route path="/about" component={AboutPage} />
</Router>, root!);
