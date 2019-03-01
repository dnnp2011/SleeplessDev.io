# Version 0.2


### Bugs
* Crypto and Stock Market pages sometimes throw `TypeError: Cannot read property 'getBoundingClientRect' of null` <br>
_Notes:_ UI renders before GET request returns GDAX ticker data

### Frontend
* Finish 'My Projects' / Portfolio, and 'Blog' Pages

### Backend
* Create backend framework
* Implement Admin Authentication backend
* Implement Database backend (for blog, reference, and tutorial data)


# Version 0.3


### Frontend
* Finish 'Reference' and 'Tutorials' Pages

### Backend
* Implement data stream from 'Reference', 'Tutorial', and 'Blog' databases to Frontend


# Version 0.4


### Frontend
* Outline the component structure of Projects page
* Encapsulate Project functionality into separate components
* Create some eye catching animations for Projects page
* Consider architecture of data storage model: backend storage of projects with MongoDB, or hard-coded into React

### Backend
* BUG: Blog editing modal doesn't reduce size automatically
* BUG: Adding a new post directly after deleting one (_without refresh_) causes a the popover button panel to not work, and the post is **not** prepended to the beginning of the list
* Update the GraphQL API endpoint documentation


# Version 0.5


### Frontend
* FIXME: Blog page defaults to the current month & year, but if there are no posts for that time span, a warning message is displayed. Implement a fallback to last month that has posts in that scenario.
* OPTIMIZE: Remove extraneous DOM nodes that don't contribute to page structure (_unneeded Grids, etc_)

### Backend
* BUG: Fix the frequent logout bug (_session issue_)