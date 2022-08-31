import useJsonFetch from "../hooks/useJsonFetch";

export default function LoadingWindow(props) {

    const [data, loading, error] = useJsonFetch("http://localhost:7070/loading", []);

    return (
        <div className="window">
            <p>Состояние (loading):</p>
            {loading ? <p>идет загрузка...</p> : <p>загрузка завершена</p>}
        </div>
    );
}