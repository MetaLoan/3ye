(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/bottom-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const navItems = [
    {
        name: "Destiny",
        href: "/",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "0.5",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(active && "holographic"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 3v18h18"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 17V9"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 17V5"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 17v-3"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Stone",
        href: "/stone",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "0.5",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(active && "holographic"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "8"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3",
                        fill: active ? "url(#holographic)" : "none"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Echo",
        href: "/echo",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 18V5l12-2v13"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "6",
                        cy: "18",
                        r: "3",
                        fill: active ? "url(#holographic)" : "none"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "16",
                        r: "3",
                        fill: active ? "url(#holographic)" : "none"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Oracle",
        href: "/oracle",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                }, void 0, false, {
                    fileName: "[project]/components/bottom-nav.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Connect",
        href: "/connect",
        icon: (active)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2 12 L6 8 L10 14 L14 6 L18 10 L22 6"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2 18 L6 14 L10 20 L14 12 L18 16 L22 12"
                    }, void 0, false, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
];
function BottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 bg-background border-t hairline border-foreground z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "0",
                height: "0",
                style: {
                    position: "absolute"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "holographic",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#E0C3FC"
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "25%",
                                stopColor: "#8EC5FC"
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "50%",
                                stopColor: "#E0C3FC"
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "75%",
                                stopColor: "#D4FC79"
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#96E6A1"
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/bottom-nav.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-around h-16 px-2 max-w-screen-sm mx-auto",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-1 min-w-[60px] transition-opacity", isActive ? "opacity-100" : "opacity-40 hover:opacity-70"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isActive && "scale-110 transition-transform"),
                                children: item.icon(isActive)
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] tracking-wider uppercase",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/components/bottom-nav.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/components/bottom-nav.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/bottom-nav.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/bottom-nav.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(BottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ink-reveal-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InkRevealText",
    ()=>InkRevealText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InkRevealText({ text, className, staggerDelay = 50 }) {
    _s();
    const [revealedCount, setRevealedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InkRevealText.useEffect": ()=>{
            if (revealedCount < text.length) {
                const timer = setTimeout({
                    "InkRevealText.useEffect.timer": ()=>{
                        setRevealedCount({
                            "InkRevealText.useEffect.timer": (prev)=>prev + 1
                        }["InkRevealText.useEffect.timer"]);
                    }
                }["InkRevealText.useEffect.timer"], staggerDelay);
                return ({
                    "InkRevealText.useEffect": ()=>clearTimeout(timer)
                })["InkRevealText.useEffect"];
            }
        }
    }["InkRevealText.useEffect"], [
        revealedCount,
        text.length,
        staggerDelay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block", className),
        children: text.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block", i < revealedCount && "ink-reveal"),
                style: {
                    opacity: i < revealedCount ? 1 : 0
                },
                children: char === " " ? "\u00A0" : char
            }, i, false, {
                fileName: "[project]/components/ink-reveal-text.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ink-reveal-text.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(InkRevealText, "SBVJbeeGBWqOcsYxafknmnvARkI=");
_c = InkRevealText;
var _c;
__turbopack_context__.k.register(_c, "InkRevealText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/tarot-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TarotCard",
    ()=>TarotCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ink-reveal-text.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TarotCard({ onReveal }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleFlip = ()=>{
        if (status === "idle") {
            setStatus("flipping");
            setTimeout(()=>{
                setStatus("revealed");
                // Start 2 second pause
                setTimeout(()=>{
                    setStatus("particlizing");
                    // Particle effect duration
                    setTimeout(()=>{
                        setStatus("completed");
                        onReveal();
                    }, 1000);
                }, 2000);
            }, 600);
        }
    };
    // Create particles for disintegration
    const particles = Array.from({
        length: 40
    }).map((_, i)=>({
            id: i,
            delay: Math.random() * 0.4,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200 - 100,
            size: Math.random() * 3 + 1,
            duration: 0.6 + Math.random() * 0.4
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleFlip,
        className: "jsx-f8af6d8c86294e3c" + " " + "relative w-48 h-72 perspective-1000 cursor-pointer",
        children: [
            status === "particlizing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-f8af6d8c86294e3c" + " " + "absolute inset-0 z-50 pointer-events-none",
                children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            width: p.size,
                            height: p.size,
                            opacity: 0,
                            animation: `particle-out ${p.duration}s ease-out ${p.delay}s forwards`,
                            "--tw-translate-x": `${p.x}px`,
                            "--tw-translate-y": `${p.y}px`
                        },
                        className: "jsx-f8af6d8c86294e3c" + " " + "absolute w-1 h-1 bg-foreground rounded-full"
                    }, p.id, false, {
                        fileName: "[project]/components/tarot-card.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/tarot-card.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    transition: status === "particlizing" ? "all 0.8s ease-out" : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                },
                className: "jsx-f8af6d8c86294e3c" + " " + `relative w-full h-full transition-all duration-700 transform-style-3d ${status !== "idle" && status !== "completed" ? status === "flipping" ? "rotate-y-180" : "rotate-y-180" : ""} ${status === "particlizing" ? "opacity-0 scale-110 blur-md" : "opacity-100 scale-100 blur-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f8af6d8c86294e3c" + " " + `absolute inset-0 border hairline border-foreground rounded backface-hidden bg-background flex items-center justify-center p-4 overflow-hidden ${status === "revealed" || status === "pausing" || status === "particlizing" ? "opacity-0" : "opacity-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-f8af6d8c86294e3c" + " " + "w-full h-full border hairline border-foreground/20 rounded-sm flex flex-col items-center justify-center space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f8af6d8c86294e3c" + " " + "w-12 h-12 border hairline border-foreground rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f8af6d8c86294e3c" + " " + "w-6 h-6 holographic rounded-full opacity-40 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tarot-card.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f8af6d8c86294e3c" + " " + "text-[10px] uppercase tracking-[0.2em] opacity-30",
                                        children: "Tap to reveal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tarot-card.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-f8af6d8c86294e3c" + " " + "absolute inset-0 opacity-[0.03] pointer-events-none select-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-f8af6d8c86294e3c" + " " + "grid grid-cols-4 gap-4 p-4",
                                    children: Array.from({
                                        length: 16
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f8af6d8c86294e3c" + " " + "w-full aspect-square border-[0.5px] border-foreground rounded-full"
                                        }, i, false, {
                                            fileName: "[project]/components/tarot-card.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/tarot-card.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/tarot-card.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tarot-card.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f8af6d8c86294e3c" + " " + `absolute inset-0 border hairline border-foreground rounded backface-hidden rotate-y-180 bg-background overflow-hidden ${status === "idle" ? "opacity-0" : "opacity-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-f8af6d8c86294e3c" + " " + "w-full h-full flex flex-col items-center p-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f8af6d8c86294e3c" + " " + "w-full h-48 bg-muted relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "https://images.unsplash.com/photo-1601024445121-e5b82f1b90d3?q=80&w=500&auto=format&fit=crop",
                                                alt: "Tarot Card",
                                                className: "jsx-f8af6d8c86294e3c" + " " + "w-full h-full object-cover grayscale brightness-90 contrast-125"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tarot-card.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-f8af6d8c86294e3c" + " " + "absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tarot-card.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f8af6d8c86294e3c" + " " + "flex-1 flex flex-col items-center justify-center space-y-2 p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                                text: "The Star",
                                                className: "text-sm tracking-widest uppercase font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tarot-card.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-f8af6d8c86294e3c" + " " + "w-8 h-[0.5px] bg-foreground/30"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tarot-card.tsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                                text: "Hope • Renewal • Purpose",
                                                className: "text-[10px] opacity-40 leading-relaxed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/tarot-card.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/tarot-card.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/tarot-card.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-f8af6d8c86294e3c" + " " + "absolute inset-0 holographic opacity-[0.05] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/components/tarot-card.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tarot-card.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/tarot-card.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f8af6d8c86294e3c",
                children: "@keyframes particle-out{0%{opacity:1;transform:translate(0)scale(1)}to{opacity:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y))scale(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/tarot-card.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(TarotCard, "PrSSnJYnmPMLjC7rLJ6w5budhnU=");
_c = TarotCard;
var _c;
__turbopack_context__.k.register(_c, "TarotCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/destiny-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DestinyChart",
    ()=>DestinyChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 动态导入 SingularityShader 避免 SSR 问题
const SingularityShader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/singularity-shader.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.SingularityShader), {
    loadableGenerated: {
        modules: [
            "[project]/components/singularity-shader.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = SingularityShader;
const generateData = (seed)=>{
    return Array.from({
        length: 13
    }, (_, i)=>{
        const hour = i * 2;
        const value = 40 + Math.sin(hour * 0.5 + seed) * 20 + Math.cos(hour * 0.3) * 15 + Math.sin(hour * 0.8) * 10;
        return {
            hour,
            value
        };
    });
};
function DestinyChart({ mode, showChart = true, selectedHour, onSelectHour }) {
    _s();
    const maxValue = 100;
    const width = 300;
    const height = 150;
    // 获取当前真实时间
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DestinyChart.useState": ()=>new Date()
    }["DestinyChart.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DestinyChart.useEffect": ()=>{
            const timer = setInterval({
                "DestinyChart.useEffect.timer": ()=>{
                    setNow(new Date());
                }
            }["DestinyChart.useEffect.timer"], 1000);
            return ({
                "DestinyChart.useEffect": ()=>clearInterval(timer)
            })["DestinyChart.useEffect"];
        }
    }["DestinyChart.useEffect"], []);
    // 当前小时（向下取整到最近的偶数小时）
    const currentHour = Math.floor(now.getHours() / 2) * 2;
    const nextHour = currentHour + 2 // 下一个即将到来的时间点
    ;
    // 计算倒计时
    const countdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DestinyChart.useMemo[countdown]": ()=>{
            const nextTime = new Date(now);
            nextTime.setHours(nextHour, 0, 0, 0);
            const diff = nextTime.getTime() - now.getTime();
            if (diff <= 0) return "00:00:00";
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(diff % (1000 * 60) / 1000);
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }["DestinyChart.useMemo[countdown]"], [
        now,
        nextHour
    ]);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DestinyChart.useMemo[data]": ()=>generateData(mode === "today" ? 1 : 2)
    }["DestinyChart.useMemo[data]"], [
        mode
    ]);
    const { pastPathData, futurePathData, areaPathData, points } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DestinyChart.useMemo": ()=>{
            if (!data.length) return {
                pastPathData: "",
                futurePathData: "",
                areaPathData: "",
                points: []
            };
            const pts = data.map({
                "DestinyChart.useMemo.pts": (d)=>({
                        x: d.hour / 24 * width,
                        y: height - d.value / maxValue * height,
                        hour: d.hour,
                        value: d.value
                    })
            }["DestinyChart.useMemo.pts"]);
            const pastPts = pts.filter({
                "DestinyChart.useMemo.pastPts": (p)=>p.hour <= currentHour
            }["DestinyChart.useMemo.pastPts"]);
            const futurePts = pts.filter({
                "DestinyChart.useMemo.futurePts": (p)=>p.hour >= currentHour
            }["DestinyChart.useMemo.futurePts"]);
            const createSmoothPath = {
                "DestinyChart.useMemo.createSmoothPath": (p)=>{
                    if (p.length < 2) return "";
                    let d = `M ${p[0].x} ${p[0].y}`;
                    for(let i = 0; i < p.length - 1; i++){
                        const p0 = p[i];
                        const p1 = p[i + 1];
                        const cp1x = p0.x + (p1.x - p0.x) / 3;
                        const cp2x = p1.x - (p1.x - p0.x) / 3;
                        d += ` C ${cp1x} ${p0.y}, ${cp2x} ${p1.y}, ${p1.x} ${p1.y}`;
                    }
                    return d;
                }
            }["DestinyChart.useMemo.createSmoothPath"];
            let areaD = "";
            if (pastPts.length >= 2) {
                areaD = `M ${pastPts[0].x} ${height}`;
                areaD += ` L ${pastPts[0].x} ${pastPts[0].y}`;
                const curve = createSmoothPath(pastPts).replace("M", "L");
                areaD += curve;
                areaD += ` L ${pastPts[pastPts.length - 1].x} ${height} Z`;
            }
            return {
                pastPathData: createSmoothPath(pastPts),
                futurePathData: createSmoothPath(futurePts),
                areaPathData: areaD,
                points: pts
            };
        }
    }["DestinyChart.useMemo"], [
        data,
        width,
        height,
        maxValue,
        currentHour
    ]);
    const gradientStops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DestinyChart.useMemo[gradientStops]": ()=>{
            const pastData = data.filter({
                "DestinyChart.useMemo[gradientStops].pastData": (d)=>d.hour <= currentHour
            }["DestinyChart.useMemo[gradientStops].pastData"]);
            return pastData.map({
                "DestinyChart.useMemo[gradientStops]": (d, i)=>{
                    const offset = d.hour / 24 * 100;
                    let color = "var(--holographic-mid-1)";
                    if (d.value < 45) color = "var(--holographic-start)";
                    if (d.value > 65) color = "var(--holographic-end)";
                    return {
                        offset: `${offset}%`,
                        color
                    };
                }
            }["DestinyChart.useMemo[gradientStops]"]);
        }
    }["DestinyChart.useMemo[gradientStops]"], [
        data,
        currentHour
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-889a215ec398f00e" + " " + "w-full select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-889a215ec398f00e" + " " + "relative border-[0.5px] border-foreground rounded-sm overflow-hidden",
                children: [
                    !showChart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-889a215ec398f00e" + " " + "absolute inset-0 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SingularityShader, {}, void 0, false, {
                            fileName: "[project]/components/destiny-chart.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/destiny-chart.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-889a215ec398f00e" + " " + `relative p-8 transition-all duration-1000 ease-in-out bg-background/50 ${!showChart ? "opacity-0" : "opacity-100"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height
                                },
                                className: "jsx-889a215ec398f00e" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "100%",
                                        height: "100%",
                                        viewBox: `0 0 ${width} ${height}`,
                                        preserveAspectRatio: "none",
                                        className: "jsx-889a215ec398f00e" + " " + "absolute inset-0 overflow-visible",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                className: "jsx-889a215ec398f00e",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: "holographic-dynamic-horizontal",
                                                    gradientUnits: "userSpaceOnUse",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: width,
                                                    y2: "0",
                                                    className: "jsx-889a215ec398f00e",
                                                    children: [
                                                        gradientStops.map((stop, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: stop.offset,
                                                                stopColor: stop.color,
                                                                stopOpacity: "0.25",
                                                                className: "jsx-889a215ec398f00e"
                                                            }, i, false, {
                                                                fileName: "[project]/components/destiny-chart.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 19
                                                            }, this)),
                                                        gradientStops.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: gradientStops[gradientStops.length - 1].offset,
                                                            stopColor: gradientStops[gradientStops.length - 1].color,
                                                            stopOpacity: "0",
                                                            className: "jsx-889a215ec398f00e"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/destiny-chart.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/destiny-chart.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/destiny-chart.tsx",
                                                lineNumber: 148,
                                                columnNumber: 13
                                            }, this),
                                            [
                                                25,
                                                50,
                                                75
                                            ].map((val)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "0",
                                                    y1: height - val / maxValue * height,
                                                    x2: width,
                                                    y2: height - val / maxValue * height,
                                                    stroke: "currentColor",
                                                    strokeWidth: "0.5",
                                                    strokeDasharray: "2 4",
                                                    opacity: "0.05",
                                                    className: "jsx-889a215ec398f00e"
                                                }, val, false, {
                                                    fileName: "[project]/components/destiny-chart.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 15
                                                }, this)),
                                            showChart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: areaPathData,
                                                        fill: "url(#holographic-dynamic-horizontal)",
                                                        className: "jsx-889a215ec398f00e" + " " + "animate-fade-in"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/destiny-chart.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: pastPathData,
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.2",
                                                        vectorEffect: "non-scaling-stroke",
                                                        className: "jsx-889a215ec398f00e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/destiny-chart.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: futurePathData,
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.2",
                                                        strokeOpacity: "0.1",
                                                        strokeDasharray: "3 3",
                                                        vectorEffect: "non-scaling-stroke",
                                                        className: "jsx-889a215ec398f00e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/destiny-chart.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/destiny-chart.tsx",
                                        lineNumber: 141,
                                        columnNumber: 11
                                    }, this),
                                    showChart && points.map((p, i)=>{
                                        const isPast = p.hour < currentHour;
                                        const isCurrent = p.hour === currentHour;
                                        const isNext = p.hour === nextHour;
                                        const isSelected = selectedHour === p.hour;
                                        const isClickable = isPast || isCurrent || isNext;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                left: `${p.hour / 24 * 100}%`,
                                                top: `${100 - p.value / maxValue * 100}%`,
                                                transform: 'translate(-50%, -50%)',
                                                zIndex: isSelected ? 30 : isNext ? 25 : 20
                                            },
                                            className: "jsx-889a215ec398f00e" + " " + "absolute",
                                            children: [
                                                isNext && mode === "today" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        bottom: 'calc(100% + 20px)'
                                                    },
                                                    className: "jsx-889a215ec398f00e" + " " + "absolute left-1/2 -translate-x-1/2 whitespace-nowrap animate-fade-in",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-889a215ec398f00e" + " " + "relative bg-foreground text-background px-3 py-1.5 rounded-md shadow-sm flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-889a215ec398f00e" + " " + "text-[10px] font-mono tracking-wider text-center",
                                                                children: countdown
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/destiny-chart.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-889a215ec398f00e" + " " + "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/destiny-chart.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/destiny-chart.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/destiny-chart.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>isClickable && onSelectHour(isSelected ? null : p.hour),
                                                    disabled: !isClickable,
                                                    style: {
                                                        cursor: isClickable ? 'pointer' : 'default'
                                                    },
                                                    className: "jsx-889a215ec398f00e" + " " + "flex items-center justify-center pointer-events-auto group relative",
                                                    children: [
                                                        isCurrent && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-889a215ec398f00e" + " " + "absolute w-6 h-6 rounded-full bg-foreground/10 sonar-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/destiny-chart.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        isClickable && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-889a215ec398f00e" + " " + "absolute w-4 h-4 rounded-full border-[0.5px] border-foreground/0 group-hover:border-foreground/20 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/destiny-chart.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this),
                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-889a215ec398f00e" + " " + "absolute w-5 h-5 rounded-full border-[2px] border-foreground animate-fade-in"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/destiny-chart.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-889a215ec398f00e" + " " + `
                    rounded-full border-[1px] border-background transition-all duration-300
                    ${isSelected ? "w-2.5 h-2.5 bg-foreground scale-110" : isCurrent ? "w-2 h-2 bg-foreground" : "w-1.5 h-1.5"}
                    ${isPast || isCurrent ? "bg-foreground" : isNext ? "bg-foreground/30 border-foreground/10" : "bg-foreground/10 border-foreground/5"}
                    ${isClickable && !isSelected ? "group-hover:scale-125" : ""}
                  `
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/destiny-chart.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/destiny-chart.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/destiny-chart.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/destiny-chart.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-889a215ec398f00e" + " " + "flex justify-between mt-6 border-t-[0.5px] border-foreground/5 pt-3",
                                children: data.filter((_, i)=>i % 2 === 0).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-889a215ec398f00e" + " " + "text-[8px] font-mono text-foreground tracking-tighter",
                                        children: [
                                            d.hour.toString().padStart(2, "0"),
                                            ":00"
                                        ]
                                    }, d.hour, true, {
                                        fileName: "[project]/components/destiny-chart.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/destiny-chart.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/destiny-chart.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/destiny-chart.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "889a215ec398f00e",
                children: "@keyframes sonar{0%{opacity:1;transform:scale(.5)}to{opacity:0;transform:scale(2.5)}}.sonar-pulse{animation:2s cubic-bezier(0,0,.2,1) infinite sonar}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/destiny-chart.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(DestinyChart, "eLvIhGa0nxtQoXEJ3z8g/A6tPHI=");
_c1 = DestinyChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "SingularityShader");
__turbopack_context__.k.register(_c1, "DestinyChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/destiny-timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DestinyTimeline",
    ()=>DestinyTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ink-reveal-text.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const timelineData = [
    {
        hour: 0,
        title: "Midnight Threshold",
        content: "The day resets. Silent observation of your inner compass.",
        type: "ritual"
    },
    {
        hour: 2,
        title: "Deep Void",
        content: "The veil is thinnest. Avoid active manifestation; practice silent observation.",
        type: "dont"
    },
    {
        hour: 4,
        title: "Pre-Dawn Stillness",
        content: "The subconscious is most receptive. Dream work and intuition peak.",
        type: "ritual"
    },
    {
        hour: 6,
        title: "Ink Awakening",
        content: "Write down your first thought. This is the seed of your day's trajectory.",
        type: "ritual"
    },
    {
        hour: 8,
        title: "Morning Momentum",
        content: "Physical energy peaks. Ideal for challenging tasks and bold moves.",
        type: "do"
    },
    {
        hour: 10,
        title: "Peak Frequency",
        content: "Manifest professional growth. The alignment is perfect for strategic expansion.",
        type: "do"
    },
    {
        hour: 12,
        title: "Solar Zenith",
        content: "Current moment. Your destiny is being written right now.",
        type: "warning"
    },
    {
        hour: 14,
        title: "Static Noise",
        content: "Avoid major financial decisions. The energy field is currently fragmented.",
        type: "warning"
    },
    {
        hour: 16,
        title: "Afternoon Flow",
        content: "Creative energies stabilize. Perfect for collaboration and refinement.",
        type: "do"
    },
    {
        hour: 18,
        title: "Twilight Harmony",
        content: "Perfect time for social connection and magnetic resonance with others.",
        type: "do"
    },
    {
        hour: 20,
        title: "Evening Reflection",
        content: "Review the day's patterns. What aligned? What drifted?",
        type: "ritual"
    },
    {
        hour: 22,
        title: "Starlight Shield",
        content: "Close the day with a mental cleanse. Protect your subconscious from digital noise.",
        type: "ritual"
    },
    {
        hour: 24,
        title: "Full Circle",
        content: "The cycle completes. Tomorrow awaits with new frequencies.",
        type: "ritual"
    }
];
function DestinyTimeline({ selectedHour, onSelectHour }) {
    _s();
    const currentHour = 12;
    const nextHour = currentHour + 2 // 下一个即将到来的时间点
    ;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedItem = timelineData.find((item)=>item.hour === selectedHour);
    // Auto-scroll selected item to center
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DestinyTimeline.useEffect": ()=>{
            if (selectedHour !== null && containerRef.current) {
                const container = containerRef.current;
                const selectedButton = container.querySelector(`[data-hour="${selectedHour}"]`);
                if (selectedButton) {
                    const buttonRect = selectedButton.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const scrollLeft = buttonRect.left - containerRect.left - containerRect.width / 2 + buttonRect.width / 2;
                    container.scrollTo({
                        left: container.scrollLeft + scrollLeft,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }["DestinyTimeline.useEffect"], [
        selectedHour
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-6639e4eac6b78d61" + " " + "mt-2 pb-12",
        children: [
            selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6639e4eac6b78d61" + " " + "relative mb-4 animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6639e4eac6b78d61" + " " + "max-w-md mx-auto p-4 bg-background border-[0.5px] border-foreground rounded-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6639e4eac6b78d61" + " " + "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm bg-foreground/5 text-foreground",
                                        children: selectedItem.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/destiny-timeline.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-6639e4eac6b78d61" + " " + "text-sm font-bold tracking-tight text-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                            text: selectedItem.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/destiny-timeline.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/destiny-timeline.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/destiny-timeline.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-6639e4eac6b78d61" + " " + "text-xs font-light leading-relaxed text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                    text: selectedItem.content
                                }, void 0, false, {
                                    fileName: "[project]/components/destiny-timeline.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/destiny-timeline.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/destiny-timeline.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6639e4eac6b78d61" + " " + "flex justify-center mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6639e4eac6b78d61" + " " + "w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/destiny-timeline.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/destiny-timeline.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/destiny-timeline.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "jsx-6639e4eac6b78d61" + " " + "relative overflow-x-auto scrollbar-hide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        minHeight: '50px',
                        paddingLeft: 'calc(50% - 40px)',
                        paddingRight: 'calc(50% - 40px)'
                    },
                    className: "jsx-6639e4eac6b78d61" + " " + "relative inline-flex items-start gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6639e4eac6b78d61" + " " + "absolute left-0 right-0 top-2 h-[0.5px] bg-foreground"
                        }, void 0, false, {
                            fileName: "[project]/components/destiny-timeline.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        timelineData.map((item, i)=>{
                            const isPast = item.hour <= currentHour;
                            const isCurrent = item.hour === currentHour;
                            const isNext = item.hour === nextHour;
                            const isSelected = selectedHour === item.hour;
                            const isClickable = isPast || isCurrent || isNext;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '80px'
                                },
                                className: "jsx-6639e4eac6b78d61" + " " + "relative flex flex-col items-center shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-hour": item.hour,
                                        onClick: ()=>isClickable && onSelectHour(isSelected ? null : item.hour),
                                        disabled: !isClickable,
                                        className: "jsx-6639e4eac6b78d61" + " " + `absolute w-4 h-4 rounded-full flex items-center justify-center transition-all top-2 -translate-y-1/2 ${isSelected ? 'border-[2px] border-foreground bg-background scale-125 z-20' : isPast || isCurrent ? 'border-[0.5px] border-foreground/10 bg-background cursor-pointer hover:scale-110 z-10' : isNext ? 'border-[0.5px] border-foreground/10 bg-background cursor-pointer hover:scale-110 z-10' : 'border-[0.5px] border-foreground/5 bg-background/50 cursor-not-allowed z-0'} ${isCurrent && !isSelected ? 'ring-1 ring-foreground/20' : ''}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6639e4eac6b78d61" + " " + `w-1 h-1 rounded-full transition-all ${isSelected ? "w-1.5 h-1.5 bg-foreground" : isCurrent ? "bg-foreground" : isPast ? item.type === "do" ? "holographic" : item.type === "dont" ? "bg-foreground/40" : item.type === "warning" ? "bg-foreground" : "holographic" : isNext ? "bg-foreground/30" : "bg-foreground/10"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/destiny-timeline.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/destiny-timeline.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-6639e4eac6b78d61" + " " + `absolute top-6 text-[10px] font-mono whitespace-nowrap text-foreground ${isSelected ? 'font-medium' : isPast || isNext ? '' : 'opacity-30'}`,
                                        children: [
                                            String(item.hour).padStart(2, '0'),
                                            ":00"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/destiny-timeline.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/destiny-timeline.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/destiny-timeline.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/destiny-timeline.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/destiny-timeline.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(DestinyTimeline, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = DestinyTimeline;
var _c;
__turbopack_context__.k.register(_c, "DestinyTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/star-radar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarRadar",
    ()=>StarRadar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ink-reveal-text.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const dimensions = [
    {
        name: "Passion",
        value: 75,
        angle: 0
    },
    {
        name: "Love",
        value: 60,
        angle: 72
    },
    {
        name: "Wealth",
        value: 85,
        angle: 144
    },
    {
        name: "Intellect",
        value: 70,
        angle: 216
    },
    {
        name: "Spirit",
        value: 90,
        angle: 288
    }
];
// 星座图标路径 (简化版)
const ZODIAC_ICONS = {
    Aries: "M-4-2c0-2 2-4 4-4s4 2 4 4m-8 0v6m8-6v6",
    Taurus: "M0 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8M-4-4c0-2 2-4 4-4s4 2 4 4",
    Gemini: "M-3-4v8M3-4v8M-4-4h8M-4 4h8",
    Cancer: "M-4-2a3 3 0 1 1 6 0 3 3 0 0 1-6 0M4 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
    Leo: "M-4 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0M0 2c0-4 4-4 4 0s-4 4-4 4",
    Virgo: "M-4-4v6a2 2 0 0 0 4 0v-6a2 2 0 0 0 4 0v6l2 2",
    Libra: "M-4 2h8M-4 4h8M-4-1a4 4 0 0 1 8 0",
    Scorpio: "M-4-4v6a2 2 0 0 0 4 0v-6a2 2 0 0 0 4 0v6l2-2l2 2",
    Sagittarius: "M-4 4l8-8M0-4h4v4M-2 2l4-4",
    Capricorn: "M-4-4v8l4-4v4c0 2 2 4 4 4",
    Aquarius: "M-4-2l2 2 2-2 2 2 2-2M-4 2l2 2 2-2 2 2 2-2",
    Pisces: "M-4-4a4 4 0 0 1 0 8M4-4a4 4 0 0 0 0 8M-4 0h8"
};
// 行星图标路径 (简化版)
const PLANET_ICONS = {
    Sun: "M0 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6M0 0.5h.1",
    Moon: "M-2-4a5 5 0 1 0 0 8 4 4 0 1 1 0-8",
    Mercury: "M0 4v-4m-3 0h6M0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M-3-7a3 3 0 0 1 6 0",
    Venus: "M0 5v-3m-2 1h4M0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
    Mars: "M-1 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6M2-2l3-3M2-5h3v3",
    Jupiter: "M-2-4v8M-2 0h5M2-4l-4 4",
    Saturn: "M-2-4v8M-2 0c4 0 4 4 0 4M-2-2h4"
};
const zodiacSigns = [
    {
        name: "Aries",
        angle: 0
    },
    {
        name: "Taurus",
        angle: 30
    },
    {
        name: "Gemini",
        angle: 60
    },
    {
        name: "Cancer",
        angle: 90
    },
    {
        name: "Leo",
        angle: 120
    },
    {
        name: "Virgo",
        angle: 150
    },
    {
        name: "Libra",
        angle: 180
    },
    {
        name: "Scorpio",
        angle: 210
    },
    {
        name: "Sagittarius",
        angle: 240
    },
    {
        name: "Capricorn",
        angle: 270
    },
    {
        name: "Aquarius",
        angle: 300
    },
    {
        name: "Pisces",
        angle: 330
    }
];
const planets = [
    {
        name: "Sun",
        angle: 45,
        radius: 0.7
    },
    {
        name: "Moon",
        angle: 120,
        radius: 0.75
    },
    {
        name: "Mercury",
        angle: 60,
        radius: 0.5
    },
    {
        name: "Venus",
        angle: 95,
        radius: 0.6
    },
    {
        name: "Mars",
        angle: 280,
        radius: 0.65
    },
    {
        name: "Jupiter",
        angle: 200,
        radius: 0.55
    },
    {
        name: "Saturn",
        angle: 320,
        radius: 0.8
    }
];
const aspects = [
    {
        from: 0,
        to: 1,
        type: "trine"
    },
    {
        from: 0,
        to: 4,
        type: "square"
    },
    {
        from: 1,
        to: 3,
        type: "sextile"
    },
    {
        from: 2,
        to: 5,
        type: "opposition"
    }
];
function StarRadar() {
    _s();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("simple");
    const size = 300;
    const center = size / 2;
    const maxRadius = size / 2 - 40;
    const polarToCartesian = (angle, radius)=>{
        const rad = (angle - 90) * Math.PI / 180;
        return {
            x: center + radius * Math.cos(rad),
            y: center + radius * Math.sin(rad)
        };
    };
    // 简约版数据
    const dataPoints = dimensions.map((d)=>polarToCartesian(d.angle, d.value / 100 * maxRadius));
    const pathData = dataPoints.map((p, i)=>`${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
    // 专业版行星位置
    const planetPositions = planets.map((p)=>({
            ...p,
            ...polarToCartesian(p.angle, maxRadius * p.radius)
        }));
    const handlePrev = ()=>setViewMode(viewMode === "pro" ? "simple" : "pro");
    const handleNext = ()=>setViewMode(viewMode === "simple" ? "pro" : "simple");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border hairline border-foreground rounded p-6 bg-background/30 backdrop-blur-sm relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M15 18l-6-6 6-6"
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/star-radar.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 18l6-6-6-6"
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/star-radar.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-500 ease-out ${viewMode === "simple" ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0 pointer-events-none"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: size,
                            height: size,
                            className: "mx-auto overflow-visible",
                            children: [
                                [
                                    0.25,
                                    0.5,
                                    0.75,
                                    1
                                ].map((scale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: dimensions.map((d)=>{
                                            const p = polarToCartesian(d.angle, maxRadius * scale);
                                            return `${p.x},${p.y}`;
                                        }).join(" "),
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "0.5",
                                        opacity: "0.1"
                                    }, scale, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)),
                                dimensions.map((d)=>{
                                    const endpoint = polarToCartesian(d.angle, maxRadius);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: center,
                                        y1: center,
                                        x2: endpoint.x,
                                        y2: endpoint.y,
                                        stroke: "currentColor",
                                        strokeWidth: "0.5",
                                        opacity: "0.2"
                                    }, d.name, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: pathData,
                                    fill: "url(#radar-gradient)",
                                    fillOpacity: "0.15",
                                    stroke: "currentColor",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/star-radar.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                dataPoints.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: p.x,
                                        cy: p.y,
                                        r: "1.5",
                                        fill: "currentColor"
                                    }, i, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)),
                                dimensions.map((d)=>{
                                    const labelPos = polarToCartesian(d.angle, maxRadius + 28);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: labelPos.x,
                                        y: labelPos.y,
                                        textAnchor: "middle",
                                        dominantBaseline: "middle",
                                        className: "text-[9px] uppercase tracking-wider fill-current font-light",
                                        children: d.name
                                    }, d.name, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "radar-gradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#E0C3FC"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#8EC5FC"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/star-radar.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/star-radar.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-all duration-500 ease-out ${viewMode === "pro" ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0 pointer-events-none"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: size,
                                height: size,
                                className: "mx-auto overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "pro-bg-gradient",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "currentColor",
                                                    stopOpacity: "0.03"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/star-radar.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "currentColor",
                                                    stopOpacity: "0.08"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/star-radar.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: center,
                                        cy: center,
                                        r: maxRadius + 12,
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    Array.from({
                                        length: 72
                                    }).map((_, i)=>{
                                        const angle = i * 5;
                                        const isMajor = i % 6 === 0;
                                        const p1 = polarToCartesian(angle, maxRadius + (isMajor ? 8 : 4));
                                        const p2 = polarToCartesian(angle, maxRadius);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: p1.x,
                                            y1: p1.y,
                                            x2: p2.x,
                                            y2: p2.y,
                                            stroke: "currentColor",
                                            strokeWidth: "0.5",
                                            opacity: isMajor ? 1 : 0.3
                                        }, i, false, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: center,
                                        cy: center,
                                        r: maxRadius,
                                        fill: "url(#pro-bg-gradient)",
                                        stroke: "currentColor",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    zodiacSigns.map((sign)=>{
                                        const outer = polarToCartesian(sign.angle, maxRadius);
                                        const inner = polarToCartesian(sign.angle, maxRadius * 0.25);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: inner.x,
                                            y1: inner.y,
                                            x2: outer.x,
                                            y2: outer.y,
                                            stroke: "currentColor",
                                            strokeWidth: "0.5"
                                        }, sign.name, false, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    [
                                        0.35,
                                        0.55,
                                        0.75
                                    ].map((scale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: center,
                                            cy: center,
                                            r: maxRadius * scale,
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "0.5",
                                            strokeDasharray: "1 6"
                                        }, scale, false, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)),
                                    aspects.map((aspect, i)=>{
                                        const from = planetPositions[aspect.from];
                                        const to = planetPositions[aspect.to];
                                        const color = aspect.type === "square" ? "#FF6B6B" : aspect.type === "opposition" ? "#FFE66D" : aspect.type === "trine" ? "#96E6A1" : "#8EC5FC";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: from.x,
                                            y1: from.y,
                                            x2: to.x,
                                            y2: to.y,
                                            stroke: color,
                                            strokeWidth: "0.8",
                                            opacity: "0.25"
                                        }, i, false, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    zodiacSigns.map((sign)=>{
                                        const pos = polarToCartesian(sign.angle + 15, maxRadius * 0.88);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            transform: `translate(${pos.x},${pos.y}) scale(0.8)`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: ZODIAC_ICONS[sign.name],
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        }, sign.name, false, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    planetPositions.map((planet)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            transform: `translate(${planet.x},${planet.y})`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    r: "10",
                                                    fill: "var(--background)",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/star-radar.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    scale: "0.7",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: PLANET_ICONS[planet.name],
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/star-radar.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/star-radar.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    r: "10",
                                                    fill: "transparent",
                                                    className: "cursor-help group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                        children: planet.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/star-radar.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/star-radar.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, planet.name, true, {
                                            fileName: "[project]/components/star-radar.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: center,
                                        cy: center,
                                        r: "2",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[8px] uppercase tracking-widest text-foreground font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-[1px] bg-[#96E6A1]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 314,
                                                columnNumber: 15
                                            }, this),
                                            " Trine"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-[1px] bg-[#FF6B6B]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this),
                                            " Square"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-[1px] bg-[#8EC5FC]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            " Sextile"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-[1px] bg-[#FFE66D]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/star-radar.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            " Opposition"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/star-radar.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode("simple"),
                                className: `h-0.5 rounded-full transition-all duration-500 ${viewMode === "simple" ? "w-8 bg-foreground opacity-100" : "w-4 bg-foreground/20 opacity-40 hover:opacity-60"}`
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setViewMode("pro"),
                                className: `h-0.5 rounded-full transition-all duration-500 ${viewMode === "pro" ? "w-8 bg-foreground opacity-100" : "w-4 bg-foreground/20 opacity-40 hover:opacity-60"}`
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/star-radar.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-xs group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm bg-foreground/5 text-foreground shrink-0",
                                children: "Alert"
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-light leading-relaxed text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                    text: "Mercury retrograde affecting Intellect dimension until Feb 3"
                                }, void 0, false, {
                                    fileName: "[project]/components/star-radar.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-xs group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm bg-foreground/5 text-foreground shrink-0",
                                children: "Peak"
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 354,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-light leading-relaxed text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                    text: "Spirit energy at highest point this month - ideal for manifestation"
                                }, void 0, false, {
                                    fileName: "[project]/components/star-radar.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/star-radar.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/star-radar.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/star-radar.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/star-radar.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(StarRadar, "XtTxH+OHouEySSH07LeCueV50LQ=");
_c = StarRadar;
var _c;
__turbopack_context__.k.register(_c, "StarRadar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DestinyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bottom-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ink-reveal-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tarot$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tarot-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$destiny$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/destiny-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$destiny$2d$timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/destiny-timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$star$2d$radar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/star-radar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DestinyPage() {
    _s();
    const [destinyMode, setDestinyMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("today");
    const [cardRevealed, setCardRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedHour, setSelectedHour] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 pt-12 max-w-screen-sm mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-light mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                    text: "Destiny Trending"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-60 font-light",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                    text: "Your today's fortune curve and life fortune curve"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-0 border hairline border-foreground rounded mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDestinyMode("today"),
                                className: `flex-1 py-3 text-sm font-light border-r hairline border-foreground transition-colors ${destinyMode === "today" ? "bg-foreground text-background" : "hover:bg-muted"}`,
                                children: "Today Trending"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setDestinyMode("life"),
                                className: `flex-1 py-3 text-sm font-light transition-colors ${destinyMode === "life" ? "bg-foreground text-background" : "hover:bg-muted"}`,
                                children: "Life Trending"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$destiny$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestinyChart"], {
                                        mode: destinyMode,
                                        showChart: cardRevealed || destinyMode === "life",
                                        selectedHour: selectedHour,
                                        onSelectHour: setSelectedHour
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    (cardRevealed || destinyMode === "life") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-fade-in",
                                        style: {
                                            animationDelay: "2s"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$destiny$2d$timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DestinyTimeline"], {
                                            selectedHour: selectedHour,
                                            onSelectHour: setSelectedHour
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            destinyMode === "today" && !cardRevealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center z-20 bg-background/20 backdrop-blur-sm pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-auto mt-[-100px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tarot$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TarotCard"], {
                                        onReveal: ()=>setCardRevealed(true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-light mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                            text: "Stars"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm opacity-60 font-light",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ink$2d$reveal$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InkRevealText"], {
                                            text: "Your celestial alignment and cosmic energy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$star$2d$radar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarRadar"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(DestinyPage, "Ky7xr7JmHc4ZUN5jIpoktycXwCI=");
_c = DestinyPage;
var _c;
__turbopack_context__.k.register(_c, "DestinyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1c1f1277._.js.map