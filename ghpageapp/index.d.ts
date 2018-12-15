declare module '*.vue' {
    import Vue from 'vue'
    const _default: Vue
    export default _default
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare var process: NodeJS.Process;
