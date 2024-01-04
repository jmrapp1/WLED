import {ColorPalette, Effect} from "./types";

export interface Light {
    state: LightState
    info: LightInfo
}

export interface LightState {
    on: boolean
    bri: number
    transition: number
    ps: number
    pl: number
    nl: NightLight
    udpn: Udpn
    lor: number
    mainseg: number
    seg: Segment[]
}

export interface NightLight {
    on: boolean
    dur: number
    mode: number
    tbri: number
    rem: number
}

export interface Udpn {
    send: boolean
    recv: boolean
    sgrp: number
    rgrp: number
}

export interface Segment {
    id: number
    start: number // start led
    stop: number // stop led
    len: number // # of leds
    grp: number // grouping
    spc: number // led spacing
    of: number // led offset
    on: boolean // on/off
    frz: boolean
    bri: number // brightness
    cct: number
    set: number
    col: number[][] // color array; solid color is stored in 0 index; [ [255, 160, 0], [0, 0, 0], [0, 0, 0] ]
    fx: number // effect id
    sx: number
    ix: number
    pal: number // color palette id
    c1: number
    c2: number
    c3: number
    sel: boolean // selected flag
    rev: boolean // reverse effect direction
    mi: boolean // mirror effect
    o1: boolean
    o2: boolean
    o3: boolean
    si: number
    m12: number
    n?: string // name of segment

    // additional properties
    activeEffect: Effect
    activePalette: ColorPalette
}

export interface LightInfo {
    ver: string
    vid: number
    leds: Leds
    str: boolean
    name: string
    udpport: number
    live: boolean
    liveseg: number
    lm: string
    lip: string
    ws: number
    fxcount: number
    palcount: number
    cpalcount: number
    maps: Map[]
    wifi: Wifi
    fs: Fs
    ndc: number
    arch: string
    core: string
    lwip: number
    freeheap: number
    uptime: number
    time: string
    opt: number
    brand: string
    product: string
    mac: string
    ip: string
}

export interface Leds {
    count: number
    pwr: number
    fps: number
    maxpwr: number
    maxseg: number
    seglc: number[]
    lc: number
    rgbw: boolean
    wv: number
    cct: number
}

export interface Map {
    id: number
}

export interface Wifi {
    bssid: string
    rssi: number
    signal: number
    channel: number
}

export interface Fs {
    u: number
    t: number
    pmt: number
}
