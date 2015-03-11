#pragma strict 
#pragma downcast


// JavaScript
function OnGUI () {
    // Make a background box
    
    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (10,20,140,60), "Cryostat")) {
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
    if (GUI.Button (Rect (10,90,140,60), "Cathode")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Cathode"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        } 
    }
    if (GUI.Button (Rect (10,160,140,60), "Feedthroughs")) {
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
if (GUI.Button (Rect (10,230,140,60), "Field_Cage")) {
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
if (GUI.Button (Rect (10,300,140,60), "RACKS")) {
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
   if (GUI.Button (Rect (10,370,140,60), "Wire_plane")) {
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
   if (GUI.Button (Rect (10,430,140,60), "TPC_CAGE")) {
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
   if (GUI.Button (Rect (10,500,140,60), "Sphere")) {
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