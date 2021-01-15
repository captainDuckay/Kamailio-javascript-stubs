import {acc} from "./Modules/Functions/acc";
import {acc_radius} from "./Modules/Functions/acc_radius";
import {alias_db} from "./Modules/Functions/alias_db";
import {app_jsdt} from "./Modules/Functions/app_jsdt";
import {app_lua} from "./Modules/Functions/app_lua";
import {app_python} from "./Modules/Functions/app_python";
import {app_python3} from "./Modules/Functions/app_python3";
import {app_ruby} from "./Modules/Functions/app_ruby";
import {app_sqlang} from "./Modules/Functions/app_sqlang";
import {async} from "./Modules/Functions/async";
import {auth} from "./Modules/Functions/auth";
import {auth_db} from "./Modules/Functions/auth_db";
import {auth_ephemeral} from "./Modules/Functions/auth_ephemeral";
import {auth_radius} from "./Modules/Functions/auth_radius";
import {auth_xkeys} from "./Modules/Functions/auth_xkeys";
import {avpops} from "./Modules/Functions/avpops";
import {benchmark} from "./Modules/Functions/benchmark";
import {blst} from "./Modules/Functions/blst";
import {call_control} from "./Modules/Functions/call_control";
import {call_obj} from "./Modules/Functions/call_obj";
import {cfgutils} from "./Modules/Functions/cfgutils";
import {cnxcc} from "./Modules/Functions/cnxcc";
import {corex} from "./Modules/Functions/corex";
import {counters} from "./Modules/Functions/counters";
import {crypto} from "./Modules/Functions/crypto";
import {_debugger} from "./Modules/Functions/debugger";
import {dialog} from "./Modules/Functions/dialog";
import {dialplan} from "./Modules/Functions/dialplan";
import {dispatcher} from "./Modules/Functions/dispatcher";
import {diversion} from "./Modules/Functions/diversion";
import {dlgs} from "./Modules/Functions/dlgs";
import {dmq} from "./Modules/Functions/dmq";
import {domain} from "./Modules/Functions/domain";
import {drouting} from "./Modules/Functions/drouting";
import {_enum} from "./Modules/Functions/enum";
import {evapi} from "./Modules/Functions/evapi";
import {exec} from "./Modules/Functions/exec";
import {geoip} from "./Modules/Functions/geoip";
import {geoip2} from "./Modules/Functions/geoip2";
import {group} from "./Modules/Functions/group";
import {htable} from "./Modules/Functions/htable";
import {http_async_client} from "./Modules/Functions/http_async_client";
import {http_client} from "./Modules/Functions/http_client";
import {imc} from "./Modules/Functions/imc";
import {ipops} from "./Modules/Functions/ipops";
import {jansson} from "./Modules/Functions/jansson";
import {jsonrpcs} from "./Modules/Functions/jsonrpcs";
import {kafka} from "./Modules/Functions/kafka";
import {kazoo} from "./Modules/Functions/kazoo";
import {keepalive} from "./Modules/Functions/keepalive";
import {kex} from "./Modules/Functions/kex";
import {kx} from "./Modules/Functions/kx";
import {lcr} from "./Modules/Functions/lcr";
import {log_custom} from "./Modules/Functions/log_custom";
import {log_systemd} from "./Modules/Functions/log_systemd";
import {maxfwd} from "./Modules/Functions/maxfwd";
import {mediaproxy} from "./Modules/Functions/mediaproxy";
import {misc_radius} from "./Modules/Functions/misc_radius";
import {mqtt} from "./Modules/Functions/mqtt";
import {mqueue} from "./Modules/Functions/mqueue";
import {msilo} from "./Modules/Functions/msilo";
import {msrp} from "./Modules/Functions/msrp";
import {mtree} from "./Modules/Functions/mtree";
import {nat_traversal} from "./Modules/Functions/nat_traversal";
import {nathelper} from "./Modules/Functions/nathelper";
import {ndb_mongodb} from "./Modules/Functions/ndb_mongodb";
import {ndb_redis} from "./Modules/Functions/ndb_redis";
import {path} from "./Modules/Functions/path";
import {pdt} from "./Modules/Functions/pdt";
import {permissions} from "./Modules/Functions/permissions";
import {phonenum} from "./Modules/Functions/phonenum";
import {pike} from "./Modules/Functions/pike";
import {pipelimit} from "./Modules/Functions/pipelimit";
import {prefix_route} from "./Modules/Functions/prefix_route";
import {presence} from "./Modules/Functions/presence";
import {presence_xml} from "./Modules/Functions/presence_xml";
import {pua} from "./Modules/Functions/pua";
import {pv_headers} from "./Modules/Functions/pv_headers";
import {pvx} from "./Modules/Functions/pvx";
import {rabbitmq} from "./Modules/Functions/rabbitmq";
import {regex} from "./Modules/Functions/regex";
import {registrar} from "./Modules/Functions/registrar";
import {rls} from "./Modules/Functions/rls";
import {rr} from "./Modules/Functions/rr";
import {rtjson} from "./Modules/Functions/rtjson";
import {rtpengine} from "./Modules/Functions/rtpengine";
import {rtpproxy} from "./Modules/Functions/rtpproxy";
import {sanity} from "./Modules/Functions/sanity";
import {sca} from "./Modules/Functions/sca";
import {sdpops} from "./Modules/Functions/sdpops";
import {secsipid} from "./Modules/Functions/secsipid";
import {sipcapture} from "./Modules/Functions/sipcapture";
import {sipdump} from "./Modules/Functions/sipdump";
import {sipjson} from "./Modules/Functions/sipjson";
import {siptrace} from "./Modules/Functions/siptrace";
import {siputils} from "./Modules/Functions/siputils";
import {sl} from "./Modules/Functions/sl";
import {speeddial} from "./Modules/Functions/speeddial";
import {sqlops} from "./Modules/Functions/sqlops";
import {ss7ops} from "./Modules/Functions/ss7ops";
import {sst} from "./Modules/Functions/sst";
import {statistics} from "./Modules/Functions/statistics";
import {statsc} from "./Modules/Functions/statsc";
import {statsd} from "./Modules/Functions/statsd";
import {sworker} from "./Modules/Functions/sworker";
import {tcpops} from "./Modules/Functions/tcpops";
import {textops} from "./Modules/Functions/textops";
import {textopsx} from "./Modules/Functions/textopsx";
import {tls} from "./Modules/Functions/tls";
import {tm} from "./Modules/Functions/tm";
import {tmrec} from "./Modules/Functions/tmrec";
import {tmx} from "./Modules/Functions/tmx";
import {tsilo} from "./Modules/Functions/tsilo";
import {uac} from "./Modules/Functions/uac";
import {uac_redirect} from "./Modules/Functions/uac_redirect";
import {uri_db} from "./Modules/Functions/uri_db";
import {userblocklist} from "./Modules/Functions/userblocklist";
import {utils} from "./Modules/Functions/utils";
import {websocket} from "./Modules/Functions/websocket";
import {xcap_server} from "./Modules/Functions/xcap_server";
import {xhttp} from "./Modules/Functions/xhttp";
import {xhttp_pi} from "./Modules/Functions/xhttp_pi";
import {xhttp_prom} from "./Modules/Functions/xhttp_prom";
import {xhttp_rpc} from "./Modules/Functions/xhttp_rpc";
import {xlog} from "./Modules/Functions/xlog";
import {xmlrpc} from "./Modules/Functions/xmlrpc";

interface x {
    /**
     * Execute a function (specified by fname) exported by a Kamailio module.
     * Additional parameters must be string and they are passed to the Kamailio module function.
     *
     * Important note: try not to use this function, prefer the use of dedicated KSR functions.
     * If you have to use this function, check if it has fixup and fixup-free functions in the C code in order to avoid
     * memory leaks. If you are not sure how to do the check,
     * ask on sr-users mailing list if it is safe to use it for a specific module fuction.
     *
     * @param fname
     * @param params
     * @example
     * KSR.x.modf("sl_send_reply", "200", "OK");
     */
    modf(fname: string, params?: any[]): number;

    /**
     * Equivalent of exit from native kamailio.cfg scripting language, stop the execution of the SIP routing script.
     *
     * IMPORTANT: be careful with the native exit functions in some KEMI interpreters, such as Lua, because they can
     * trigger the stop of the application, in this case stopping Kamailio completely.
     *
     * @example
     * KSR.x.exit();
     */
    exit(): void;

    /**
     * Equivalent of drop from native kamailio.cfg scripting language, stop the execution of the SIP routing script and
     * drop routing further the SIP request branch or response.
     * @example
     * KSR.x.drop();
     */
    drop(): void;
}

interface hdr {
    append(hdrval: string): number;

    append_after(hdrval: string, hdrname: string): number;

    append_to_reply(hdrval: string): number;

    get(hname: string): string | number | null;

    gete(hname: string): string | number | null;

    getw(hname: string): string | number | null;

    insert(hdrval: string): number;

    insert_before(hdrval: string, hdrname: string): number;

    is_present(hdrval: string): number;

    remove(hdrval: string): number;

    rmappend(hrm: string, hadd: string): number;
}

interface pv {
    get(pvname: string): string | number | null;

    gete(pvname: string): string | number | null;

    getvn(pvname: string, vn: number): string | number | null;

    getvs(pvname: string, vs: string): string | number | null;

    getw(pvname: string): string | number | null;

    is_null(pvname: string): boolean;

    seti(pvname: string, val: number): void;

    sets(pvname: string, val: string): void;

    unset(pvname: string): void;

}

interface functions {
    add_local_rport(): boolean;

    add_tcp_alias_via(): number;

    crit(msg: string): void;

    dbg(msg: string): void;

    err(msg: string): void;

    force_rport(): boolean;

    force_rport(): boolean;

    forward(): number;

    forward_uri(uri: string): number;

    get_debug(): number;

    hdr: hdr;

    info(msg: string): void;

    is_ACK(): boolean;

    is_BYE(): boolean;

    is_CANCEL(): boolean;

    is_DELETE(): boolean;

    is_GET(): boolean;

    is_INFO(): boolean;

    is_INVITE(): boolean;

    is_IPv4(): boolean;

    is_IPv6(): boolean;

    is_KDMQ(): boolean;

    is_MESSAGE(): boolean;

    is_method(vmethod: string): boolean;

    is_method_in(vmethod: string): boolean;

    is_myself(uri: string): boolean;

    is_myself_duri(): boolean;

    is_myself_furi(): boolean;

    is_myself_nhuri(): boolean;

    is_myself_ruri(): boolean;

    is_myself_srcip(): boolean;

    is_myself_suri(): boolean;

    is_myself_turi(): boolean;

    is_NOTIFY(): boolean;

    is_OPTIONS(): boolean;

    is_POST(): boolean;

    is_PRACK(): boolean;

    is_proto(sproto: string): boolean;

    is_PUBLISH(): boolean;

    is_PUT(): boolean;

    is_REFER(): boolean;

    is_REGISTER(): boolean;

    is_SCTP(): boolean;

    is_SUBSCRIBE(): boolean;

    is_TCP(): boolean;

    is_TLS(): boolean;

    is_UDP(): boolean;

    is_UPDATE(): boolean;

    is_WS(): boolean;

    is_WSS(): boolean;

    isbflagset(flag: number): boolean;

    isbiflagset(flag: number, branch: number): boolean;

    isdsturiset(): boolean;

    isflagset(flag: number): boolean;

    issflagset(flag: number): boolean;

    log(level: string, msg: string): void;

    notice(msg: string): void;

    pv: pv;

    resetbflag(flag: number): boolean;

    resetbiflag(flag: number, branch: number): boolean;

    resetdsturi(): boolean;

    resetflag(flag: number): boolean;

    resetsflag(flag: number): boolean;

    set_advertised_address(addr: string): number;

    set_advertised_port(port: string): number;

    set_drop(): void;

    set_forward_close(): boolean;

    set_forward_no_connect(): boolean;

    set_reply_close(): boolean;

    set_reply_no_connect(): boolean;

    setbflag(flag: number): boolean;

    setbiflag(flag: number, branch: number): boolean;

    setdsturi(uri: string): boolean;

    setflag(flag: number): boolean;

    sethost(host: string): boolean;

    setsflag(flag: number): boolean;

    seturi(uri: string): boolean;

    setuser(user: string): boolean;

    warn(msg: string): void;

    x: x;

}

export type KSR = {
    acc: acc;
    acc_radius: acc_radius;
    alias_db: alias_db;
    app_jsdt: app_jsdt;
    app_lua: app_lua;
    app_python: app_python;
    app_python3: app_python3;
    app_ruby: app_ruby;
    app_sqlang: app_sqlang;
    async: async;
    auth: auth;
    auth_db: auth_db;
    auth_ephemeral: auth_ephemeral;
    auth_radius: auth_radius;
    auth_xkeys: auth_xkeys;
    avpops: avpops;
    benchmark: benchmark;
    blst: blst;
    call_control: call_control;
    call_obj: call_obj;
    cfgutils: cfgutils;
    cnxcc: cnxcc;
    corex: corex;
    counters: counters;
    crypto: crypto;
    debugger: _debugger;
    dialog: dialog;
    dialplan: dialplan;
    dispatcher: dispatcher;
    diversion: diversion;
    dlgs: dlgs;
    dmq: dmq;
    domain: domain;
    drouting: drouting;
    enum: _enum;
    evapi: evapi;
    exec: exec;
    geoip: geoip;
    geoip2: geoip2;
    group: group;
    htable: htable;
    http_async_client: http_async_client;
    http_client: http_client;
    imc: imc;
    ipops: ipops;
    jansson: jansson;
    jsonrpcs: jsonrpcs;
    kafka: kafka;
    kazoo: kazoo;
    keepalive: keepalive;
    kex: kex;
    kx: kx;
    lcr: lcr;
    log_custom: log_custom;
    log_systemd: log_systemd;
    maxfwd: maxfwd;
    mediaproxy: mediaproxy;
    misc_radius: misc_radius;
    mqtt: mqtt;
    mqueue: mqueue;
    msilo: msilo;
    msrp: msrp;
    mtree: mtree;
    nat_traversal: nat_traversal;
    nathelper: nathelper;
    ndb_mongodb: ndb_mongodb;
    ndb_redis: ndb_redis;
    path: path;
    pdt: pdt;
    permissions: permissions;
    phonenum: phonenum;
    pike: pike;
    pipelimit: pipelimit;
    prefix_route: prefix_route;
    presence: presence;
    presence_xml: presence_xml;
    pua: pua;
    pv_headers: pv_headers;
    pvx: pvx;
    rabbitmq: rabbitmq;
    regex: regex;
    registrar: registrar;
    rls: rls;
    rr: rr;
    rtjson: rtjson;
    rtpengine: rtpengine;
    rtpproxy: rtpproxy;
    sanity: sanity;
    sca: sca;
    sdpops: sdpops;
    secsipid: secsipid;
    sipcapture: sipcapture;
    sipdump: sipdump;
    sipjson: sipjson;
    siptrace: siptrace;
    siputils: siputils;
    sl: sl;
    speeddial: speeddial;
    sqlops: sqlops;
    ss7ops: ss7ops;
    sst: sst;
    statistics: statistics;
    statsc: statsc;
    statsd: statsd;
    sworker: sworker;
    tcpops: tcpops;
    textops: textops;
    textopsx: textopsx;
    tls: tls;
    tm: tm;
    tmrec: tmrec;
    tmx: tmx;
    tsilo: tsilo;
    uac: uac;
    uac_redirect: uac_redirect;
    uri_db: uri_db;
    userblocklist: userblocklist;
    utils: utils;
    websocket: websocket;
    xcap_server: xcap_server;
    xhttp: xhttp;
    xhttp_pi: xhttp_pi;
    xhttp_prom: xhttp_prom;
    xhttp_rpc: xhttp_rpc;
    xlog: xlog;
    xmlrpc: xmlrpc;
} & functions;
