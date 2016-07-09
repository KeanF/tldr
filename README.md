# tl;dr  
Kean Finucane & Samuel Scimemi

## Required Software
1. [Meteor](https://www.meteor.com/install)
2. Screen via `sudo apt-get install screen`

## Initial Setup
1. Clone the repo: `git@github.com:KeanF/cs4640project.git`
2. Ensure [Meteor](https://www.meteor.com/install) is installed on your system
3. `screen -S meteorServer`
    - Will set the $screen_num to "meteorServer"
4. `meteor`
5. Enter `CTRL+A, CTRL+D` to detach screen
6. Navigate to localhost:3000 in a browser to view!
- This will be 192.168.56.2:3000 if run on the CS4640 VM

## screen tips
- List screens:
	1. `screen -ls`
- Kill screen: 
	1. `screen -X -S $screen_num kill`
- Reattach to screen:
	1. `screen -r $screen_num`
    2. This is useful if you need to restart the Meteor server but don't want to kill the current screen instance