 

import { eventSource, event_types, saveSettingsDebounced } from '../../../../script.js';
import { extension_settings } from '../../../extensions.js';


 
const THEME_ID = 'SillyTavern-Not-A-Discord-Theme';
const THEME_NAME = 'Not A Discord Theme';
const THEME_VERSION = '1.0.0';
const THEME_AUTHOR = 'IceFog72';
 

class ThemeSetup {
    constructor() {
        // this.settings = extension_settings[THEME_ID];
        // this.themesDirectory = '/user/themes';
        // this.themeFolder = `${this.themesDirectory}/${THEME_ID}`;
    }

    async initialize() {
        //console.log(`[${THEME_NAME}] Initializing setup...`);
        //eventSource.on(event_types.APP_READY, this.onAppReady.bind(this));
    
        //await this.ensureThemeFiles();

        //if (!this.settings.initialized) {
        //    this.settings.initialized = true;
        //    saveSettingsDebounced();
        //}
        
        //console.log(`[${THEME_NAME}] Setup complete`);
    }
    
    async onAppReady() {
        //console.log(`[${THEME_NAME}] App ready event received`);
        //await this.updateThemeFiles();
    }
    
    async ensureThemeFiles() {

        
    }
    
    async updateThemeFiles() {
       
    }
    
    async createFile(filename, content) {
      
    }
    
    async updateFileIfChanged(filename, newContent) {
      
    }
    
    
}

//const themeSetup = new ThemeSetup();
//await themeSetup.initialize();


//window.themeSetup = themeSetup;

//export default themeSetup;