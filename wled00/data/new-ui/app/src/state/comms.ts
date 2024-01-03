import {AppState} from "./types";

export async function sendCommand(cmd: any, state: AppState, updateState = true) {
    let useWs = state.wsConnection.useWs && state.wsConnection.ws.readyState === WebSocket.OPEN;
    const reqType = cmd ? 'POST' : 'GET';

    let finalCmd;

    if (reqType === 'POST') {
        cmd.v = true;
        cmd.time = Math.floor(Date.now() / 1000);

        finalCmd = JSON.stringify(cmd);
        if (finalCmd.length > 1340) useWs = false; // prevent large reqs over ws
        if (finalCmd.length > 500 && state.lightInfo.arch === 'esp8266') useWs = false; // esp8266 can only handle 500 bytes
    }

    if (useWs) {
        state.wsConnection.ws.send(finalCmd ?? `{"v": true}`); // TODO: follow-up on last bit
        return;
    }

    try {
        const res = await fetch(state.lightIp + '/json/si', {
            method: reqType,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: finalCmd
        });

        if (!res.ok) {
            console.error(`WLED request failed`);
            return;
        }
        const json = await res.json();

        if (!json) {
            console.warn('Empty response from WLED');
            return;
        }

        // If post then wled will send light state back. Hook this and update state
        if (reqType === 'POST' && updateState) {
            state.setLightState(json);
        }
        return json;
    } catch (e) {
        console.error(`Exception while making request to WLED: ${e.message} ${e.stack}`);
    }
}
