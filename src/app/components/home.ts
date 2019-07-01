import { Component } from '@angular/core';

// animations
import {
    trigger,
    stagger,
    animate,
    style,
    query as q,
    transition
} from '@angular/animations';


// queries
const query = (
    s: any,
    a: any,
    o = { optional: true }
) => q(s, a, o);


export const homeTransition = trigger('homeTransition', [
    transition(':enter', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(25, [
            style({
                transform: 'translateY(100px)'
            }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)',
                style({
                    transform: 'translateY(0px)',
                    opacity: 1
                })
            ),
        ])),
    ]),
    transition(':leave', [
        query('.block', stagger(25, [
            style({
                transform: 'translateY(0px)',
                opacity: 1
            }),
            animate('1s cubic-bezier(.75,-0.48,.26,1.52)',
                style({
                    transform: 'translateY(100px)',
                    opacity: 0
                })
            ),
        ])),
    ])
]);

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'index.html',
    animations: [ homeTransition ],
    host: {
        '[@homeTransition]': 'true'
    }
})

export class HomeComponent  {
    header_title: string;
    Arr = Array;
    num: number = 25;

    constructor(){
        this.header_title = 'Ucar Creations';
    }
}
