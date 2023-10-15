let mouse;
let manager;
let dispatcher;
let pos = {
	x: 0,
	y: 0
}

//ok = 23
//mode = 206

Java.perform(() => {
    Java.enumerateLoadedClasses({
        "onMatch": function(name) {
			if(name === 'ai.xreal.KeyEventManager') {
				manager = Java.use(name);
				manager['handleKeyEvent'].implementation = function(type, key) {
					if(key === 206 && type === 0) {
						const o = mouse['getInstance']();
						const isCursorEnabled = o['hasCursor']();
						if(isCursorEnabled && pos.x === -25 && pos.y === -25) {
							o['removeCursor']();
						}
						else if(!isCursorEnabled) {
							o['initCursor'](0);
						}
					}
					return this.handleKeyEvent(type, key);
				}
			}
			else if(name === 'ai.nreal.mouse.CursorManager') {
				mouse = Java.use(name);
				mouse.updateXY.implementation = function(values) {
					this.updateXY(values);
					pos.x = this.currentX.value;
					pos.y = this.currentY.value;
				}
			}
        }
    });
});