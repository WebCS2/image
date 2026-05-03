<!DOCTYPE html>
<html>
<head>
<title>2D Game – Final Remake</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
  margin: 0;
  overflow: hidden;
  background: #87CEEB;
  font-family: Arial, sans-serif;
}

canvas {
  display: block;
}

/* NAME SCREEN */
#nameBox {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* CHAT */
#chatContainer {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 260px;
  background: rgba(0,0,0,0.6);
  border-radius: 10px;
  padding: 10px;
  color: white;
  display: none;
}

#chatLog {
  height: 140px;
  overflow-y: auto;
  font-size: 14px;
}

#chatInput {
  width: 100%;
  padding: 6px;
  margin-top: 5px;
  box-sizing: border-box;
}

/* MOBILE CONTROLS */
#controls {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* JOYSTICK */
#joystick {
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 110px;
  height: 110px;
  background: rgba(0,0,0,0.25);
  border-radius: 50%;
  pointer-events: auto;
  touch-action: none;
}

#stick {
  width: 50px;
  height: 50px;
  background: rgba(0,0,0,0.6);
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
  transition: transform 0.05s linear;
}

/* JUMP BUTTON */
#jumpBtn {
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 80px;
  height: 80px;
  background: rgba(0,0,0,0.5);
  border-radius: 50%;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  touch-action: none;
  user-select: none;
}

/* PLACE BUTTON */
#placeBtn {
  position: absolute;
  bottom: 140px;
  right: 40px;
  width: 80px;
  height: 40px;
  background: rgba(0,0,0,0.6);
  border-radius: 10px;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  touch-action: none;
  user-select: none;
}

/* HOTBAR */
#inventoryBar {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.55);
  padding: 6px 10px;
  border-radius: 12px;
  display: flex;
  gap: 6px;
  align-items: center;
  color: white;
  font-size: 12px;
}

#hotbarSlots {
  display: flex;
  gap: 6px;
}

.slot {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  border: 2px solid rgba(255,255,255,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
}

.slot.selected {
  border-color: yellow;
  box-shadow: 0 0 6px yellow;
}

.slot-icon {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  margin-bottom: 2px;
}

.slot-count {
  font-size: 11px;
}

#unequipSlot {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255,0,0,0.4);
  border: 2px solid rgba(255,255,255,0.2);
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#invText {
  margin-left: 10px;
  font-size: 11px;
}
</style>
</head>
<body>

<div id="nameBox">
  <h2>Enter name</h2>
  <input id="nameInput" maxlength="16">
  <button onclick="startGame()">Start</button>
</div>

<div id="chatContainer">
  <div id="chatLog"></div>
  <input id="chatInput" placeholder="Enter = chat / commands">
</div>

<div id="controls">
  <div id="joystick"><div id="stick"></div></div>
  <div id="jumpBtn">JUMP</div>
  <div id="placeBtn">PLACE</div>
</div>

<div id="inventoryBar" style="display:none;">
  <div id="hotbarSlots"></div>
  <div id="unequipSlot">X</div>
  <div id="invText"></div>
</div>

<canvas id="game"></canvas>
