import Felszállás from "./Felszállás";

export default class FelszállásBérlet extends Felszállás {
    private _típus: string;
    private _érvényes: Date;

    constructor(sor: string) {
        super(sor); // ősosztály konstruktorát hívja
        const m: string[] = sor.split(" ");
        this._típus = m[3];
        const év = parseInt(m[4].substr(0, 4));
        const hónap = parseInt(m[1].substr(4, 2)) - 1;
        const nap = parseInt(m[1].substr(6, 2));
        this._érvényes = new Date(év, hónap, nap);
    }
}
