import { observable } from "mobx";
import blue from "@material-ui/core/colors/blue";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import green from "@material-ui/core/colors/green";
import brown from "@material-ui/core/colors/brown";
import EcoIcon from "@material-ui/icons/Eco";
import purple from "@material-ui/core/colors/purple";
import lime from "@material-ui/core/colors/lime";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import amber from "@material-ui/core/colors/amber";
import BugReportIcon from "@material-ui/icons/BugReport";
import blueGrey from "@material-ui/core/colors/blueGrey";
import ExtensionIcon from "@material-ui/icons/Extension";
import { makeId } from "../utils/IdUtils";

export const blueCell = {
    name: 'blue',
    backgroundColor: blue[500],
    color: blue[800],
    icon: InvertColorsIcon
}

export const redCell = {
    name: 'red',
    backgroundColor: red[500],
    color: yellow[500],
    icon: WhatshotIcon
}

export const greenCell = {
    name: 'green',
    backgroundColor: green[500],
    color: brown[500],
    icon: EcoIcon
}

export const purpleCell = {
    name: 'purple',
    backgroundColor: purple[500],
    color: lime[500],
    icon: BubbleChartIcon
}

export const amberCell = {
    name: 'amber',
    backgroundColor: amber[500],
    color: green[500],
    icon: BugReportIcon
}

export interface CellPart {
    name: string;
    backgroundColor: string;
    color: string;
    icon: object;
}

export interface CellInfo extends CellPart {
    id: string;
    x: number;
    y: number;
    zIndex: number;
    selected: boolean;
    canBeSelected: boolean;
    top: number;
    left: number;
}

export default class Cell implements CellInfo {
    @observable id: string;
    @observable x: number;
    @observable y: number;
    @observable zIndex: number;
    @observable selected: boolean;
    @observable canBeSelected: boolean;
    @observable top: number;
    @observable left: number;
    @observable name: string;
    @observable backgroundColor: string;
    @observable color: string;
    @observable icon: object;

    constructor(x: number, y: number, squareWidth: number, squareHeight: number, color?: string) {
        this.id = makeId(10);
        this.x = x;
        this.y = y;
        this.selected = false;
        this.canBeSelected = false;
        this.top = ((squareHeight - 1) - y) * 12.5;  // Используем squareHeight вместо squareSize
        this.left = x * 12.5;
        this.zIndex = (squareHeight - 1) - y;  // Используем squareHeight вместо squareSize
        if (color) {
            this.setColor(color);
        } else {
            this.name = 'white';
            this.backgroundColor = 'white';
            this.color = 'black';
            this.icon = ExtensionIcon;
        }
    }

    copy(cell: Cell): Cell {
        this.id = cell.id;
        this.x = cell.x;
        this.y = cell.y;
        this.selected = cell.selected;
        this.canBeSelected = cell.canBeSelected;
        this.top = cell.top;
        this.left = cell.left;
        this.zIndex = cell.zIndex;
        this.name = cell.name;
        this.backgroundColor = cell.backgroundColor;
        this.color = cell.color;
        this.icon = cell.icon;
        return this;
    }

    setColor(color: string) {
        let data = null;
        switch (color) {
            case 'blue':
                data = { ...blueCell };
                break;
            case 'red':
                data = { ...redCell };
                break;
            case 'green':
                data = { ...greenCell };
                break;
            case 'purple':
                data = { ...purpleCell };
                break;
            case 'amber':
                data = { ...amberCell };
                break;
            // case 'grey':
            //     data = { ...greyCell };
            //     break;
        }
        if (data !== null) {
            this.name = data.name;
            this.backgroundColor = data.backgroundColor;
            this.color = data.color;
            this.icon = data.icon;
        }
    }

    setPosition(x: number, y: number, squareWidth: number, squareHeight: number) {
        this.x = x;
        this.y = y;
        this.top = ((squareHeight - 1) - y) * 12.5; 
        this.left = x * 12.5;
        this.zIndex = (squareHeight - 1) - y;  // Используем squareHeight вместо squareSize
        this.selected = false;
        this.canBeSelected = false;
    }

    setData(name: string, backgroundColor: string, color: string, icon: object) {
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.color = color;
        this.icon = icon;
    }
}

