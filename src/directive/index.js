import hasPermi from './permission/hasPermi'
import hasRole from './permission/hasRole'
import has from './permission/has'

export default function directive(app) {
  app.directive('hasPermi', hasPermi);
  app.directive('hasRole', hasRole);
  app.directive('has', has);
}