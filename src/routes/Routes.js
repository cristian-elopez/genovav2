import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';

export const Routes = () => {
  return (
    <ReactDomRoutes>
        <Route path="/" element={<Home />} />
    </ReactDomRoutes>
  )
}
