import { Imprimivel } from "../util/imprimivel.js";
import { comparavel } from "./comparavel.js";

export interface Modelo<t> extends Imprimivel , comparavel<t>{

}