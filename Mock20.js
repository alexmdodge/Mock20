//Functions - API:Objects
global.Campaign = require('./Functions/API_Objects/Campaign');
global.createObj = require('./Functions/API_Objects/CreateObj');
global.filterObjs = require('./Functions/API_Objects/FilterObjs');
global.findObjs = require('./Functions/API_Objects/FindObjs');
global.getAllObjs = require('./Functions/API_Objects/GetAllObjs');
global.getAttrByName = require('./Functions/API_Objects/GetAttrByName');
global.getObj = require('./Functions/API_Objects/GetObj');
global.state = {};

//Functions - API:Events
global.on = require('./Functions/API_Events/On');
global.Mock20_endOfLastScript = function(){
  Mock20_trigger("ready");
}

//Functions - API:Chat
global.sendChat = require('./Functions/API_Chat/SendChat');

//Functions - API:Utility
global._ = require('underscore');
global.playJukeboxPlaylist = require('./Functions/API_Utility/Jukebox.js').playJukeboxPlaylist;
global.stopJukeboxPlaylist = require('./Functions/API_Utility/Jukebox.js').stopJukeboxPlaylist;
global.log = require('./Functions/API_Utility/Log.js');
global.toFront = require('./Functions/API_Utility/ObjectOrdering.js').toFront;
global.toBack = require('./Functions/API_Utility/ObjectOrdering.js').toBack;
global.playerIsGM = require('./Functions/API_Utility/PlayerIsGM.js');
global.randomInteger = require('./Functions/API_Utility/RandomInteger.js');
global.sendPing = require('./Functions/API_Utility/SendPing.js');
global.setDefaultTokenForCharacter = require('./Functions/API_Utility/SetDefaultTokenForCharacter.js');
global.spawnFx = require('./Functions/API_Utility/SpecialEffects.js').spawnFx;
global.spawnFxBetweenPoints = require('./Functions/API_Utility/SpecialEffects.js').spawnFxBetweenPoints;
global.spawnFxWithDefinition = require('./Functions/API_Utility/SpecialEffects.js').spawnFxWithDefinition;

//Functions - Mock20 Setup
global.Mock20_moveToFolder = require('./Functions/Mock20_Setup/FolderStructure.js').Mock20_moveToFolder;
global.Mock20_moveBeforeFolderItem = require('./Functions/Mock20_Setup/FolderStructure.js').Mock20_moveBeforeFolderItem;
global.Mock20_moveToPlaylist = require('./Functions/Mock20_Setup/FolderStructure.js').Mock20_moveToPlaylist;
global.Mock20_moveBeforePlaylistItem = require('./Functions/Mock20_Setup/FolderStructure.js').Mock20_moveBeforePlaylistItem;
global.Mock20_sortFolder = require('./Functions/Mock20_Setup/SortFolder.js');
