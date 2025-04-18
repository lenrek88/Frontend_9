import './App.css';
import Header from './components/header/header.jsx';
import FilmCardInfo from './components/films/film_card_info.jsx';
import Content from './components/films/content.jsx';
import HelpRegisterText from './components/authorization/helpReigsterText.jsx';
import { Route, Routes } from 'react-router-dom';
import GetToken from './components/authorization/get_token.jsx';
import PostToken from './components/authorization/post_token.jsx';
import getCookie from './utils/cookie/getCookie.js';
// import deleteAllCookies from './utils/cookie/deleteAllCookies.js';

function App() {
    // deleteAllCookies();
    const Token = getCookie('userToken');
    console.log(Token, 'App.js');
    return (
        <div className="App">
            <Header />
            {Token ? (
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/Film/:id" element={<FilmCardInfo />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<HelpRegisterText />} />
                </Routes>
            )}
            <Routes>
                <Route path="/Registration" element={<GetToken />} />
                <Route path="/Authorisation" element={<PostToken />} />
            </Routes>
        </div>
    );
}

export default App;
