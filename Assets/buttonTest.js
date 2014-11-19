#pragma strict 
#pragma downcast


// JavaScript
function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,200), "Loader Menu");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,40,80,20), "Cryostat")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Cryostat_001" || child.name == "Endcap"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        }
    };

    // Make the second button.
    if (GUI.Button (Rect (20,70,80,20), "Cathode")) {
        for(var child : Transform  in MeshRenderer)
        {
          if(child.name == "Cathode"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        } 
    };
    if (GUI.Button (Rect (20,100,80,20), "Feedthroughs")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Feedthroughs"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        } 
    }
if (GUI.Button (Rect (20,130,80,20), "Field_Cage")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Field_Cage"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
if (GUI.Button (Rect (20,160,80,20), "RACKS")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "RACKS"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
   if (GUI.Button (Rect (20,190,80,20), "Wire_plane")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Wire_plane"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
   if (GUI.Button (Rect (20,220,80,20), "TPC_CAGE")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "TPC_CAGE"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
   if (GUI.Button (Rect (20,250,80,20), "Sphere")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Sphere"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
};