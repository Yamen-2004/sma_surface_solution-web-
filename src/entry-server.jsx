import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { getRoute } from './lib/routes.js'
import { renderHead } from './lib/seo.js'
export function render(path) {
  const route = getRoute(path)
  return {
    html: renderToString(<App path={path} />),
    head: renderHead(route),
    status: route.type === 'notfound' ? 404 : 200,
  }
}
