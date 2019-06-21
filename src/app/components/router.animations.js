"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var query = function (s, a, o) {
    if (o === void 0) { o = { optional: true }; }
    return animations_1.query(s, a, o);
};
exports.routerTransition = animations_1.trigger('routerTransition', [
    animations_1.transition('* => *', [
        query(':enter, :leave', animations_1.style({ position: 'fixed', width: '100%' })),
        query(':enter', animations_1.style({ transform: 'translateX(100%)' })),
        animations_1.sequence([
            query(':leave', animations_1.animateChild()),
            animations_1.group([
                query(':leave', [
                    animations_1.style({ transform: 'translateX(0%)' }),
                    animations_1.animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateX(-100%)' }))
                ]),
                query(':enter', [
                    animations_1.style({ transform: 'translateX(100%)' }),
                    animations_1.animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateX(0%)' })),
                ]),
            ]),
            query(':enter', animations_1.animateChild()),
        ])
    ])
]);
//# sourceMappingURL=router.animations.js.map