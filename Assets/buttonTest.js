﻿#pragma strict


// JavaScript
function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,90), "Loader Menu");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,40,80,20), "Cryostat")) {
        //Application.LoadLevel (1);
        //GetComponent(MeshRenderer).enabled = false;
        for(var child : Transform  in transform)
        {
          if(child.name == "Cryostat_001" || child.name == "Endcap"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        }
        
    }

    // Make the second button.
    if (GUI.Button (Rect (20,70,80,20), "Level 2")) {
        //Application.LoadLevel (2);
    }
}