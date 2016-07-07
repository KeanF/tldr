// Include approrpiate routing information to the UI
import '../imports/public_ui/body.js'
import '../imports/user_ui/body.js'

/**
 * Render {{> something}} if user logged in, {{> LOGIN}} if not
 */
function render (route, place) {
    if (!Meteor.user()) {
        route.render('login');
    } else {
        route.render(place);
    }
}