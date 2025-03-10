import { action, computed, observable } from "mobx";
import { RootStore } from "./RootStore";

export default class StatStore {

    @observable blue: number = 0;
    @observable red: number = 0;
    @observable green: number = 0;
    @observable purple: number = 0;
    @observable amber: number = 0;
    @observable blueCount: number = 0;
    @observable redCount: number = 0;
    @observable greenCount: number = 0;
    @observable purpleCount: number = 0;
    @observable amberCount: number = 0;
    @observable greyCount: number = 0;
    @observable match3: number = 0;
    @observable match4: number = 0;
    @observable match5: number = 0;
    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }


    @computed
    get info() {
        return {
            blue: this.blue,
            red: this.red,
            green: this.green,
            purple: this.purple,
            amber: this.amber,
            match3: this.match3,
            match4: this.match4,
            match5: this.match5,
            blueCount: this.blueCount,
            redCount: this.redCount,
            greenCount: this.greenCount,
            purpleCount: this.purpleCount,
            amberCount: this.amberCount,
            greyCount: this.greyCount,
        };
    }

    @action
    reset = () => {
        this.match5 = 0;
        this.blueCount = 0;
        this.redCount = 0;
        this.greenCount = 0;
        this.purpleCount = 0;
        this.amberCount = 0;
        this.greyCount = 0;
    }

    @action
    addMatch3 = () => {
        ++this.match3;
    }

    @action
    addMatch4 = () => {
        ++this.match4;
    }

    @action
    addMatch5 = () => {
        ++this.match5;
    }

    @action
    addColor = (color: string, number: number) => {
        switch (color) {
            case 'blue':
                this.blue = this.blue + number;
                break;
            case 'red':
                this.red = this.red + number;
                break;
            case 'green':
                this.green = this.green + number;
                break;
            case 'purple':
                this.purple = this.purple + number;
                break;
            case 'amber':
                this.amber = this.amber + number;
                break;
        }
    }

    @action
    addColorCount = (color: string, count: number) => {
        switch (color) {
            case 'blue':
                this.blueCount = this.blueCount + count;
                break;
            case 'red':
                this.redCount = this.redCount + count;
                break;
            case 'green':
                this.greenCount = this.greenCount + count;
                break;
            case 'purple':
                this.purpleCount = this.purpleCount + count;
                break;
            case 'amber':
                this.amberCount = this.amberCount + count;
                break;
            case 'grey':
                this.greyCount = this.greyCount + count;
                break;
        }
    }
}
