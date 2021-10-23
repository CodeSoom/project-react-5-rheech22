import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import DiaryPage from './DiaryPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/diary" component={DiaryPage} />
      </Switch>
    </div>
  );
}
