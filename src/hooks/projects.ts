import {useState} from "react";
import {IProject} from "../model";

export const useProjects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    const fetchProducts = async () => {
        const response = await require('../data/projects.json');
    }
}