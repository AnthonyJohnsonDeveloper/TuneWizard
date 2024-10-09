document.addEventListener("DOMContentLoaded", function() {
    const generateSettingsButton = document.getElementById("generate-settings-button");
    const outputDiv = document.getElementById("output");

    generateSettingsButton.addEventListener("click", function() {
        const headset = document.getElementById("headset").value;
        const desiredFPS = parseInt(document.getElementById("desired-fps").value);

        const resolutionSettings = {
            "720p": document.getElementById("resolution-720p").value,
            "1080p": document.getElementById("resolution-1080p").value,
            "1440p": document.getElementById("resolution-1440p").value,
            "4K": document.getElementById("resolution-4k").value
        };

        const settings = generateRandomVRSettings(headset, desiredFPS, resolutionSettings);
        displaySettings(outputDiv, settings);
    });
});

function generateRandomVRSettings(headset, desiredFPS, resolutionSettings) {
    const presets = {
        "Meta Quest 2": {
            "720p": { resolutionScaling: 0.8, textureQuality: "low", shadowQuality: "low" },
            "1080p": { resolutionScaling: 1.0, textureQuality: "medium", shadowQuality: "medium" },
            "1440p": { resolutionScaling: 1.2, textureQuality: "high", shadowQuality: "high" },
            "4K": { resolutionScaling: 1.5, textureQuality: "ultra", shadowQuality: "ultra" }
        },
        "Meta Quest 3": {
            "720p": { resolutionScaling: 0.8, textureQuality: "low", shadowQuality: "low" },
            "1080p": { resolutionScaling: 1.0, textureQuality: "medium", shadowQuality: "medium" },
            "1440p": { resolutionScaling: 1.2, textureQuality: "high", shadowQuality: "high" },
            "4K": { resolutionScaling: 1.5, textureQuality: "ultra", shadowQuality: "ultra" }
        },
        "HP G2": {
            "720p": { resolutionScaling: 0.8, textureQuality: "low", shadowQuality: "low" },
            "1080p": { resolutionScaling: 1.0, textureQuality: "medium", shadowQuality: "medium" },
            "1440p": { resolutionScaling: 1.2, textureQuality: "high", shadowQuality: "high" },
            "4K": { resolutionScaling: 1.5, textureQuality: "ultra", shadowQuality: "ultra" }
        }
        // Add presets for other headsets as needed
    };

    const selectedPreset = presets[headset] || {}; // Default to empty object if no preset for the headset
    const settings = {};
    for (const resolution in resolutionSettings) {
        const preset = selectedPreset[resolution] || {}; // Use preset for the selected resolution if available
        const selectedSettings = {
            resolutionScaling: preset.resolutionScaling || 1.0,
            textureQuality: preset.textureQuality || "medium",
            shadowQuality: preset.shadowQuality || "medium"
        };
        settings[resolution] = Object.assign({}, selectedSettings); // Copy selected settings
    }
    return settings;
}

function displaySettings(outputDiv, settings) {
    outputDiv.innerHTML = ""; // Clear previous content

    for (const resolution in settings) {
        const resolutionSettings = settings[resolution];
        outputDiv.innerHTML += `<h2>${resolution}</h2>`;
        outputDiv.innerHTML += `<p>Resolution Scaling: ${resolutionSettings.resolutionScaling.toFixed(2)}</p>`;
        outputDiv.innerHTML += `<p>Texture Quality: ${resolutionSettings.textureQuality}</p>`;
        outputDiv.innerHTML += `<p>Shadow Quality: ${resolutionSettings.shadowQuality}</p>`;
    }
}
document.getElementById("back-button").addEventListener("click", function() {
    window.history.back(); // Navigate back to the previous page
 });