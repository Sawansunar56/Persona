/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";
import HomePage from './pages/Home';

import './index.css'
import AboutPage from './pages/About';
import ProjectPage from './pages/Project';
import Navbar from './components/Navbar';
import GameIdea from './pages/GameIdea';

const root = document.getElementById('root')

type AppProps = {
    children?: JSX.Element;
}

function App(props: AppProps) {
    return (
        props.children
    );
}

render(() => <Router root={App}>
    <Route path="/" component={HomePage} />
    <Route path="/projects" component={ProjectPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/gameidea" component={GameIdea} />
</Router>, root!);
