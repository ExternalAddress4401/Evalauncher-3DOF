# Evalauncher 3DOF

This script enables 3DOF support for sideloaded apps in Evalauncher.

Installation guide: https://docs.google.com/document/d/1PYVZM-wl-wDX57DZwMvS_6mgSGqh1kJvLvO1-a1wUuU/edit

There are 2 scripts in this repo.

ai.nreal.evalauncher - enables toggling 3DOF mode by holding the "back" button in the apps screen

com.xreal.evaservice - disables the mouse if the mode button is pressed while it's in the top left corner

## Building

This requires you to havge Node.JS installed: https://nodejs.org/en

1. Install Node.JS
2. Clone this repo
3. Run `node build.js`
4. `ai.nreal.evalauncher.js` will be created

The com.xreal.evaservice script doesn't need to be compiled and can be used as is.