import { Switch, Route } from 'react-router-dom'
function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
      </Switch>
    </main>
  );
}