export interface Effect {
    id: number;
    name: string;

    // effect flags
    paletteEffect: boolean;
    zerodEffect: boolean;
    onedEffect: boolean;
    twodEffect: boolean;
    volumeEffect: boolean
    frequencyEffect: boolean
}

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

export interface ColorPalette {
    id: number;
    name: string;
    colors: Color[];

}

export interface WebsocketConnection {
    useWs: boolean;
    ws: WebSocket;
}
