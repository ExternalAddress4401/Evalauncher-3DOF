import "frida-il2cpp-bridge";

let space = false;
let cardWindow;

setTimeout(() => {
	Il2Cpp.perform(() => {
		toast('Loaded 3DOF script.');
		const assembly = Il2Cpp.domain.assembly('Assembly-CSharp').image;
		
		assembly.class('Launcher.Home.AppMirrorCardWindow').method('ProcessInput').implementation = function(key, type) {
			cardWindow = this;
			if(key.toString() === 'Escape' && type.toString() === 'LongPress') {
				space = !space;
				toast(space ? "3DOF mode enabled." : "0DOF mode enabled.");
			}
			return this.method('ProcessInput').invoke(key, type);
		}
		
		assembly.class('Launcher.Home.EvaAppOpenCmd').method('OpenEvaApp').implementation = function(info) {
			info.field('displayMode').value = space ? 0 : 2;
			//cardWindow.method('OnClose').invoke();
		}
	})
}, 2000);


/**
	Displays a short toast using built in Android APIs
*/
function toast(message) {
	const toast = Java.use("android.widget.Toast");

    try {
      Java.scheduleOnMainThread(function () {
        toast
          .makeText(
            Java.use("android.app.ActivityThread")
              .currentApplication()
              .getApplicationContext(),
            Java.use("java.lang.String").$new(message),
            0
          )
          .show();
      });
    } catch (e) {
      const error = e as Error;
      console.log("Failed to show toast");
    }
}