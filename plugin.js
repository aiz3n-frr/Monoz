
// Mono Input + Loud Boost for Vendetta
import { settings } from "@vendetta/metro";
import { after } from "@vendetta/patcher";
import { findByProps } from "@vendetta/metro";

const AudioModule = findByProps("setAudioInputMode");

export default {
    onLoad: () => {
        if (!AudioModule) return;
        
        // Force Mono Input
        after("setAudioInputMode", AudioModule, (_, args) => {
            args[0].mode = "mono";
            args[0].boost = 3; // Fixed loud boost
        });
    },
    onUnload: () => {
        // No cleanup needed since it's a direct modification
    },
};
