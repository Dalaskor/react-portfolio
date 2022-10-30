import {useEffect, useState} from "react";
import {IProject} from "../model";
import axios, {AxiosError} from "axios";

export const useProjectsSmall = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IProject[]>('projects-small.json')
            setProjects(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return {projects, error, loading}
}
