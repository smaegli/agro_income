import $ from "jquery";

import { constants, Buttons } from "./types";

class ImageHolder {
    
    private path: string;
    private htmlId: string;
    private visible = true;
    private lastPaths: Array<string>;

    constructor(path: string, htmlId: string, visible: boolean) {
        this.path = path;
        this.htmlId = htmlId;
        this.visible = visible;

        // Do something when the keyboard is used.
        window.addEventListener("keydown", (event) => {
            const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
            if (key == "ArrowRight") {
                this.togglevisible();
            } else if (key == "ArrowLeft") {
                this.togglevisible();
            } else if (key == "ArrowUp") {
                // Do nothing
            } else if (key == "ArrowDown") {
                // Do nothing
            } else if (key == " ") {
                // E.g. this will happen when the space bar is pressed.
            }
        });

        // Do something when buttons are pressed.
        // Control buttons -> "#..." is the id of the button.
        $("#" + Buttons.BUTTON_RIGHT).on("click", () => {
            // Do nothing
        });
        $("#" + Buttons.BUTTON_LEFT).on("click", () => {
            // Do nothing
        });
        $("#" + Buttons.BUTTON_DOWN).on("click", () => {
            // Do nothing
        });
    }

    // Set new path for image. This is useless but only for illustration puproses.
    setPath(path: string): void {
        this.lastPaths.push(this.path);
        this.path = path;
    }

    // Chane visible status.
    private togglevisible(): void {
        this.visible = !this.visible;
        this.render();
        
    }

    // Render object.
    private render(): void {
        if (this.visible) {
            $("#" + this.htmlId).css("visibility", "visible");
        } else {
            $("#" + this.htmlId).css("visibility", "hidden");
        }
    }
}

export default ImageHolder;
