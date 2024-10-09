// Function to switch between tabs
function openTab(event, tabName) {
    // Get all elements with class "tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
    }
 
    // Get all elements with class "tablinks" and remove the "active" class
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
 
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
 }
 
// Function to generate a random tune based on horsepower
function generateRandomTune(hp) {
   const tune = {};
   
   // Generate values based on generic tuning
   tune.frontTirePressure = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Random front tire pressure between 20 and 50 PSI
   tune.rearTirePressure = Math.floor(Math.random() * (50 - 15 + 1)) + 15; // Random rear tire pressure between 15 and 50 PSI
   tune.diffPower = Math.floor(Math.random() * 101); // Random diff power between 0 and 100
   tune.diffCoast = Math.floor(Math.random() * 101); // Random diff coast between 0 and 100
   tune.diffPreload = Math.floor(Math.random() * 121); // Random diff preload between 0 and 120
   tune.frontWheelRate = Math.floor(Math.random() * (130 - 30 + 1)) + 30; // Random front wheel rate
   tune.rearWheelRate = Math.floor(Math.random() * (120 - 30 + 1)) + 30; // Random rear wheel rate
   tune.FrontAntiRollBar = Math.floor(Math.random() * 51) * 1000; // Random front anti-roll bar
   tune.RearAntiRollBar = Math.floor(Math.random() * 31) * 1000; // Random rear anti-roll bar
   tune.frontCamber = (Math.random() * 8 - 4).toFixed(2); // Random front camber between -4 and +4
   tune.rearCamber = (Math.random() * 8 - 4).toFixed(2); // Random rear camber between -4 and +4
   tune.frontrideheight = Math.floor(Math.random() * (15 - 5 + 1)) + 5 + (tune.frontWheelRate / 10); // Ride height based on front wheel rate
   tune.rearrideheight = Math.floor(Math.random() * (15 - 5 + 1)) + 5 + (tune.rearWheelRate / 10); // Ride height based on rear wheel rate
   tune.frontToe = (Math.random() < 0.5) ? Math.random() * 0.1 : Math.random() * -0.1; // Random front toe, either in or out
   tune.rearToe = (Math.random() < 0.5) ? Math.random() * 0.1 : Math.random() * -0.1; // Random rear toe, either in or out

   return tune;
}

// Function to display the tune
function displayTune(tune) {
   const tuneDisplay = document.getElementById('tuneDisplay');
   tuneDisplay.innerHTML = `
       <p>Front Tire Pressure: ${tune.frontTirePressure} PSI</p>
       <p>Rear Tire Pressure: ${tune.rearTirePressure} PSI</p>
       <p>Diff Power: ${tune.diffPower}</p>
       <p>Diff Coast: ${tune.diffCoast}</p>
       <p>Diff Preload: ${tune.diffPreload}</p>
       <p>Front Wheel Rate: ${tune.frontWheelRate}</p>
       <p>Rear Wheel Rate: ${tune.rearWheelRate}</p>
       <p>Front Anti-Roll Bar: ${tune.FrontAntiRollBar}</p>
       <p>Rear Anti-Roll Bar: ${tune.RearAntiRollBar}</p>
       <p>Front Camber: ${tune.frontCamber}</p>
       <p>Rear Camber: ${tune.rearCamber}</p>
       <p>Front Ride Height: ${tune.frontrideheight}</p>
       <p>Rear Ride Height: ${tune.rearrideheight}</p>
       <p>Front Toe: ${tune.frontToe}</p>
       <p>Rear Toe: ${tune.rearToe}</p>
   `;
}

// Event listener for form submission
document.getElementById('tuningForm').addEventListener('submit', function(event) {
   event.preventDefault();
   const hp = parseFloat(document.getElementById('hp').value);
   
   // Generate a random tune based on selected horsepower
   const randomTune = generateRandomTune(hp);
   
   // Display the generated tune
   displayTune(randomTune);
});


function displayTune(randomTune, carPackMessage) {
   const outputDiv = document.getElementById('output');
   outputDiv.innerHTML = '';
   outputDiv.innerHTML += `<p>${carPackMessage}</p>`;
   outputDiv.innerHTML += `<p>Front Wheel Rate: ${randomTune.frontWheelRate} Front Wheel Rate or Spring Rate, having a low spring rate in the front will give the frontend of the car more grip while potentially making the front end unstable to drive which ironically matches up with the front swaybar and how it affects the driving. A low spring or wheel rate is generally falling at 75n/mm or less in the front, while it's 40n/mm or less in the rear. High front spring/wheel rate falls at 105n/mm or higher and the rear falls to 65n/mm or higher </p>`;
   outputDiv.innerHTML += `<p>Rear Wheel Rate: ${randomTune.rearWheelRate} Rear Wheel Rate or Spring Rate, having a low spring rate in the rear can cause the car to "squat" when under heavy acceleration while giving the car ample amounts of forward bite. You can launch the car easier with a lower rear spring rate but be wary as too high or too low can either cause you to lose forward bite or cause your car to become very unstable when under acceleration. A low spring or wheel rate is generally falling at 75n/mm or less in the front, while it's 40n/mm or less in the rear. High rear spring/wheel rate falls at 105n/mm or higher and the rear falls to 65n/mm or higher </p>`;
   outputDiv.innerHTML += `<p>Front Tire Pressure: ${randomTune.frontTirePressure} </p>`;
   outputDiv.innerHTML += `<p>Rear Tire Pressure: ${randomTune.rearTirePressure} </p>`;
   outputDiv.innerHTML += `<p>Diff Power: ${randomTune.diffPower} A higher number will make the car tighter (understeer) on throttle. So if you're loose (oversteering) on throttle then increasing the power setting can help the situation </p>`; // Display diff power setting
   outputDiv.innerHTML += `<p>Diff Coast: ${randomTune.diffCoast}  Coast is the amount of force to lock the driven inside & outside rear tires together when OFF the throttle (coasting) </p>`; // Display diff coast setting
   outputDiv.innerHTML += `<p>Diff Preload: ${randomTune.diffPreload} Preload forces the rear wheels to rotate at the same speed for longer before the diff fully opens up and gives the car more rotation on corner entry. </p>`; // Display diff preload setting
   outputDiv.innerHTML += `<p>Front ARB: ${randomTune.FrontAntiRollBar} Front Anti-Roll Bar or Swaybar, the higher you go the more understeer you'll have. Depending on the situation(Track) you can change this freely to get the right feel per track. Under 10K=Little to no sway bar whereas 10K or higher the heavier the sway bar Feel. </p>`; // Display front ARB setting
   outputDiv.innerHTML += `<p>Rear ARB: ${randomTune.RearAntiRollBar} Rear Anti-Roll Bar or Swaybar, The higher you go in the rear sway bar the less grip you will have which will lead you to have instances where a car is very snappy on transitions, versus having less will add grip to the rear end but also make it harder to drift. Much like the front depending on the situation(Track) you can change this freely to get the right feel per track. Under 10K=Little to no sway bar whereas 10K or higher the heavier the sway bar Feel.  </p>`; // Display rear ARB setting
   outputDiv.innerHTML += `<p>Front Camber: ${randomTune.frontCamber.toFixed(2)}</p>`;
   outputDiv.innerHTML += `<p>Rear Camber: ${randomTune.rearCamber.toFixed(2)}</p>`;
   outputDiv.innerHTML += `<p>Front Ride Height: ${randomTune.frontrideheight.toFixed(2)}</p>`;
   outputDiv.innerHTML += `<p>Rear Ride Height: ${randomTune.rearrideheight.toFixed(2)}</p>`;
   outputDiv.innerHTML += `<p>Front Toe: ${Math.abs(randomTune.frontToe).toFixed(2)} ${randomTune.frontToe < 0 ? 'Toe Out' : 'Toe In'} "Toe out in the front:
   Faster turn in, slower midcorner on some tires, more unstable braking, more heat, looser more inaccurate steering.
   Toe in, in the front: Slower turn in compared to rear end of car, tighter and more accurate steering, stable braking, more heat. As above, I set toe based on toe value when braking. I never want positive toe when braking hard, but I do want negative. I don't want excess negative either because it will cause oversteer that is unwanted.
   Depending on geometry, bumpsteer either increase toe out, or toe in. Bumpsteer does not always increase toe out."</p>`;
   outputDiv.innerHTML += `<p>Rear Toe: ${Math.abs(randomTune.rearToe).toFixed(2)} ${randomTune.rearToe < 0 ? 'Toe Out' : 'Toe In'} "Toe out in the rear: Avoid. Unstable car, not even good for drifting. All kinds of problems cause the rear end turns in far faster than the front.
   Toe in, in the rear: Set a bit. Allows the car to corner at a higher speed and not oversteer if it's otherwise neutral, increases heat, slower turn in but more controlled, more controlled braking. Car does not want to change direction mid slide so easily, especially during understeer."</p>`;
}


 // Handle form submission
 document.getElementById("vrForm").addEventListener("submit", function (event) {
    event.preventDefault();
 
    // Get form values
    let headset = document.getElementById("headset").value;
    let fps = document.getElementById("fps").value;
    let resolution = document.getElementById("resolution").value;
 
    // Save VR settings (replace this with your actual saving logic)
    console.log("VR Headset:", headset);
    console.log("Desired FPS:", fps);
    console.log("Desired Resolution:", resolution);
 
    // Clear form fields
    document.getElementById("headset").value = "";
    document.getElementById("fps").value = "";
    document.getElementById("resolution").value = "low";
 });
 
 const headsetSettings = {
    "Oculus Rift": {
       low: {
          resolution: "720p",
          antiAliasing: "Off",
          textureQuality: "Low"
       },
       medium: {
          resolution: "1080p",
          antiAliasing: "Low",
          textureQuality: "Medium"
       },
       high: {
          resolution: "1440p",
          antiAliasing: "Medium",
          textureQuality: "High"
       },
       max: {
          resolution: "4K",
          antiAliasing: "High",
          textureQuality: "Ultra"
       }
    },
    "HTC Vive": {
       // Define settings for HTC Vive...
    },
    // Add settings for other VR headsets...
 };
 
 function updateSettings() {
    const headset = document.getElementById("headset").value;
    const quality = document.getElementById("quality").value;
 }
 // Update the settings based on the selected headset and quality
 // For example, you could use the headsetSettings object above 
 // Handle form submission
 document.getElementById("vrForm").addEventListener("submit", function (event) {
    event.preventDefault();
 
    // Get form values
    let headset = document.getElementById("headset").value;
 
    // Retrieve settings for selected VR headset
    let selectedSettings = headsetSettings[headset];
 
    // Populate dropdown with graphics quality options
    let qualitySelect = document.getElementById("quality");
    qualitySelect.innerHTML = "";
    for (let quality in selectedSettings) {
       let option = document.createElement("option");
       option.value = quality;
       option.textContent = quality.charAt(0).toUpperCase() + quality.slice(1);
       qualitySelect.appendChild(option);
    }
 });
 
 // Handle quality selection
 document.getElementById("quality").addEventListener("change", function (event) {
    let headset = document.getElementById("headset").value;
    let quality = event.target.value;
    let selectedSettings = headsetSettings[headset][quality];
 
    // Update display with selected settings
    document.getElementById("resolution").textContent = selectedSettings.resolution;
    document.getElementById("antiAliasing").textContent = selectedSettings.antiAliasing;
    document.getElementById("textureQuality").textContent = selectedSettings.textureQuality;
 });
 const tireType = document.getElementById("tire-type").value;
 
 let frontTirePressure, rearTirePressure;
 
 // Set tire pressure based on tire type
 if (tireType === "drift") {
    frontTirePressure = 32; // Static recommendation for street tires
    rearTirePressure = 23; // Static recommendation for street tires
 } else if (tireType === "racing") {
    frontTirePressure = Math.floor(Math.random() * (36 - 34 + 1)) + 34; // Static recommendation for racing tires
    rearTirePressure = Math.floor(Math.random() * (36 - 34 + 1)) + 34; // Static recommendation for racing tires
 }
 
 // Generate other tune parameters
 // ...
 
 // Display the generated tune
 displayTune(frontTirePressure, rearTirePressure, /* other parameters */ );

 function openWheelBaseSettings() {
   window.location.href = "wheelbase.html";
}

document.getElementById("wheel-base-dropdown").addEventListener("change", function() {
   const selectedBase = this.value; // Get the selected value from the dropdown
   displaySettings(selectedBase); // Call the displaySettings function with the selected base
});

function displaySettings(selectedBase) {
   const settingsContainer = document.getElementById("settings-container");
   settingsContainer.innerHTML = ""; // Clear previous settings

   if (selectedBase === "simagic-alpha-mini") {
       const settingsHTML = `
           <h3>Simagic Alpha Mini Settings </h3>
           <p>Forcefeedback: 85%</p>
           <p>Smoothness: 2</p>
           <h3>Vehicle</h3>
           <p>Wheel Rotation Speed: 38</p>
           <p>Feedback Detail: 8</p>
           <h3>Mechanical</h3>
           <p>Max torque: 8.0N-m</p>
           <p>Mechanical damper: 22%</p>
           <p>Mechanical Friction: 20%</p>
           <p>Mechanical inertia: 0</p>
           <p>Feedback Frequency: 0</p>
           <h3>Steer Settings</h3>
           <p>Angle: 900°</p>
           <p>HardLock angle: 900°</p>
           <p>Limit Strength: soft</p>
       `;
       settingsContainer.innerHTML = settingsHTML;

   } else if (selectedBase === "moza-r9") {
       const settingsHTML = `
           <h3>Moza R9 Settings </h3>
           <p>Steering Angle: 900°</p>
           <h3>Base</h3>
           <p>ForceFeedback Intensity: 70%</p>
           <p>Max Steering Angle: 900°</p>
           <p>Road Sensitivity: 7</p>
           <p>Game Forcefeedback intensity: 90%</p>
           <p>Max wheel speed: 150%</p>
           <p>Wheel Spring Strength: 0%</p>
           <p>Wheel Damper: 15%</p>
           <h3>Advanced settings</h3>
           <p>Max Output Torque Limit: 90%</p>
           <p>Wheel Friction: 10%</p>
           <p>Speed-dependent dampining: 10%</p>
           <h3>FFB EQ</h3>
           <p>Set This to how you want the road to feel</p>
           <h3>Misc.</h3>
           <p>Base Status Indicator: ON</p>
           <p>Soft Limit stiffness: 8</p>
           <p>Soft Limit strength: 10</p>
           <p>Soft Limit Game Force Strength: OFF</p>
           <p>Temperature Controll Strategy: Radical</p>
       `;
       settingsContainer.innerHTML = settingsHTML;

   } else if (selectedBase === "moza-r5") {
       const settingsHTML = `
           <h3>Moza R5 Settings </h3>
           <p>Steering Angle: 900°</p>
           <h3>Base</h3>
           <p>ForceFeedback Intensity: 70%</p>
           <p>Max Steering Angle: 900°</p>
           <p>Road Sensitivity: 10</p>
           <p>Game Forcefeedback intensity: 70%</p>
           <p>Max wheel speed: 69%</p>
           <p>Wheel Spring Strength: 17%</p>
           <p>Wheel Damper: 5%</p>
       `;
       settingsContainer.innerHTML = settingsHTML;

   } else if (selectedBase === "thrustmaster-t300") {
       const settingsHTML = `
           <h3>Thrustmaster T300 Settings </h3>
           <p>Overall Strength: 90%</p>
           <h3>Detailed Gain Settings</h3>
           <p>Constant: 90%</p>
           <p>Periodic: 90%</p>
           <p>Spring: 90%</p>
           <p>Damper: 70%</p>
           <h3>Boost (constant+spring)</h3>
           <p>OFF</p>
           <h3>Auto Center Settings</h3>
           <p>by the game</p>
       `;
       settingsContainer.innerHTML = settingsHTML;

   } else if (selectedBase === "logitech-g29/920/923") {
       const settingsHTML = `
           <h3>Logitech G29/920/923 Settings </h3>
           <p>Gain: 100%</p>
           <p>Filter: 0%</p>
           <p>Minimum Force: 0%</p>
           <h3>Effects</h3>
           <p>Kerb: 0%</p>
           <p>Road: 0%</p>
           <p>Slip: 0%</p>
           <p>ABS: 0%</p>
           <h3>Misc.</h3>
           <p>Enhancedundersteer Effect: OFF</p>
           <p>Soft Lock: ON</p>
           <h3>Post-Processing</h3>
           <p>Center Boost Gain: 0%</p>
           <p>Center Boost Range: 0%</p>
           <p>Enable FFB Post-Processing: ON</p>
           <p>Mode: LUT</p>
           <p>LUT: Import your generated LUT file</p>
           <h3>Lower speeds FFB reduction</h3>
           <p>Low speed threshold: 0 km/h</p>
           <p>Low speed FFB strength: 0%</p>
           <h3>Experimental</h3>
           <p>Use this to your own discretion</p>
           <p>Damper Gain: 70%</p>
       `;
       settingsContainer.innerHTML = settingsHTML;

   } else if (selectedBase === "fanatec-csl-elite") {
       const settingsHTML = `
           <h3>Fanatec CSL Elite Settings </h3>
           <p>Force Feedback: 80%</p>
           <p>Drift Mode: -2</p>
           <p>FFB Intensity: 90%</p>
           <h3>Wheel Settings</h3>
           <p>Steering Angle: 1080°</p>
           <h3>Advanced Settings</h3>
           <p>FFB Linearity: 50%</p>
           <p>Damper: 60%</p>
           <p>Natural Friction: 30%</p>
           <p>Natural Inertia: 20%</p>
       `;
       settingsContainer.innerHTML = settingsHTML;
   }
   // You can continue adding more wheelbases similarly.
    else if (selectedBase === "cammus-c5") {
       const settingsHTML = `
           <h3>Cammus C5 Settings </h3>
           <p>Steering Angle: 900°</p>
           <h3>Base</h3>
           <p>Power: 40%</p>
           <p>Natural Damping: 10%</p>
           <p>Natural Friction: 0%</p>
           <p>Natural Inertia: 9%</p>
           <p>Idle Spring: 57%</p>
           <h3>Base cont.</h3>
           <p>All Effects: 0 or off</p>
           <p>CF Filter: 4%</p>
           <h3>CM Settings</h3>
           <p>Gain: 55%</p>
           <p>Filter: 0%</p>
           <p>Minimum Force: 3.5%</p>
           <h3>CM Effects</h3>
           <p>Kerb: 0%</p>
           <p>Road: 0%</p>
           <p>Slip: 0%</p>
           <p>ABS: 0%</p>
       `;
       settingsContainer.innerHTML = settingsHTML;
   }

}

// Handle back button click event
document.getElementById("back-button").addEventListener("click", function() {
   window.history.back(); // Navigate back to the previous page
});