/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as DarkLogin} from './DarkLogin'
export {default as Splash} from './splash'
export {default as Main} from './chatComponents/Main'
export {default as ChannelList} from './chatComponents/ChannelList'
export {default as CalendarView} from './calendarView'
