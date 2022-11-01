import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/navbar';
// import HomePage from './pages/Homepage';

// Home
const Blog = React.lazy(() => import("./pages/Blog"));
// const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));



// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  return (
    <Router basename={"/MedicalHome/"}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop>
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Blog} />
            {/* <Route exact path="/home-v2" component={Hometwo} /> */}
            

            {/* Auth */}
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
