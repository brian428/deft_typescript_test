/// <reference path="ExtJS.d.ts" />

declare module Deft.mvc {

    export interface IApplication extends Ext.IBase {
        initialized?: bool;
        init? (): void;
    }

    export class Application {
        initialized: bool;
        init(): void;
    }    

    export interface IViewController extends Deft.mixin.Injectable,Ext.IBase {
        control?: Object;
        observe?: Object;
        init?(): void;
        view?: any;
        getView?(): any;
        inject?: any;
    }

    export class ViewController implements Deft.mixin.Injectable,Ext.IBase {
        control: Object;
        observe: Object;
        init(): void;
        view: any;
        getView(): any;
        inject: any;
    }
}

declare module Deft.ioc {

    export class Injector {
        constructor(config?: any);
        static configure(config?: Object);
        static reset();
        static canResolve(identifier: string): bool;
        static resolve(identifier: string, target: Object);
        static inject(identifiers: any, target: Object);
    }
}

declare module Deft.mixin {

    export interface Controllable {
        controller: Deft.mvc.ViewController;
    }

    export interface Injectable {
        inject: any;
    }
}

declare module Deft.promise {

    export class Chain {
        static sequence(fns: any, scope: Object): Deft.promise.Promise;
        static parallel(fns: any, scope: Object): Deft.promise.Promise;
        static pipeline(fns: any, scope: Object, initialValue: any): Deft.promise.Promise;
    }

    export class Deferred {
        static enableLogging: bool;
        constructor(config?: any);
        then(callbacks: any): Deft.promise.Promise;
        otherwise(callbacks: any, scope: Object): Deft.promise.Promise;
        always(callbacks: any, scope: Object): Deft.promise.Promise;
        update(progress: any);
        resolve(value: any);
        reject(error: any);
        cancel(reason: any);
        getPromise(): Deft.promise.Promise;
        getState(): string;
    }

    export class Promise {
        constructor(config?: any);
        static when(promiseOrValues: any): Deft.promise.Promise;
        static all(promiseOrValues: any): Deft.promise.Promise;
        static any(promiseOrValues: any): Deft.promise.Promise;
        static some(promiseOrValues: any, howMany: number): Deft.promise.Promise;
        then(callbacks: any): Deft.promise.Promise;
        otherwise(callbacks: any, scope: Object): Deft.promise.Promise;
        always(callbacks: any, scope: Object): Deft.promise.Promise;
        cancel(reason: any);
        getState(): string;
    }
}