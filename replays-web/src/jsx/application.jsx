var Router = ReactRouter;

var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="app">Dashboard</Link>
            </li>
            <li>
              <Link to="inbox">Inbox</Link>
            </li>
          </ul>
        </header>
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function render () {
    return (
      <p>rofl</p>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox} />
    <DefaultRoute handler={App} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
